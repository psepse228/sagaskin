import type { Metadata } from "next";

export const metadata: Metadata = { title: "About — SAGA" };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-14">
      <h1 className="mb-6 font-display text-4xl text-navy">About us</h1>
      <div className="space-y-5 font-sans text-sm leading-relaxed text-ink/70">
        <p>
          Every skin has a story. It&rsquo;s a living, breathing SAGA — unique
          to you. It changes, it adapts, it holds its own history and future.
        </p>
        <p>At SAGA, we&rsquo;re here to help you write its best chapters.</p>
        <p>
          We are more than a store. We carefully provide Korean skincare that
          genuinely offers real solutions — from daily hydration to your
          specific concerns. And because every story is personal, we make it
          easy to find products that align with your values through our
          tailored guides and expert recommendations. Explore our collection,
          where performance meets principle through effective formulas,
          mindful packaging, and curated vegan and cruelty-free discoveries.
        </p>
        <p className="font-display text-lg text-navy italic">
          Your SAGA is beautiful. Let&rsquo;s write the next page, together.
        </p>
      </div>
    </div>
  );
}
