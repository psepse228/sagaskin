// Placeholder wording — swap for the client's actual brand phrases once
// copy/brand book lands (docs/client-brief/).
const ITEMS = [
  "Korean Skincare",
  "Curated in London",
  "Clean Ingredients",
  "Skin First",
  "Small-Batch Brands",
];

export function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="overflow-hidden border-y border-mist bg-navy py-3">
      <div
        className="flex w-max gap-10 whitespace-nowrap"
        style={{ animation: "marquee-scroll 24s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-sans text-xs tracking-[0.25em] text-ivory/80 uppercase"
          >
            {item} <span className="mx-4 text-ivory/40">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
