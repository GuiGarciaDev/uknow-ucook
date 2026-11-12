/**
 * Theme toggle. The initial theme is applied by a tiny inline script in
 * <head> (BaseLayout) before first paint, so there is no flash; this module
 * only wires up the toggle button and follows OS changes.
 */
import { siteConfig } from '../config/site';

type Theme = 'light' | 'dark';
const KEY = siteConfig.theme.storageKey;
const media = window.matchMedia('(prefers-color-scheme: dark)');

function stored(): Theme | null {
  try {
    const v = localStorage.getItem(KEY);
    return v === 'light' || v === 'dark' ? v : null;
  } catch {
    return null;
  }
}

function current(): Theme {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

function apply(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(theme === 'dark'));
  });
  document
    .querySelectorAll<HTMLMetaElement>('meta[name="theme-color"]')
    .forEach((m) => (m.content = theme === 'dark' ? siteConfig.seo.themeColor.dark : siteConfig.seo.themeColor.light));
}

apply(current());
// Enable icon transitions only after the initial state has painted.
requestAnimationFrame(() => requestAnimationFrame(() => (document.documentElement.dataset.themeReady = '')));

document.addEventListener('click', (event) => {
  const btn = (event.target as Element | null)?.closest('[data-theme-toggle]');
  if (!btn) return;
  const next: Theme = current() === 'dark' ? 'light' : 'dark';
  apply(next);
  try {
    localStorage.setItem(KEY, next);
  } catch {
    /* storage unavailable — the choice lasts for this page only */
  }
});

// Follow the OS only while the visitor hasn't chosen explicitly.
media.addEventListener('change', (e) => {
  if (!stored()) apply(e.matches ? 'dark' : 'light');
});
