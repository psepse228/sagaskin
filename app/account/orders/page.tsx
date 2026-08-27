import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = { title: "Orders — SAGA" };

export default function OrdersPage() {
  return (
    <PlaceholderPage
      title="Orders"
      note="Order history is coming soon."
      backHref="/account"
      backLabel="Back to account"
    />
  );
}
