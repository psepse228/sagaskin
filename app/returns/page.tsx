import type { Metadata } from "next";
import { LegalPage, p, ul } from "@/components/ui/LegalPage";

export const metadata: Metadata = { title: "Returns & Refund Policy — SAGA" };

// Assembled from two client files (New Text Document.txt, sections 1-6,
// and Faulty,Damaged or incorrect items.txt, sections 7-13) that
// together form the complete policy.
export default function ReturnsPage() {
  return (
    <LegalPage
      title="Returns & Refund Policy"
      lastUpdated="26 August 2026"
      intro={[
        "At SAGA, we carefully inspect and securely package every order before it leaves our hands. Due to the nature of skincare and cosmetic products, we take hygiene and product safety extremely seriously.",
        "Please read this Returns & Refund Policy carefully before placing an order.",
      ]}
      sections={[
        {
          heading: "1. Change-of-Mind Returns",
          blocks: [
            p("We generally do not offer discretionary returns or exchanges."),
            p("However, where applicable under UK consumer law, you may have a statutory right to cancel a distance purchase within 14 days of receiving your order."),
            p("For skincare, cosmetics and other products that are sealed for hygiene or health protection reasons, the right to cancel may be lost once the product has been unsealed or opened."),
            p("Any return must be authorised by SAGA before the item is sent back. Unauthorised returns may not be accepted or processed."),
            p("To request a return, please contact hello@sagaskin.uk. Your email must include your full name, your order number, the product(s) you wish to return, and the reason for your return."),
            p("Please do not send anything back until you have received written instructions from our team."),
          ],
        },
        {
          heading: "2. Return Eligibility",
          blocks: [
            p("Where a return is accepted, the product must meet all of the following conditions:"),
            ul([
              "The product must be completely unused and unopened",
              "Any original hygiene, tamper-evident or protective seal must remain fully intact",
              "The product must be in its original packaging",
              "The product must not show any signs of use, testing, application or contamination",
              "The product must not be damaged, altered or tampered with",
              "All original accessories, applicators, spatulas, boxes, inserts and other components must be included",
              "The product must be in a condition that allows it to be safely resold",
            ]),
            p("For skincare and cosmetic products, opened, used or unsealed products will generally not be eligible for a change-of-mind return due to hygiene and health protection reasons."),
          ],
        },
        {
          heading: "3. Return Approval & Inspection",
          blocks: [
            p("All returns are subject to inspection after they arrive at SAGA. Receiving a return does not automatically mean that a refund will be issued."),
            p("Our team will inspect the product to determine whether it complies with this policy."),
            p("If the product has been opened, used, damaged, contaminated, tampered with, has a broken or missing hygiene seal, or otherwise fails our inspection, the return may be rejected and no refund will be issued, subject always to your statutory rights."),
            p("We may require photographic or other evidence before approving a return."),
          ],
        },
        {
          heading: "4. Products That Do Not Pass Inspection",
          blocks: [
            p("If a returned item does not meet our return requirements, SAGA reserves the right to refuse the refund."),
            p("Where a return is rejected because the item does not meet the eligibility requirements, we are not responsible for any return postage costs incurred by the customer."),
            p("We may also require the customer to arrange and pay for the item to be returned to them. If the customer does not arrange return of a rejected item within the period specified by SAGA, we may be unable to retain the item indefinitely."),
          ],
        },
        {
          heading: "5. Sale & Promotional Items",
          blocks: [
            p('Items purchased at a reduced price, sale price, clearance price or marked as "Sale", "Clearance" or "Final Sale" are not eligible for discretionary change-of-mind returns.'),
            p("This does not affect your statutory rights where an item is faulty, damaged, misdescribed or otherwise does not conform to the contract."),
            p("Where an order contains a promotional gift or free item and a return causes the order to no longer qualify for that promotion, SAGA may require the promotional item to be returned or may deduct its value from any refund where legally permitted."),
          ],
        },
        {
          heading: "6. Return Shipping",
          blocks: [
            p("Unless the item is being returned because it is faulty, damaged, incorrect or otherwise covered by your statutory rights, the customer is responsible for the cost of returning the item."),
            p("We strongly recommend using a tracked and insured delivery service and retaining your proof of postage."),
            p("SAGA cannot be held responsible for items lost or damaged while being returned to us where the customer has arranged the return."),
          ],
        },
        {
          heading: "7. Faulty, Damaged or Incorrect Items",
          blocks: [
            p("If you receive an item that is damaged in transit, faulty, incorrect, or significantly different from the product description, please contact us at hello@sagaskin.uk as soon as reasonably possible."),
            p("Please include your order number and clear photographs of the product, the product packaging, any visible damage, and the outer shipping packaging where applicable."),
            p("Do not dispose of the product or packaging until we have advised you what to do."),
            p("Depending on the circumstances and your statutory rights, we may offer a replacement, repair or refund."),
          ],
        },
        {
          heading: "8. Refunds",
          blocks: [
            p("Once your returned item has been received and inspected, we will contact you to confirm whether the return has been approved."),
            p("If approved, the refund will be issued to the original payment method, subject to applicable law. Please allow additional time for your bank or payment provider to process the refund."),
            p("We do not normally provide cash refunds or refunds to a different payment method."),
          ],
        },
        {
          heading: "9. Exchanges",
          blocks: [
            p("We do not offer direct exchanges. If you wish to purchase a different product, you may place a new order separately."),
            p("If the original item is eligible for a refund, the refund will be processed in accordance with this policy and applicable UK consumer law."),
          ],
        },
        {
          heading: "10. Order Cancellations",
          blocks: [
            p("If you wish to cancel an order before it has been dispatched, please contact us at hello@sagaskin.uk as soon as possible."),
            p("We cannot guarantee that an order can be cancelled once it has entered our processing or dispatch process."),
            p("If the order has already been dispatched, the applicable cancellation and return procedure will apply."),
          ],
        },
        {
          heading: "11. Unauthorised Returns",
          blocks: [
            p("Please do not send products to us without first contacting hello@sagaskin.uk and receiving return instructions."),
            p("Unauthorised parcels may be refused or may experience delays in processing."),
            p("SAGA is not responsible for products sent to an incorrect or unauthorised address."),
          ],
        },
        {
          heading: "12. Our Statutory Obligations",
          blocks: [
            p("Nothing in this policy is intended to exclude, restrict or limit any rights you have under applicable UK consumer protection law."),
            p("In particular, nothing in this policy affects your legal rights in relation to products that are faulty, not as described, not of satisfactory quality or not fit for their intended purpose."),
            p("Where there is a conflict between this policy and your statutory consumer rights, your statutory rights will prevail."),
          ],
        },
        {
          heading: "13. Contact Us",
          blocks: [
            p("For all return and refund enquiries, please contact SAGA | Korean Skincare UK at hello@sagaskin.uk — please include your order number in the subject line of your email so that we can assist you as quickly as possible."),
          ],
        },
      ]}
    />
  );
}
