import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = { title: "Terms & Conditions — SAGA" };

export default function TermsPage() {
  return (
    <PlaceholderPage
      title="Terms & Conditions"
      note="Real terms need to come from the client (or legal counsel) — not something to draft without confirming actual policies. Placeholder so the footer link doesn't 404."
      backHref="/"
      backLabel="Back to home"
    />
  );
}
