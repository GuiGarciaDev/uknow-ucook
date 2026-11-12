import { siteConfig } from '../config/site';

export const locales = siteConfig.i18n.locales;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = siteConfig.i18n.defaultLocale;

/** A value that must exist in every supported locale. */
export type Localized<T = string> = Record<Locale, T>;

export interface LocaleMeta {
  /** Name of the language in its own language (for the selector). */
  nativeName: string;
  /** Compact label for tight UI. */
  short: string;
  /** BCP-47 tag for `lang` / `hreflang`. */
  htmlLang: string;
  /** Open Graph locale (underscore form). */
  ogLocale: string;
  /** Flag image (in /public) shown behind the active language pill. */
  flag: string;
  /** Primary language subtags that should map to this locale on detection. */
  matches: readonly string[];
}

export const localeMeta: Record<Locale, LocaleMeta> = {
  'en-US': {
    nativeName: 'English (US)',
    short: 'EN',
    htmlLang: 'en-US',
    ogLocale: 'en_US',
    flag: '/flags/us.svg',
    matches: ['en'],
  },
  'pt-BR': {
    nativeName: 'Português (Brasil)',
    short: 'PT',
    htmlLang: 'pt-BR',
    ogLocale: 'pt_BR',
    flag: '/flags/br.svg',
    matches: ['pt'],
  },
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (locales as readonly string[]).includes(value);
}
