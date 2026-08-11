# Shopify Storefront API setup (headless)

Decided 2026-08-05: rebuild stays Next.js, Shopify stays the commerce
backend via the **Storefront API** (not a Liquid theme, not the admin
login/password). Domain stays `sagaskin.uk`.

## sagaskin.uk is already live on Shopify — check before assuming a fresh store

Found 2026-08-11 via DNS: `sagaskin.uk` (apex, A record) and
`www.sagaskin.uk` (CNAME → `shops.myshopify.com`) are **already pointed
at an existing Shopify store**, not empty/parked. Loading the domain
currently returns Shopify's "Store unavailable" page (store
paused/frozen, or the domain link on the Shopify side is broken — can't
tell without admin access).

The domain also carries **live Google Workspace email**
(`MX smtp.google.com`, SPF `include:_spf.google.com`) — any DNS change
here must not touch those records.

**Before generating a Storefront API token**, confirm whether that
existing Shopify store is the one to connect to (it may already have
the real product catalog) or whether it's unrelated/stale and a fresh
store is needed. Whoever has Shopify admin access needs to check.
Client asked (2026-08-11) to hold off repointing `sagaskin.uk`'s DNS to
Vercel until the Storefront API + cart/checkout are fully wired on the
Next.js site, specifically to avoid a window where the real domain
shows an unfinished site with no working commerce.

## What we need from the client (or whoever has admin access)

No password required — only these two values, generated from a **custom
app** in the Shopify admin:

1. In Shopify admin: **Settings → Apps and sales channels → Develop apps**
2. **Allow custom app development** (if not already), then **Create an app**
   — name it something like "SAGA website (headless)"
3. Under **Configuration → Storefront API integration**, enable the scopes
   the site needs to start (products, collections, cart — add checkout/
   customer scopes later if we build account pages):
   - `unauthenticated_read_product_listings`
   - `unauthenticated_read_product_inventory`
   - `unauthenticated_read_selling_plans`
   - `unauthenticated_write_checkouts` / `unauthenticated_read_checkouts`
     (cart/checkout)
4. **Install the app**, then go to **API credentials** → copy the
   **Storefront API access token**
5. Send that token + the store's `*.myshopify.com` domain (not
   `sagaskin.uk` — that's the storefront domain, the API needs the
   backend `xxxxx.myshopify.com` one, found in Settings → Domains)

## Wiring it in

1. Copy `.env.example` to `.env.local`
2. Fill in `SHOPIFY_STORE_DOMAIN` (the `.myshopify.com` one) and
   `SHOPIFY_STOREFRONT_ACCESS_TOKEN`
3. `.env.local` is gitignored — never commit real credentials

`lib/shopify/client.ts` has the fetch wrapper (`storefrontFetch`) and
`lib/shopify/queries.ts` has starter GraphQL queries for products, a single
product by handle, and cart creation. Not wired into any page yet — do that
once there's a real token to test against and the homepage sections are
built out from the wireframes.

## Checkout

`cartCreate` returns a `checkoutUrl` — that's a Shopify-hosted checkout
page. The Next.js site links to it directly; we don't build a custom
checkout (payments/PCI compliance stays entirely on Shopify's side).

## Domain

`sagaskin.uk` stays the domain. Once the site's ready to go live, DNS needs
to point at Vercel (A/CNAME records in whoever manages the registrar) —
Shopify's checkout works fine on its own domain/subdomain during the
redirect, no DNS split needed for that.
