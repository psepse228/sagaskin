# SAGA (formerly Sagaskin) — Agent Instructions

Korean skincare e-commerce site, rebranding **SAGASKIN → SAGA**. The
Next.js rebuild is now what's live in Production on Vercel — `main` and
`rebuild` merged 2026-08-11; the old `legacy-static/` reference build
(plain HTML SAGASKIN era) was deleted from the repo the same day since it
was no longer needed. `rebuild` is kept around as the working branch for
new changes; merge it into `main` when a round of work is ready to ship
(main is the Vercel Production branch).

## Stack

- **Next.js 15 (App Router, TypeScript, Tailwind v4)** — scaffolded 2026-08-05
- Deployed on Vercel (`.vercel/project.json` links to the existing
  `sagaskin` project under `muhammadrizomirzaahmedov-7014s-projects`).
  **No custom domain is actually attached to this Vercel project** —
  checked 2026-08-11, only `.vercel.app` aliases exist (`sagaskin.vercel.app`
  etc.). If `sagaskin.uk` is live anywhere, it's on separate
  hosting/DNS this repo doesn't control — re-verify before assuming a
  push here updates what visitors at that domain see.
- **Commerce: headless Shopify via Storefront API** (decided 2026-08-05) —
  checkout redirects to Shopify-hosted checkout. See
  `docs/shopify-setup.md`. `lib/shopify/` has the client + starter
  queries but nothing's wired into pages yet — no real API token yet
  either.

## Layout

```
app/                     # routes, layouts, pages (App Router)
components/
  ui/                    # small reusable primitives
  sections/              # full page sections (Hero, ProductGrid, Footer…)
  layout/                # header/nav/footer shell
lib/                     # data access, constants, future commerce client
public/
  images/products/       # product photography
docs/
  client-brief/          # wireframes, hero reference, brand book — READ THIS
    README.md            # index of what's in here and what's still pending
```

## Design system

Carried over from the previous SAGASKIN build (liquid-glass style) as a
starting point — **re-validate once the client's brand book
(`docs/client-brief/brand-book/`) finishes syncing**, since the rebrand to
SAGA may shift the palette.

- Fonts: Cormorant Garamond (display) + Jost (sans body) — wired via
  `next/font/google` in `app/layout.tsx`
- **Single (light) theme, deliberately.** Found via screenshot 2026-08-05:
  an automatic `prefers-color-scheme: dark` override was flipping the body
  background to navy while every section kept its light-value Tailwind
  classes (white cards, light pill borders) — half-broken, not a real dark
  theme. Removed rather than left half-implemented. If a real dark theme
  gets designed later, redo it properly (swap every token, not just
  background/foreground) — don't re-add the partial version.
- Colors (CSS vars in `app/globals.css`): `--navy #0e1e35`, `--blue #4a7fa5`,
  `--blue-2 #7aafc8`, `--powder #b8d4e8`, `--sky #daeaf4`, `--ivory #f5f0e8`,
  `--cream #faf8f5`, `--ink #111820`, `--mist #e4eef5`

## Reference material (read before building pages)

`docs/client-brief/` has the client's hand-drawn wireframes and the new
hero lockup. Two items were still mid-sync from OneDrive as of 2026-08-05 —
check `docs/client-brief/README.md` for what to re-pull once available:
- `brand-book/` (empty, pending)
- the client's original brief/prompt text (empty, pending)

Nav structure from the wireframes: `Brands ▾` (A–Z + brand pages: Anua,
Celimax, Dr. Althea, Skin1004, Haruharu Wonder, etc.) and `Skincare ▾`
(routine Step 1–5). Homepage: hero → best sellers → shop-by-skintype →
product carousel by category → newsletter → footer.

## Open questions / not yet decided

- Need the actual Storefront API credentials (see `docs/shopify-setup.md`
  for how to generate them — no admin password needed) before any product/
  cart page can be wired up for real.
- Whether customer accounts / order history get built (Shopify's Customer
  Account API) or deferred — not addressed by the wireframes seen so far.

## Working conventions

- Server Components by default; `"use client"` only at interactive leaves
  (cart, quantity stepper, quick-view modal, mobile nav toggle).
- Run `npm run build` before considering any milestone done — zero type
  errors.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
