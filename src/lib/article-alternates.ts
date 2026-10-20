import { getCollection } from 'astro:content';

import { localizedArticleUrl, type ArticleLocale } from '../data/locales/article-translations';
import { articleUrl } from './content';

export type ArticleAlternate = { hreflang: string; href: string };

// Locales that have a localized article page in the build, keyed by the English slug.
// Same status filter as the localized route's getStaticPaths, so a listed locale always has a page.
let localesByOriginal: Promise<Map<string, Set<ArticleLocale>>> | undefined;

export function publishedLocalesByOriginal() {
  localesByOriginal ??= getCollection('localizedArticles', ({ data }) => data.status === 'published').then(
    (entries) => {
      const map = new Map<string, Set<ArticleLocale>>();
      for (const entry of entries) {
        const set = map.get(entry.data.originalSlug) ?? new Set<ArticleLocale>();
        set.add(entry.data.locale as ArticleLocale);
        map.set(entry.data.originalSlug, set);
      }
      return map;
    },
  );
  return localesByOriginal;
}

// An alternate is emitted only when its target page exists in the build.
export function articleAlternatesFor(
  originalSlug: string,
  locales: Map<string, Set<ArticleLocale>>,
): ArticleAlternate[] {
  const available = locales.get(originalSlug) ?? new Set<ArticleLocale>();
  return [
    { hreflang: 'x-default', href: articleUrl(originalSlug) },
    { hreflang: 'en', href: articleUrl(originalSlug) },
    ...(available.has('de-de') ? [{ hreflang: 'de-DE', href: localizedArticleUrl('de-de', originalSlug) }] : []),
    ...(available.has('es-es') ? [{ hreflang: 'es-ES', href: localizedArticleUrl('es-es', originalSlug) }] : []),
    ...(available.has('fr-fr') ? [{ hreflang: 'fr-FR', href: localizedArticleUrl('fr-fr', originalSlug) }] : []),
  ];
}
