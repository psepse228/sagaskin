"use client";

import { useState } from "react";

const TO = "hello@sagaskin.uk";

/**
 * No form backend (Formspree/Web3Forms etc.) is wired up — that needs an
 * account + API key we don't have yet. Until then, this builds a
 * mailto: link from what's typed and opens it, so the message still
 * reaches hello@sagaskin.uk (via the visitor's own email client) rather
 * than a submit button that quietly does nothing.
 */
export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = `Message from ${name || "the SAGA website"}`;
    const body = `${message}\n\n—\n${name}${email ? ` (${email})` : ""}`;
    window.location.href = `mailto:${TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid gap-3">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="rounded-md border border-mist bg-white px-3 py-2.5 font-sans text-sm text-ink placeholder:text-ink/40 focus:outline-none"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="rounded-md border border-mist bg-white px-3 py-2.5 font-sans text-sm text-ink placeholder:text-ink/40 focus:outline-none"
      />
      <textarea
        placeholder="Message"
        rows={5}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        className="rounded-md border border-mist bg-white px-3 py-2.5 font-sans text-sm text-ink placeholder:text-ink/40 focus:outline-none"
      />
      <button
        type="submit"
        className="w-fit rounded-full bg-navy px-6 py-2 font-sans text-xs uppercase tracking-wide text-ivory transition-colors hover:bg-navy/90"
      >
        Send
      </button>
      <p className="font-sans text-xs text-ink/40">
        Opens your email app with this filled in, addressed to {TO}.
      </p>
    </form>
  );
}
