import Link from "next/link";
import type { CSSProperties } from "react";

/**
 * CSS-only hero reveal: bubbles drift in from every edge and converge into
 * a frosted-glass cluster, then the SAGA wordmark fades in — built directly
 * in code (no external video tool, no new photography needed). No client
 * JS, pure CSS animation, so it's a Server Component.
 */
type Bubble = {
  top: string;
  left: string;
  size: number;
  bx: number;
  by: number;
  delay: number;
  opacity: number;
};

const BUBBLES: Bubble[] = [
  { top: "18%", left: "16%", size: 52, bx: -240, by: -180, delay: 0, opacity: 0.55 },
  { top: "28%", left: "80%", size: 68, bx: 260, by: -150, delay: 0.15, opacity: 0.5 },
  { top: "72%", left: "20%", size: 40, bx: -220, by: 190, delay: 0.3, opacity: 0.55 },
  { top: "76%", left: "74%", size: 78, bx: 240, by: 170, delay: 0.1, opacity: 0.45 },
  { top: "10%", left: "48%", size: 32, bx: 10, by: -240, delay: 0.4, opacity: 0.6 },
  { top: "88%", left: "50%", size: 36, bx: 20, by: 240, delay: 0.25, opacity: 0.55 },
  { top: "44%", left: "8%", size: 28, bx: -280, by: 0, delay: 0.5, opacity: 0.55 },
  { top: "50%", left: "92%", size: 48, bx: 280, by: 20, delay: 0.35, opacity: 0.5 },
  { top: "36%", left: "34%", size: 22, bx: -150, by: -130, delay: 0.6, opacity: 0.65 },
  { top: "64%", left: "64%", size: 26, bx: 160, by: 140, delay: 0.55, opacity: 0.6 },
  { top: "58%", left: "40%", size: 16, bx: -90, by: 90, delay: 0.7, opacity: 0.6 },
  { top: "24%", left: "60%", size: 14, bx: 100, by: -100, delay: 0.75, opacity: 0.65 },
  { top: "80%", left: "36%", size: 20, bx: -60, by: 140, delay: 0.65, opacity: 0.55 },
  { top: "16%", left: "32%", size: 18, bx: -160, by: -60, delay: 0.45, opacity: 0.6 },
];

const SPARKLES = [
  { top: "20%", left: "42%", delay: 1.8 },
  { top: "66%", left: "58%", delay: 2.3 },
  { top: "38%", left: "70%", delay: 2.7 },
  { top: "60%", left: "28%", delay: 2.1 },
  { top: "48%", left: "52%", delay: 2.5 },
];

const BUBBLE_CLASS =
  "absolute rounded-full backdrop-blur-[2px] border border-white/40 " +
  "shadow-[0_8px_20px_-6px_rgba(14,30,53,0.25),inset_-3px_-3px_8px_rgba(74,127,165,0.3),inset_2px_2px_6px_rgba(255,255,255,0.8)]";

const BUBBLE_BG =
  "radial-gradient(circle at 30% 28%, rgba(255,255,255,0.95), rgba(255,255,255,0.25) 55%, rgba(122,175,200,0.12) 100%)";

export function Hero() {
  return (
    <section
      className="relative flex h-[85vh] min-h-[560px] w-full items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 50% 40%, var(--blue-2) 0%, var(--blue) 0%, var(--sky) 58%, var(--mist) 100%)",
      }}
    >
      {/* soft vignette for contrast under the wordmark */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 48%, rgba(14,30,53,0.18) 0%, transparent 45%)",
        }}
      />

      {BUBBLES.map((b, i) => (
        <span
          key={i}
          className={BUBBLE_CLASS}
          style={
            {
              top: b.top,
              left: b.left,
              width: b.size,
              height: b.size,
              background: BUBBLE_BG,
              "--bx": `${b.bx}px`,
              "--by": `${b.by}px`,
              "--bo": b.opacity,
              animation: `bubble-converge 1.7s ease-out ${b.delay}s both, bubble-float 6.5s ease-in-out ${b.delay + 1.7}s infinite`,
            } as CSSProperties
          }
        />
      ))}

      {SPARKLES.map((s, i) => (
        <span
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full bg-ivory"
          style={{
            top: s.top,
            left: s.left,
            animation: `sparkle-twinkle 2.6s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}

      <div
        className="relative z-10 flex flex-col items-center text-center"
        style={{ animation: "wordmark-reveal 0.6s ease-out 0.2s both" }}
      >
        <p className="mb-4 font-sans text-[11px] tracking-[0.4em] text-ivory/80 uppercase">
          Korean Skincare · Est. London
        </p>
        <h1 className="font-display text-6xl tracking-wide text-ivory sm:text-7xl">
          SAGA
        </h1>
        <p className="mt-3 max-w-xs font-display text-lg text-ivory/90 italic sm:text-xl">
          Every ritual, considered.
        </p>
        <Link
          href="/products"
          className="mt-8 rounded-full bg-navy px-8 py-3 font-sans text-sm tracking-wide text-ivory transition-colors hover:bg-navy/90"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
}
