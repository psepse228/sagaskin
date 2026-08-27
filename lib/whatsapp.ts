/**
 * WhatsApp ordering — stopgap commerce path while the Shopify Storefront
 * API isn't wired up yet (blocked on a broken Shopify account, see
 * docs/shopify-setup.md). Customers message the business directly to
 * order instead of using a cart/checkout.
 *
 * Client-supplied number (2026-08-27), temporary while Stripe checkout
 * is being set up — +44 7353 307796.
 */
export const WHATSAPP_NUMBER = "447353307796";

export function isWhatsAppOrderingConfigured() {
  return WHATSAPP_NUMBER.length > 0;
}

export function buildWhatsAppOrderUrl(productTitle: string, priceLabel?: string) {
  const lines = [
    `Hi SAGA, I'd like to order:`,
    priceLabel ? `${productTitle} — ${priceLabel}` : productTitle,
  ];
  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
