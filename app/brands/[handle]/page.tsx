import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BRANDS, getBrand, getProductsByBrand } from "@/lib/data";
import { PlaceholderPage } from "@/components/ui/PlaceholderPage";
import { ProductCard } from "@/components/ui/ProductCard";

export function generateStaticParams() {
  return BRANDS.map((b) => ({ handle: b.handle }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const { handle } = await params;
  const brand = getBrand(handle);
  return { title: brand ? `${brand.label} — SAGA` : "Brand — SAGA" };
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const brand = getBrand(handle);
  if (!brand) notFound();

  const products = getProductsByBrand(handle);

  if (products.length === 0) {
    return (
      <PlaceholderPage
        title={brand.label}
        note="We don't stock this brand yet — check back once the catalog grows, or browse everything we currently carry."
      />
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-14">
      <h1 className="mb-8 font-display text-4xl text-navy">{brand.label}</h1>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
