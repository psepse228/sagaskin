import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = { title: "About — SAGA" };

export default function AboutPage() {
  return (
    <PlaceholderPage
      title="About SAGA"
      note="Our story is coming soon."
      backHref="/"
      backLabel="Back to home"
    />
  );
}
