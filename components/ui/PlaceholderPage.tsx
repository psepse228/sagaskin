import Link from "next/link";

/**
 * Honest "not built yet" state for routes that exist (so nav links don't
 * 404) but have no real content/data behind them yet — brand pages, skin
 * type pages, account/cart, legal pages. Swap for real content per page as
 * the Storefront API / client copy lands.
 */
export function PlaceholderPage({
  title,
  note,
  backHref = "/products",
  backLabel = "Browse all products",
}: {
  title: string;
  note: string;
  backHref?: string;
  backLabel?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20 text-center">
      <h1 className="mb-4 font-display text-4xl text-navy">{title}</h1>
      <p className="mx-auto max-w-md font-sans text-sm text-ink/60">{note}</p>
      <Link
        href={backHref}
        className="mt-8 inline-block rounded-full bg-navy px-6 py-2.5 font-sans text-sm text-ivory transition-colors hover:bg-navy/90"
      >
        {backLabel}
      </Link>
    </div>
  );
}
