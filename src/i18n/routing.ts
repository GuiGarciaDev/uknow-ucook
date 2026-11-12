/**
 * Locale-aware routing helpers. Every public URL is prefixed with a locale:
 *   /en-US/recipes/spaghetti-carbonara  ↔  /pt-BR/recipes/spaghetti-carbonara
 * Slugs are shared across languages so switching language keeps the page.
 */
import { siteConfig } from '../config/site';
import { isLocale, locales, localeMeta, type Locale } from './config';

const trimSlashes = (p: string) => p.replace(/^\/+|\/+$/g, '');

/** `localizePath('pt-BR', '/recipes')` → `/pt-BR/recipes` */
export function localizePath(locale: Locale, path = '/'): string {
  const clean = trimSlashes(path);
  return clean ? `/${locale}/${clean}` : `/${locale}`;
}

/** Removes the locale prefix: `/pt-BR/recipes/x` → `/recipes/x` */
export function stripLocale(pathname: string): string {
  const parts = trimSlashes(pathname).split('/');
  if (isLocale(parts[0])) parts.shift();
  return `/${parts.join('/')}`;
}

export function getLocaleFromPath(pathname: string): Locale | null {
  const first = trimSlashes(pathname).split('/')[0];
  return isLocale(first) ? first : null;
}

/** Same page in another language. */
export function switchLocalePath(pathname: string, target: Locale): string {
  return localizePath(target, stripLocale(pathname));
}

export function absoluteUrl(path: string): string {
  return new URL(path, import.meta.env.SITE).href;
}

export interface AlternateLink {
  hreflang: string;
  href: string;
}

/** hreflang alternates for a locale-agnostic path, plus `x-default` → `/`. */
export function getAlternates(path: string): AlternateLink[] {
  const links = locales.map((l) => ({
    hreflang: localeMeta[l].htmlLang,
    href: absoluteUrl(localizePath(l, path)),
  }));
  const isHome = trimSlashes(path) === '';
  links.push({
    hreflang: 'x-default',
    href: isHome ? absoluteUrl('/') : absoluteUrl(localizePath(siteConfig.i18n.defaultLocale, path)),
  });
  return links;
}

/** For `getStaticPaths`. */
export const localeParams = () => locales.map((locale) => ({ params: { locale } }));
