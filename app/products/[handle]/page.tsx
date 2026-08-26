import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MOCK_PRODUCTS,
  formatPrice,
  getBrand,
  getProductByHandle,
} from "@/lib/data";
import { buildWhatsAppOrderUrl, isWhatsAppOrderingConfigured } from "@/lib/whatsapp";

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.42-1.35a9.87 9.87 0 0 0 4.62 1.15h.01c5.46 0 9.9-4.45 9.9-9.9C21.95 6.45 17.5 2 12.04 2zm5.8 14.06c-.24.68-1.42 1.32-1.96 1.4-.5.08-1.13.11-1.83-.12-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.8-4.16-4.94-4.35-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.78-.36.2 0 .39 0 .56.01.18.01.42-.07.66.5.24.6.83 2.06.9 2.21.07.15.12.32.02.51-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.75 1.24 1.62 2.01 1.11.99 2.05 1.3 2.34 1.44.29.15.46.13.63-.05.17-.18.72-.84.92-1.13.19-.29.39-.24.65-.14.27.1 1.71.81 2 .96.29.14.48.22.55.34.07.13.07.72-.17 1.4z" />
    </svg>
  );
}

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
      <Link
        href="/products"
        className="mb-6 inline-block font-sans text-sm text-blue hover:underline"
      >
        ← Back to products
      </Link>
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
          <div className="mb-3 flex flex-wrap items-center gap-2">
            {getBrand(product.brand) && (
              <Link
                href={`/brands/${product.brand}`}
                className="font-sans text-[11px] tracking-[0.15em] text-blue uppercase hover:underline"
              >
                {getBrand(product.brand)!.label}
              </Link>
            )}
            {product.vegan && (
              <span className="inline-block rounded-full border border-mist bg-cream px-3 py-1 font-sans text-[11px] tracking-wide text-ink/70">
                Vegan
              </span>
            )}
          </div>
          <h1 className="font-display text-4xl text-navy">{product.title}</h1>
          <p className="mt-3 font-sans text-xl text-ink/80">
            {formatPrice(product.price, product.currency)}
          </p>
          <p className="mt-6 max-w-md font-sans text-sm text-ink/70">
            {product.description}
          </p>
          {isWhatsAppOrderingConfigured() ? (
            <a
              href={buildWhatsAppOrderUrl(product.title, formatPrice(product.price, product.currency))}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-8 py-3 font-sans text-sm tracking-wide text-ivory transition-colors hover:bg-navy/90"
            >
              <WhatsAppIcon />
              Order via WhatsApp
            </a>
          ) : (
            <button
              disabled
              title="WhatsApp ordering isn't set up yet — needs the business number"
              className="mt-8 inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-navy/40 px-8 py-3 font-sans text-sm tracking-wide text-ivory"
            >
              <WhatsAppIcon />
              Order via WhatsApp
            </button>
          )}

          {product.howToUse && (
            <div className="mt-10 border-t border-mist pt-6">
              <h2 className="mb-2 font-sans text-xs font-semibold tracking-[0.15em] text-ink/60 uppercase">
                How to use
              </h2>
              <p className="max-w-md font-sans text-sm text-ink/70">{product.howToUse}</p>
            </div>
          )}

          {product.ingredients && (
            <details className="mt-6 border-t border-mist pt-6">
              <summary className="cursor-pointer font-sans text-xs font-semibold tracking-[0.15em] text-ink/60 uppercase">
                Ingredients
              </summary>
              <p className="mt-3 max-w-md font-sans text-xs leading-relaxed text-ink/50">
                {product.ingredients}
              </p>
            </details>
          )}
        </div>
      </div>
    </div>
  );
}
