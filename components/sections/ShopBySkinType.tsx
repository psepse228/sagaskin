import Link from "next/link";
import { SKIN_TYPES } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function ShopBySkinType() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14">
      <h2 className="mb-10 text-center font-sans text-sm tracking-[0.3em] text-ink/60 uppercase">
        Shop by skin type
      </h2>
      <Reveal className="flex flex-wrap justify-center gap-8">
        {SKIN_TYPES.map((type) => (
          <Link
            key={type.key}
            href={`/skin-type/${type.key}`}
            className="flex h-44 w-44 flex-col items-center justify-center rounded-full border border-mist bg-sky/60 text-center transition-all duration-300 hover:-translate-y-1.5 hover:bg-sky hover:shadow-[0_16px_28px_-14px_rgba(14,30,53,0.35)] sm:h-52 sm:w-52"
          >
            <span className="px-4 font-display text-2xl text-navy sm:text-3xl">{type.label}</span>
          </Link>
        ))}
      </Reveal>
    </section>
  );
}
