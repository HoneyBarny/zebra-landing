export const siteConfig = {
  brand: {
    name: 'Zebra',
    productName: 'Zebra — Symptom Tracker',
    subtitle: 'Symptom tracker for invisible illness',
    logo: {
      src: '/zebra-logo.png',
      alt: 'Zebra logo',
      width: 64,
      height: 64,
    },
  },
  siteUrl: 'https://zebra-landing.pages.dev',
  routes: {
    home: '/',
    blog: '/blog/',
    knowledge: '/knowledge/',
    privacy: '/privacy/',
    terms: '/terms/',
    support: '/support/',
  },
  support: {
    email: 'riznewhite@gmail.com',
  },
  appStore: {
    url: 'https://apps.apple.com/us/app/zebra-symptom-tracker/id6768839130',
    badgeUrl:
      'https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/white/en-us?releaseDate=1776124800',
  },
  assets: {
    favicon: {
      svg: '/favicon.svg',
      ico: '/favicon.ico',
    },
  },
};
