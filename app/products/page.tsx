import type { Metadata } from "next";
import { MOCK_PRODUCTS } from "@/lib/data";
import { ProductCard } from "@/components/ui/ProductCard";

export const metadata: Metadata = {
  title: "All Products — SAGA",
};

// Placeholder: cycles the 4 mock products to fill a 12-up grid so the
// layout/pagination can be reviewed before the real catalog (Shopify
// Storefront API, 12/page per the wireframe) is wired in.
const PLACEHOLDER_COUNT = 12;
const PAGE_COUNT = 7;

export default function AllProductsPage() {
  const products = Array.from({ length: PLACEHOLDER_COUNT }, (_, i) => ({
    ...MOCK_PRODUCTS[i % MOCK_PRODUCTS.length],
    id: `placeholder-${i}`,
  }));

  return (
    <div className="mx-auto max-w-7xl px-6 py-14">
      <h1 className="mb-8 font-display text-3xl text-navy">All products</h1>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <nav className="mt-12 flex justify-center gap-3 font-sans text-sm text-ink/70" aria-label="Pagination">
        {Array.from({ length: PAGE_COUNT }, (_, i) => (
          <span key={i} className={i === 0 ? "font-semibold text-navy" : ""}>
            {i + 1}
          </span>
        ))}
      </nav>
    </div>
  );
}
