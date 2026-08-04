import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SKIN_TYPES } from "@/lib/data";
import { PlaceholderPage } from "@/components/ui/PlaceholderPage";

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
  return { title: skinType ? `${skinType.label} skin — SAGA` : "Shop by skin type — SAGA" };
}

export default async function SkinTypePage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  const skinType = SKIN_TYPES.find((t) => t.key === type);
  if (!skinType) notFound();

  return (
    <PlaceholderPage
      title={`${skinType.label} skin`}
      note="Recommended products for this skin type aren't wired up yet — products need a skin-type tag from the real catalog first."
    />
  );
}
