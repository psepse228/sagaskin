/**
 * MOCK DATA — placeholder content so the homepage/pages can be built and
 * viewed before the real Shopify Storefront API token lands.
 *
 * Shape deliberately mirrors what lib/shopify/queries.ts returns (id,
 * handle, title, image, price) so swapping this out for a real
 * storefrontFetch() call later is a drop-in replacement, not a rewrite.
 */

export type MockProduct = {
  id: string;
  handle: string;
  title: string;
  category: "cleansers" | "toners" | "serums" | "moisturisers" | "spf";
  price: number;
  currency: string;
  image: string;
  vegan?: boolean;
};

export const PRODUCT_CATEGORIES = [
  { key: "cleansers", label: "Cleansers" },
  { key: "toners", label: "Toners" },
  { key: "serums", label: "Serums" },
  { key: "moisturisers", label: "Moisturiser" },
  { key: "spf", label: "SPF" },
] as const;

export const SKIN_TYPES = [
  { key: "dry", label: "Dry" },
  { key: "oily", label: "Oily" },
  { key: "combination", label: "Comb" },
  { key: "balanced", label: "Balanced / Normal" },
] as const;

export const ROUTINE_STEPS = [
  { step: 1, label: "Cleanser" },
  { step: 2, label: "Toner" },
  { step: 3, label: "Serum" },
  { step: 4, label: "Sunscreen" },
  { step: 5, label: "Moisturiser" },
] as const;

// A–Z is a real Shopify collection link once wired up; the rest are the
// brand names off the client's wireframe (homepage-bestsellers-brands-nav.jpg).
export const BRANDS = [
  { handle: "a-z", label: "A–Z" },
  { handle: "anua", label: "Anua" },
  { handle: "celimax", label: "Celimax" },
  { handle: "dr-althea", label: "Dr. Althea" },
  { handle: "skin1004", label: "Skin1004" },
  { handle: "haruharu-wonder", label: "Haruharu Wonder" },
] as const;

export const MOCK_PRODUCTS: MockProduct[] = [
  {
    id: "mock-1",
    handle: "cleansing-balm",
    title: "Cleansing Balm",
    category: "cleansers",
    price: 24,
    currency: "GBP",
    image: "/images/products/cleansing-balm.png",
    vegan: true,
  },
  {
    id: "mock-2",
    handle: "toner",
    title: "Hydrating Toner",
    category: "toners",
    price: 22,
    currency: "GBP",
    image: "/images/products/toner.png",
  },
  {
    id: "mock-3",
    handle: "ampoule",
    title: "Repair Ampoule",
    category: "serums",
    price: 34,
    currency: "GBP",
    image: "/images/products/ampoule.png",
  },
  {
    id: "mock-4",
    handle: "sun-serum",
    title: "Sun Serum SPF50",
    category: "spf",
    price: 26,
    currency: "GBP",
    image: "/images/products/sun-serum.png",
  },
];

export function getBestSellers(count = 3): MockProduct[] {
  return MOCK_PRODUCTS.slice(0, count);
}

export function getProductsByCategory(
  category: MockProduct["category"],
): MockProduct[] {
  return MOCK_PRODUCTS.filter((p) => p.category === category);
}

export function getProductByHandle(handle: string): MockProduct | undefined {
  return MOCK_PRODUCTS.find((p) => p.handle === handle);
}

export function getBrand(handle: string) {
  return BRANDS.find((b) => b.handle === handle);
}

export function formatPrice(amount: number, currency: string) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency,
  }).format(amount);
}
