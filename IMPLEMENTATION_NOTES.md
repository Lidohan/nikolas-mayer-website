# Implementation notes — 22 August 2026

Implemented from the previous GitHub version:

1. Czech is now the default/root language.
2. English moved under `/en/`.
3. Clean directory URLs replace development-style `cs-*` paths.
4. Added permanent redirects from all old Czech and English URLs.
5. Fixed canonical/hreflang inconsistency.
6. Added reciprocal hreflang and Czech x-default to every core page.
7. Added hreflang alternates to sitemap.xml.
8. Added Sitemap directive to robots.txt.
9. Kept `noindex,follow` on all main pages for development.
10. Preserved crawlable, server-rendered static HTML.
11. Expanded Career, About and Publications using the consolidated evidence bank.
12. Kept contribution classifications precise: named contribution, acknowledgement, preliminary work, model used.
13. Added large editorial analysis/Reels space without embedding duplicate social feeds.
14. Preserved the existing five-section information architecture: Home / About / Career / Publications / Analysis.
15. Reworked CSS toward a spacious editorial visual language without copying another site's assets or code.

Still to add later:
- real portrait photography
- actual Reel thumbnails and platform URLs
- individual canonical analysis pages
- social `sameAs` URLs once confirmed
- `og:image` / social preview assets
- indexation only after production QA

16. Reverted the visible hierarchy to the earlier restrained professional version.
17. Removed marketing-style slogans and achievement framing.
18. Kyla Scanlon influence is limited to editorial typography, whitespace, portrait-led layout and large vertical video presentation.
19. Czech-first routing, canonical URLs, hreflang, redirects, sitemap and noindex development status remain unchanged.

20. Added the supplied portrait to the Czech and English homepages and as the OpenGraph/social preview image.
21. Added all eight supplied Facebook Reel URLs to the Czech/English homepage and Analysis pages.
22. Reels use Facebook's public video plugin with show_text=1 so Facebook renders the original Reel description at runtime; the exact public URL is separately visible below each embed.
23. The exact Reel captions are not duplicated into local HTML because Facebook did not expose them to the unauthenticated crawler used during development. For maximum search indexing, copy the captions into local HTML once exact text is available rather than inventing it.

24. Homepage philosophy changed: tiny portrait and concise biography on the left; full professional chronology on the right.
25. Homepage CV runs from the current European Parliament role back through Boston Consulting Group.
26. Standalone reference/evidence presentation was removed from the homepage and About page.
27. Public references remain attached only to relevant detailed Career/Publication entries; Career source links are collapsed into user-accessible <details> blocks so they remain crawlable without dominating the design.

28. Removed the large portrait from About; the supplied portrait is now intentionally tiny on the homepage identity block and retained only as a social-preview asset.
29. Education verification links were moved into collapsed, user-accessible source details within the relevant education entry.

28. Czech homepage role names translated into Czech; no English labels such as Research Analyst or Trainee in the Czech-facing CV.
29. Homepage CV now uses 4 concise one-line bullets per role and runs through Boston Consulting Group.
30. About now contains a complete CV through Arthur D. Little, the Czech Permanent Representation, St. Gallen, LSE, Warwick and Gymnázium Matyáše Lercha, plus a personal-information section.
31. Career no longer groups older jobs under “Earlier experience”; every job and each education entry uses the same visual format.
32. Every career/education entry now has its own crawlable URL with detailed visible content, project descriptions, outputs and source links.
33. Career index contains a substantial bold summary paragraph for every job and study entry.
34. Publications page now lists forecasts, IDRs, Country Reports and other public outputs separately one by one.
35. Analysis page was reduced to the video placeholder/archive only; the category cards beginning with “Foreign ownership, dividends and FDI” and the generic canonical-page explanation were removed.
36. Facebook Reel embeds retain show_text=1 but now explicitly allow iframe scrolling; explanatory placeholder copy around the embeds was removed.

37. Removed the personal-information section from About in both Czech and English.
38. Career index now uses concise bullet points followed by a normal-weight explanatory paragraph instead of a long bold block.
39. Replaced the Gymnázium Matyáše Lercha placeholder with a substantive description of the six-year Czech-French bilingual programme, its science orientation and the user's actual final examinations.
40. Added official GML sources for the bilingual programme, curriculum, final examinations and graduate certificate (including the mathematics/science focus and at least C1 French).
