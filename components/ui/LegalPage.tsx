type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export type LegalSection = {
  heading: string;
  blocks: Block[];
};

export function p(text: string): Block {
  return { type: "p", text };
}

export function ul(items: string[]): Block {
  return { type: "ul", items };
}

/**
 * Shared renderer for legal/policy pages (Privacy, Terms, Shipping, FAQ).
 * Keeps typography/spacing consistent without hand-rolling the same
 * heading/paragraph/list markup on every page.
 */
export function LegalPage({
  title,
  lastUpdated,
  intro,
  sections,
}: {
  title: string;
  lastUpdated?: string;
  intro?: string[];
  sections: LegalSection[];
}) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-14">
      <h1 className="font-display text-4xl text-navy">{title}</h1>
      {lastUpdated && (
        <p className="mt-2 font-sans text-xs tracking-wide text-ink/50">
          Last updated: {lastUpdated}
        </p>
      )}

      {intro && (
        <div className="mt-6 space-y-4">
          {intro.map((text, i) => (
            <p key={i} className="font-sans text-sm leading-relaxed text-ink/70">
              {text}
            </p>
          ))}
        </div>
      )}

      <div className="mt-8 space-y-8">
        {sections.map((section, i) => (
          <section key={i}>
            <h2 className="mb-3 font-sans text-sm font-semibold tracking-wide text-navy">
              {section.heading}
            </h2>
            <div className="space-y-3">
              {section.blocks.map((block, j) =>
                block.type === "p" ? (
                  <p key={j} className="font-sans text-sm leading-relaxed text-ink/70">
                    {block.text}
                  </p>
                ) : (
                  <ul key={j} className="list-disc space-y-1.5 pl-5 font-sans text-sm leading-relaxed text-ink/70">
                    {block.items.map((item, k) => (
                      <li key={k}>{item}</li>
                    ))}
                  </ul>
                ),
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
