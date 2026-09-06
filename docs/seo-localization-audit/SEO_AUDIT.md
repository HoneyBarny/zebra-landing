# Zebra Full SEO + Localization Search Audit

Date: 2026-08-29  
Scope: `zebratracker.app`, the `zebra-landing` codebase, live crawl headers, built `dist`, current English/German/Spanish/French content, and planned localization opportunities for NL, PL, IT, PT, SV, FI, and CS.

Implementation update: the top-five fixes from this audit were started after review. Local code now includes Cloudflare Pages middleware for canonical-host redirects, sitemap-level hreflang, lifetime offer schema, corrected orthostatic product wording, article title compaction, and DE/ES/FR localized versions of five priority search pages. Live duplicate-host behavior still needs deployment and post-deploy verification.

## Executive Summary

Current SEO score: **7.1/10**.

Zebra has a stronger search foundation than a typical early product site: static pages build correctly, the homepage has real patient-language positioning, 64 English articles exist with complete German/Spanish/French localized article sets, core schema is present, AI crawler access is intentional, and the site has dedicated search-intent pages for POTS, EDS, fibromyalgia, doctor reports, orthostatic vitals, flares, invisible illness, and comparisons.

The biggest issue is technical, not copy: **`https://zebra-landing.pages.dev/` still serves live `200` pages instead of redirecting to `https://zebratracker.app/`**, even though `public/_redirects` tries to redirect it. Google search is also surfacing at least one important `pages.dev` result. This can split signals, confuse canonicalization, and make Search Console look worse than the real product site.

## Scorecard

| Area | Score | Evidence |
|---|---:|---|
| Technical SEO | 6.8/10 | Canonicals, robots, sitemap, lang, H1, and build are healthy; duplicate `pages.dev` host and missing sitemap hreflang are the major problems. |
| On-page SEO | 7.4/10 | Homepage and search pages map well to POTS/invisible illness intent; 92 built pages have titles over 60 chars and 28 have meta descriptions over 165 chars. |
| Content Depth | 7.6/10 | 64 English articles, 14 search pages, knowledge hubs, comparison pages, and doctor-prep content already exist. Biggest gap is prioritization and proof assets, not volume. |
| Localization SEO | 5.9/10 | DE/ES/FR are implemented deeply; NL/PL/IT/PT/SV/FI/CS are planned only and should not be exposed with hreflang until full localized page sets exist. |
| AI Search Readiness | 7.0/10 | `llms.txt`, machine-readable pages, schema, FAQ blocks, and answer-style content are good; duplicate host, stale offer schema, and limited external authority hold it back. |

## Biggest Problems

| Priority | Problem | Why It Matters |
|---|---|---|
| P0 | `zebra-landing.pages.dev` serves `200` for homepage, blog pages, and sitemap. | Local middleware added; live host still needs deployment verification. |
| P1 | Sitemap lacked hreflang alternate annotations. | Implemented locally; built sitemap now includes `xhtml:link` alternates. |
| P1 | Product schema offers omitted lifetime Premium. | Implemented locally after RevenueCat verified monthly, annual, and lifetime packages in the current offering. |
| P1 | Landing/search copy said "lying, sitting, standing" orthostatic flow. | Product surfaces now use lying -> standing -> recovery wording. Educational posture articles were left alone. |
| P2 | Snippet length drift. | Long title count reduced from 92 to 45 in the built site. Long descriptions remain at 28 to avoid blind truncation. |

## Biggest Opportunity

The strongest opportunity is to turn Zebra's existing content into a cleaner **condition + appointment-prep search system**:

- Own English intent around "POTS symptom tracker app", "orthostatic vitals tracker", "symptom tracker for doctor appointment", and "chronic illness symptom tracker".
- Strengthen DE/ES/FR by localizing the highest-intent search pages, not only articles and the homepage.
- Add a small number of native-language pages for PL, SV, PT-BR, and IT after keyword validation, because search results show real localized demand but weaker specialist content.

## Homepage Recommendation

Do **not** make the homepage much longer.

The homepage already carries the core message, condition coverage, doctor-proof promise, trust language, FAQ, and internal links. Add only small, high-signal improvements:

- A clearer 1-2 sentence entity definition near the top: what Zebra is, who it is for, what it helps produce.
- Better internal links from the homepage to the most commercially useful pages: `/pots-tracker/`, `/orthostatic-vitals-test/`, `/doctor-report/`, `/appointment-prep-checklist/`, and `/symptom-tracker-for-invisible-illness/`.
- Correct orthostatic wording and product/schema drift.
- Add or link to a sample doctor report preview when available.

## Build Evidence

| Check | Result |
|---|---:|
| `npm run build` | Passed |
| Built HTML files | 450 |
| Built `index.html` pages | 448 |
| Pages with exactly one H1 | All normal content pages; Google verification page has 0 H1 as expected |
| Missing canonical | Only `404.html` |
| Missing `lang` | 0 |
| Images missing `alt` | 0 |
| Pages with JSON-LD | 437 |
| Pages without JSON-LD | 13, mostly legal/support plus Google verification page |
| Pages without x-default hreflang in HTML | 25, mostly English search/comparison/category/author pages |
| Long titles > 60 chars | 92 |
| Long meta descriptions > 165 chars | 28 |

## Live Checks

| URL | Result | Meaning |
|---|---|---|
| `https://zebratracker.app/robots.txt` | `200` | Production robots is reachable. |
| `https://zebratracker.app/sitemap.xml` | `200` | Production sitemap is reachable. |
| `https://zebratracker.app/blog/best-symptom-tracker-apps-for-pots-2026/` | `200` | Production article is reachable. |
| `https://zebra-landing.pages.dev/` | `200` | Should redirect or be unavailable. |
| `https://zebra-landing.pages.dev/blog/best-symptom-tracker-apps-for-pots-2026/` | `200` | Duplicate article exposure remains. |
| `https://zebra-landing.pages.dev/sitemap.xml` | `200` | Duplicate sitemap exposure remains. |

## External Search Signals Used

- Google result showed Zebra's `pages.dev` POTS article for a "best POTS symptom tracker app" query, confirming the duplicate-host problem is visible in search.
- German and Spanish Google results showed localized Zebra homepage visibility.
- Spanish, French, Dutch, Polish, Italian, Portuguese, Swedish, and Czech search results showed native demand around symptom diaries, POTS apps, orthostatic tracking, doctor reports, and brain-fog/flare language.

## Decision

Fix the issues we care about in this order: duplicate host, sitemap hreflang, product/schema/copy accuracy, snippet cleanup, then localized high-intent pages. Do not rewrite the homepage first.
