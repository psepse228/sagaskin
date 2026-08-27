import type { Metadata } from "next";
import { LegalPage, p, ul } from "@/components/ui/LegalPage";

export const metadata: Metadata = { title: "Terms & Conditions — SAGA" };

// Assembled from three separate client files (Terms and Conditions.txt,
// Delivery Adress.txt, and the tail end of Privacy Policy.txt) that
// together cover sections 1-6 and 10-22 -- sections 7-9 are still
// missing from what's been sent (likely Payment / Order Acceptance /
// Delivery & Dispatch, given what's numbered around them). Flagged
// below rather than invented.
export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      lastUpdated="26 August 2026"
      intro={[
        "Welcome to SAGA | Korean Skincare UK. These Terms & Conditions govern your use of the SAGA website and any purchases made through it. By accessing our website or placing an order, you agree to be bound by these Terms & Conditions.",
        "Sections 7–9 are still pending from the client — everything else below is their real text. Get in touch at hello@sagaskin.uk if you have questions not yet covered here.",
      ]}
      sections={[
        {
          heading: "1. About SAGA",
          blocks: [
            p('In these Terms & Conditions: "SAGA", "we", "us" or "our" refers to SAGA | Korean Skincare UK. "Website" refers to the SAGA website and any associated pages or services operated by us. "Customer", "you" or "your" refers to any person accessing our website or purchasing products from us. "Product" or "Products" refers to any skincare, beauty, cosmetic or other goods available for purchase through our website. "Order" refers to an order placed by you through our website.'),
            p("For questions, orders or customer support, please contact hello@sagaskin.uk"),
          ],
        },
        {
          heading: "2. Using Our Website",
          blocks: [
            p("You agree to use our website only for lawful purposes. You must not:"),
            ul([
              "Use the website for fraudulent, unlawful or abusive purposes",
              "Attempt to gain unauthorised access to our website, systems or accounts",
              "Interfere with the operation, security or functionality of the website",
              "Copy, reproduce, distribute or commercially exploit our website content without our written permission",
              "Upload or transmit harmful, malicious or unlawful material",
              "Impersonate another person or provide false information when placing an order",
            ]),
            p("We reserve the right to restrict or terminate access to our website where we reasonably believe these Terms have been breached."),
          ],
        },
        {
          heading: "3. Product Information",
          blocks: [
            p("We make reasonable efforts to ensure that product descriptions, photographs, prices, ingredients and other information displayed on our website are accurate and up to date."),
            p("However, product packaging, ingredients, formulations, colours, textures and manufacturer information may change from time to time."),
            p("Product photographs are provided for illustrative purposes. Actual packaging or appearance may differ slightly from images displayed on our website."),
            p("Where applicable, customers should always check the product packaging for the most current ingredients, directions and warnings before use."),
          ],
        },
        {
          heading: "4. Skincare & Product Disclaimer",
          blocks: [
            p("Our Products are intended for cosmetic and skincare purposes only. They are not intended to diagnose, treat or cure medical conditions."),
            p("Individual skin types and reactions vary, and we cannot guarantee that a particular Product will produce a particular result for every customer."),
            p("You are responsible for checking the ingredients of a Product before purchasing, particularly if you have known allergies, sensitivities or other concerns. We recommend performing a patch test before using a new skincare Product where appropriate."),
            p("If you experience irritation, discomfort or an adverse reaction, discontinue use immediately and seek appropriate professional advice where necessary."),
            p("Nothing in these Terms limits your statutory rights regarding Products that are faulty, unsafe or not as described."),
          ],
        },
        {
          heading: "5. Product Availability",
          blocks: [
            p("All Products are subject to availability. We reserve the right to:"),
            ul([
              "Limit the quantity of Products that may be purchased",
              "Discontinue Products",
              "Remove Products from our website",
              "Correct errors in product listings",
              "Update product information",
            ]),
            p("If a Product becomes unavailable after you place an order, we will contact you using the details provided with your order and, where appropriate, provide a refund for the unavailable Product."),
          ],
        },
        {
          heading: "6. Prices",
          blocks: [
            p("All prices displayed on our website are in British Pounds Sterling (GBP/£) unless otherwise stated."),
            p("Delivery charges are displayed separately and will be shown before you complete your purchase."),
            p("We take reasonable care to ensure that prices displayed on our website are accurate. However, genuine pricing or listing errors may occasionally occur."),
          ],
        },
        {
          heading: "Delivery Address",
          blocks: [
            p("You are responsible for providing a complete and accurate delivery address when placing your order."),
            p("We cannot be responsible for delivery problems caused by an incorrect, incomplete or outdated address supplied by you."),
            p("If a parcel is returned to us because an incorrect address was provided or delivery could not be completed due to circumstances within your control, additional postage may be required before we can resend the order."),
            p("Nothing in this section limits your statutory rights relating to delivery."),
          ],
        },
        {
          heading: "11. Damaged, Faulty or Incorrect Products",
          blocks: [
            p("If you receive a Product that is damaged in transit, faulty, incorrect, or significantly different from its description, please contact us at hello@sagaskin.uk as soon as reasonably possible."),
            p("Please include your order number, photographs of the Product, photographs of the packaging, and photographs of any visible damage to the parcel or Product."),
            p("Please do not dispose of the Product or packaging until we have advised you what to do."),
            p("Depending on the circumstances and your statutory rights, we may offer a replacement or refund."),
          ],
        },
        {
          heading: "12. Returns & Refunds",
          blocks: [
            p("Our Returns & Refund Policy forms part of these Terms & Conditions."),
            p("Due to the nature of skincare and cosmetic Products, hygiene and health protection requirements may apply to returns. Products that have been opened, used or unsealed may not be eligible for change-of-mind returns where the applicable legal exception for sealed goods applies."),
            p("Please review our Returns & Refund Policy before placing an order."),
            p("Nothing in our Returns & Refund Policy or these Terms removes or restricts statutory consumer rights that cannot legally be excluded."),
          ],
        },
        {
          heading: "13. Sale & Promotional Products",
          blocks: [
            p("Promotional offers, discount codes and sale prices may be subject to additional conditions. Unless otherwise stated:"),
            ul([
              "Discount codes cannot be exchanged for cash",
              "Discount codes cannot be transferred or sold",
              "Discount codes may have expiry dates or product exclusions",
              "Multiple discount codes may not be combined",
              "Discount codes may not apply to already discounted Products",
            ]),
            p("We reserve the right to withdraw or amend promotional offers where reasonably necessary."),
            p("Any restrictions relating to returns of sale or promotional Products are set out in our Returns & Refund Policy and remain subject to applicable consumer law."),
          ],
        },
        {
          heading: "14. Intellectual Property",
          blocks: [
            p("All content displayed on our website, including but not limited to SAGA logos and branding, brand names, product photography, original images, graphics, text, website design, product descriptions, and other original materials, is owned by or licensed to SAGA unless otherwise stated."),
            p("You may access and use the website for personal, non-commercial purposes only."),
            p("You must not reproduce, copy, modify, distribute, publish, sell or commercially exploit our content without our prior written permission."),
          ],
        },
        {
          heading: "15. Third-Party Websites & Services",
          blocks: [
            p("Our website may contain links to or integrations with third-party websites, services or payment providers. These may include payment services such as Stripe and PayPal and delivery services such as Royal Mail."),
            p("We are not responsible for the content, availability, security, policies or practices of third-party websites or services."),
            p("Your use of third-party services may be subject to their own terms and conditions and privacy policies."),
          ],
        },
        {
          heading: "16. Website Availability & Errors",
          blocks: [
            p("We aim to keep our website available and functioning correctly, but we do not guarantee that the website will always be available, uninterrupted or completely error-free."),
            p("We may temporarily suspend, restrict or modify the website for maintenance, updates, security reasons or other operational purposes."),
            p("We reserve the right to correct errors, inaccuracies or omissions on our website, including errors relating to Product descriptions, availability, prices or promotions."),
            p("We are not responsible for temporary website unavailability caused by circumstances outside our reasonable control."),
          ],
        },
        {
          heading: "17. Limitation of Liability",
          blocks: [
            p("Nothing in these Terms excludes or limits liability that cannot legally be excluded or limited under applicable law."),
            p("This includes liability for death or personal injury caused by negligence, fraud or fraudulent misrepresentation, or your statutory rights in relation to Products."),
            p("Subject to the above, we will not be responsible for losses that are not reasonably foreseeable or that arise from circumstances outside our reasonable control."),
            p("Nothing in these Terms affects your legal rights as a consumer."),
          ],
        },
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
