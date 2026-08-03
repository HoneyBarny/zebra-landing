import { siteConfig } from '../data/site-config';

/**
 * Apple App Analytics campaign parameters for App Store links.
 *
 * This is not client-side tracking and is deliberately not consent-gated: the
 * parameters are read by Apple server-side when the App Store page opens, and
 * nothing is stored, read, or transmitted from the visitor's browser. It tells
 * App Store Connect which campaign a download came from, and nothing else.
 *
 * `site.config.mjs`'s `appStore.url` stays the untouched base — every campaign
 * URL is derived from it here rather than by editing it.
 */

/** Marks traffic as coming from a paid Meta placement rather than organic. */
const CAMPAIGN_PREFIX = 'meta';

/**
 * Apple truncates long campaign tokens, so keep them short and URL-safe.
 * 40 characters is the documented practical ceiling.
 */
const MAX_TOKEN_LENGTH = 40;

/**
 * `meta_hero_badge` from `hero_badge`.
 *
 * Lowercased and stripped to `[a-z0-9_]` so a CTA location that picks up a
 * slug, a space, or punctuation cannot produce a token Apple silently drops.
 *
 * The last segment is the placement — `hero`, `final`, `badge` — and it is the
 * part that distinguishes two CTAs on the same page, so it survives
 * truncation and the middle gives way instead. Plain end-truncation collided:
 * `search_page_orthostatic-vitals-test_hero` and the `_final` beside it both
 * cut to `meta_search_page_orthostatic_vitals_test`, reporting two different
 * buttons as one campaign.
 */
export function campaignToken(location: string): string {
	const cleaned = location
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '_')
		.replace(/^_+|_+$/g, '');

	const full = `${CAMPAIGN_PREFIX}_${cleaned}`;
	if (full.length <= MAX_TOKEN_LENGTH) {
		return full;
	}

	const segments = cleaned.split('_');
	const placement = segments.length > 1 ? segments[segments.length - 1] : '';
	if (!placement) {
		return full.slice(0, MAX_TOKEN_LENGTH).replace(/_+$/, '');
	}

	// prefix + '_' + head + '_' + placement
	const headBudget = MAX_TOKEN_LENGTH - CAMPAIGN_PREFIX.length - 2 - placement.length;
	if (headBudget <= 0) {
		return full.slice(0, MAX_TOKEN_LENGTH).replace(/_+$/, '');
	}

	const head = segments
		.slice(0, -1)
		.join('_')
		.slice(0, headBudget)
		.replace(/_+$/, '');

	return `${CAMPAIGN_PREFIX}_${head}_${placement}`;
}

/**
 * The App Store URL for one CTA, carrying its campaign attribution.
 *
 * Returns the base URL untouched when there is no location to attribute to, or
 * when the base is not an App Store link — a caller passing some other
 * destination should get back exactly what it passed.
 *
 * `pt` is omitted entirely when no provider token is configured, rather than
 * sent empty: Apple treats a blank value as a malformed parameter, and `ct`
 * alone still gives campaign-level attribution.
 */
export function appStoreUrlFor(location?: string, baseUrl: string = siteConfig.appStore.url): string {
	if (!location) {
		return baseUrl;
	}

	let url: URL;
	try {
		url = new URL(baseUrl);
	} catch {
		// Not a parseable absolute URL — hand back what we were given rather
		// than guessing at a repair.
		return baseUrl;
	}

	if (!url.hostname.endsWith('apps.apple.com')) {
		return baseUrl;
	}

	const token = campaignToken(location);
	if (token === CAMPAIGN_PREFIX) {
		// The location sanitised away to nothing.
		return baseUrl;
	}

	url.searchParams.set('ct', token);

	const providerToken = siteConfig.analytics.appleCampaignProviderToken;
	if (providerToken) {
		url.searchParams.set('pt', providerToken);
	}

	url.searchParams.set('mt', '8');

	return url.toString();
}
