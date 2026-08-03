/// <reference types="astro/client" />

interface ImportMetaEnv {
	/**
	 * Meta (Facebook) Pixel ID. Empty or unset means the pixel is never loaded
	 * and no Meta script or network request is added to the page.
	 */
	readonly PUBLIC_META_PIXEL_ID?: string;
	/**
	 * Apple App Analytics provider token, from App Store Connect →
	 * App Analytics → Campaigns. Optional: without it, App Store links still
	 * carry `ct` for campaign-level attribution.
	 */
	readonly PUBLIC_APPLE_PT?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

/** Consent decision broadcast by the consent banner. */
type ZebraConsentStatus = 'granted' | 'denied';

interface ZebraConsentEventDetail {
	status: ZebraConsentStatus;
}

declare global {
	interface Window {
		/**
		 * Meta Pixel queue. Only defined once a visitor has granted consent
		 * *and* a Pixel ID is configured — always feature-detect before calling.
		 */
		fbq?: ((...args: unknown[]) => void) & { callMethod?: (...args: unknown[]) => void; queue?: unknown[] };
		_fbq?: unknown;
		/** Guards the pixel against being initialised twice. */
		__zebraPixelReady?: boolean;
		/** Pre-existing analytics queue. Always present; the layout seeds it. */
		dataLayer: Record<string, unknown>[];
		/** Present only if a gtag snippet is added later. Feature-detect. */
		gtag?: (...args: unknown[]) => void;
		/** Re-opens the consent banner. Defined by ConsentBanner.astro. */
		zebraOpenConsent?: () => void;
	}

	interface DocumentEventMap {
		'zebra:consent': CustomEvent<ZebraConsentEventDetail>;
	}
}

export {};
