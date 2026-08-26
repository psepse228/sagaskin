import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = { title: "Cart — SAGA" };

export default function CartPage() {
  return (
    <PlaceholderPage
      title="Your cart is empty"
      note="There's no cart yet — for now, order directly by tapping 'Order via WhatsApp' on any product. Real cart/checkout is pending the Shopify Storefront API token (see docs/shopify-setup.md) and will hand off to Shopify's hosted checkout once that's connected."
    />
  );
}
