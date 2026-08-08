import { homePage } from '../site-content';
import { localeAlternates, localeSwitcherLinks, localizedAppStore } from './shared';

export const homePageEn = {
  ...homePage,
  locale: {
    key: 'en',
    htmlLang: 'en',
    path: '/',
  },
  seo: {
    ...homePage.seo,
    alternates: localeAlternates,
  },
  appStore: localizedAppStore('en-us', 'Download on the App Store'),
  localeSwitcher: {
    label: 'Language',
    links: localeSwitcherLinks,
  },
  consentBanner: {
    title: 'Measuring our ads',
    body: 'We use Meta’s pixel to measure whether our ads reach the right people. Nothing about your health is collected — this site has no access to anything in the app.',
    acceptLabel: 'Accept',
    declineLabel: 'Decline',
  },
} as const;
