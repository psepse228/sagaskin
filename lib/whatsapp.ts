/**
 * WhatsApp ordering — stopgap commerce path while the Shopify Storefront
 * API isn't wired up yet (blocked on a broken Shopify account, see
 * docs/shopify-setup.md). Customers message the business directly to
 * order instead of using a cart/checkout.
 *
 * TODO: client hasn't sent the business WhatsApp number yet. Fill in
 * once received — international format, digits only, e.g. "447123456789"
 * for a UK number (no +, no spaces/dashes).
 */
export const WHATSAPP_NUMBER = "";

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
