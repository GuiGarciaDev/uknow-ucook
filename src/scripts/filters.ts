/**
 * Recipe discovery: filtering, search, sorting, "load more" and URL sync.
 *
 * The server renders every recipe card with data-* attributes; this script
 * only shows/hides and reorders them. The <form> is the single source of
 * truth for state, and the URL mirrors it (shareable, back-button friendly).
 *
 * Matching rules: OR within a group (Dinner OR Lunch), AND across groups,
 * except dietary preferences, which are AND (Vegetarian AND Gluten-free).
 */

type Multi = 'category' | 'cuisine' | 'prep' | 'difficulty' | 'diet' | 'ingredient';
const MULTI: Multi[] = ['category', 'cuisine', 'prep', 'difficulty', 'diet', 'ingredient'];
const SINGLE = ['q', 'rating', 'maxCook', 'maxTotal', 'sort'] as const;
type Single = (typeof SINGLE)[number];

interface State {
  multi: Record<Multi, string[]>;
  q: string;
  rating: number;
  maxCook: number;
  maxTotal: number;
  sort: string;
}

interface I18n {
  matching: string;
  matchingAll: string;
  removeFilter: string;
  searchChip: string;
  maxTotalChip: string;
  maxCookChip: string;
  ratingChip: string;
}

const fmt = (s: string, vars: Record<string, string | number>) =>
  s.replace(/\{(\w+)\}/g, (_, k: string) => String(vars[k] ?? ''));
const normalize = (s: string) =>
  s.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase().trim();

export function initRecipeBrowser() {
  const root = document.querySelector<HTMLElement>('[data-recipe-browser]');
  const form = document.querySelector<HTMLFormElement>('#recipe-filters');
  const list = root?.querySelector<HTMLUListElement>('[data-results]');
  if (!root || !form || !list) return;

  const i18n = JSON.parse(root.dataset.i18n ?? '{}') as I18n;
  const pageSize = Number(root.dataset.pageSize) || 6;
  const items = Array.from(list.querySelectorAll<HTMLLIElement>(':scope > li'));
  const status = root.querySelector<HTMLElement>('[data-results-status]');
  const empty = root.querySelector<HTMLElement>('[data-empty]');
  const loadMore = root.querySelector<HTMLButtonElement>('[data-load-more]');
  const activeWrap = root.querySelector<HTMLElement>('[data-active-filters]');
  const chips = root.querySelector<HTMLUListElement>('[data-chips]');
  const filterCount = root.querySelector<HTMLElement>('[data-filter-count]');
  const panel = document.querySelector<HTMLElement>('#filter-panel');
  const searchInput = document.querySelector<HTMLInputElement>('#recipe-search');
  const lang = document.documentElement.lang;

  let visibleLimit = pageSize;

  /* ---------------------------------------------------------------- */
  /* State <-> form <-> URL                                            */
  /* ---------------------------------------------------------------- */

  function readForm(): State {
    const data = new FormData(form!);
    const multi = Object.fromEntries(MULTI.map((k) => [k, data.getAll(k).map(String).filter(Boolean)])) as Record<
      Multi,
      string[]
    >;
    const single = (k: Single) => String(data.get(k) ?? '');
    return {
      multi,
      q: single('q'),
      rating: Number(single('rating')) || 0,
      maxCook: Number(single('maxCook')) || 0,
      maxTotal: Number(single('maxTotal')) || 0,
      sort: single('sort') || 'newest',
    };
  }

  function writeFormFromUrl() {
    const params = new URLSearchParams(location.search);
    for (const key of MULTI) {
      // Accept repeated (?diet=a&diet=b) and comma-separated (?diet=a,b) values.
      const values = new Set(params.getAll(key).flatMap((v) => v.split(',')));
      form!.querySelectorAll<HTMLInputElement>(`input[name="${key}"]`).forEach((el) => {
        el.checked = values.has(el.value);
      });
    }
    for (const key of ['rating', 'maxCook'] as const) {
      const value = params.get(key) ?? '';
      const radios = form!.querySelectorAll<HTMLInputElement>(`input[name="${key}"]`);
      let matched = false;
      radios.forEach((el) => {
        el.checked = el.value === value;
        matched ||= el.checked;
      });
      if (!matched && radios[0]) radios[0].checked = true;
    }
    const hiddenTotal = form!.querySelector<HTMLInputElement>('input[name="maxTotal"]');
    if (hiddenTotal) hiddenTotal.value = params.get('maxTotal') ?? '';
    if (searchInput) searchInput.value = params.get('q') ?? '';
    const sort = document.querySelector<HTMLSelectElement>('#recipe-sort');
    if (sort) sort.value = params.get('sort') ?? 'newest';
  }

  function syncUrl(state: State) {
    const params = new URLSearchParams();
    if (state.q) params.set('q', state.q);
    for (const key of MULTI) state.multi[key].forEach((v) => params.append(key, v));
    if (state.rating) params.set('rating', String(state.rating));
    if (state.maxCook) params.set('maxCook', String(state.maxCook));
    if (state.maxTotal) params.set('maxTotal', String(state.maxTotal));
    if (state.sort !== 'newest') params.set('sort', state.sort);
    const qs = params.toString();
    history.replaceState(null, '', `${location.pathname}${qs ? `?${qs}` : ''}${location.hash}`);
  }

  /* ---------------------------------------------------------------- */
  /* Matching & sorting                                                */
  /* ---------------------------------------------------------------- */

  const tokens = (el: HTMLElement, key: string) => (el.dataset[key] ?? '').split(' ').filter(Boolean);

  function matches(el: HTMLLIElement, s: State): boolean {
    for (const key of MULTI) {
      const wanted = s.multi[key];
      if (!wanted.length) continue;
      const has = tokens(el, key);
      const ok = key === 'diet' ? wanted.every((w) => has.includes(w)) : wanted.some((w) => has.includes(w));
      if (!ok) return false;
    }
    if (s.rating && Number(el.dataset.rating) < s.rating) return false;
    if (s.maxCook && Number(el.dataset.cook) > s.maxCook) return false;
    if (s.maxTotal && Number(el.dataset.total) > s.maxTotal) return false;
    if (s.q) {
      const hay = el.dataset.search ?? '';
      if (!normalize(s.q).split(/\s+/).every((term) => hay.includes(term))) return false;
    }
    return true;
  }

  const collator = new Intl.Collator(lang, { sensitivity: 'base' });
  const sorters: Record<string, (a: HTMLLIElement, b: HTMLLIElement) => number> = {
    newest: (a, b) => (b.dataset.date ?? '').localeCompare(a.dataset.date ?? ''),
    popular: (a, b) => Number(b.dataset.popularity) - Number(a.dataset.popularity),
    rating: (a, b) => Number(b.dataset.rating) - Number(a.dataset.rating),
    fastest: (a, b) => Number(a.dataset.total) - Number(b.dataset.total),
    alpha: (a, b) => collator.compare(a.dataset.title ?? '', b.dataset.title ?? ''),
  };

  /* ---------------------------------------------------------------- */
  /* Rendering                                                         */
  /* ---------------------------------------------------------------- */

  function labelFor(name: string, value: string): string {
    const input = form!.querySelector<HTMLInputElement>(`input[name="${name}"][value="${CSS.escape(value)}"]`);
    return input?.dataset.label ?? value;
  }

  function renderChips(s: State) {
    if (!chips || !activeWrap) return 0;
    const entries: { label: string; clear: () => void }[] = [];
    if (s.q) entries.push({ label: fmt(i18n.searchChip, { q: s.q }), clear: () => searchInput && (searchInput.value = '') });
    for (const key of MULTI) {
      for (const v of s.multi[key]) {
        entries.push({
          label: labelFor(key, v),
          clear: () => {
            const el = form!.querySelector<HTMLInputElement>(`input[name="${key}"][value="${CSS.escape(v)}"]`);
            if (el) el.checked = false;
          },
        });
      }
    }
    const resetRadio = (name: string) => {
      const first = form!.querySelector<HTMLInputElement>(`input[name="${name}"]`);
      if (first) first.checked = true;
    };
    if (s.rating) entries.push({ label: labelFor('rating', String(s.rating)), clear: () => resetRadio('rating') });
    if (s.maxCook) entries.push({ label: labelFor('maxCook', String(s.maxCook)), clear: () => resetRadio('maxCook') });
    if (s.maxTotal)
      entries.push({
        label: fmt(i18n.maxTotalChip, { n: s.maxTotal }),
        clear: () => {
          const el = form!.querySelector<HTMLInputElement>('input[name="maxTotal"]');
          if (el) el.value = '';
        },
      });

    chips.replaceChildren(
      ...entries.map((entry) => {
        const li = document.createElement('li');
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'chip hover:border-ink';
        btn.setAttribute('aria-label', fmt(i18n.removeFilter, { label: entry.label }));
        btn.innerHTML = `<span></span><span aria-hidden="true">✕</span>`;
        btn.firstElementChild!.textContent = entry.label;
        btn.addEventListener('click', () => {
          entry.clear();
          update();
          // Keep keyboard focus somewhere sensible after the chip disappears.
          (chips.querySelector('button') ?? searchInput)?.focus();
        });
        li.append(btn);
        return li;
      }),
    );
    activeWrap.hidden = entries.length === 0;
    return entries.length;
  }

  function render(s: State) {
    const sorted = [...items].sort(sorters[s.sort] ?? sorters.newest);
    const matched = sorted.filter((el) => matches(el, s));
    list!.append(...sorted); // reorder DOM to match the sort

    const shown = Math.min(visibleLimit, matched.length);
    const visible = new Set(matched.slice(0, shown));
    items.forEach((el) => (el.hidden = !visible.has(el)));

    const filtering = matched.length !== items.length;
    if (status) {
      status.textContent = fmt(filtering ? i18n.matching : i18n.matchingAll, { shown, count: matched.length });
    }
    if (empty) empty.hidden = matched.length > 0;
    if (loadMore) loadMore.hidden = shown >= matched.length;

    const active = renderChips(s);
    if (filterCount) filterCount.textContent = active ? String(active) : '';
  }

  function update(resetPaging = true) {
    if (resetPaging) visibleLimit = pageSize;
    const state = readForm();
    render(state);
    syncUrl(state);
  }

  /* ---------------------------------------------------------------- */
  /* Events                                                            */
  /* ---------------------------------------------------------------- */

  // The search box and sort <select> sit outside the <form> element and are
  // associated with form="recipe-filters", so their events do not bubble
  // through the form — listen on the document and check the form owner.
  const ownedByForm = (t: EventTarget | null) =>
    (t as HTMLInputElement | HTMLSelectElement | null)?.form === form;
  let debounce: number | undefined;
  document.addEventListener('change', (e) => {
    if (ownedByForm(e.target) && e.target !== searchInput) update();
  });
  searchInput?.addEventListener('input', () => {
    window.clearTimeout(debounce);
    debounce = window.setTimeout(() => update(), 180);
  });
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    update();
    if (panel?.matches(':popover-open')) panel.hidePopover();
    list.querySelector<HTMLAnchorElement>('li:not([hidden]) a')?.focus({ preventScroll: true });
  });
  form.addEventListener('reset', () => {
    // The reset event fires *before* controls are reset; run after it.
    setTimeout(() => {
      if (searchInput) searchInput.value = '';
      const hiddenTotal = form.querySelector<HTMLInputElement>('input[name="maxTotal"]');
      if (hiddenTotal) hiddenTotal.value = '';
      update();
    }, 0);
  });
  root.querySelectorAll<HTMLButtonElement>('[data-clear-filters]:not([type="reset"])').forEach((btn) =>
    btn.addEventListener('click', () => {
      form.reset();
      searchInput?.focus();
    }),
  );
  loadMore?.addEventListener('click', () => {
    const firstHiddenIndex = items.filter((el) => !el.hidden).length;
    visibleLimit += pageSize;
    update(false);
    // Move focus to the first newly revealed card for keyboard users.
    const visibleNow = [...list.children].filter((el) => !(el as HTMLElement).hidden);
    (visibleNow[firstHiddenIndex]?.querySelector('a') as HTMLAnchorElement | null)?.focus();
  });

  writeFormFromUrl();
  update();

  // Deep link from the header search icon: focus the search box.
  if (location.hash === '#recipe-search') searchInput?.focus();
}
