import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = { title: "Account — SAGA" };

export default function AccountPage() {
  return (
    <PlaceholderPage
      title="Account"
      note="Sign-in and order history aren't wired up yet — this needs the Shopify Customer Account API, which hasn't been decided on yet (see CLAUDE.md open questions)."
    />
  );
}
