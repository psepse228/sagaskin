import Link from "next/link";

const accountLinks = [
  { href: "/account", label: "My account" },
  { href: "/account/orders", label: "Orders" },
  { href: "/cart", label: "Shopping cart" },
  { href: "/wishlist", label: "Wishlist" },
];

const infoLinks = [
  { href: "/about", label: "About us" },
  { href: "/contact", label: "Contact us" },
  { href: "/shipping", label: "Shipping & Delivery" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/faq", label: "FAQs" },
];

export function Footer() {
  return (
    <footer className="border-t border-mist bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <form className="mb-10 flex max-w-lg items-center gap-2 rounded-full border border-mist bg-white px-4 py-2.5">
          <label htmlFor="newsletter-email" className="sr-only">
            Email
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Join our newsletter — enter email…"
            className="w-full bg-transparent font-sans text-sm text-ink placeholder:text-ink/40 focus:outline-none"
          />
          <button
            type="submit"
            disabled
            title="Not wired up yet"
            className="shrink-0 cursor-not-allowed rounded-full bg-navy/40 px-4 py-1.5 font-sans text-xs uppercase tracking-wide text-ivory"
          >
            Join
          </button>
        </form>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 font-sans text-xs uppercase tracking-widest text-ink/60">
              My account
            </h3>
            <ul className="space-y-2">
              {accountLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-sans text-sm text-ink hover:text-blue">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-sans text-xs uppercase tracking-widest text-ink/60">
              Information
            </h3>
            <ul className="space-y-2">
              {infoLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-sans text-sm text-ink hover:text-blue">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-sans text-xs uppercase tracking-widest text-ink/60">
              Contact us
            </h3>
            <p className="max-w-xs font-sans text-sm text-ink/70">
              Questions? Reach out on the{" "}
              <Link href="/contact" className="text-blue hover:underline">
                contact page
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-mist pt-6 sm:flex-row sm:items-center">
          <span className="font-sans text-xs tracking-wide text-ink/60">
            Visa · Amex · PayPal
          </span>
          <span className="font-sans text-xs text-ink/50">
            © SAGA {new Date().getFullYear()}. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
