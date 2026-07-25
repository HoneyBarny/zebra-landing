# Zebra Search Visibility Audit

Last updated: 2026-07-25

## 1. Executive Summary

The new search visibility pages are mostly aligned with Zebra's real positioning: an iPhone symptom tracker for POTS, EDS/hEDS, Fibromyalgia, dysautonomia overlap, flare days, brain fog, orthostatic vitals, and doctor appointment preparation.

The main risk was not the page structure. The risk was a handful of feature and trust phrases that could overstate the current product if repeated by Google, AI answers, directories, or comparison summaries. I tightened those phrases directly in the shared content sources and machine-readable docs.

## 2. Confirmed Strengths

- The pages correctly center Zebra around daily flare tracking, symptoms, medications, salt, water, triggers, notes, orthostatic vitals, and doctor-ready report preparation.
- The pricing spine is consistent with the current product state: free tracking with 30 days of history; Premium for unlimited history, PDF report export, and full orthostatic archive.
- The tone is mostly calm, validating, direct, and illness-specific rather than generic wellness copy.
- The pages avoid diagnosis, treatment, causation, cure, emergency, and guaranteed doctor-outcome claims.
- The comparison pages make room for alternatives: Bearable can fit people who want broad customization, Visible can fit people who primarily need pacing support, and Notes/spreadsheets can still work for simple or flexible workflows.
- The search architecture is worth preserving: standalone intent pages, machine-readable summaries, `llms.txt`, sitemap inclusion, structured `SoftwareApplication` schema, and internal link clusters.

## 3. Mismatches / Risks

| Page or file | Current issue | Why it matters | Severity | Recommended action |
|---|---|---|---|---|
| `src/data/search-pages.ts`, `src/pages/features.md.ts`, `src/pages/llms.txt.ts`, `docs/SEARCH_VISIBILITY_MONITORING.md` | "Functional impact" and "function" appeared as if they were dedicated current tracking features. | Current product evidence supports notes, triggers, appointment context, and flare history more clearly than a mature functional-impact module. | Medium | Replaced with notes, triggers, and appointment context language. |
| Fibromyalgia search page and related link descriptions | Sleep appeared too close to a tracked feature claim. | Fibromyalgia educational context can mention sleep problems, but Zebra should not sound like a dedicated sleep tracker unless the app supports that explicitly. | Medium | Reframed sleep as optional notes/context and removed sleep from the main feature promise. |
| `pricing.md`, shared FAQ, Terms copy | Trial wording could read as guaranteed live App Store pricing/trial configuration. | App Store pricing and trial availability can vary by region and must be confirmed in Apple's purchase sheet. | Medium | Changed to careful purchase-sheet language while preserving the product's paywall intent. |
| Privacy summary and shared privacy copy | "Data stays on your iPhone and iCloud" could overstate the current sync story. | The safer claim is local device storage with possible iCloud sync depending on Apple/iCloud settings and the current app build. | Medium | Reframed privacy wording around device storage, personal iCloud, no Zebra account, and no separate Zebra health-data server. |
| Zebra vs Visible comparison | Hardware wording was specific enough to require frequent competitor re-verification. | Competitor plans can change, and comparison pages should be durable and fair. | Low | Softened to use-case fit and "additional wearable context" rather than a precise plan claim. |
| Shared feature summaries | HealthKit path and reminders were underrepresented. | These are real current strengths that help trust and conversion when stated carefully. | Low | Added optional HealthKit heart-rate support for the orthostatic flow and gentle user-controlled reminders. |

## 4. Implemented Fixes

- Tightened shared search page tracking bullets in `src/data/search-pages.ts`.
- Updated `/fibromyalgia-tracker/` copy to avoid implying Zebra is a dedicated sleep tracker.
- Updated `/doctor-report/` and `/flare-tracker/` copy to remove unsupported functional-impact framing.
- Added careful HealthKit and reminder bullets to search page schema inputs and machine-readable feature summaries.
- Updated `features.md`, `pricing.md`, `privacy-summary.md`, and `llms.txt` so AI/search summaries use safer current-state language.
- Updated shared homepage and internal-link content in `src/data/site-content.ts` where it repeated the same risky feature, privacy, or trial wording.
- Updated `docs/SEARCH_VISIBILITY_MONITORING.md` so outreach blurbs do not carry stale claims forward.

## 5. Open Decisions

- Confirm whether the 7-day free trial is active in App Store Connect for the live production product, not only in local/paywall configuration.
- Confirm the exact public privacy posture around CloudKit/iCloud sync after the current App Store build, then decide whether the landing page can use stronger wording again.
- Confirm whether "functional impact" is an explicit current app field or should remain roadmap/notes-level language.
- Decide whether to publish a sample doctor report image or PDF. This is the biggest trust/conversion asset still missing from the search pages.
- Decide how often competitor comparison pages should be re-verified, especially for pricing, hardware, ratings, and feature claims.

## 6. Recommended Next 3 Improvements

1. Add a real sample doctor report preview to `/doctor-report/` and comparison pages, with a clear "sample, not medical advice" label.
2. Add visible "last reviewed" notes to comparison pages so users and AI systems know competitor claims are maintained.
3. Add page-specific App Store click tracking by CTA location for the search pages, then compare which intent pages actually drive download taps.
