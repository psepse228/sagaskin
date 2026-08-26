"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { formatPrice, getBrand, type MockProduct } from "@/lib/data";
import { buildWhatsAppOrderUrl, isWhatsAppOrderingConfigured } from "@/lib/whatsapp";

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
        d="M4.318 6.318a4.5 4.5 0 0 1 6.364 0L12 7.636l1.318-1.318a4.5 4.5 0 1 1 6.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 0 1 0-6.364z"
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
      className="group flex flex-col items-center rounded-2xl border border-mist bg-white p-5 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_30px_-16px_rgba(14,30,53,0.35)]"
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
          aria-label={added ? "Order sent to WhatsApp" : "Order via WhatsApp"}
          title={
            isWhatsAppOrderingConfigured()
              ? "Order via WhatsApp"
              : "WhatsApp ordering isn't set up yet — needs the business number"
          }
          disabled={!isWhatsAppOrderingConfigured()}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (!isWhatsAppOrderingConfigured()) return;
            setAdded(true);
            window.setTimeout(() => setAdded(false), 1600);
            window.open(
              buildWhatsAppOrderUrl(product.title, formatPrice(product.price, product.currency)),
              "_blank",
              "noopener,noreferrer",
            );
          }}
          className={`absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full border transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${
            added
              ? "border-navy bg-navy text-ivory"
              : "border-mist bg-white/90 text-navy/70 backdrop-blur-sm hover:border-blue"
          }`}
        >
          {added ? <CheckIcon /> : <BagPlusIcon />}
        </button>
      </div>
      {getBrand(product.brand) && (
        <p className="font-sans text-[10px] tracking-[0.12em] text-ink/50 uppercase">
          {getBrand(product.brand)!.label}
        </p>
      )}
      <h3 className="font-sans text-sm text-ink">{product.title}</h3>
      <p className="mt-1 font-sans text-sm text-ink/60">
        {formatPrice(product.price, product.currency)}
      </p>
    </Link>
  );
}
