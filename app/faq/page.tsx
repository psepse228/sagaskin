import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = { title: "FAQs — SAGA" };

export default function FaqPage() {
  return (
    <PlaceholderPage
      title="FAQs"
      note="Real questions/answers are pending from the client — placeholder so the footer link doesn't 404."
      backHref="/"
      backLabel="Back to home"
    />
  );
}
