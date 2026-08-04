import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = { title: "Privacy Policy — SAGA" };

export default function PrivacyPage() {
  return (
    <PlaceholderPage
      title="Privacy Policy"
      note="A real privacy policy needs to come from the client (or legal counsel) — not something to draft without confirming actual data practices. Placeholder so the footer link doesn't 404."
      backHref="/"
      backLabel="Back to home"
    />
  );
}
