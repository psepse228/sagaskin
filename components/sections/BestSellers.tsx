import { getBestSellers } from "@/lib/data";
import { ProductCard } from "@/components/ui/ProductCard";

export function BestSellers() {
  const products = getBestSellers(4);

  return (
    <section className="mx-auto max-w-7xl px-6 py-14">
      <h2 className="mb-10 text-center font-display text-5xl font-medium text-navy sm:text-6xl">
        Best sellers
      </h2>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
