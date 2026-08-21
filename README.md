# Nikolas Mayer — Astro + Cloudflare Pages demo

First private/demo version of a professional personal website designed for clean crawlability, entity clarity and future search/AI visibility.

## Important: this demo is intentionally NOINDEX

`src/config.ts` currently contains:

```ts
preview: true
```

That does two things:
- adds a `noindex,nofollow,noarchive` robots meta tag;
- generates a `robots.txt` that disallows all crawling.

Keep it `true` while testing on `*.pages.dev`.

Before attaching the public domain and launching, change it to:

```ts
preview: false
```

Then rebuild and confirm `/robots.txt` says `Allow: /`.

## Local use

Install Node.js 20+ and run:

```bash
npm install
npm run dev
```

Then open the local URL Astro prints in the terminal.

## Cloudflare Pages deployment

1. Create a private GitHub repository.
2. Upload/push this project to the repository.
3. In Cloudflare, go to **Workers & Pages → Create application → Pages → Import an existing Git repository**.
4. Select the repository.
5. Use:
   - Production branch: `main`
   - Build command: `npm run build`
   - Build directory: `dist`
6. Deploy.
7. Cloudflare gives you a `*.pages.dev` URL. Use this for the private design/content review before connecting a custom domain.

## Where to edit the biography

Most content is in:

`src/data/profile.ts`

Site-wide settings, social links and the preview flag are in:

`src/config.ts`

## Add social/profile links

In `src/config.ts`, fill in only real URLs. Blank items are not displayed.

## Design options

Change this line in `src/config.ts`:

```ts
theme: 'editorial'
```

Available starter palettes:
- `editorial` — current warm institutional/editorial design
- `minimal` — high-contrast Swiss/minimal palette
- `markets` — dark financial/data palette

These currently change the visual system, not the layout. A later iteration can make each direction structurally distinct.

## Replace the portrait placeholder

The homepage currently contains an initials-based portrait placeholder. Once a professional portrait is selected, replace the placeholder inside:

`src/components/Hero.astro`

and add the image under `public/images/`.

## Before public launch

- verify exact job titles/dates;
- verify public-safe project descriptions;
- add institutional source links;
- build the actual publication bibliography;
- add real social links;
- add professional portrait;
- add `hreflang` pairs for full EN/CZ equivalents;
- check canonical URLs;
- switch `preview` to `false`;
- connect `nikolasmayer.com`;
- redirect `.eu` and `.cz` appropriately;
- register Google Search Console and Bing Webmaster Tools.

## Staging crawl/indexing policy

The demo is configured to **allow all crawlers** through `robots.txt`.

While `preview: true`, pages use:

`<meta name="robots" content="noindex,follow">`

This means search and AI crawlers can fetch and analyse the demo, while conventional search engines are asked not to place staging URLs in their public index. This avoids duplicate/canonical pollution before `nikolasmayer.com` becomes the production URL.

When the site is ready for public launch, set:

`preview: false`

The noindex meta tag and demo banner will disappear automatically. Keep Cloudflare AI/search crawler policies set to Allow for the crawlers you want to reach the site.
