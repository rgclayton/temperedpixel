# temperedpixel.com — project context

Ryan's portfolio site, built with Astro. Public repo: `github.com/rgclayton/temperedpixel`.

## Running the dev server

Node must be **>=22.12.0**. The system default Node (20) breaks the project — use Node 24 via nvm:

```bash
source ~/.nvm/nvm.sh && nvm use 24
npm run dev -- --port 4321
```

Dev server runs at `http://localhost:4321`. (`nvm alias default 24` would make this permanent, but hasn't been set yet.)

## Tech stack

Astro 6.4.2, vanilla JS (no framework), scoped CSS per-component, Content Collections for projects.

- `npm run dev` — start dev server (use Node 24, see above)
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the production build locally

## Content Collections — projects

- Files: `src/content/projects/*.md`
- Schema: `src/content.config.ts` — defines all frontmatter fields; validate here when adding new fields
- Each project renders at `/work/<slug>` via `src/pages/work/[slug].astro`

Frontmatter fields:

```yaml
title: string
type: engineering | design
summary: string           # shown on card
year: string
role: string
tags: string[]
order: number             # global sort order (can be decimal, e.g. 1.5)
size: normal | wide | tall | large   # bento grid span
tabletSize: normal | wide | tall | large   # optional tablet override
desktopOrder: number      # optional per-breakpoint visual order
tabletOrder: number
image: /projects/<slug>/cover/<filename>.png   # optional card background
featured: boolean
placeholder: boolean
github: url               # optional
```

Bento grid sizes: `normal` = 1×1, `wide` = 2×1, `tall` = 1×2, `large` = 2×2.

Adding a new project:
1. Create `src/content/projects/<slug>.md` with frontmatter
2. Drop a cover image in `public/projects/<slug>/cover/<filename>.png`
3. Set `image: /projects/<slug>/cover/<filename>.png` in frontmatter
4. Add detail page images anywhere under `public/projects/<slug>/` and reference them in the markdown body as `![alt text](/projects/<slug>/filename.png)`

## Images on detail pages

- Clicking a prose image opens a lightbox (`window.__lightboxOpen`)
- Lightbox component is `src/components/Lightbox.astro`, already imported in `[slug].astro`

## Card background images

- Full-bleed with a dark scrim (`rgba(17,17,20,0.72)`)
- When `image` is set, text switches to white overrides (`.has-image` class)
- Hover effect: `.card-bg` zooms to `scale(1.14)`, transition 0.5s ease, no translation
- `background-position: left` (intentional — keeps the subject in frame for most screenshots)

## CSS scoping

- All component styles are scoped by default in Astro (`:global()` needed for child elements not in the component template)
- The `.prose` styles in `[slug].astro` use `:global()` wrappers for markdown-rendered content

## Current project layout (desktop)

```
[ Milo 2×2 ] [ Adobe.com Site Redesign 1×2 ] [ Forge 1×2 ] [ Otto 1×2 ]
                                              [ TechComm  ] [ Dexter   ]
```

Order values: Milo=1, Site Redesign=1.5, Forge=1.7, Otto=3, Dexter=2 (desktopOrder=2), TechComm=4 (desktopOrder=1).

## Content framing

Core framing across all project copy: *Senior/Staff-level engineer functioning as the technical lead for several layers of a major platform redesign — high-volume production engineering, tool ownership, and cross-org technical liaison.*

Projects: Milo, Adobe.com Site Redesign, Forge, Otto, Dexter/AEM, Technical Communication — all rewritten through this lens (see `src/content/projects/*.md`).

## Studio nav — intentionally hidden

The "Studio" link in `src/components/Nav.astro` is deliberately hidden via a `hidden: true` flag on its entry in the `links` array, filtered out before render. The `/studio` page itself still exists and still builds/is reachable by direct URL — only the nav link is suppressed.

Why: Ryan said the Studio page (photography gallery, experiments, talks) isn't ready yet.

To bring it back: delete the `hidden: true` line (and the comment above it) in `Nav.astro` — no other changes needed. Don't re-enable without checking with Ryan first, since "not ready" may still be true.

## Custom domain / DNS (temperedpixel.com)

GitHub Pages is enabled (source: GitHub Actions), deploy workflow succeeds, and `temperedpixel.com` is set as the custom domain in GitHub's Pages config (done via `gh api`, not visible in git history).

Correct DNS records at the registrar (GoDaddy):
- `A @` → 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
- `AAAA @` (optional) → 2606:50c0:8000::153, 2606:50c0:8001::153, 2606:50c0:8002::153, 2606:50c0:8003::153
- `CNAME www` (optional) → rgclayton.github.io.

**2026-09-28 fix:** HTTPS wasn't enabling because a leftover GoDaddy "parked domain" A record (3.33.130.190 / 15.197.148.33) was mixed in alongside the correct GitHub A records, blocking domain verification/cert issuance. Ryan found and deleted the parked record in GoDaddy's DNS panel. After removal, DNS resolved cleanly (verified via 8.8.8.8/1.1.1.1) and plain HTTP served the site correctly. HTTPS cert issuance was still pending immediately after — check `gh api repos/rgclayton/temperedpixel/pages --jq .https_enforced` and toggle "Enforce HTTPS" in repo Settings → Pages once the cert is issued (this can't be flipped via API until the cert exists).

## Remaining work

**High priority**
- Dexter/AEM cover image: not wired up yet. Drop file in `public/projects/dexter-aem/cover/` and add `image: /projects/dexter-aem/cover/<filename>.png` to `dexter-aem.md` frontmatter.
- Confirm HTTPS cert issued for temperedpixel.com and enable "Enforce HTTPS".

**Medium priority**
- More live page links: Adobe.com Site Redesign has a "Live pages" section — add more URLs as redesign waves launch.
- Forge/Milo detail screenshots: could add inline screenshots the way Otto has them.

**Low priority**
- `nvm alias default 24` — set Node 24 as default so the dev server starts without manual version switching.
- Milo detail page: could add specific block names or PR count once comfortable with public detail level.

## Key files

| File | Purpose |
|---|---|
| `src/content/projects/*.md` | All project content |
| `src/content.config.ts` | Frontmatter schema |
| `src/pages/work/[slug].astro` | Detail page template |
| `src/pages/index.astro` | Homepage (imports ProjectGrid) |
| `src/pages/about.astro` | About page |
| `src/components/ProjectGrid.astro` | Bento grid layout + ordering script |
| `src/components/ProjectCard.astro` | Card component (background image, hover, tags) |
| `src/components/Lightbox.astro` | Image lightbox (used on detail pages + studio) |
| `src/layouts/BaseLayout.astro` | Site shell, nav, fonts, global CSS |
| `public/projects/` | All project images |
