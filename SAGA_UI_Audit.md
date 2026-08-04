# SAGA — UI/UX Audit

*sagaskin.vercel.app · audited as a real visitor across desktop and simulated mobile · 5 Aug 2026*

## Scope & method

Every page in the brief was visited and interacted with: header/footer/nav links clicked, product cards and category tabs clicked, search and newsletter and contact forms tested, keyboard tab order checked, and layout tested at desktop (1920px) and a simulated 390px mobile viewport (the environment's native window-resize tool did not propagate to the page's actual viewport, so mobile testing was done via an isolated same-origin iframe sized to 390×844 — a standard device-simulation workaround). Cart, account, legal pages, reused product photography, and the absence of a mobile hamburger menu are treated as expected WIP per the brief and are not scored as bugs unless they behave inconsistently with that intent.

## Findings by page (most → least severe)

### Sitewide

- **[HIGH]** Search bar is completely non-functional and gives zero feedback. Typing a query and pressing Enter (or clicking the field) does nothing — no results page, no "coming soon" state, no disabled styling, no tooltip. This is the one interactive element on the site that looks fully live but silently fails, unlike every other disabled CTA (Add to Cart, Newsletter, Contact submit), which all carry explicit title-text explaining why they're inert. Violates Nielsen's "visibility of system status" more severely than the intentionally-disabled elements, and is worse for assistive-tech users since there's no `aria-disabled` or accessible explanation at all.
- **[MEDIUM]** The global footer includes a full duplicate "Contact us" form (Name / Email / Message / Submit) on every single page. On the dedicated `/contact` page this means the identical form appears twice on one page. This is redundant, lengthens every page's scroll, and dilutes the page-specific contact form as the clear primary path — a minimalist-design and consistency issue (Nielsen).
- **[MEDIUM]** Hero content (eyebrow text, "SAGA" wordmark, tagline, CTA) is invisible for roughly 2 seconds on first load — only the background gradient and floating bubbles render initially. On a slower connection this reads as a broken/blank page rather than a designed reveal, since there's no skeleton or immediate content.
- **[LOW]** A background trust-badge marquee ("Korean Skincare · Curated in London · Clean Ingredients · Skin First · Small-Batch Brands") is duplicated back-to-back in the DOM (standard technique for an infinite CSS scroller) but isn't hidden from assistive tech, so screen reader users likely hear the same five items announced twice.
- **[GOOD]** Every known-WIP surface (cart, account, orders, wishlist, all six legal/info pages, disabled purchase CTAs) uses a consistent, honestly-worded placeholder pattern: a short explanation of what's missing and why, plus a working CTA back into the live part of the site. This is a well-executed "no dead ends" pattern for a mid-build product.
- **[GOOD]** Heading structure is clean and semantic everywhere sampled: exactly one H1 ("SAGA"), H2 for section titles (Best sellers, Shop by skin type, Products), H3 for cards/subsections — confirmed by inspecting the rendered DOM, not just visually.

### Homepage (`/`)

- **[HIGH]** "Shop by skin type" renders the Combination circle's label as "Comb" — not a CSS truncation illusion, the accessible name and rendered text are both literally "Comb". Reads as a shipped typo on the homepage's primary navigation surface.
- **[LOW]** Large, unbalanced whitespace gap in the desktop footer between the "Information" link column and the "Contact us" form column (roughly 150–200px of dead space) — an orphaned-whitespace layout issue distinct from the intentional section padding used elsewhere.

### `/skin-type/combination`

- **[HIGH]** Page heading itself renders "Comb skin" instead of "Combination skin" — same truncation bug as the homepage circle, confirming it's a shared data/label issue rather than a one-off CSS clip.

### Product detail pages (`/products/*`)

- **[MEDIUM]** No breadcrumb or "back to products" link on any PDP. After arriving from a brand, skin-type, or routine-step page, the only way back is the browser back button — a recognition-rather-than-recall gap (Nielsen).
- **[GOOD]** "Add to Cart" is a real disabled button with an accessible tooltip ("Checkout isn't wired up yet — pending the Shopify Storefront API token"), consistent across all four PDPs tested (Cleansing Balm, Toner, Ampoule, Sun Serum).

### `/products` (all-products grid)

- **[LOW]** 7 pages of pagination cycle only 4 unique product photos/listings, per the known catalog gap — confirmed intentional, not flagged as a defect, but pagination gives no visual cue (e.g. "showing placeholder data") that pages 2–7 are identical to page 1.
- **[GOOD]** Product grid reflows cleanly from 4 columns (desktop) to 2 columns (simulated 390px mobile) with no overlap or overflow.

### Brand pages, routine-step pages, skin-type (dry/oily/balanced), account/cart/wishlist/orders, legal pages

- **[GOOD]** All render the same honest, well-structured placeholder pattern with correct routing — no 404s across any of the 6 brand pages, 5 routine steps, 4 skin-type pages, or 4 account/commerce pages tested.

### Navigation & interaction

- **[GOOD]** Brands ▾ and Skincare ▾ dropdowns work identically via mouse hover/click on desktop and via tap in the mobile simulation — not hover-only, so the lack of a hamburger menu doesn't block mobile users from reaching any nav destination.
- **[GOOD]** Keyboard tab order is logical (search → account → wishlist → cart → nav) with a clearly visible focus outline on every stop tested.

## Per-category scores

| Dimension | Score | Reasoning |
|---|---|---|
| Visual hierarchy & typography | 7/10 | Consistent Cormorant Garamond / Jost type scale everywhere; clean semantic H1→H2→H3 nesting (verified in DOM: single H1 "SAGA", H2 section titles, H3 product/card titles). Docked for the ~2s blank hero on load and a duplicated trust-badge marquee that dilutes what should be a tight, single hierarchy. |
| Color & contrast | 8/10 | Palette (navy/blue/powder/ivory/cream CSS variables) is identical across every page visited — no drift. Measured contrast ratios (WCAG 2.1): price text 4.71:1 (passes AA for normal text), nav labels 15–16:1, hero eyebrow/body text 11–16:1. No sub-AA text found in sampling. |
| Spacing & layout consistency | 7/10 | Section rhythm, card padding, and footer structure are identical page-to-page (Nielsen: consistency & standards). Docked for the "Comb" label being clipped inside its circle (Fitts/label-fit failure) and an oversized, unbalanced gap in the desktop footer between the Information column and the Contact form column. |
| Nielsen's usability heuristics | 6/10 | Visibility of system status: fails for search (silent no-op, zero feedback) but passes for every purchase-path CTA (Add to Cart, Newsletter, Contact submit all carry explicit disabled-state tooltips). Consistency & standards: strong overall, undermined by a duplicate global contact form. Error prevention: good — disabled state stops users acting on non-functional paths. Recognition rather than recall: weak on PDPs, no breadcrumb or back-link. Aesthetic & minimalist design: weakened by the duplicate footer form appearing on every page. |
| Responsiveness | 8/10 | Simulated at 390×844 (iframe viewport test, since the environment's own window resize did not propagate to the page): hero, best-sellers, skin-type grid (reflows 4→2 cols), product grid (4→2 cols) and footer (stacks cleanly) all reflow with no overlap, overflow, or clipped text. Nav dropdowns are tap-triggered, not hover-only, so "Brands ▾ / Skincare ▾" work fully without the (known, deferred) hamburger menu. |
| Accessibility | 7/10 | All product images carry descriptive alt text (alt = product name). Heading hierarchy is clean and semantic. Keyboard focus indicators are clearly visible (solid outline) tabbing through header icons. Disabled CTAs use real accessible names/tooltips ("Checkout isn't wired up yet…", "Not wired up yet") so assistive tech users get the same explanation sighted users do. Docked for: the search input has no `aria-disabled` or accessible explanation at all (worse for AT users than the visual-only silence sighted users get), and the duplicated trust-badge marquee isn't hidden from assistive tech, so it's likely announced twice. |
| Brand feel | 6/10 | Serif/sans pairing and muted powder-blue/ivory palette, plus a considered tagline ("Every ritual, considered."), read as intentional. Docked because the animated-bubble gradient hero reads as a generic template hero rather than bespoke Korean-skincare art direction, and the same 4 product photos cycle across all 28 catalog slots — expected per the known-gaps brief, but it still visibly undercuts the premium feel site-wide today. |

## Overall UI score: 7/10

SAGA's rebuild has real design-system discipline for a mid-flight project: one consistent type and color system across every route, semantic heading structure, visible keyboard focus, alt text on every product image, and — notably — a disciplined, honest way of marking unfinished commerce features (cart, checkout, account, legal copy) that avoids dead ends or misleading affordances. What holds it back from an 8+ are a small number of real, non-WIP defects sitting right next to that discipline: a search bar that fails completely silently (the one broken affordance the WIP-gaps brief didn't warn about), a shipped-looking typo ("Comb") on a primary nav surface, and a redundant duplicate contact form baked into every page's footer. None of these are hard fixes, but they're the kind of thing a real visitor notices immediately and that undercut the otherwise premium, considered feel the brand book is going for.

## Top 5 fixes, ranked by impact

1. **Fix or honestly disable the search bar.** Highest impact because it's the only element on the site that looks fully functional and isn't — wire it to the existing 4-product catalog as a stopgap, or give it the same disabled-state tooltip treatment as every other WIP CTA so it stops failing silently.
2. **Fix the "Comb" / "Combination" label truncation.** Appears on the homepage circle and the `/skin-type/combination` page heading. Almost certainly a one-line content or CSS-truncation fix, but it reads as a shipped typo on two of the most visible nav surfaces.
3. **Remove or simplify the duplicate footer contact form.** Replace the full Name/Email/Message form in the global footer with a simple mailto link or a link to `/contact`, and keep the full form only on the dedicated Contact page — removes the double-form problem and shortens every page on the site.
4. **Add PDP breadcrumbs / a back-to-products link.** Small addition that closes a real wayfinding gap once real navigation paths (brand → product, skin-type → product) are wired to the live catalog.
5. **Remove or shorten the blank hero delay on load.** The ~2 second gap between first paint (empty gradient) and the hero content fading in reads as broken rather than deliberate, especially on slower connections — either start the reveal sooner or render the text immediately and animate only the decorative bubbles.
