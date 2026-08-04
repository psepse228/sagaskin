import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = { title: "Orders — SAGA" };

export default function OrdersPage() {
  return (
    <PlaceholderPage
      title="Orders"
      note="Order history isn't wired up yet — needs sign-in (Shopify Customer Account API) first."
      backHref="/account"
      backLabel="Back to account"
    />
  );
}
