import type { Locale, Localized } from './config';
import { localeMeta } from './config';
import enUS, { type Dictionary } from './dictionaries/en-US';
import ptBR from './dictionaries/pt-BR';

const dictionaries: Record<Locale, Dictionary> = {
  'en-US': enUS,
  'pt-BR': ptBR,
};

/** Typed UI dictionary for a locale: `useTranslations('pt-BR').nav.home`. */
export function useTranslations(locale: Locale): Dictionary {
  return dictionaries[locale];
}

/** Fills `{placeholders}`: `fmt('{n} min', { n: 5 })` → `5 min`. */
export function fmt(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => String(vars[key] ?? `{${key}}`));
}

/** Picks the current locale's value from a `Localized` record. */
export function pick<T>(value: Localized<T>, locale: Locale): T {
  return value[locale];
}

export function formatDate(iso: string, locale: Locale, style: 'long' | 'medium' = 'long'): string {
  return new Intl.DateTimeFormat(localeMeta[locale].htmlLang, {
    dateStyle: style,
    timeZone: 'UTC',
  }).format(new Date(iso));
}

export function formatNumber(n: number, locale: Locale, maxFractionDigits = 1): string {
  return new Intl.NumberFormat(localeMeta[locale].htmlLang, {
    maximumFractionDigits: maxFractionDigits,
  }).format(n);
}

/** Human duration: 45 → "45 min", 90 → "1 h 30 min". */
export function formatMinutes(total: number, locale: Locale): string {
  const t = dictionaries[locale].card;
  const h = Math.floor(total / 60);
  const m = total % 60;
  if (h === 0) return fmt(t.minutes, { n: m });
  if (m === 0) return fmt(t.hours, { h });
  return fmt(t.hoursMinutes, { h, m });
}

/** ISO-8601 duration for `<time datetime>` and JSON-LD: 90 → "PT1H30M". */
export function isoDuration(total: number): string {
  const h = Math.floor(total / 60);
  const m = total % 60;
  return `PT${h ? `${h}H` : ''}${m || !h ? `${m}M` : ''}`;
}
