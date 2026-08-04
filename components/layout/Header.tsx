import Link from "next/link";
import { BRANDS, ROUTINE_STEPS } from "@/lib/data";

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
    </svg>
  );
}

function AccountIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7" strokeLinecap="round" />
    </svg>
  );
}

function WishlistIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path
        d="M12 20s-7-4.35-9.5-8.5C.7 8 2.2 4.5 5.8 4.5c2 0 3.4 1.1 4.2 2.4.8-1.3 2.2-2.4 4.2-2.4 3.6 0 5.1 3.5 3.3 7C19 15.65 12 20 12 20z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 4h2l2.2 12.2a2 2 0 0 0 2 1.8h7.6a2 2 0 0 0 2-1.6L21 8H6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9.5" cy="20.5" r="1.2" />
      <circle cx="17.5" cy="20.5" r="1.2" />
    </svg>
  );
}

const navLinkClass =
  "font-sans text-[13px] tracking-wide text-navy transition-colors hover:text-blue";

export function Header() {
  return (
    <header className="border-b border-mist bg-cream">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="font-display text-2xl tracking-wide text-navy">
          SAGA
        </Link>

        <div className="hidden flex-1 max-w-md items-center gap-2 rounded-full border border-mist bg-white px-4 py-2 md:flex">
          <SearchIcon />
          <input
            type="search"
            placeholder="Search — coming soon"
            disabled
            aria-disabled="true"
            title="Search isn't wired up yet — needs the real product catalog"
            className="w-full cursor-not-allowed bg-transparent font-sans text-sm text-ink/50 placeholder:text-ink/40 focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-5 text-navy">
          <Link href="/account" aria-label="Account" className="hover:text-blue">
            <AccountIcon />
          </Link>
          <Link href="/wishlist" aria-label="Wishlist" className="hover:text-blue">
            <WishlistIcon />
          </Link>
          <Link href="/cart" aria-label="Cart" className="hover:text-blue">
            <CartIcon />
          </Link>
        </div>
      </div>

      <nav className="border-t border-mist">
        <ul className="mx-auto flex max-w-7xl gap-8 px-6 py-2.5">
          <li className="group relative">
            <button className={`flex items-center gap-1 ${navLinkClass}`}>
              Brands
              <span className="text-[10px]">▾</span>
            </button>
            <div className="invisible absolute left-0 z-10 min-w-[200px] rounded-lg border border-mist bg-white py-2 opacity-0 shadow-lg transition-opacity duration-150 group-hover:visible group-hover:opacity-100">
              {BRANDS.map((brand) => (
                <Link
                  key={brand.handle}
                  href={`/brands/${brand.handle}`}
                  className="block px-4 py-2 font-sans text-sm text-ink hover:bg-mist"
                >
                  {brand.label}
                </Link>
              ))}
            </div>
          </li>

          <li className="group relative">
            <button className={`flex items-center gap-1 ${navLinkClass}`}>
              Skincare
              <span className="text-[10px]">▾</span>
            </button>
            <div className="invisible absolute left-0 z-10 min-w-[220px] rounded-lg border border-mist bg-white py-2 opacity-0 shadow-lg transition-opacity duration-150 group-hover:visible group-hover:opacity-100">
              {ROUTINE_STEPS.map((s) => (
                <Link
                  key={s.step}
                  href={`/skincare/${s.step}`}
                  className="block px-4 py-2 font-sans text-sm text-ink hover:bg-mist"
                >
                  Step {s.step}. {s.label}
                </Link>
              ))}
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
