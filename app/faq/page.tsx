import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = { title: "FAQs — SAGA" };

export default function FaqPage() {
  return (
    <PlaceholderPage
      title="FAQs"
      note="Frequently asked questions are coming soon. In the meantime, get in touch at hello@sagaskin.uk."
      backHref="/"
      backLabel="Back to home"
    />
  );
}
