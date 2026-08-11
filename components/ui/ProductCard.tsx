"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { formatPrice, type MockProduct } from "@/lib/data";

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        d="M12 20s-7-4.35-9.5-8.5C.7 8 2.2 4.5 5.8 4.5c2 0 3.4 1.1 4.2 2.4.8-1.3 2.2-2.4 4.2-2.4 3.6 0 5.1 3.5 3.3 7C19 15.65 12 20 12 20z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BagPlusIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 4h2l2.2 12.2a2 2 0 0 0 2 1.8h7.6a2 2 0 0 0 2-1.6L21 8H6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9.5" cy="20.5" r="1.2" />
      <circle cx="17.5" cy="20.5" r="1.2" />
      <path d="M14 3v5M11.5 5.5h5" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12l5 5L19 8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ProductCard({ product }: { product: MockProduct }) {
  const [wishlisted, setWishlisted] = useState(false);
  const [added, setAdded] = useState(false);

  return (
    <Link
      href={`/products/${product.handle}`}
      className="group flex flex-col items-center rounded-2xl border border-mist bg-white p-5 text-center transition-shadow hover:shadow-md"
    >
      <div className="relative mb-4 flex aspect-[3/4] w-full items-center justify-center overflow-hidden rounded-xl bg-mist/30">
        <Image
          src={product.image}
          alt={product.title}
          width={160}
          height={220}
          className="max-h-[85%] w-auto object-contain transition-transform group-hover:scale-105"
        />
        {product.vegan && (
          <span className="absolute bottom-2 left-2 rounded-full border border-mist bg-cream px-2 py-0.5 font-sans text-[10px] tracking-wide text-ink/70">
            Vegan
          </span>
        )}

        <button
          type="button"
          aria-pressed={wishlisted}
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          title="Wishlist isn't wired up to an account yet — this just remembers your click for now"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setWishlisted((v) => !v);
          }}
          className={`absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-full border border-mist bg-white/90 backdrop-blur-sm transition-colors hover:border-blue ${
            wishlisted ? "text-blue" : "text-navy/70"
          }`}
        >
          <HeartIcon filled={wishlisted} />
        </button>

        <button
          type="button"
          aria-label={added ? "Added to cart" : "Quick add to cart"}
          title="Cart isn't wired up yet — needs the Shopify Storefront API"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setAdded(true);
            window.setTimeout(() => setAdded(false), 1600);
          }}
          className={`absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full border transition-colors ${
            added
              ? "border-navy bg-navy text-ivory"
              : "border-mist bg-white/90 text-navy/70 backdrop-blur-sm hover:border-blue"
          }`}
        >
          {added ? <CheckIcon /> : <BagPlusIcon />}
        </button>
      </div>
      <h3 className="font-sans text-sm text-ink">{product.title}</h3>
      <p className="mt-1 font-sans text-sm text-ink/60">
        {formatPrice(product.price, product.currency)}
      </p>
    </Link>
  );
}
