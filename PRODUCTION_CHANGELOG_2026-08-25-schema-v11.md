# Structured-data update v11 — 25 August 2026

- Preserved the existing root WebSite entity (`https://nikolasmayer.com/#website`) instead of duplicating it.
- Added `<meta property="og:site_name" content="Nikolas Mayer">` across public pages.
- Added BreadcrumbList structured data to visible breadcrumb pages that previously lacked it.
- Preserved existing BreadcrumbList markup on individual analysis pages.
- Career details now expose a clean semantic hierarchy:
  Nikolas Mayer → Kariéra/Career → role.
- Top-level sections expose:
  Nikolas Mayer → O mně/About, Kariéra/Career, Publikace/Publications, Analýzy/Analysis.
- Kept the existing Person/ProfilePage/Article identity chain.
- No VideoObject or speculative employment properties were introduced.
