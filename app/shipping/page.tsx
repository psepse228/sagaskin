import type { Metadata } from "next";
import { LegalPage, p } from "@/components/ui/LegalPage";

export const metadata: Metadata = { title: "Shipping & Delivery — SAGA" };

export default function ShippingPage() {
  return (
    <LegalPage
      title="Shipping Policy"
      lastUpdated="26 August 2026"
      intro={[
        "At SAGASKIN | Korean Skincare UK, we carefully package every order and use Royal Mail for our UK deliveries.",
      ]}
      sections={[
        {
          heading: "1. Delivery Options",
          blocks: [
            p("We currently offer Royal Mail Tracked 48 and Royal Mail Tracked 24."),
            p("Available delivery options and prices will be displayed at checkout before you complete your purchase."),
          ],
        },
        {
          heading: "2. Processing & Dispatch",
          blocks: [
            p("Orders are usually processed and dispatched within 1–2 working days."),
            p("Orders placed on weekends or UK public holidays will normally be processed on the next working day."),
            p("During busy periods, sales, promotions or product launches, processing times may be slightly longer."),
            p("Please note that Royal Mail's delivery timeframe begins after your order has been dispatched."),
          ],
        },
        {
          heading: "3. Delivery Times",
          blocks: [
            p("Royal Mail Tracked 48 — estimated delivery: 2–3 working days after dispatch."),
            p("Royal Mail Tracked 24 — estimated delivery: 1–2 working days after dispatch."),
            p("These are estimated delivery times and are not guaranteed. Tracked 24 does not mean guaranteed delivery within 24 hours, and Tracked 48 does not mean guaranteed delivery within 48 hours."),
            p("Delivery may occasionally take longer due to circumstances outside our control."),
          ],
        },
        {
          heading: "4. Tracking",
          blocks: [
            p("All orders are sent using a tracked Royal Mail service."),
            p("Once your order has been dispatched, tracking information will be provided to the email address supplied at checkout."),
            p("Please allow some time for tracking information to update after your parcel has been dispatched."),
          ],
        },
        {
          heading: "5. Delivery Address",
          blocks: [
            p("Customers are responsible for providing a complete and accurate delivery address at checkout. Please check your delivery details carefully before completing your order."),
            p("If you notice that you have entered an incorrect address, contact us immediately at hello@sagaskin.uk. We cannot guarantee that an address can be changed after an order has been processed or dispatched."),
            p("SAGA is not responsible for delivery issues caused by incorrect or incomplete information provided by the customer."),
          ],
        },
        {
          heading: "6. Delayed, Lost or Missing Parcels",
          blocks: [
            p("If your order has not arrived within the expected delivery timeframe, please contact us at hello@sagaskin.uk with your order number so that we can investigate the issue."),
            p("Where appropriate, we may contact Royal Mail or follow Royal Mail's relevant claims and investigation procedures."),
          ],
        },
        {
          heading: "7. Damaged Parcels",
          blocks: [
            p("If your parcel arrives damaged, please contact us as soon as possible at hello@sagaskin.uk with your order number and clear photographs of the parcel, packaging and product."),
            p("Please keep the original packaging and product until we advise you what to do."),
            p("Further information regarding damaged, faulty or incorrect products can be found in our Returns & Refund Policy."),
          ],
        },
        {
          heading: "8. Delivery Problems",
          blocks: [
            p("Once an order has been handed to Royal Mail, delivery is subject to Royal Mail's delivery network and services."),
            p("SAGASKIN is not responsible for delays caused by Royal Mail or circumstances outside our reasonable control. However, nothing in this policy affects your statutory consumer rights."),
          ],
        },
        {
          heading: "9. Delivery Charges",
          blocks: [
            p("Applicable delivery charges will be displayed at checkout before payment."),
            p("Any free-delivery offers will be subject to the conditions stated on the relevant promotion or at checkout."),
          ],
        },
        {
          heading: "10. UK Delivery Only",
          blocks: [
            p("We currently offer delivery within the United Kingdom only. International shipping is not currently available."),
          ],
        },
        {
          heading: "11. Contact Us",
          blocks: [
            p("For any questions regarding your delivery or order, please contact SAGASKIN | Korean Skincare UK at hello@sagaskin.uk — please include your order number in your email."),
          ],
        },
      ]}
    />
  );
}
