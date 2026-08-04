import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = { title: "Cart — SAGA" };

export default function CartPage() {
  return (
    <PlaceholderPage
      title="Your cart is empty"
      note="Cart/checkout isn't wired up yet — pending the Shopify Storefront API token (see docs/shopify-setup.md). It'll hand off to Shopify's hosted checkout once connected."
    />
  );
}
