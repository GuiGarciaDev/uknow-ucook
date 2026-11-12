/**
 * Locale detection. Pure and dependency-free so it can run both at build
 * time and inside the tiny inline redirect script on `/`.
 *
 * Priority: explicit saved choice → browser languages → default.
 * The browser locale is used as a privacy-friendly approximation of where
 * the visitor is; no IP geolocation is involved.
 */
import { defaultLocale, isLocale, localeMeta, locales, type Locale } from './config';

/** Maps any BCP-47 tag (pt, pt-PT, pt-BR, en-GB …) to a supported locale. */
export function matchLocale(tag: string | null | undefined): Locale | null {
  if (!tag) return null;
  const normalized = tag.trim().replace('_', '-').toLowerCase();
  const exact = locales.find((l) => l.toLowerCase() === normalized);
  if (exact) return exact;
  const primary = normalized.split('-')[0] ?? '';
  return locales.find((l) => localeMeta[l].matches.includes(primary)) ?? null;
}

export function detectLocale(
  saved: string | null | undefined,
  browserLanguages: readonly string[] = [],
): Locale {
  if (isLocale(saved)) return saved;
  for (const tag of browserLanguages) {
    const match = matchLocale(tag);
    if (match) return match;
  }
  return defaultLocale;
}
