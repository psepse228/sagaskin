import type { Metadata } from "next";
import { LegalPage, p, ul } from "@/components/ui/LegalPage";

export const metadata: Metadata = { title: "Privacy Policy — SAGA" };

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="26 August 2026"
      intro={[
        "At SAGASKIN, we respect your privacy and are committed to protecting your personal information.",
        "This Privacy Policy explains how SAGASKIN collects, uses and protects personal information when you visit our website, purchase our products, contact us, create an account, or otherwise interact with our services.",
      ]}
      sections={[
        {
          heading: "1. Who We Are",
          blocks: [
            p("This website is operated by SAGASKIN."),
            p("Business name: SAGASKIN — Email: hello@sagaskin.uk — Website: https://sagaskin.uk"),
            p("For the purposes of applicable UK data protection legislation, SAGASKIN is responsible for the personal information processed through our website."),
            p("If you have any questions about this Privacy Policy or how we handle your information, please contact us at hello@sagaskin.uk"),
          ],
        },
        {
          heading: "2. Information We Collect",
          blocks: [
            p("We may collect personal information that you provide to us when you:"),
            ul([
              "Create an account",
              "Place an order",
              "Contact us",
              "Subscribe to marketing communications",
              "Submit a product review",
              "Participate in a promotion",
              "Use our website",
            ]),
            p("This information may include:"),
            ul([
              "Name",
              "Email address",
              "Telephone number",
              "Billing address",
              "Delivery address",
              "Order information",
              "Products purchased",
              "Account information",
              "Communication with our customer service team",
              "Marketing preferences",
              "Reviews or other information you voluntarily provide",
            ]),
          ],
        },
        {
          heading: "3. Payment Information",
          blocks: [
            p("When you purchase products from SAGASKIN, your payment may be processed by a third-party payment provider."),
            p("We do not normally have access to or store your full payment card details."),
            p("Payment providers may process payment information in accordance with their own privacy policies and terms."),
          ],
        },
        {
          heading: "4. Information Collected Automatically",
          blocks: [
            p("When you visit our website, certain information may automatically be collected, such as:"),
            ul([
              "IP address",
              "Browser type",
              "Device type",
              "Operating system",
              "Pages visited",
              "Products viewed",
              "Date and time of your visit",
              "Referring website",
              "Website usage information",
            ]),
            p("This information may be collected using cookies and similar technologies."),
          ],
        },
        {
          heading: "5. How We Use Your Information",
          blocks: [
            p("SAGASKIN may use your personal information to:"),
            ul([
              "Process and fulfil your orders",
              "Arrange delivery",
              "Process payments",
              "Send order confirmations",
              "Provide customer support",
              "Handle returns and refunds",
              "Manage customer accounts",
              "Respond to enquiries",
              "Improve our website",
              "Improve our products and services",
              "Prevent fraud and abuse",
              "Maintain website security",
              "Comply with legal obligations",
              "Send marketing communications where permitted by law",
            ]),
          ],
        },
        {
          heading: "6. Marketing Communications",
          blocks: [
            p("If you choose to subscribe to marketing communications from SAGASKIN, we may send you information about new products, Korean skincare, special offers, discounts, promotions, and news and updates."),
            p("You can unsubscribe from marketing communications at any time by using the unsubscribe link included in our emails or by contacting hello@sagaskin.uk."),
            p("You will still receive important communications relating to orders you have placed, where necessary."),
          ],
        },
        {
          heading: "7. Legal Basis for Processing",
          blocks: [
            p("Where applicable under UK data protection law, SAGASKIN may process your personal information on the following legal bases:"),
            ul([
              "Contract — processing is necessary to fulfil an order or provide a service you have requested.",
              "Legal obligation — processing is necessary for us to comply with legal, accounting, tax or regulatory requirements.",
              "Legitimate interests — processing is necessary for legitimate business purposes, provided those interests do not override your rights.",
              "Consent — where required, we may ask for your consent before processing your information for specific purposes.",
            ]),
            p("Where processing is based on consent, you can withdraw your consent at any time."),
          ],
        },
        {
          heading: "8. Sharing Your Information",
          blocks: [
            p("SAGASKIN does not sell your personal information."),
            p("We may share information with trusted service providers where necessary to operate our business and provide our services. Depending on the services we use, these may include:"),
            ul([
              "E-commerce platform providers",
              "Payment providers",
              "Delivery and courier companies",
              "Warehouse and fulfilment providers",
              "Email service providers",
              "Customer service providers",
              "Website analytics providers",
              "Fraud prevention providers",
              "IT and technical service providers",
              "Professional advisers",
              "Government authorities or law enforcement where legally required",
            ]),
            p("We only share information where there is a legitimate reason to do so."),
          ],
        },
        {
          heading: "9. Cookies",
          blocks: [
            p("Our website may use cookies and similar technologies. Cookies may be used to:"),
            ul([
              "Keep products in your shopping basket",
              "Enable essential website functions",
              "Remember preferences",
              "Understand how visitors use our website",
              "Improve website performance",
              "Measure marketing activity",
              "Provide relevant advertising where applicable",
            ]),
            p("Some cookies may be essential for the website to operate. Where required by law, we will request your consent before using non-essential cookies."),
          ],
        },
        {
          heading: "10. Third-Party Websites",
          blocks: [
            p("Our website may contain links to third-party websites or services. SAGASKIN is not responsible for the privacy practices of websites that we do not operate."),
            p("We recommend reviewing the privacy policy of any third-party website before providing personal information."),
          ],
        },
        {
          heading: "11. Data Security",
          blocks: [
            p("SAGASKIN takes reasonable technical and organisational measures to protect personal information against unauthorised access, loss, misuse, alteration or disclosure."),
            p("However, no method of transmitting or storing information online can be guaranteed to be completely secure."),
          ],
        },
        {
          heading: "12. How Long We Keep Your Information",
          blocks: [
            p("We keep personal information only for as long as reasonably necessary for the purposes for which it was collected."),
            p("We may retain information for longer where necessary to:"),
            ul([
              "Comply with legal or accounting requirements",
              "Resolve disputes",
              "Prevent fraud",
              "Enforce agreements",
              "Maintain appropriate business records",
            ]),
            p("When information is no longer required, we will take reasonable steps to delete or anonymise it."),
          ],
        },
        {
          heading: "13. International Data Transfers",
          blocks: [
            p("Some service providers used by SAGASKIN may process personal information outside the United Kingdom."),
            p("Where applicable, we will take appropriate steps to ensure that international transfers comply with applicable data protection laws and that appropriate safeguards are in place."),
          ],
        },
        {
          heading: "14. Your Rights",
          blocks: [
            p("Depending on the circumstances, you may have rights under UK data protection law, including:"),
            ul([
              "The right to access your personal information",
              "The right to request correction of inaccurate information",
              "The right to request deletion of your information",
              "The right to request restriction of processing",
              "The right to object to certain processing",
              "The right to withdraw consent",
              "The right to data portability in certain circumstances",
              "The right to object to direct marketing",
            ]),
            p("To exercise your rights, contact hello@sagaskin.uk. We may need to verify your identity before responding to certain requests."),
          ],
        },
        {
          heading: "15. Children's Privacy",
          blocks: [
            p("Our website is not intended to knowingly collect personal information from children."),
            p("If you believe that a child has provided personal information to SAGASKIN, please contact us at hello@sagaskin.uk"),
          ],
        },
        {
          heading: "16. Changes to This Privacy Policy",
          blocks: [
            p("We may update this Privacy Policy from time to time to reflect changes to our business, website, services or legal requirements."),
            p('When we make changes, we will update the "Last updated" date at the top of this policy.'),
          ],
        },
        {
          heading: "17. Contact Us",
          blocks: [
            p("If you have any questions about this Privacy Policy or how SAGASKIN handles personal information, please contact:"),
            p("SAGASKIN — Email: hello@sagaskin.uk — Website: https://sagaskin.uk"),
            p("You may also have the right to complain to the UK's Information Commissioner's Office (ICO) if you believe your personal information has been handled unlawfully. We encourage you to contact SAGASKIN first so that we can try to resolve your concern."),
          ],
        },
      ]}
    />
  );
}
