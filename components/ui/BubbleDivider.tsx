type Bubble = { left: string; size: number; delay: number };

const BUBBLES: Bubble[] = [
  { left: "12%", size: 14, delay: 0 },
  { left: "28%", size: 8, delay: 0.6 },
  { left: "48%", size: 18, delay: 1.1 },
  { left: "66%", size: 10, delay: 0.3 },
  { left: "84%", size: 12, delay: 0.9 },
];

/**
 * Quiet section break — a few bubbles from the hero's motif drifting in a
 * thin strip. Used once between homepage sections (app/page.tsx), not
 * scattered everywhere; reuses the `bubble-float` keyframe from
 * globals.css so it reads as the same motion language as the hero.
 */
export function BubbleDivider() {
  return (
    <div className="bubble-divider relative mx-auto h-16 max-w-7xl overflow-hidden" aria-hidden="true">
      {BUBBLES.map((b, i) => (
        <span
          key={i}
          className="absolute top-1/2 rounded-full border border-white/40 backdrop-blur-[1px]"
          style={{
            left: b.left,
            width: b.size,
            height: b.size,
            marginTop: -b.size / 2,
            background:
              "radial-gradient(circle at 30% 28%, rgba(255,255,255,0.95), rgba(255,255,255,0.25) 55%, rgba(122,175,200,0.15) 100%)",
            boxShadow:
              "0 6px 14px -6px rgba(14,30,53,0.2), inset -2px -2px 5px rgba(74,127,165,0.25), inset 1px 1px 4px rgba(255,255,255,0.8)",
            animation: `bubble-float 5.5s ease-in-out ${b.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
