import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = { title: "Shipping & Delivery — SAGA" };

export default function ShippingPage() {
  return (
    <PlaceholderPage
      title="Shipping & Delivery"
      note="Real shipping rates/regions/timelines are pending from the client — placeholder so the footer link doesn't 404. Not writing policy specifics without confirming them first."
      backHref="/"
      backLabel="Back to home"
    />
  );
}
