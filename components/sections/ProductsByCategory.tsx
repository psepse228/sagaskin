"use client";

import { useState } from "react";
import Link from "next/link";
import { PRODUCT_CATEGORIES, getProductsByCategory } from "@/lib/data";
import { ProductCard } from "@/components/ui/ProductCard";

export function ProductsByCategory() {
  const [active, setActive] = useState<(typeof PRODUCT_CATEGORIES)[number]["key"]>(
    PRODUCT_CATEGORIES[0].key,
  );
  const products = getProductsByCategory(active);

  return (
    <section className="mx-auto max-w-7xl px-6 py-14">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="font-display text-3xl text-navy">Products</h2>
        <Link href="/products" className="font-sans text-sm text-blue hover:underline">
          View all →
        </Link>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {PRODUCT_CATEGORIES.map((category) => (
          <button
            key={category.key}
            onClick={() => setActive(category.key)}
            className={`rounded-full border px-4 py-1.5 font-sans text-sm transition-colors ${
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
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="font-sans text-sm text-ink/50">
          No products in this category yet.
        </p>
      )}
    </section>
  );
}
