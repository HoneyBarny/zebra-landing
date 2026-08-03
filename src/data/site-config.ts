import { siteConfig as baseSiteConfig } from '../../site.config.mjs';

export const siteConfig = baseSiteConfig as {
  brand: {
    name: string;
    productName: string;
    subtitle: string;
    logo: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
  };
  siteUrl: string;
  routes: {
    home: string;
    blog: string;
    knowledge: string;
    privacy: string;
    terms: string;
    support: string;
  };
  support: {
    email: string;
  };
  appStore: {
    url: string;
    badgeUrl: string;
  };
  analytics: {
    /** Empty until set via PUBLIC_META_PIXEL_ID. Empty means the pixel never loads. */
    metaPixelId: string;
    /** Empty until set via PUBLIC_APPLE_PT. Optional — `ct` alone still attributes. */
    appleCampaignProviderToken: string;
  };
  assets: {
    favicon: {
      svg: string;
      ico: string;
    };
  };
};

export const indexableRoutes = [
  siteConfig.routes.home,
  siteConfig.routes.blog,
  siteConfig.routes.knowledge,
  siteConfig.routes.privacy,
  siteConfig.routes.terms,
  siteConfig.routes.support,
] as const;

export function toAbsoluteUrl(path: string) {
  return new URL(path, siteConfig.siteUrl).toString();
}
