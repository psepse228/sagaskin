# components/

Conventions for this folder as the rebuild fills in:

- `ui/` — small reusable primitives (Button, Badge, QuantityStepper, etc.)
- `sections/` — full homepage/page sections (Hero, ShopBySkinType, ProductGrid,
  BestSellers, Footer, Nav) matching the wireframes in
  `docs/client-brief/wireframes/`
- `layout/` — header/nav/footer shell used across routes

Server Components by default; add `"use client"` only at the leaf that needs
interactivity (cart drawer, quantity stepper, quick-view modal, etc.), per
the nextjs-developer skill conventions.
