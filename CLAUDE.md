# SAGA (formerly Sagaskin) — Agent Instructions

Korean skincare e-commerce site, rebranding **SAGASKIN → SAGA**. Complete
rebuild in progress on the `rebuild` branch; `main` still holds the old
static site and stays deployed as-is until the new build is ready to merge.

## Stack

- **Next.js 15 (App Router, TypeScript, Tailwind v4)** — scaffolded 2026-08-05
- Deployed on Vercel (`.vercel/project.json` links to the existing project)
- No CMS/commerce backend wired up yet — see "Open questions" below

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
legacy-static/           # the old index.html build (SAGASKIN era) — reference only, not built
```

## Design system

Carried over from the previous SAGASKIN build (liquid-glass style) as a
starting point — **re-validate once the client's brand book
(`docs/client-brief/brand-book/`) finishes syncing**, since the rebrand to
SAGA may shift the palette.

- Fonts: Cormorant Garamond (display) + Jost (sans body) — wired via
  `next/font/google` in `app/layout.tsx`
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

- Commerce backend: memory from the prior session noted a longer-term goal
  of a Shopify Liquid theme so the live `sagaskin.uk` Shopify store's
  cart/checkout/accounts keep working. This rebuild is Next.js instead —
  confirm with the user whether Next.js talks to Shopify as a headless
  storefront (Storefront API) or whether this is a separate marketing
  site/prototype.
- Product catalog source (static data vs. Shopify Storefront API vs. other).

## Working conventions

- Server Components by default; `"use client"` only at interactive leaves
  (cart, quantity stepper, quick-view modal, mobile nav toggle).
- Run `npm run build` before considering any milestone done — zero type
  errors.
- Don't touch `legacy-static/` except to reference it; it's the old design
  for continuity, not something to edit.
