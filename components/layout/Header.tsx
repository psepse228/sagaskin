import Link from "next/link";
import { BRANDS, ROUTINE_STEPS } from "@/lib/data";
import { NavDropdown } from "@/components/layout/NavDropdown";

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
    </svg>
  );
}

function AccountIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7" strokeLinecap="round" />
    </svg>
  );
}

function WishlistIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path
        d="M4.318 6.318a4.5 4.5 0 0 1 6.364 0L12 7.636l1.318-1.318a4.5 4.5 0 1 1 6.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 0 1 0-6.364z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CartIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 4h2l2.2 12.2a2 2 0 0 0 2 1.8h7.6a2 2 0 0 0 2-1.6L21 8H6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9.5" cy="20.5" r="1.2" />
      <circle cx="17.5" cy="20.5" r="1.2" />
    </svg>
  );
}

export function Header() {
  return (
    <header className="border-b border-mist bg-cream">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5">
        <Link href="/" className="font-display text-3xl tracking-wide text-navy sm:text-4xl">
          SAGASKIN
        </Link>

        <div className="hidden flex-1 max-w-md items-center gap-2 rounded-full border border-mist bg-white px-4 py-2.5 md:flex">
          <SearchIcon />
          <input
            type="search"
            placeholder="Search"
            disabled
            aria-disabled="true"
            title="Search coming soon"
            className="w-full cursor-not-allowed bg-transparent font-sans text-sm text-ink/50 placeholder:text-ink/40 focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-6 text-navy">
          <Link href="/account" aria-label="Account" className="flex hover:text-blue">
            <AccountIcon size={22} />
          </Link>
          <Link href="/wishlist" aria-label="Wishlist" className="flex hover:text-blue">
            <WishlistIcon size={22} />
          </Link>
          <Link href="/cart" aria-label="Cart" className="flex hover:text-blue">
            <CartIcon size={22} />
          </Link>
        </div>
      </div>

      <nav className="border-t border-mist">
        <ul className="mx-auto flex max-w-7xl gap-8 px-6 py-3">
          <NavDropdown
            label="Brands"
            items={BRANDS.map((b) => ({ key: b.handle, href: `/brands/${b.handle}`, label: b.label }))}
          />
          <NavDropdown
            label="Skincare"
            items={ROUTINE_STEPS.map((s) => ({
              key: String(s.step),
              href: `/skincare/${s.step}`,
              label: `Step ${s.step}. ${s.label}`,
            }))}
          />
        </ul>
      </nav>
    </header>
  );
}
