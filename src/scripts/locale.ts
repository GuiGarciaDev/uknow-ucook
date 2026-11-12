/**
 * Remembers an explicit language choice. Language links are ordinary
 * anchors (navigation works without JS); this only records the preference
 * so `/` sends the visitor to the right locale next time.
 */
import { siteConfig } from '../config/site';
import { isLocale } from '../i18n/config';

document.addEventListener('click', (event) => {
  const link = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[data-locale-link]');
  const locale = link?.dataset.localeLink;
  if (!isLocale(locale)) return;
  try {
    localStorage.setItem(siteConfig.i18n.storageKey, locale);
  } catch {
    /* ignore */
  }
});
