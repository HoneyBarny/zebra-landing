# SEO Implementation Backlog

Date: 2026-08-29  
Status: Top-five actions started locally after approval. Production deployment and Search Console validation are still pending.

## Top 5 Actions

| Rank | Action | Impact | Effort | Owner Notes |
|---:|---|---|---|---|
| 1 | Force `zebra-landing.pages.dev/*` to 301 redirect to `https://zebratracker.app/:splat`, or otherwise block duplicate-host indexing. | Very high | Low-Medium | Implemented locally in `functions/_middleware.js`; needs deploy verification. |
| 2 | Add sitemap-level hreflang alternates for localized page clusters. | High | Medium | Implemented locally; sitemap build includes 2,040 `xhtml:link` entries. |
| 3 | Fix product-state drift in schema and machine-readable copy. | High | Low | Lifetime offer added after RevenueCat verification; pricing should still be periodically verified. |
| 4 | Correct orthostatic feature wording and reduce title truncation. | Medium-High | Low | Product claims now use lying -> standing -> recovery; long titles reduced from 92 to 45. |
| 5 | Strengthen DE/ES/FR search pages before adding new locales. | High | Medium | Implemented top five localized search pages for DE/ES/FR. |

## Backlog

| Priority | Task | Files/Area | Acceptance Criteria |
|---|---|---|---|
| P0 | Fix duplicate `pages.dev` host. | `functions/_middleware.js`; deploy config. | Local code added. After deploy, `curl -I -s https://zebra-landing.pages.dev/...` must return `301` to matching production URL. |
| P1 | Add sitemap hreflang. | `src/pages/sitemap.xml.ts` | Implemented locally. Sitemap includes `xmlns:xhtml`; localized clusters include reciprocal `xhtml:link` alternates. |
| P1 | Verify product offers. | RevenueCat/App Store Connect/live App Store; schema files. | RevenueCat verified monthly, annual, lifetime packages. Schema includes lifetime. |
| P1 | Update orthostatic product copy. | `src/data/site-content.ts`, `src/data/search-pages.ts`, `src/pages/features.md.ts`, `src/pages/llms.txt.ts`, relevant schema descriptions. | Implemented locally. Product claims say lying, standing, recovery. Educational content remains medically careful. |
| P2 | Tighten title tags. | Article metadata/templates/localized content. | Reduce titles over 60 chars from 92 to fewer than 20 without harming clarity. |
| P2 | Tighten meta descriptions. | Article metadata/templates/localized content. | Reduce descriptions over 165 chars from 28 to fewer than 5. |
| P2 | Optimize media assets. | `public/images`, `public/videos`, image components. | Large screenshots have WebP/AVIF variants and responsive sizes; below-fold media lazy loads; video preload is conservative. |
| P2 | Add simple schema to legal/support pages if useful. | Legal/support layouts. | Legal/support pages optionally get accurate WebPage schema; no fake rich-result targeting. |
| P2 | Add sample doctor report preview. | `/doctor-report/`, homepage link, media assets. | Sample is visibly marked as sample, non-diagnostic, and accessible. |
| P3 | Create `/dysautonomia-tracker/`. | Search pages data/routes. | Page passes build, has direct answer, FAQ, SoftwareApplication schema, internal links, and medical boundary. |
| P3 | Create `/brain-fog-symptom-tracker/`. | Search pages data/routes. | Page focuses on appointment prep and low-energy tracking, not diagnosis. |
| P3 | Create `/salt-hydration-tracker-pots/`. | Search pages data/routes. | Page avoids treatment advice and frames tracking as user/clinician context. |
| P3 | Localize top search pages into DE/ES/FR. | Locale data/routes. | Each localized page has native title/meta/H1, canonical, reciprocal hreflang, and localized schema. |
| P3 | Validate PL/SV/PT-BR/IT keywords. | Research doc + native review. | Do not publish pages until native terms and App Store/storefront assumptions are checked. |

## Not in This Backlog Yet

- Production deployment.
- Search Console validation requests.
- New locale publication.
- Large homepage rewrite.
- Competitor claim expansion without re-verification.
