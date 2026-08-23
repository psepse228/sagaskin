"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { SKIN_TYPES } from "@/lib/data";

/**
 * "Ask SAGA" — a guided concierge, not an AI chat. Deterministic
 * client-side flow (skin type -> blurb -> link to /skin-type/<type>), no
 * backend/API key. Chips are driven by the real SKIN_TYPES in lib/data.ts
 * so this can't drift out of sync with the homepage circles or nav.
 *
 * TODO: blurbs below are placeholder copy — swap once the client's brand
 * book/copy lands (docs/client-brief/), same as everywhere else on the
 * site that's waiting on real copy.
 */
const BLURBS: Record<(typeof SKIN_TYPES)[number]["key"], string> = {
  dry: "Dry skin does best with rich, barrier-repairing textures — reach for cushiony creams over anything foaming.",
  oily: "Oily skin still needs moisture, just lighter — gel textures that hydrate without adding shine.",
  combination: "Combination skin usually wants two things at once: mattifying where it's oily, hydrating where it's not.",
  balanced: "Balanced skin has the most room to experiment — the focus is maintaining what's already working.",
};

type SkinType = (typeof SKIN_TYPES)[number];

const NUDGE_STORAGE_KEY = "saga-ask-nudge-seen";

export function AskSaga() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<SkinType | null>(null);
  const [showNudge, setShowNudge] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // First-time visitors get a quiet nudge toward Ask SAGA instead of the
  // panel forcing itself open — a chat window popping open unprompted
  // reads as spammy on an e-commerce site. Shown once per browser
  // (localStorage), auto-dismisses if ignored.
  useEffect(() => {
    if (window.localStorage.getItem(NUDGE_STORAGE_KEY)) return;
    const showTimer = window.setTimeout(() => {
      setShowNudge(true);
      window.localStorage.setItem(NUDGE_STORAGE_KEY, "1");
    }, 2200);
    return () => window.clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (!showNudge) return;
    const hideTimer = window.setTimeout(() => setShowNudge(false), 9000);
    return () => window.clearTimeout(hideTimer);
  }, [showNudge]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (open) {
      panelRef.current?.querySelector<HTMLElement>("button, a")?.focus();
    }
  }, [open]);

  return (
    <div className="fixed right-6 bottom-6 z-40">
      {showNudge && !open && (
        <div
          className="ask-saga-nudge absolute right-0 bottom-[68px] flex w-[220px] items-center gap-2 rounded-2xl rounded-br-sm border border-mist bg-white px-4 py-3 shadow-[0_16px_32px_-14px_rgba(14,30,53,0.35)]"
          style={{ animation: "nudge-in 0.35s ease-out both" }}
        >
          <button
            type="button"
            onClick={() => {
              setShowNudge(false);
              setOpen(true);
            }}
            className="text-left font-sans text-sm text-ink transition-opacity hover:opacity-80"
          >
            Not sure where to start? <span className="font-medium text-blue">Ask SAGA →</span>
          </button>
          <button
            type="button"
            aria-label="Dismiss"
            onClick={() => setShowNudge(false)}
            className="ml-auto shrink-0 text-ink/40 hover:text-ink"
          >
            ✕
          </button>
        </div>
      )}

      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label="Ask SAGA — skincare concierge"
          className="absolute right-0 bottom-[68px] w-[300px] max-w-[calc(100vw-3rem)] overflow-hidden rounded-2xl border border-mist bg-white shadow-[0_20px_44px_-16px_rgba(14,30,53,0.35)]"
        >
          <div className="bg-navy px-4 py-3 text-ivory">
            <p className="font-display text-lg">Ask SAGA</p>
            <p className="font-sans text-[10px] tracking-[0.15em] text-ivory/70 uppercase">
              Skincare concierge
            </p>
          </div>

          <div className="max-h-[360px] overflow-y-auto p-4" aria-live="polite">
            <p className="mb-3 max-w-[85%] rounded-xl rounded-bl-sm bg-sky px-3 py-2 font-sans text-sm text-navy">
              Hi — tell me about your skin and I&rsquo;ll point you to a routine.
            </p>

            {!selected && (
              <div className="flex flex-wrap gap-2">
                {SKIN_TYPES.map((type) => (
                  <button
                    key={type.key}
                    type="button"
                    onClick={() => setSelected(type)}
                    className="rounded-full border border-blue px-3 py-1.5 font-sans text-xs text-blue transition-colors hover:bg-blue hover:text-ivory"
                  >
                    {type.fullLabel}
                  </button>
                ))}
              </div>
            )}

            {selected && (
              <>
                <p className="mb-3 max-w-[85%] rounded-xl rounded-bl-sm bg-sky px-3 py-2 font-sans text-sm text-navy">
                  {BLURBS[selected.key]}
                </p>
                <Link
                  href={`/skin-type/${selected.key}`}
                  className="mb-3 inline-block rounded-full bg-navy px-4 py-2 font-sans text-xs text-ivory transition-colors hover:bg-navy/90"
                >
                  See your ritual for {selected.fullLabel} skin →
                </Link>
                <div>
                  <button
                    type="button"
                    onClick={() => setSelected(null)}
                    className="font-sans text-xs text-ink/60 underline underline-offset-2 hover:text-ink"
                  >
                    Start over
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => {
          setShowNudge(false);
          setOpen((v) => !v);
        }}
        aria-label={open ? "Close Ask SAGA" : "Open Ask SAGA, skincare concierge"}
        aria-expanded={open}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-navy text-ivory shadow-[0_10px_24px_-8px_rgba(14,30,53,0.45)] transition-transform hover:scale-105"
      >
        <span
          aria-hidden="true"
          className="motion-safe:animate-[pulse-ring_2.4s_ease-out_infinite] absolute inset-[-6px] rounded-full border border-navy/50"
        />
        {open ? <CloseIcon /> : <ChatIcon />}
      </button>
    </div>
  );
}

function ChatIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 5h16v11H8l-4 4V5z" strokeLinejoin="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}
