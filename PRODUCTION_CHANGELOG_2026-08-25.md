# Production update — 25 August 2026

This build is based on `nikolas-mayer-website-PRODUCTION-correct-EP-ESRB.zip`.

Key changes:
- removed the visible DEMO / NOINDEX test marker from all public pages;
- fixed automatic sentence splitting;
- removed application/CV/build-process language from public career copy;
- polished Czech/English hybrid wording;
- corrected selected social-feed grammar and ownership wording;
- shortened long titles and replaced truncated meta descriptions with complete sentences;
- added root `WebSite` JSON-LD;
- expanded Person `sameAs` to EU WhoIsWho, LinkedIn, Facebook, Instagram and TikTok;
- added a visible LinkedIn `rel="me"` link;
- simplified `robots.txt` to a single permissive wildcard group;
- rebuilt SEO validation.

Validation result: see `SEO_VALIDATION.json`.

Approved exception: the exact European Parliament Wikimedia image and the official ESRB SVG selected for this site remain externally hosted. The supplied ZIP does not contain exact local copies of those two binary assets, so the build preserves the correct logos and reports the eight external `<img>` references accurately.
