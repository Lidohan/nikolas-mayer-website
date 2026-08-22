# Nikolas Mayer website — Czech-first Cloudflare Pages version

Static, framework-free website.

## Public URL architecture

Czech is the default language:

- `/`
- `/o-mne/`
- `/kariera/`
- `/publikace/`
- `/analyzy/`

English is under `/en/`:

- `/en/`
- `/en/about/`
- `/en/career/`
- `/en/publications/`
- `/en/analysis/`

Old URLs are permanently redirected through `_redirects`.

## Cloudflare Pages

- Build command: `exit 0`
- Build output directory: `/`
- Root directory: `/`

## Indexing status

All main pages intentionally retain:

`<meta name="robots" content="noindex,follow">`

while the site is being developed.

`robots.txt` allows crawling so crawlers can see the noindex directive and contains the sitemap location.

At launch, remove the `noindex,follow` meta tag from public pages (or change it to `index,follow`) only after canonical URLs, hreflang pairs, sitemap, content and production domain have been checked.

## Multilingual SEO

Every Czech/English page pair has:

- a self-referencing canonical
- reciprocal `hreflang="cs"`
- reciprocal `hreflang="en"`
- Czech page as `x-default`

The sitemap repeats these alternate-language relationships.

## Analysis pages

The collection pages are ready for individual analysis articles. Each future video/article should receive one canonical website URL with:

- visible article text
- transcript
- primary sources
- charts/data
- links to Instagram/Facebook/TikTok versions
- Article structured data
- VideoObject structured data where applicable

Do not add crawler-only hidden English text.

## Content provenance

Career, education and publication copy was expanded from the consolidated private evidence bank and links to public institutional or publisher records where available.
