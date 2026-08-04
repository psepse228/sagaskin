import Link from "next/link";
import { SKIN_TYPES } from "@/lib/data";

export function ShopBySkinType() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14">
      <h2 className="mb-8 text-center font-sans text-xs tracking-[0.3em] text-ink/60 uppercase">
        Shop by skin type
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {SKIN_TYPES.map((type) => (
          <Link
            key={type.key}
            href={`/skin-type/${type.key}`}
            className="flex h-32 w-32 flex-col items-center justify-center rounded-full border border-mist bg-sky/60 text-center transition-colors hover:bg-sky"
          >
            <span className="px-3 font-display text-lg text-navy">{type.label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
