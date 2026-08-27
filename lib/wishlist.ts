"use client";

import { useCallback, useEffect, useState } from "react";

/**
 * Real (if simple) wishlist — persisted to localStorage, keyed by product
 * handle. No account/backend yet (matches everything else on the site
 * that's honest about not being wired to real infra), but unlike the old
 * version this one actually remembers what you saved and shows it on
 * /wishlist. A custom event keeps every ProductCard + the wishlist page
 * in sync within the same tab; the native `storage` event covers other
 * tabs.
 */
const STORAGE_KEY = "saga-wishlist";
const CHANGE_EVENT = "saga-wishlist-change";

function readWishlist(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeWishlist(handles: string[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(handles));
    window.dispatchEvent(new Event(CHANGE_EVENT));
  } catch {
    // localStorage unavailable (private mode, blocked, etc.) — fail quiet
  }
}

export function useWishlist() {
  const [handles, setHandles] = useState<string[]>([]);

  useEffect(() => {
    setHandles(readWishlist());
    function onChange() {
      setHandles(readWishlist());
    }
    window.addEventListener(CHANGE_EVENT, onChange);
    window.addEventListener("storage", onChange);
    return () => {
      window.removeEventListener(CHANGE_EVENT, onChange);
      window.removeEventListener("storage", onChange);
    };
  }, []);

  const isWishlisted = useCallback((handle: string) => handles.includes(handle), [handles]);

  const toggle = useCallback((handle: string) => {
    const current = readWishlist();
    const next = current.includes(handle)
      ? current.filter((h) => h !== handle)
      : [...current, handle];
    writeWishlist(next);
    setHandles(next);
  }, []);

  return { handles, isWishlisted, toggle };
}
