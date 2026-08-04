import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  MOCK_PRODUCTS,
  formatPrice,
  getProductByHandle,
} from "@/lib/data";

export function generateStaticParams() {
  return MOCK_PRODUCTS.map((p) => ({ handle: p.handle }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const { handle } = await params;
  const product = getProductByHandle(handle);
  return { title: product ? `${product.title} — SAGA` : "Product — SAGA" };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const product = getProductByHandle(handle);
  if (!product) notFound();

  return (
    <div className="mx-auto max-w-5xl px-6 py-14">
      <div className="grid gap-10 sm:grid-cols-2">
        <div className="flex items-center justify-center rounded-2xl border border-mist bg-white p-10">
          <Image
            src={product.image}
            alt={product.title}
            width={220}
            height={260}
            className="max-h-72 w-auto object-contain"
          />
        </div>
        <div>
          {product.vegan && (
            <span className="mb-3 inline-block rounded-full border border-mist bg-cream px-3 py-1 font-sans text-[11px] tracking-wide text-ink/70">
              Vegan
            </span>
          )}
          <h1 className="font-display text-4xl text-navy">{product.title}</h1>
          <p className="mt-3 font-sans text-xl text-ink/80">
            {formatPrice(product.price, product.currency)}
          </p>
          <p className="mt-6 max-w-sm font-sans text-sm text-ink/60">
            Full product description, ingredients, and how-to-use details
            land here once the real catalog (Shopify Storefront API) is
            wired in — see docs/shopify-setup.md.
          </p>
          <button
            disabled
            title="Checkout isn't wired up yet — pending the Shopify Storefront API token"
            className="mt-8 cursor-not-allowed rounded-full bg-navy/40 px-8 py-3 font-sans text-sm tracking-wide text-ivory"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
