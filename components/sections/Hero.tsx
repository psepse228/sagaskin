import Link from "next/link";
import type { CSSProperties } from "react";

/**
 * CSS-only hero reveal: bubbles drift in from every edge and converge,
 * then the SAGA wordmark fades in — built directly in code instead of an
 * AI-generated video (Kling wasn't producing a clean logo reveal). No
 * client JS, pure CSS animation, so it's a Server Component.
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
  { top: "20%", left: "18%", size: 46, bx: -220, by: -160, delay: 0, opacity: 0.5 },
  { top: "30%", left: "78%", size: 60, bx: 240, by: -140, delay: 0.15, opacity: 0.45 },
  { top: "70%", left: "22%", size: 38, bx: -200, by: 180, delay: 0.3, opacity: 0.5 },
  { top: "75%", left: "72%", size: 70, bx: 220, by: 160, delay: 0.1, opacity: 0.4 },
  { top: "12%", left: "50%", size: 30, bx: 0, by: -220, delay: 0.4, opacity: 0.55 },
  { top: "85%", left: "48%", size: 34, bx: 20, by: 220, delay: 0.25, opacity: 0.5 },
  { top: "45%", left: "10%", size: 26, bx: -260, by: 0, delay: 0.5, opacity: 0.5 },
  { top: "50%", left: "90%", size: 44, bx: 260, by: 20, delay: 0.35, opacity: 0.45 },
  { top: "38%", left: "35%", size: 20, bx: -140, by: -120, delay: 0.6, opacity: 0.6 },
  { top: "62%", left: "62%", size: 24, bx: 150, by: 130, delay: 0.55, opacity: 0.55 },
];

const SPARKLES = [
  { top: "22%", left: "40%", delay: 1.8 },
  { top: "68%", left: "58%", delay: 2.3 },
  { top: "40%", left: "70%", delay: 2.7 },
  { top: "58%", left: "30%", delay: 2.1 },
];

export function Hero() {
  return (
    <section
      className="relative flex h-[85vh] min-h-[560px] w-full items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 50% 45%, var(--blue-2) 0%, var(--sky) 55%, var(--mist) 100%)",
      }}
    >
      {BUBBLES.map((b, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white/70 shadow-[inset_-4px_-4px_10px_rgba(74,127,165,0.25),inset_3px_3px_6px_rgba(255,255,255,0.6)]"
          style={
            {
              top: b.top,
              left: b.left,
              width: b.size,
              height: b.size,
              "--bx": `${b.bx}px`,
              "--by": `${b.by}px`,
              "--bo": b.opacity,
              animation: `bubble-converge 1.6s ease-out ${b.delay}s both, bubble-float 6s ease-in-out ${b.delay + 1.6}s infinite`,
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
            animation: `sparkle-twinkle 2.4s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}

      <div
        className="relative z-10 flex flex-col items-center text-center"
        style={{ animation: "wordmark-reveal 0.9s ease-out 1.5s both" }}
      >
        <h1 className="font-display text-6xl tracking-wide text-ivory sm:text-7xl">
          SAGA
        </h1>
        <p className="mt-2 font-sans text-xs tracking-[0.35em] text-ivory/90 uppercase">
          Korean Skincare
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
