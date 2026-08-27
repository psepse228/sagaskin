"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const navLinkClass =
  "font-sans text-[15px] tracking-wide text-navy transition-colors hover:text-blue";

/**
 * Nav dropdown (Brands / Skincare). Was CSS-only `group-hover`, which
 * never opens on touch devices — there's no hover state to trigger it.
 * Click-toggle works everywhere; kept as a click target rather than
 * hover-to-open even on desktop, so behavior is consistent across
 * devices instead of two different interaction models.
 */
export function NavDropdown({
  label,
  items,
}: {
  label: string;
  items: { key: string; href: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (!open) return;
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <li ref={ref} className="relative">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1 ${navLinkClass}`}
      >
        {label}
        <span className="text-[10px]">▾</span>
      </button>
      {open && (
        <div className="absolute left-0 z-10 min-w-[200px] rounded-lg border border-mist bg-white py-2 shadow-lg">
          {items.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2 font-sans text-sm text-ink hover:bg-mist"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}
