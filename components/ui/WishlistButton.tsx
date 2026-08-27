"use client";

import { useWishlist } from "@/lib/wishlist";

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        d="M4.318 6.318a4.5 4.5 0 0 1 6.364 0L12 7.636l1.318-1.318a4.5 4.5 0 1 1 6.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 0 1 0-6.364z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Wishlist toggle for the product detail page. ProductCard has its own
 * heart overlay for the grid view; this is the same lib/wishlist.ts store,
 * just as a standalone button since the detail page isn't a card.
 */
export function WishlistButton({ handle }: { handle: string }) {
  const { isWishlisted, toggle } = useWishlist();
  const wishlisted = isWishlisted(handle);

  return (
    <button
      type="button"
      aria-pressed={wishlisted}
      aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
      title={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
      onClick={() => toggle(handle)}
      className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 font-sans text-sm tracking-wide transition-colors ${
        wishlisted
          ? "border-blue bg-sky text-blue"
          : "border-mist text-navy hover:border-blue hover:text-blue"
      }`}
    >
      <HeartIcon filled={wishlisted} />
      {wishlisted ? "Saved" : "Add to wishlist"}
    </button>
  );
}
