# Nikolas Mayer website — PRODUCTION

Static, framework-free website for:

https://nikolasmayer.com/

## Public URL architecture

Czech is the default language:

- `/`
- `/o-mne/`
- `/kariera/`
- `/publikace/`
- `/analyzy/`

English is under `/en/`.

## Cloudflare Pages

- Production branch: `main`
- Build command: `exit 0`
- Build output directory: `/`
- Root directory: `/`

## Production indexing

This build is intentionally indexable.

All intended public pages use:

`index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1`

`404.html` remains `noindex,follow`.

Cloudflare Pages preview deployment URLs should remain non-indexable through
Cloudflare's preview-deployment `X-Robots-Tag: noindex` behaviour.

## Search and AI crawling

The repository explicitly permits:

- search-engine crawling
- AI search / grounding
- AI assistants / agents
- AI model training

See `robots.txt`, `_headers` and `PRODUCTION_INDEXING.md`.

Cloudflare account-level AI Crawl Control / WAF settings must also be set to
Allow for Search, Agent and Training if full permissibility is desired.

## Deployment

Replace the contents of the GitHub repository production branch with the
contents of this package, commit all additions/deletions, and push `main`.

Cloudflare Pages will automatically deploy the connected production branch.
After deployment, verify the custom domain, robots meta/header, robots.txt,
sitemap.xml and redirects before submitting the sitemap to search engines.
