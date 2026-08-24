# Production indexing / AI crawl configuration

This is the indexable production build for https://nikolasmayer.com/.

## Public-page indexing
All intended public pages use:
index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1

404.html remains noindex,follow.

## Cloudflare preview deployments
Cloudflare Pages preview deployments should continue to receive Cloudflare's preview X-Robots-Tag: noindex. Verify after deployment.

## AI/search/training use
robots.txt explicitly permits normal search, AI search/assistant access and training crawlers.

The origin also sends:
Content-Signal: search=yes, ai-input=yes, ai-train=yes, use=full

## Important Cloudflare dashboard check
A repository-level robots.txt/header cannot override an account-level WAF or AI Crawl Control block.
For genuinely full permissibility, Cloudflare should be configured:
Search = Allow
Agent = Allow
Training = Allow
and the managed option that blocks AI-training crawlers in robots.txt should be disabled.

## Privacy
birthDate was removed from Person JSON-LD because it was not visible on the site.
Do not add crawler-only personal facts that are absent from the human-readable site.

## Images
Most institution marks are served locally from /assets/institutions/. European Parliament and ESRB deliberately use the exact authoritative image URLs selected by the site owner rather than locally recreated placeholder artwork.
Instagram social thumbnails use descriptive local WebP filenames.
