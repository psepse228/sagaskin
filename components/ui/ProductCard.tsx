import Image from "next/image";
import Link from "next/link";
import { formatPrice, type MockProduct } from "@/lib/data";

export function ProductCard({ product }: { product: MockProduct }) {
  return (
    <Link
      href={`/products/${product.handle}`}
      className="group flex flex-col items-center rounded-2xl border border-mist bg-white p-5 text-center transition-shadow hover:shadow-md"
    >
      <div className="relative mb-4 flex h-40 w-full items-center justify-center">
        <Image
          src={product.image}
          alt={product.title}
          width={140}
          height={160}
          className="max-h-40 w-auto object-contain transition-transform group-hover:scale-105"
        />
        {product.vegan && (
          <span className="absolute bottom-0 rounded-full border border-mist bg-cream px-2 py-0.5 font-sans text-[10px] tracking-wide text-ink/70">
            Vegan
          </span>
        )}
      </div>
      <h3 className="font-sans text-sm text-ink">{product.title}</h3>
      <p className="mt-1 font-sans text-sm text-ink/60">
        {formatPrice(product.price, product.currency)}
      </p>
    </Link>
  );
}
