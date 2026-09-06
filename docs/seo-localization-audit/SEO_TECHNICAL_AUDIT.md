# SEO Technical Audit

Date: 2026-08-29

## Technical Score

Technical SEO score: **6.8/10**.

The static site is mostly healthy. The score is pulled down by one serious live-domain problem and several medium-priority international/schema issues.

Implementation update: local code now addresses the canonical-host redirect path, sitemap hreflang, lifetime offer schema, and orthostatic flow wording. The `pages.dev` fix still must be deployed and verified against live headers.

## Verified Strengths

| Check | Result |
|---|---|
| Production robots | `https://zebratracker.app/robots.txt` returns `200`. |
| Production sitemap | `https://zebratracker.app/sitemap.xml` returns `200`. |
| Build | `npm run build` passed. |
| Built HTML files | 450. |
| Canonical tags | Present on normal content pages. |
| `lang` attribute | Present on all built HTML pages. |
| Open Graph/Twitter basics | Present on normal content pages; only `404.html` lacks `og:url`. |
| H1 | Exactly one H1 on normal content pages. |
| Image alt text | No missing alt text found in built HTML. |
| JSON-LD | Present on 437 built pages. |
| Robots AI access | `GPTBot`, `ChatGPT-User`, `PerplexityBot`, `ClaudeBot`, `anthropic-ai`, and `Google-Extended` are allowed. |

## Findings

| Priority | Finding | Evidence | Impact | Recommendation |
|---|---|---|---|---|
| P0 | Duplicate `pages.dev` host still serves live pages until the fix is deployed. | Local `functions/_middleware.js` now redirects duplicate hosts; previous live checks returned `200`. | Splits crawl/ranking signals; Google has surfaced `pages.dev` for a core query. | Deploy and validate every `zebra-landing.pages.dev/*` URL 301s to `https://zebratracker.app/:splat`. |
| P1 | Sitemap now includes hreflang alternate annotations locally. | Built `dist/sitemap.xml` includes `xmlns:xhtml` and 2,040 `xhtml:link` entries. | Helps Google discover localized page clusters. | Validate after deploy in Search Console. |
| P1 | Some English search/comparison/category/author pages have no HTML hreflang. | 25 pages lack `hreflang="x-default"`, mostly search/comparison/category/author pages. | Not a problem if no localized equivalent exists; it becomes a problem once DE/ES/FR search pages are created. | Add alternates only after localized equivalents exist. |
| P1 | SoftwareApplication offers previously omitted lifetime Premium. | RevenueCat offering check returned monthly, annual, and lifetime packages. | Schema better matches current offering. | Revalidate pricing periodically because App Store pricing can change by region. |
| P1 | Orthostatic flow copy drift was present. | Main product surfaces now use lying, standing, and recovery wording. | Search snippets should better match the current app flow. | Keep educational articles that discuss sitting as general posture context. |
| P2 | Long title tags. | 92 built pages have titles over 60 chars. | SERP truncation and weaker scan clarity. | Tighten title templates for blog and localized article pages. |
| P2 | Long meta descriptions. | 28 built pages have descriptions over 165 chars. | SERP truncation. | Tighten localized meta templates and author description. |
| P2 | 13 pages without JSON-LD. | Legal/support pages, Google verification page, and root legal/support pages. | Low risk; legal/support pages do not need rich schema, but WebPage schema could be consistent. | Optional: add simple WebPage schema to support/legal pages. |
| P2 | Large media assets may hurt Core Web Vitals. | Several PNG screenshots are 2-3 MB and `zebra-intro.mp4` is about 7 MB. | Performance risk, especially mobile. | Convert screenshots to WebP/AVIF, add responsive sizes, lazy-load below-fold media, ensure video poster/preload behavior is conservative. |

## Duplicate Host Notes

`public/_redirects` contains older redirect intent:

```txt
https://zebra-landing.pages.dev/* https://zebratracker.app/:splat 301
http://zebra-landing.pages.dev/* https://zebratracker.app/:splat 301
```

The live host returned `200`, so the repo intent was not enough. `functions/_middleware.js` now handles duplicate hosts and legacy path redirects in code. Deploy and revalidate live.

## Validation Commands

Run after implementation:

```bash
npm run build
curl -I -s https://zebra-landing.pages.dev/
curl -I -s https://zebra-landing.pages.dev/blog/best-symptom-tracker-apps-for-pots-2026/
curl -I -s https://zebra-landing.pages.dev/sitemap.xml
curl -I -s https://zebratracker.app/sitemap.xml
```

Expected duplicate-host result: `301` to matching `https://zebratracker.app/...` URL.
