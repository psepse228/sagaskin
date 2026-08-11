"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "saga-cookie-consent";

/**
 * Client-requested cookie banner (feedback/Screenshot_2.png: "нужно cookies
 * window создать"). No consent-management platform behind this yet — it
 * just remembers the visitor's choice in localStorage so the banner doesn't
 * reappear. Swap for a real CMP if/when analytics or ad pixels get added.
 */
export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) setVisible(true);
  }, []);

  function choose(value: "accepted" | "declined") {
    window.localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6">
      <div className="relative mx-auto flex max-w-xl flex-col gap-4 rounded-2xl border border-mist bg-cream p-6 shadow-[0_12px_32px_-8px_rgba(14,30,53,0.25)]">
        <button
          type="button"
          aria-label="Close"
          onClick={() => choose("declined")}
          className="absolute top-4 right-4 text-ink/50 hover:text-ink"
        >
          ✕
        </button>

        <div className="flex items-start gap-4">
          <span className="mt-0.5 text-2xl" aria-hidden="true">
            🍪
          </span>
          <p className="font-sans text-sm text-ink/80">
            We use cookies on our website to enhance your shopping experience.
            For specific details please see our{" "}
            <Link href="/privacy" className="font-semibold text-navy hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-5 pl-9">
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="rounded-full bg-navy px-6 py-2.5 font-sans text-sm text-ivory transition-colors hover:bg-navy/90"
          >
            Accept
          </button>
          <button
            type="button"
            onClick={() => choose("declined")}
            className="font-sans text-sm text-ink/70 hover:text-ink"
          >
            Decline
          </button>
          <Link
            href="/privacy"
            className="font-sans text-sm text-ink/60 underline underline-offset-2 hover:text-ink"
          >
            Manage Preferences
          </Link>
        </div>
      </div>
    </div>
  );
}
