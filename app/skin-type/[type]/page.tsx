import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SKIN_TYPES, getProductsBySkinType } from "@/lib/data";
import { ProductCard } from "@/components/ui/ProductCard";

export function generateStaticParams() {
  return SKIN_TYPES.map((t) => ({ type: t.key }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ type: string }>;
}): Promise<Metadata> {
  const { type } = await params;
  const skinType = SKIN_TYPES.find((t) => t.key === type);
  return { title: skinType ? `${skinType.fullLabel} skin — SAGA` : "Shop by skin type — SAGA" };
}

export default async function SkinTypePage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  const skinType = SKIN_TYPES.find((t) => t.key === type);
  if (!skinType) notFound();

  const products = getProductsBySkinType(skinType.key);

  return (
    <div className="mx-auto max-w-7xl px-6 py-14">
      <h1 className="mb-8 font-display text-4xl text-navy">{skinType.fullLabel} skin</h1>
      {products.length > 0 ? (
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="font-sans text-sm text-ink/50">No products for this skin type yet.</p>
      )}
    </div>
  );
}
