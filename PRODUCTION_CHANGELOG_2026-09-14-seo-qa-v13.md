# Production changelog — SEO/content QA v13
Date: 2026-09-14
Base: v12 Quantitative Analysis

## 1. Career navigation
- Added `Kvantitativní analýza` to the Czech `/kariera/` navigation.
- Added `Quantitative Analysis` to the English `/en/career/` navigation.
- Career detail pages already contained these links; the omission was limited to the two career landing pages.

## 2. Duplicate and overly long titles
Titles were changed selectively, not against an arbitrary 60-character rule. The goals were:
- remove the three exact CZ/EN title duplicates;
- make language versions meaningfully distinct;
- shorten titles where the existing wording added little search or user value;
- preserve topic-rich titles on individual analysis pages even when they are slightly above 60 characters.

Changed:
- CZ Quantitative Analysis -> `Kvantitativní analýza | Nikolas Mayer`
- EN Quantitative Analysis -> `Quantitative Analysis | Nikolas Mayer`
- EN homepage -> `Nikolas Mayer — Economist & Forecaster`
- EN Career -> `Career | Nikolas Mayer`
- Gymnázium CZ/EN -> differentiated localized titles
- LSE CZ/EN -> CZ programme title vs EN `BSc` title
- St. Gallen CZ/EN -> localized titles shortened by using `St. Gallen`
- Warwick EN -> `Economics & Politics` form, exactly 60 characters

The two long Czech analysis titles discussed in QA were deliberately retained because their topic wording is more valuable than mechanical truncation.

For every title change, the release also synchronises:
- `<title>`
- `og:title`
- JSON-LD `WebPage.name`

## 3. Career-page H1 differentiation
Generic institution-only H1s were replaced where a page represents a specific role or programme.

Updated groups:
- Arthur D. Little CZ/EN
- Boston Consulting Group CZ/EN
- all three ECB role pages CZ/EN
- both European Commission / DG ECFIN role pages CZ/EN
- Gymnázium CZ/EN
- LSE CZ/EN
- University of St. Gallen CZ/EN
- University of Warwick CZ/EN

The About/Profile pages keep `Nikolas Mayer` as H1 intentionally; this is semantically appropriate for a profile page and was not changed merely to eliminate a cross-language duplicate.

## 4. Duplicate H2 review
Repeated H2s such as `Coursework`, `European Parliament`, `European Commission — DG ECFIN`,
`Research question`, `Systemic Risk Survey` and their Czech equivalents were intentionally left unchanged.
They label genuine recurring content sections and do not constitute a meaningful SEO defect.

On the 13 Czech analysis detail pages, the generic `Shrnutí` heading was changed to
`Hlavní zjištění`. This is an editorial improvement: it better describes what the section contains.

## 5. Missing H2 on analysis landing pages
Added a visible context block to:
- `/analyzy/`
- `/en/analysis/`

New H2s:
- `Vybrané analýzy české a evropské ekonomiky`
- `Selected analyses of the Czech and European economy`

Each is followed by a short explanatory paragraph describing the scope of the analysis collection.
The H2 was added because it improves hierarchy and user context, not because every page mechanically requires an H2.

## 6. CSS and caching
- Added minimal styling for the new analysis landing-page context block.
- Copied stylesheet to `site-v13.css`.
- Updated all HTML pages from `site-v12.css` to `site-v13.css` to avoid stale browser/Cloudflare CSS cache.

## 7. Sitemap
- Updated `<lastmod>` to `2026-09-14` for changed public pages.

## Validation
- JSON-LD parsed on every public page.
- No exact duplicate `<title>` values remain.
- Career landing navigation contains Quantitative Analysis in both languages.
- Both analysis landing pages now contain an H2.
- All 13 Czech analysis detail pages now use `Hlavní zjištění`.
