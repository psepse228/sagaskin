import type { Metadata } from "next";
import { MOCK_PRODUCTS } from "@/lib/data";
import { ProductCard } from "@/components/ui/ProductCard";

export const metadata: Metadata = {
  title: "All Products — SAGA",
};

// All 15 real products fit on one page for now — real pagination (12/page
// per the wireframe) is worth adding once the catalog is bigger than one
// screen's worth; faking page numbers over a small real catalog would be
// dishonest, same standard as everything else on this site.
export default function AllProductsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-14">
      <h1 className="mb-8 font-display text-3xl text-navy">All products</h1>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {MOCK_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
