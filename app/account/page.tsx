import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = { title: "Account — SAGA" };

export default function AccountPage() {
  return (
    <PlaceholderPage
      title="Account"
      note="Account sign-in is coming soon."
    />
  );
}
