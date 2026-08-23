"use client";

import { useState } from "react";
import Link from "next/link";
import { PRODUCT_CATEGORIES, getProductsByCategory } from "@/lib/data";
import { ProductCard } from "@/components/ui/ProductCard";
import { Reveal } from "@/components/ui/Reveal";

export function ProductsByCategory() {
  const [active, setActive] = useState<(typeof PRODUCT_CATEGORIES)[number]["key"]>(
    PRODUCT_CATEGORIES[0].key,
  );
  const products = getProductsByCategory(active);

  return (
    <section className="mx-auto max-w-7xl px-6 py-14">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="font-display text-4xl text-navy sm:text-5xl">Products</h2>
        <Link href="/products" className="font-sans text-base font-medium text-blue hover:underline">
          View all →
        </Link>
      </div>

      <div className="mb-8 flex flex-wrap gap-3">
        {PRODUCT_CATEGORIES.map((category) => (
          <button
            key={category.key}
            onClick={() => setActive(category.key)}
            className={`rounded-full border px-5 py-2 font-sans text-base transition-colors ${
              active === category.key
                ? "border-navy bg-navy text-ivory"
                : "border-mist text-ink hover:border-blue hover:text-blue"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {products.length > 0 ? (
        <Reveal className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Reveal>
      ) : (
        <p className="font-sans text-sm text-ink/50">
          No products in this category yet.
        </p>
      )}
    </section>
  );
}
