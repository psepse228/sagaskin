import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = { title: "About — SAGA" };

export default function AboutPage() {
  return (
    <PlaceholderPage
      title="About SAGA"
      note="Brand story copy is pending from the client — this page is a placeholder so the footer link doesn't 404."
      backHref="/"
      backLabel="Back to home"
    />
  );
}
