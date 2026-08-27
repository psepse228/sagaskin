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
  { href: "/returns", label: "Returns & Refund Policy" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/faq", label: "FAQs" },
];

export function Footer() {
  return (
    <footer className="border-t border-mist bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <form className="mb-12 flex max-w-lg items-center gap-2 rounded-full border border-mist bg-white px-5 py-3.5">
          <label htmlFor="newsletter-email" className="sr-only">
            Email
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Join our newsletter — enter email…"
            className="w-full bg-transparent font-sans text-base text-ink placeholder:text-ink/40 focus:outline-none"
          />
          <button
            type="submit"
            disabled
            title="Not wired up yet"
            className="shrink-0 cursor-not-allowed rounded-full bg-navy/40 px-5 py-2 font-sans text-xs font-bold uppercase tracking-wide text-ivory"
          >
            Join
          </button>
        </form>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 font-sans text-base font-bold uppercase tracking-widest text-ink/70">
              My account
            </h3>
            <ul className="space-y-2.5">
              {accountLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-sans text-base font-medium text-ink hover:text-blue">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-base font-bold uppercase tracking-widest text-ink/70">
              Information
            </h3>
            <ul className="space-y-2.5">
              {infoLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-sans text-base font-medium text-ink hover:text-blue">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-base font-bold uppercase tracking-widest text-ink/70">
              Contact us
            </h3>
            <p className="max-w-xs font-sans text-base font-medium text-ink/70">
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

          <div className="flex items-center gap-4">
            <span className="font-sans text-xs text-ink/50">
              © SAGA {new Date().getFullYear()}. All rights reserved.
            </span>

            {/* Maker's mark — a quiet nod, not a badge. Bubble cluster echoes
                the hero motif; the caption only shows up if you look. */}
            <div className="group flex cursor-default items-center gap-2">
              <span className="relative block h-3.5 w-3.5" aria-hidden="true">
                <span
                  className="absolute top-0 left-0 h-2.5 w-2.5 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 28%, #fff, rgba(122,175,200,0.9) 75%)",
                  }}
                />
                <span
                  className="absolute right-0 bottom-0 h-1.5 w-1.5 rounded-full transition-transform duration-300 motion-safe:group-hover:[animation:bubble-float_2.2s_ease-in-out_0.1s_infinite]"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 28%, #fff, rgba(122,175,200,0.9) 75%)",
                  }}
                />
              </span>
              <span className="font-display text-xs text-ink/0 italic transition-colors duration-300 group-hover:text-ink/50">
                Crafted by Solura
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
