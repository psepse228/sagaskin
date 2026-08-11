// Placeholder wording — swap for the client's actual brand phrases once
// copy/brand book lands (docs/client-brief/).
const ITEMS = [
  "Korean Skincare",
  "Clean Ingredients",
  "Skin First",
  "Small-Batch Brands",
];

function MarqueeItems({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div
      className="flex gap-10 whitespace-nowrap"
      aria-hidden={ariaHidden}
    >
      {ITEMS.map((item, i) => (
        <span
          key={i}
          className="font-sans text-xs tracking-[0.25em] text-ivory/80 uppercase"
        >
          {item} <span className="mx-4 text-ivory/40">·</span>
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <div className="overflow-hidden border-y border-mist bg-navy py-3">
      <div
        className="flex w-max gap-10"
        style={{ animation: "marquee-scroll 24s linear infinite" }}
      >
        {/* Second copy is decorative — exists only so the CSS loop is
            seamless. Hidden from assistive tech so it isn't announced twice. */}
        <MarqueeItems />
        <MarqueeItems ariaHidden />
      </div>
    </div>
  );
}
