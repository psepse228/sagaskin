/**
 * Shopify Storefront API (GraphQL) client — headless integration.
 *
 * Requires SHOPIFY_STORE_DOMAIN and SHOPIFY_STOREFRONT_ACCESS_TOKEN
 * (see .env.example and docs/shopify-setup.md for how to generate the
 * token from a custom app in the Shopify admin — no admin password needed).
 *
 * Server-side only: don't import this from a "use client" component. Fetch
 * in a Server Component / route handler and pass data down as props.
 */

const API_VERSION = "2025-01";

type StorefrontFetchOptions = {
  /** Seconds to cache the response for (Next.js ISR). Omit for no caching. */
  revalidate?: number;
};

export class ShopifyConfigError extends Error {}

function getConfig() {
  const domain = process.env.SHOPIFY_STORE_DOMAIN;
  const token = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

  if (!domain || !token) {
    throw new ShopifyConfigError(
      "Missing SHOPIFY_STORE_DOMAIN / SHOPIFY_STOREFRONT_ACCESS_TOKEN. " +
        "Copy .env.example to .env.local and fill them in — see docs/shopify-setup.md.",
    );
  }

  return { domain, token };
}

export async function storefrontFetch<T>(
  query: string,
  variables?: Record<string, unknown>,
  options?: StorefrontFetchOptions,
): Promise<T> {
  const { domain, token } = getConfig();

  const res = await fetch(`https://${domain}/api/${API_VERSION}/graphql.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": token,
    },
    body: JSON.stringify({ query, variables }),
    ...(options?.revalidate !== undefined
      ? { next: { revalidate: options.revalidate } }
      : {}),
  });

  if (!res.ok) {
    throw new Error(
      `Shopify Storefront API error: ${res.status} ${res.statusText}`,
    );
  }

  const json = await res.json();

  if (json.errors) {
    throw new Error(
      `Shopify Storefront API returned errors: ${JSON.stringify(json.errors)}`,
    );
  }

  return json.data as T;
}
