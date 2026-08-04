import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BRANDS, getBrand } from "@/lib/data";
import { PlaceholderPage } from "@/components/ui/PlaceholderPage";

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

  return (
    <PlaceholderPage
      title={brand.label}
      note="This brand's product listing isn't wired up yet — it needs the real catalog from the Shopify Storefront API, tagged by brand."
    />
  );
}
