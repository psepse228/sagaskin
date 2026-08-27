import type { Metadata } from "next";
import { ContactForm } from "@/components/ui/ContactForm";

export const metadata: Metadata = { title: "Contact Us — SAGA" };

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-xl px-6 py-14">
      <h1 className="mb-3 font-display text-4xl text-navy">Contact us</h1>
      <p className="font-sans text-sm text-ink/60">
        All inquiries to{" "}
        <a href="mailto:hello@sagaskin.uk" className="text-navy underline">
          hello@sagaskin.uk
        </a>
        — or send a message below.
      </p>
      <ContactForm />
    </div>
  );
}
