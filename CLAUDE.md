# SAGA (formerly Sagaskin) — Agent Instructions

Korean skincare e-commerce site, rebranding **SAGASKIN → SAGA**. The
Next.js rebuild is now what's live in Production on Vercel — `main` and
`rebuild` merged 2026-08-11; the old `legacy-static/` reference build
(plain HTML SAGASKIN era) was deleted from the repo the same day since it
was no longer needed. `rebuild` is kept around as the working branch for
new changes; merge it into `main` when a round of work is ready to ship
(main is the Vercel Production branch).

## Stack

- **Product catalog is real, not placeholder** — `lib/data.ts` holds 15
  real products (names, prices, photos, ingredients) the client sent
  2026-08-26, replacing the earlier 4 fictitious mock products. Source
  material was a `products/` folder (untracked, not committed — raw
  photos + `_des.txt` descriptions) dropped at the repo root; images were
  copied into `public/images/products/` with clean filenames, descriptions
  parsed into `lib/data.ts`. Still not the real Shopify Storefront API
  (no live stock sync) — `lib/shopify/` is still unwired — but the catalog
  itself is genuine, all 15 products now have real client-supplied copy
  (the last gap, `haruharu-black-rice-cleansing-oil`, was filled in
  2026-08-26).
- **Legal pages are real content, from the client, not placeholder** —
  `/privacy`, `/shipping`, and `/returns` are fully written from a
  `Policies/` folder (untracked, not committed) the client dropped at the
  repo root 2026-08-26, in two batches (the second batch — About us,
  Contact Us, Delivery Address, Faulty/Damaged items, a second Terms
  file — landed later the same day without an explicit heads-up; worth
  re-checking that folder for new files each time, not just once).
  `/terms` is assembled from three separate client files and covers
  sections 1–6 and 10–22 — **sections 7–9 are still missing** (likely
  Payment / Order Acceptance / Delivery & Dispatch, given what's numbered
  around them). `/about` and `/faq` are still `PlaceholderPage` — the
  client's "About us.txt" and "Contact Us.txt" files exist but are
  empty. Shared rendering lives in `components/ui/LegalPage.tsx`.
- **Skin-type pages are real** — `MockProduct.skinTypes` (in
  `lib/data.ts`) was filled in from the "Perfect for" / "Suitable for"
  lines already present in the client's own product copy (not a
  separate list) — see `getProductsBySkinType()`. Products whose copy
  just says "All skin types" get all four; the rest match what's
  specifically named. Client offered to send an explicit list instead
  but it hadn't arrived and the circles/Ask SAGA links were dead-ending,
  so this shipped from the copy that already existed rather than wait.
- **Next.js 15 (App Router, TypeScript, Tailwind v4)** — scaffolded 2026-08-05
- Deployed on Vercel (`.vercel/project.json` links to the existing
  `sagaskin` project under `muhammadrizomirzaahmedov-7014s-projects`).
  `sagaskin.uk` was added to this Vercel project 2026-08-11; client is
  repointing DNS (A records for apex + `www` → `76.76.21.21`) as of
  2026-08-26, ahead of Shopify being wired up — see "Commerce" below for
  why that's no longer the blocker it was.
- **Commerce: headless Shopify via Storefront API, still the plan long
  term** (decided 2026-08-05) — but the Shopify account this connects to
  hit an unresolved backend bug starting 2026-08-11, still open as of
  2026-08-26: every resource-creation action — app install, even
  brand-new store creation — 500s account-wide; a Shopify Support ticket
  is open, see `docs/shopify-setup.md`. Rather than block the whole site
  launch on that ticket, client decided 2026-08-26 to launch now with
  **WhatsApp ordering as a stopgap**: see `lib/whatsapp.ts` — a "Order via
  WhatsApp" link (`wa.me`) on product cards and the product detail page,
  in place of cart/checkout, until either the Shopify account gets fixed
  or a fresh Shopify account is set up. `WHATSAPP_NUMBER` in that file is
  set (client sent +44 7353 307796 2026-08-27) — buttons are live.
  `lib/shopify/` still has the client + starter queries, untouched, for
  whenever this gets revisited. Client also mentioned 2026-08-27 that
  **Stripe checkout is in progress** as a more permanent path than
  either WhatsApp or Shopify — nothing wired up yet, just noted here so
  it isn't lost; re-check with the client before assuming which
  commerce backend (Shopify vs. Stripe) is still the actual plan.

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

## Domain / DNS

`sagaskin.uk` is **not just unregistered/idle** — checked 2026-08-11:

- Apex (`sagaskin.uk`) and `www.sagaskin.uk` (CNAME → `shops.myshopify.com`)
  are both already pointed at an **existing Shopify store**. It currently
  serves Shopify's "Store unavailable" page (paused/frozen store, or a
  broken domain link on Shopify's side — undetermined).
- The domain also carries **live Google Workspace email**
  (`MX smtp.google.com`, SPF `include:_spf.google.com`) — don't touch
  those records when eventually repointing DNS.
- It's unconfirmed whether that existing Shopify store is the one to
  connect the Storefront API to (may already hold real products) or is
  unrelated/stale — client is checking who has admin access.
- `sagaskin.uk` was added to the `sagaskin` Vercel project 2026-08-11
  (`vercel domains add`) but DNS itself was deliberately **not**
  repointed — client wants Shopify (Storefront API + cart/checkout)
  fully wired here first, so the real domain never shows a half-working
  site. Once ready, cutover is either an A record (`sagaskin.uk` →
  `76.76.21.21`) or switching nameservers to Vercel's — Vercel showed
  exact instructions when the domain was added; re-run
  `vercel domains inspect sagaskin.uk` to get current ones.

## Open questions / not yet decided

- Need the actual Storefront API credentials (see `docs/shopify-setup.md`
  for how to generate them — no admin password needed) before any product/
  cart page can be wired up for real. See "Domain / DNS" above — may be
  the existing store already on `sagaskin.uk`, unconfirmed.
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
