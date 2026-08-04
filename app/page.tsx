export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 bg-cream px-6 text-center text-ink">
      <p className="font-sans text-xs tracking-[0.3em] uppercase text-blue">
        Rebuild scaffold ready
      </p>
      <h1 className="font-display text-5xl font-medium text-navy">SAGA</h1>
      <p className="max-w-md font-sans text-sm text-ink/70">
        Korean skincare, rebuilt on Next.js. Homepage sections land here once
        the brand book and copy come in — see{" "}
        <code className="rounded bg-mist px-1.5 py-0.5">
          docs/client-brief/
        </code>{" "}
        for wireframes and reference assets.
      </p>
    </main>
  );
}
