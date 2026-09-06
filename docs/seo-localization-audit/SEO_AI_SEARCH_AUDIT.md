# SEO AI Search Audit

Date: 2026-08-29

## AI Search Score

AI search readiness score: **7.0/10**.

Zebra is ahead of most small product sites because it already has direct-answer copy, FAQ schema, `llms.txt`, machine-readable feature/pricing/privacy pages, and clear patient-language positioning. The main risks are citation confusion from the duplicate host, product-state drift in schema/copy, and limited third-party authority.

## Strengths

| Strength | Evidence |
|---|---|
| Answer-style content | Homepage, search pages, and articles include direct answers and FAQ blocks. |
| Machine-readable pages | `llms.txt`, `features.md`, `pricing.md`, `privacy-summary.md`, and medical disclaimer pages exist. |
| Structured data | JSON-LD appears on 437 built pages, including SoftwareApplication, Article, FAQPage, BreadcrumbList, DefinedTerm, WebPage, Organization, and WebSite. |
| AI crawler access | Robots explicitly allows major AI/search crawlers. |
| Clear entity | Zebra is consistently framed as an iPhone symptom tracker for POTS, EDS/hEDS, Fibromyalgia, dysautonomia overlap, invisible illness, and doctor reports. |
| Trust boundaries | The content usually says Zebra does not diagnose, treat, cure, or replace medical care. |

## AI Search Risks

| Priority | Risk | Why It Matters | Recommendation |
|---|---|---|---|
| P0 | AI/search systems may cite `zebra-landing.pages.dev` instead of the production domain. | Duplicate hosts confuse entity consolidation and source trust. | Fix duplicate host first. |
| P1 | Schema offer state is incomplete. | AI summaries may repeat outdated/incomplete pricing. | Verify live App Store/RevenueCat state and update schema or reduce exact pricing claims. |
| P1 | Orthostatic flow copy mismatch. | AI answers could say Zebra has a sitting guided step when current app flow is lying -> standing -> recovery. | Align product claims across homepage, search pages, features.md, and llms.txt. |
| P2 | Limited external authority. | AI answers often prefer third-party roundups, app stores, and reputable resource pages. | Submit to careful directories/resources and encourage accurate third-party descriptions. |
| P2 | Sample report missing. | A visible product artifact helps both users and AI systems understand the "doctor proof" claim. | Add sample doctor report preview when ready. |

## AI Search Content Principles

- Keep writing for real patients first.
- Use short direct answers near the top of pages.
- Keep the medical boundary explicit.
- Prefer original product proof over generic keyword expansion.
- Keep machine-readable pages synchronized with the live app and pricing.
- Do not create AI-only pages.

## Recommended AI Search Pages or Files

| Asset | Action |
|---|---|
| `/llms.txt` | Update after fixing orthostatic wording and pricing/schema state. |
| `/features.md` | Align guided orthostatic flow language. |
| `/pricing.md` | Keep cautious purchase-sheet wording; verify lifetime and trial details before exact claims. |
| `/privacy-summary.md` | Keep clear "no separate Zebra health-data server" language. |
| `/doctor-report/` | Add sample report proof asset and short direct answer. |
| `/orthostatic-vitals-test/` | Clarify what the app records vs general educational posture context. |

## Citation Strategy

Best external targets:

- App Store listing consistency.
- Patient-resource pages where non-diagnostic app tools are appropriate.
- Chronic illness and POTS resource roundups.
- Product Hunt/directories only if the copy is medically careful.
- Comparison pages that can be kept reviewed, not abandoned.
