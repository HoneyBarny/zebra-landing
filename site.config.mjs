export const siteConfig = {
  brand: {
    name: 'Zebra',
    productName: 'Zebra — Symptom Tracker',
    subtitle: 'Symptom tracker for invisible illness',
    logo: {
      src: '/zebra-logo.png',
      alt: 'Zebra logo',
      // zebra-logo.png is 408×358; declaring 64×64 reserved 8px too much
      // and shifted the whole page when the image loaded (CLS 0.20).
      width: 64,
      height: 56,
    },
  },
  siteUrl: 'https://zebratracker.app',
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
  analytics: {
    metaPixelId: import.meta.env.PUBLIC_META_PIXEL_ID || '',
    appleCampaignProviderToken: import.meta.env.PUBLIC_APPLE_PT || '',
  },
  assets: {
    favicon: {
      svg: '/favicon.svg',
      ico: '/favicon.ico',
    },
  },
};
