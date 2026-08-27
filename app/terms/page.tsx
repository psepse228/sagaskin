import type { Metadata } from "next";
import { LegalPage, p, ul } from "@/components/ui/LegalPage";

export const metadata: Metadata = { title: "Terms & Conditions — SAGA" };

// The client's Terms & Conditions file only contained sections 18–22 (the
// tail end) — sections 1–17 are missing from what was sent. Showing what's
// real rather than inventing the missing sections; flagged below and in
// CLAUDE.md. Swap this whole page for the complete document once it lands.
export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      lastUpdated="26 August 2026"
      intro={[
        "Sections 1–17 of these Terms & Conditions are still pending from the client — what follows (sections 18–22) is the real text they've sent so far. Get in touch at hello@sagaskin.uk if you have questions not yet covered here.",
      ]}
      sections={[
        {
          heading: "18. Events Outside Our Control",
          blocks: [
            p("We will not be responsible for delays or failures caused by circumstances outside our reasonable control. These may include:"),
            ul([
              "Postal or courier disruptions",
              "Strikes",
              "Severe weather",
              "Natural disasters",
              "Government restrictions",
              "Network or system failures",
              "Cybersecurity incidents",
              "Power failures",
              "Public emergencies",
              "Other circumstances beyond our reasonable control",
            ]),
            p("Where reasonably possible, we will notify customers of significant delays affecting their order."),
          ],
        },
        {
          heading: "19. Privacy",
          blocks: [
            p("Your personal information is handled in accordance with our Privacy Policy."),
            p("By placing an order, you acknowledge that we need to process certain personal information to:"),
            ul([
              "Process your payment",
              "Fulfil and deliver your order",
              "Provide customer support",
              "Communicate with you about your order",
              "Meet our legal and regulatory obligations",
            ]),
            p("Please refer to our Privacy Policy for further information about how we collect, use and protect personal information."),
          ],
        },
        {
          heading: "20. Changes to These Terms",
          blocks: [
            p("We may update these Terms & Conditions from time to time."),
            p('The latest version will be published on our website with the relevant "Last updated" date.'),
            p("Changes will not affect an order that you have already placed where doing so would be unlawful or unfair."),
          ],
        },
        {
          heading: "21. Governing Law",
          blocks: [
            p("These Terms & Conditions are governed by the laws of England and Wales, unless applicable consumer law requires otherwise."),
            p("Any disputes will be subject to the jurisdiction of the courts of England and Wales, subject to any mandatory rights you may have under applicable consumer protection law."),
          ],
        },
        {
          heading: "22. Contact Us",
          blocks: [
            p("If you have any questions regarding these Terms & Conditions, your order or our products, please contact us:"),
            p("SAGA | Korean Skincare UK — Email: hello@sagaskin.uk"),
            p("We aim to respond to customer enquiries as soon as reasonably possible."),
          ],
        },
      ]}
    />
  );
}
