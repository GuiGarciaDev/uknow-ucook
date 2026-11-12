/**
 * Recipe page interactions — all progressive enhancements over static HTML:
 *  - servings adjuster that rescales every quantity
 *  - ingredient checklist remembered per recipe (localStorage)
 *  - copy ingredients, save recipe, print
 *  - table-of-contents scroll spy
 */
import { siteConfig } from '../config/site';
import { isLocale, type Locale } from '../i18n/config';
import { formatQuantity } from '../lib/quantity';
import type { UnitId } from '../data/types';

const store = {
  get<T>(key: string, fallback: T): T {
    try {
      const raw = localStorage.getItem(key);
      return raw ? (JSON.parse(raw) as T) : fallback;
    } catch {
      return fallback;
    }
  },
  set(key: string, value: unknown) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* storage full or disabled — features degrade to per-visit */
    }
  },
};

const fill = (tpl: string, vars: Record<string, string | number>) =>
  tpl.replace(/\{(\w+)\}/g, (_, k: string) => String(vars[k] ?? ''));

export function initRecipeInteractions() {
  const article = document.querySelector<HTMLElement>('article[data-recipe]');
  const section = document.querySelector<HTMLElement>('[data-ingredients]');
  if (!article || !section) return;

  const slug = article.dataset.recipe!;
  const locale: Locale = isLocale(section.dataset.locale) ? section.dataset.locale : siteConfig.i18n.defaultLocale;
  const base = Number(section.dataset.baseServings) || 1;
  const { min, max } = siteConfig.recipes.servings;
  const keys = siteConfig.recipes.storageKeys;
  const actionStatus = document.querySelector<HTMLElement>('[data-action-status]');

  const announce = (el: HTMLElement | null, text: string) => {
    if (!el) return;
    el.textContent = '';
    // Re-set after a tick so repeated messages are re-announced.
    window.setTimeout(() => (el.textContent = text), 50);
  };

  /* ---------------- Servings ---------------- */
  const input = section.querySelector<HTMLInputElement>('[data-servings-input]');
  const resetBtn = section.querySelector<HTMLButtonElement>('[data-servings-reset]');
  const servingsStatus = section.querySelector<HTMLElement>('[data-servings-status]');
  const quantities = Array.from(section.querySelectorAll<HTMLDataElement>('data.qty'));
  const servingsDisplays = document.querySelectorAll<HTMLDataElement>('[data-servings-display]');
  let announceTimer: number | undefined;

  function setServings(next: number, { announceChange = true } = {}) {
    const servings = Math.min(max, Math.max(min, Math.round(next) || base));
    if (input) input.value = String(servings);
    for (const q of quantities) {
      const amount = (Number(q.value) * servings) / base;
      q.textContent = formatQuantity(amount, (q.dataset.unit || undefined) as UnitId | undefined, locale);
    }
    servingsDisplays.forEach((d) => {
      d.value = String(servings);
      d.textContent = String(servings);
    });
    if (resetBtn) resetBtn.hidden = servings === base;
    if (announceChange && servingsStatus) {
      window.clearTimeout(announceTimer);
      announceTimer = window.setTimeout(
        () => announce(servingsStatus, fill(servingsStatus.dataset.template ?? '', { n: servings })),
        400,
      );
    }
  }

  section.querySelectorAll<HTMLButtonElement>('[data-servings-step]').forEach((btn) =>
    btn.addEventListener('click', () => setServings(Number(input?.value ?? base) + Number(btn.dataset.servingsStep))),
  );
  input?.addEventListener('change', () => setServings(Number(input.value)));
  resetBtn?.addEventListener('click', () => {
    setServings(base);
    input?.focus();
  });

  /* ---------------- Checklist ---------------- */
  const checks = Array.from(section.querySelectorAll<HTMLInputElement>('[data-ingredient-check]'));
  const progress = section.querySelector<HTMLElement>('[data-check-progress]');
  const checklistKey = `${keys.checklist}${slug}`;
  const saved = new Set(store.get<string[]>(checklistKey, []));

  function renderProgress() {
    const done = checks.filter((c) => c.checked).length;
    if (progress) progress.textContent = fill(progress.dataset.template ?? '', { done, total: checks.length });
  }
  checks.forEach((c) => {
    c.checked = saved.has(c.id);
    c.addEventListener('change', () => {
      store.set(
        checklistKey,
        checks.filter((x) => x.checked).map((x) => x.id),
      );
      renderProgress();
    });
  });
  renderProgress();

  /** Replay the click "pop" animation (CSS keys off .is-popping). */
  const pop = (btn: HTMLElement) => {
    btn.classList.remove('is-popping');
    void btn.offsetWidth; // restart the animation if clicked again mid-way
    btn.classList.add('is-popping');
  };
  document.querySelectorAll<HTMLElement>('.action-btn').forEach((btn) =>
    btn.addEventListener('animationend', () => btn.classList.remove('is-popping')),
  );

  /* ---------------- Copy ingredients ---------------- */
  const copyBtn = document.querySelector<HTMLButtonElement>('[data-action="copy"]');
  let copyResetTimer: number | undefined;
  copyBtn?.addEventListener('click', async () => {
    const title = document.querySelector('h1')?.textContent?.trim() ?? '';
    const lines: string[] = [title, `${section.querySelector('#servings-label')?.textContent?.trim()}: ${input?.value}`, ''];
    section.querySelectorAll('h3').forEach((h) => {
      const list = section.querySelector(`ul[aria-labelledby="${h.id}"]`);
      if (!list) return;
      lines.push(`## ${h.textContent?.trim()}`);
      list.querySelectorAll('label').forEach((l) => lines.push(`- ${l.textContent?.replace(/\s+/g, ' ').trim()}`));
      lines.push('');
    });
    lines.push(location.href);
    try {
      await navigator.clipboard.writeText(lines.join('\n'));
      copyBtn.dataset.state = 'copied';
      pop(copyBtn);
      window.clearTimeout(copyResetTimer);
      copyResetTimer = window.setTimeout(() => (copyBtn.dataset.state = 'idle'), 2200);
      announce(actionStatus, actionStatus?.dataset.copied ?? '');
    } catch {
      copyBtn.dataset.state = 'failed';
      pop(copyBtn);
      window.clearTimeout(copyResetTimer);
      copyResetTimer = window.setTimeout(() => (copyBtn.dataset.state = 'idle'), 2600);
      announce(actionStatus, actionStatus?.dataset.copyFailed ?? '');
    }
  });

  /* ---------------- Save recipe ---------------- */
  // Visual label swap is pure CSS on aria-pressed; the accessible name stays constant.
  const saveBtn = document.querySelector<HTMLButtonElement>('[data-action="save"]');
  saveBtn?.setAttribute('aria-pressed', String(store.get<string[]>(keys.saved, []).includes(slug)));
  saveBtn?.addEventListener('click', () => {
    const list = new Set(store.get<string[]>(keys.saved, []));
    const isSaved = !list.has(slug);
    if (isSaved) list.add(slug);
    else list.delete(slug);
    store.set(keys.saved, [...list]);
    saveBtn.setAttribute('aria-pressed', String(isSaved));
    pop(saveBtn);
    announce(actionStatus, (isSaved ? actionStatus?.dataset.saved : actionStatus?.dataset.unsaved) ?? '');
  });

  /* ---------------- Print ---------------- */
  document.querySelector('[data-action="print"]')?.addEventListener('click', () => window.print());

  /* ---------------- TOC scroll spy ---------------- */
  const links = new Map(
    Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-toc-link]')).map((a) => [a.dataset.tocLink!, a]),
  );
  const visible = new Set<string>();
  const order = [...links.keys()];
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => (e.isIntersecting ? visible.add(e.target.id) : visible.delete(e.target.id)));
      const active = order.find((id) => visible.has(id));
      if (!active) return;
      links.forEach((a, id) => (id === active ? a.setAttribute('aria-current', 'true') : a.removeAttribute('aria-current')));
      // Keep the active pill in view on the mobile strip.
      if (window.matchMedia('(max-width: 63.999rem)').matches) {
        const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        links.get(active)?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: smooth ? 'smooth' : 'auto' });
      }
    },
    { rootMargin: '-30% 0px -60% 0px' },
  );
  order.forEach((id) => {
    const el = document.getElementById(id);
    if (el) spy.observe(el);
  });
}
