import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ROUTINE_STEPS, getProductsByCategory, type MockProduct } from "@/lib/data";
import { ProductCard } from "@/components/ui/ProductCard";

const STEP_TO_CATEGORY: Record<number, MockProduct["category"]> = {
  1: "cleansers",
  2: "toners",
  3: "serums",
  4: "moisturisers",
  5: "spf",
};

export function generateStaticParams() {
  return ROUTINE_STEPS.map((s) => ({ step: String(s.step) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ step: string }>;
}): Promise<Metadata> {
  const { step } = await params;
  const routine = ROUTINE_STEPS.find((s) => s.step === Number(step));
  return { title: routine ? `Step ${routine.step}. ${routine.label} — SAGA` : "Skincare — SAGA" };
}

export default async function SkincareStepPage({
  params,
}: {
  params: Promise<{ step: string }>;
}) {
  const { step } = await params;
  const stepNum = Number(step);
  const routine = ROUTINE_STEPS.find((s) => s.step === stepNum);
  if (!routine) notFound();

  const products = getProductsByCategory(STEP_TO_CATEGORY[stepNum]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-14">
      <p className="mb-2 font-sans text-xs tracking-[0.3em] text-blue uppercase">
        Step {routine.step} of 5
      </p>
      <h1 className="mb-8 font-display text-4xl text-navy">{routine.label}</h1>

      {products.length > 0 ? (
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="font-sans text-sm text-ink/50">
          No products in this step yet.
        </p>
      )}
    </div>
  );
}
