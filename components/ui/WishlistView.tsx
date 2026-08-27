"use client";

import Link from "next/link";
import { getProductByHandle } from "@/lib/data";
import { ProductCard } from "@/components/ui/ProductCard";
import { useWishlist } from "@/lib/wishlist";

// Client Component — reads the wishlist from localStorage (see
// lib/wishlist.ts). No account/backend yet, but this is a real, working
// wishlist now, not a placeholder: hearts saved on any product card show
// up here, and removing them here (or on the card) updates everywhere.
// Split out from app/wishlist/page.tsx so that page can stay a Server
// Component and export real metadata (a "use client" page can't).
export function WishlistView() {
  const { handles, toggle } = useWishlist();
  const products = handles
    .map((handle) => getProductByHandle(handle))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  if (products.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-20 text-center">
        <h1 className="mb-4 font-display text-4xl text-navy">Your wishlist is empty</h1>
        <p className="mx-auto max-w-md font-sans text-sm text-ink/60">
          Tap the heart on any product to save it here.
        </p>
        <Link
          href="/products"
          className="mt-8 inline-block rounded-full bg-navy px-6 py-2.5 font-sans text-sm text-ivory transition-colors hover:bg-navy/90"
        >
          Browse all products
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-14">
      <h1 className="mb-8 font-display text-4xl text-navy">
        Your wishlist{" "}
        <span className="font-sans text-base font-normal text-ink/50">
          ({products.length})
        </span>
      </h1>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <button
        type="button"
        onClick={() => handles.forEach((h) => toggle(h))}
        className="mt-10 font-sans text-sm text-ink/50 underline underline-offset-2 hover:text-ink"
      >
        Clear wishlist
      </button>
    </div>
  );
}
