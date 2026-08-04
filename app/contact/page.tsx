import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact Us — SAGA" };

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-xl px-6 py-14">
      <h1 className="mb-3 font-display text-4xl text-navy">Contact us</h1>
      <p className="mb-8 font-sans text-sm text-ink/60">
        Form submission isn&apos;t wired to an inbox/API yet — this is UI
        only for now.
      </p>
      <form className="grid gap-3">
        <input
          type="text"
          placeholder="Name"
          className="rounded-md border border-mist bg-white px-3 py-2.5 font-sans text-sm text-ink placeholder:text-ink/40 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="rounded-md border border-mist bg-white px-3 py-2.5 font-sans text-sm text-ink placeholder:text-ink/40 focus:outline-none"
        />
        <textarea
          placeholder="Message"
          rows={5}
          className="rounded-md border border-mist bg-white px-3 py-2.5 font-sans text-sm text-ink placeholder:text-ink/40 focus:outline-none"
        />
        <button
          type="submit"
          disabled
          title="Not wired up yet"
          className="w-fit cursor-not-allowed rounded-full bg-navy/40 px-6 py-2 font-sans text-xs uppercase tracking-wide text-ivory"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
