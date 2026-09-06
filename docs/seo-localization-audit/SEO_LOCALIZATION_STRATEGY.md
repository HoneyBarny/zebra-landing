# SEO Localization Strategy

Date: 2026-08-29

## Current Localization State

| Locale | Site Status | Content Depth | Recommendation |
|---|---|---|---|
| EN | Live canonical root | Homepage, 64 articles, knowledge pages, search pages | Keep as source market and technical baseline. |
| de-DE | Live `/de-de/` | Homepage, localized articles, knowledge/legal/support | Strengthen highest-intent search pages next. |
| es-ES | Live `/es-es/` | Homepage, localized articles, knowledge/legal/support | Strengthen highest-intent search pages next; evaluate LATAM/PT-BR separately. |
| fr-FR | Live `/fr-fr/` | Homepage, localized articles, knowledge/legal/support | Strengthen highest-intent search pages next. |
| NL | Not implemented | Planned only | Validate native terms before publishing. |
| PL | Not implemented | Planned only | Good niche opportunity if native review is available. |
| IT | Not implemented | Planned only | Moderate opportunity; diary language matters. |
| PT | Not implemented | Planned only | Prefer PT-BR first unless analytics show Portugal demand. |
| SV | Not implemented | Planned only | Strong niche opportunity for POTS/dysautonomia if native reviewed. |
| FI | Not implemented | Planned only | Lowest confidence; validate first. |
| CS | Not implemented | Planned only | Moderate niche opportunity; validate terms and medical caveats. |

## Expansion Order

| Phase | Locales | What to Publish | Why |
|---|---|---|---|
| 1 | Existing DE/ES/FR | Localized versions of top search pages: POTS tracker, doctor report, orthostatic vitals, appointment checklist, invisible illness tracker | Already supported in the site; fastest lift without adding new locale risk. |
| 2 | PL, SV, PT-BR, IT | 3-5 native search pages each after validation | Search evidence suggests under-served but real condition/app language. |
| 3 | NL, CS | 3-5 native search pages each after validation | Good but likely smaller; publish only with complete locale basics. |
| 4 | FI | Validate before build | Current audit confidence is too low to prioritize. |

## Hreflang Rules

- Do not add hreflang for NL/PL/IT/PT/SV/FI/CS until the equivalent page exists and is indexable.
- Keep one canonical per localized URL.
- HTML hreflang exists for many page clusters; add sitemap-level hreflang for easier discovery.
- Use region tags only when the content is actually region-specific. Examples: `de-DE`, `es-ES`, `fr-FR`, `pt-BR`.
- Keep `x-default` pointing to the English canonical or global language selector behavior.

## Native Keyword Rules

| Locale | Use | Avoid |
|---|---|---|
| DE | `Symptomtracker`, `Symptomtagebuch`, `Schub`, `Arztbericht` | Literal English-only keyword stuffing. |
| ES | `registro de sintomas`, `diario de sintomas`, `brotes`, `informe para el medico` | Assuming Spain terms work for LATAM without validation. |
| FR | `suivi des symptomes`, `journal`, `poussee`, `rapport medecin` | Overly formal medical copy that loses patient language. |
| NL | `symptomendagboek`, `symptoomtracker`, `opvlammingen`, `arts` | Publishing before native review. |
| PL | `dziennik objawow`, `sledzenie objawow`, `raport dla lekarza` | Overusing clinical terms without community validation. |
| IT | `diario dei sintomi`, `tracker sintomi`, `visita medica`, `rapporto medico` | Treating pain-diary language as identical to POTS intent. |
| PT-BR | `diario de sintomas`, `rastreador de sintomas`, `relatorio medico` | Mixing PT-PT and PT-BR on one page. |
| SV | `symtomdagbok`, `POTS app`, `dysautonomi`, `lakarrapport` | Assuming English "tracker" is always the best title term. |
| FI | `oirepaivakirja`, `oireseuranta`, `POTS-sovellus` | Publishing without native keyword data. |
| CS | `denik priznaku`, `sledovani priznaku`, `zprava pro lekare` | Thin translated pages. |

## Localization QA Checklist

Before any new locale page goes live:

1. Native keyword validation completed.
2. H1, title, meta, canonical, hreflang, and schema reviewed.
3. Medical disclaimer localized and culturally appropriate.
4. App Store destination/storefront checked.
5. Privacy and subscription copy checked against live product state.
6. The page has a matching language in the locale switcher only if the page exists.
7. Sitemap includes the localized URL and its reciprocal alternates.

## Strongest Language Opportunities

| Rank | Locale | Reason |
|---:|---|---|
| 1 | EN | Highest current coverage and direct product-market fit. |
| 2 | ES | Visible search demand around symptom diaries, POTS/disautonomia, brain fog, and medical reports. |
| 3 | DE | Strong existing localization base and natural tracker/search terminology. |
| 4 | FR | Existing localization base plus app-store style demand for health journals and POTS support. |
| 5 | PL/SV | Smaller but under-served niche; could rank with native, specific pages. |
