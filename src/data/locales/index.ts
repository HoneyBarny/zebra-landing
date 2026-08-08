import { homePageDeDe } from './de-de';
import { homePageEn } from './en';
import { homePageEsEs } from './es-es';
import { homePageFrFr } from './fr-fr';
import { localeRoutes } from './shared';

export { homePageDeDe, homePageEn, homePageEsEs, homePageFrFr, localeRoutes };

export const localizedHomePages = {
  'de-de': homePageDeDe,
  'es-es': homePageEsEs,
  'fr-fr': homePageFrFr,
} as const;

export type LocalizedHomePageSlug = keyof typeof localizedHomePages;

export function getLocalizedHomePage(slug: string) {
  return localizedHomePages[slug as LocalizedHomePageSlug];
}
