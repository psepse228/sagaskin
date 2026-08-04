import { getBestSellers } from "@/lib/data";
import { ProductCard } from "@/components/ui/ProductCard";

export function BestSellers() {
  const products = getBestSellers(3);

  return (
    <section className="mx-auto max-w-7xl px-6 py-14">
      <h2 className="mb-8 text-center font-display text-3xl text-navy">
        Best sellers
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
