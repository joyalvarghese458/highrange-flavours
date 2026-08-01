import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  getCanonicalUrl,
} from "@/lib/seo";

type PolicySection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

type Policy = {
  title: string;
  summary: string;
  sections: PolicySection[];
};

const lastUpdated = "1 August 2026";

const policies = {
  "privacy-policy": {
    title: "Privacy Policy",
    summary:
      "This policy explains what personal information Highrange Flavours collects, why we use it, and the choices available to you.",
    sections: [
      {
        heading: "Information we collect",
        paragraphs: [
          "We collect information you choose to provide when you contact us, request a price, or place an order through WhatsApp, phone, email, or our website.",
        ],
        bullets: [
          "Contact details, such as your name, phone number, email address, and delivery address.",
          "Order details, including products, quantities, preferences, payment status, and messages exchanged with our team.",
          "Delivery and transaction information supplied by courier or payment partners, such as tracking details and payment confirmation. We do not need or ask to store your complete card, UPI PIN, or banking credentials.",
          "Basic technical information automatically sent by your browser, such as device type, IP address, browser type, and pages visited, when hosting, security, or analytics services are enabled.",
        ],
      },
      {
        heading: "How we use your information",
        bullets: [
          "To answer enquiries and confirm product availability, price, shipping charges, and payment details.",
          "To accept, pack, dispatch, deliver, and provide support for your order.",
          "To send necessary service messages, including order and delivery updates.",
          "To maintain business, tax, accounting, fraud-prevention, and customer-service records.",
          "To improve our products and website and, only where permitted, send offers you may be interested in. You may ask us to stop promotional messages at any time.",
          "To comply with law, enforce our terms, and protect customers, our business, and the public.",
        ],
      },
      {
        heading: "When we share information",
        paragraphs: [
          "We do not sell or rent your personal information. We share only what is reasonably required with service providers that help us operate, such as courier, payment, communications, hosting, analytics, accounting, and professional-advisory providers. We may also disclose information when required by law, to protect legal rights, or in connection with a business reorganisation.",
          "An order or enquiry started on WhatsApp is also subject to WhatsApp's own privacy practices. Payments and courier services are similarly governed by the relevant provider's terms and privacy notice.",
        ],
      },
      {
        heading: "Retention and security",
        paragraphs: [
          "We keep personal information only for as long as it is reasonably needed for the purposes described above, including applicable legal, tax, accounting, warranty, and dispute-resolution requirements. We use reasonable organisational and technical safeguards, but no internet transmission or storage system can be guaranteed completely secure.",
        ],
      },
      {
        heading: "Your choices and rights",
        paragraphs: [
          "Subject to applicable law, you may ask what personal information we hold about you, request correction or deletion, withdraw consent for optional processing, or raise a grievance. Withdrawing consent does not affect processing already carried out lawfully and may prevent us from completing a requested service. To make a request, contact us using the details below; we may verify your identity before acting.",
        ],
      },
      {
        heading: "Children's privacy",
        paragraphs: [
          "Our products and services are intended for adults who can enter into a contract. We do not knowingly seek personal information directly from children. A parent or guardian who believes a child has provided information should contact us so we can take appropriate action.",
        ],
      },
      {
        heading: "Updates to this policy",
        paragraphs: [
          "We may update this policy to reflect changes in our practices or applicable law. The revised version will be posted here with a new “Last updated” date. Material changes will apply prospectively unless the law requires otherwise.",
        ],
      },
    ],
  },
  "terms-and-conditions": {
    title: "Terms & Conditions",
    summary:
      "These terms govern your use of this website and orders placed with Highrange Flavours. Please read them before confirming an order.",
    sections: [
      {
        heading: "About our ordering process",
        paragraphs: [
          "The website is a product catalogue and order-enquiry service. Adding an item to the cart or sending a WhatsApp message does not by itself create a confirmed order. We will confirm availability, final price, delivery charge, payment method, and delivery details with you. A binding order is formed only when we expressly accept it and communicate that acceptance.",
          "You must be legally capable of entering into a contract and provide complete, current, and accurate contact, delivery, and billing information. Please review our message carefully before paying or confirming.",
        ],
      },
      {
        heading: "Products, prices, and availability",
        bullets: [
          "All prices are in Indian rupees unless stated otherwise. Delivery charges and any applicable taxes will be communicated before order confirmation.",
          "Prices and availability may change before confirmation. A product shown in the cart is not reserved.",
          "Product photographs are illustrative. Natural spices can vary slightly in colour, size, shape, and aroma by harvest and batch without being defective.",
          "Pack weight, ingredients, storage instructions, best-before information, and other mandatory declarations on the delivered label take precedence over general website descriptions.",
          "We may correct an obvious pricing, description, or typographical error before dispatch. If you have already paid, you may accept the corrected order or receive a refund for the affected item or order.",
        ],
      },
      {
        heading: "Payment and fraud prevention",
        paragraphs: [
          "Use only the payment instructions confirmed through our official contact details. Payment is considered received only after funds are credited and verified. We may pause or cancel an order where payment cannot be verified, information is incomplete, an item is unavailable, or fraud or misuse is reasonably suspected. Any amount collected for an order we cancel will be refunded to the original payment method or another mutually agreed method.",
        ],
      },
      {
        heading: "Delivery, cancellation, and refunds",
        paragraphs: [
          "Our Shipping Policy and Refund / Cancellation Policy form part of these terms. Delivery estimates are not guarantees, although we will make reasonable efforts to meet them. Please provide a serviceable address and remain available for delivery.",
        ],
      },
      {
        heading: "Acceptable use and intellectual property",
        paragraphs: [
          "The website, brand name, text, graphics, product photographs, design, and other original material are owned by or licensed to Highrange Flavours and are protected by applicable law. You may browse and make a personal purchase, but may not copy, scrape, republish, misrepresent, interfere with, or commercially exploit the website or its content without written permission.",
        ],
      },
      {
        heading: "Food and allergy notice",
        paragraphs: [
          "Read the product label before use and store products as directed. Product information is general and is not medical advice. If you have an allergy, intolerance, medical condition, or special dietary requirement, contact us before ordering and consult an appropriate professional where necessary. Stop using a product and seek appropriate help if you experience an adverse reaction.",
        ],
      },
      {
        heading: "Liability and consumer rights",
        paragraphs: [
          "Nothing in these terms excludes or limits a right or remedy that cannot lawfully be excluded under Indian consumer law. To the extent permitted by law, we are not responsible for indirect or consequential loss, loss caused by misuse or improper storage, third-party services outside our reasonable control, or events beyond our reasonable control. Any limitation applies only to the extent lawful and does not apply to fraud, wilful misconduct, or liability that the law does not permit us to limit.",
        ],
      },
      {
        heading: "Governing law and changes",
        paragraphs: [
          "These terms are governed by the laws of India. Courts and consumer forums with jurisdiction under applicable law may hear a dispute; these terms do not restrict your statutory right to approach a competent consumer commission. We may update these terms from time to time. The version accepted when your order is confirmed will govern that order unless a change is required by law.",
        ],
      },
    ],
  },
  "shipping-policy": {
    title: "Shipping Policy",
    summary:
      "We ship orders from Idukki, Kerala to serviceable addresses across India through third-party courier partners.",
    sections: [
      {
        heading: "Order confirmation and shipping charges",
        paragraphs: [
          "Because orders are confirmed with our team, the exact delivery charge and serviceability will be shared before you approve and pay for the order. Charges may depend on destination PIN code, parcel weight, order value, delivery speed, and courier availability. We do not currently promise international shipping unless our team agrees to it in writing before payment.",
        ],
      },
      {
        heading: "Processing and delivery estimates",
        bullets: [
          "We normally prepare confirmed, paid orders for dispatch within 2–4 business days. Sundays and public holidays are not business days.",
          "After dispatch, delivery generally takes 3–7 business days, depending on destination and courier serviceability. Remote locations may take longer.",
          "Custom, bulk, pre-order, or temporarily unavailable items may need additional time; we will communicate the expected schedule before confirmation.",
          "Courier delays caused by weather, transport disruption, strikes, government restrictions, natural events, or other circumstances beyond reasonable control may extend these estimates.",
        ],
      },
      {
        heading: "Tracking and address changes",
        paragraphs: [
          "Where tracking is available, we will share it after dispatch. Tracking can take up to 24 hours to update. Check your name, complete address, landmark, PIN code, and phone number before confirming. Contact us immediately if a correction is needed; an address generally cannot be changed after dispatch and the courier may charge for redirection or re-shipping.",
        ],
      },
      {
        heading: "Delivery attempts and returned parcels",
        paragraphs: [
          "You or an authorised person should be available to receive the parcel. A delivery recorded by the courier to the address, recipient, security desk, reception, or authorised neighbour will be treated as delivered. If a parcel is returned because the address or phone number was incorrect, delivery was refused, or reasonable delivery attempts failed, we may deduct forward and return shipping costs from any refund. Re-shipping requires payment of the new delivery charge, except where the failure was ours or the courier's.",
        ],
      },
      {
        heading: "Damage, tampering, or missing items",
        paragraphs: [
          "Inspect the outer parcel at delivery and refuse it if it is visibly opened or seriously tampered with. For damage, leakage, an incorrect item, or a missing item, contact us within 48 hours of delivery. Keep the product, label, invoice, and all packaging, and send clear photographs plus an unedited opening video showing the sealed parcel, shipping label, and issue. This evidence helps us verify the claim with the courier; it does not remove any rights you have under applicable law.",
        ],
      },
      {
        heading: "Delayed or lost parcels",
        paragraphs: [
          "If tracking has not moved for an unusual period or the parcel is past the communicated estimate, contact us and we will raise an enquiry with the courier. A replacement or refund for a lost parcel is processed after the courier confirms the loss or our investigation reasonably establishes it. We will not ask you to pay twice for an order lost in transit.",
        ],
      },
    ],
  },
  "refund-cancellation-policy": {
    title: "Refund / Cancellation Policy",
    summary:
      "We want every order to arrive fresh and correct. This policy explains when an order can be cancelled, replaced, or refunded.",
    sections: [
      {
        heading: "Cancelling or changing an order",
        paragraphs: [
          "Contact us as soon as possible by WhatsApp, phone, or email. You may cancel or change an order without charge before it has entered packing or dispatch. Once packed or handed to the courier, cancellation or changes may not be possible. If we can stop an order after costs have been incurred, actual payment, packing, or shipping charges may be deducted where lawful and disclosed to you.",
          "We may cancel an order because an item is unavailable, a price or listing contained a material error, payment could not be verified, the address is not serviceable, or the order appears fraudulent. If we cancel after receiving payment, we will refund the amount collected for the cancelled items and any related unspent delivery charge.",
        ],
      },
      {
        heading: "When we accept a return or claim",
        bullets: [
          "The item delivered is different from the item confirmed in your order.",
          "An item or quantity is missing from the parcel.",
          "The product is damaged, leaking, contaminated, expired on delivery, or otherwise defective.",
          "The parcel is lost in transit or another return or refund is required by applicable law.",
        ],
        paragraphs: [
          "Report these issues within 48 hours of delivery using our contact details below. Include your name, order details, a description of the issue, and clear photographs. An unedited opening video showing the sealed parcel and shipping label is strongly requested for damage, shortage, or wrong-item claims because it allows faster verification.",
        ],
      },
      {
        heading: "Food-safety return restrictions",
        paragraphs: [
          "Because spices and tea are food products, we cannot ordinarily accept a return for change of mind, taste preference, an opened or used pack, minor natural variation, or a product stored or handled incorrectly after delivery. This hygiene restriction does not apply when the product is wrong, damaged, unsafe, defective, or otherwise eligible for a remedy under applicable law.",
        ],
      },
      {
        heading: "How an approved claim is resolved",
        paragraphs: [
          "After reviewing the claim, we may offer an appropriate replacement, replacement of the affected quantity, or refund. We will bear reasonable return and re-delivery costs when the product is wrong, damaged, defective, or the mistake is ours. Do not send a product back without instructions from our team; unauthorised returns may be refused for food-safety reasons.",
        ],
      },
      {
        heading: "Refund timing",
        paragraphs: [
          "Approved refunds are initiated within 5–7 business days after approval or, where a return is required, after the returned item is received and inspected. Refunds are normally sent to the original payment method. Banks and payment providers may take additional time to credit the amount. Cash or alternative-method refunds will be arranged directly where an original-method refund is unavailable.",
        ],
      },
      {
        heading: "Refused and undeliverable orders",
        paragraphs: [
          "If a correctly supplied parcel is refused or returned because of an incorrect address, unreachable recipient, or failed delivery attempts, the order may be treated as a post-dispatch cancellation. Actual forward and return shipping charges may be deducted from the refundable amount. No deduction will be made where non-delivery resulted from our error or the courier's established failure.",
        ],
      },
      {
        heading: "Your statutory rights",
        paragraphs: [
          "This policy is intended to provide a fair process and does not limit any mandatory remedy available under the Consumer Protection Act, 2019, the Consumer Protection (E-Commerce) Rules, 2020, or other applicable Indian law.",
        ],
      },
    ],
  },
} satisfies Record<string, Policy>;

type PolicySlug = keyof typeof policies;

const isPolicySlug = (slug: string): slug is PolicySlug => slug in policies;

type PolicyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(policies).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PolicyPageProps): Promise<Metadata> {
  const { slug } = await params;

  if (!isPolicySlug(slug)) {
    return { title: `Policy not found | ${SITE_NAME}` };
  }

  const policy = policies[slug];
  const canonicalPath = `/policy/${slug}`;

  return {
    title: `${policy.title} | ${SITE_NAME}`,
    description: policy.summary,
    alternates: { canonical: canonicalPath },
    openGraph: {
      title: `${policy.title} | ${SITE_NAME}`,
      description: policy.summary,
      url: getCanonicalUrl(canonicalPath),
      siteName: SITE_NAME,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${policy.title} | ${SITE_NAME}`,
      description: policy.summary,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export default async function PolicyPage({ params }: PolicyPageProps) {
  const { slug } = await params;

  if (!isPolicySlug(slug)) notFound();

  const policy = policies[slug];

  return (
    <main className="min-h-screen bg-ivory px-4 pb-20 pt-28 sm:px-6 sm:pt-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="overflow-hidden rounded-3xl bg-[radial-gradient(circle_at_top_right,rgba(201,162,39,0.20),transparent_38%),linear-gradient(135deg,#17351f,#09130d)] px-6 py-10 text-ivory shadow-xl shadow-forest/10 sm:px-10 sm:py-14">
          <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-gold">
            Our policies
          </p>
          <h1 className="mt-3 max-w-4xl font-serif text-4xl font-semibold sm:text-5xl">
            {policy.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-ivory/75">
            {policy.summary}
          </p>
          <p className="mt-6 text-sm font-semibold text-ivory/55">
            Last updated: {lastUpdated}
          </p>
        </header>

        <div className="mt-8 grid items-start gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="rounded-2xl border border-forest/10 bg-white p-5 shadow-lg shadow-forest/5 lg:sticky lg:top-28">
            <h2 className="font-serif text-xl font-semibold text-forest">
              Our policies
            </h2>
            <nav className="mt-4" aria-label="Policy pages">
              <ul className="space-y-1">
                {(Object.entries(policies) as [PolicySlug, Policy][]).map(
                  ([policySlug, item]) => (
                    <li key={policySlug}>
                      <Link
                        href={`/policy/${policySlug}`}
                        aria-current={policySlug === slug ? "page" : undefined}
                        className={`block rounded-xl px-4 py-3 text-sm font-bold transition ${
                          policySlug === slug
                            ? "bg-forest text-ivory"
                            : "text-charcoal/65 hover:bg-forest/5 hover:text-forest"
                        }`}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </nav>
          </aside>

          <article className="rounded-2xl border border-forest/10 bg-white px-6 py-4 shadow-xl shadow-forest/8 sm:px-10">
            {policy.sections.map((section, index) => (
              <section
                key={section.heading}
                className="border-b border-forest/10 py-8 last:border-b-0"
              >
                <h2 className="font-serif text-2xl font-semibold text-forest sm:text-3xl">
                  <span className="mr-3 text-gold">{index + 1}.</span>
                  {section.heading}
                </h2>
                {section.paragraphs?.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-4 max-w-4xl text-[15px] leading-8 text-charcoal/72"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.bullets ? (
                  <ul className="mt-4 max-w-4xl space-y-3 pl-5 text-[15px] leading-7 text-charcoal/72 marker:text-gold">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="list-disc pl-2">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <section className="my-6 rounded-2xl bg-forest px-6 py-7 text-ivory sm:px-8">
              <h2 className="font-serif text-2xl font-semibold text-gold">
                Contact and grievances
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-ivory/75">
                For questions, privacy requests, order support, or complaints,
                contact Highrange Flavours. Include your name, phone number,
                order details, and a clear description so we can respond promptly.
              </p>
              <address className="mt-5 space-y-2 text-sm not-italic leading-7">
                <p>Kumily–Anakkara, Idukki, Kerala 685509, India</p>
                <p>
                  Phone / WhatsApp: {" "}
                  <a className="font-bold text-gold underline-offset-4 hover:underline" href="https://wa.me/916282337643">
                    +91 6282 337 643
                  </a>{" "}
                  or +91 7592 972 101
                </p>
                <p>
                  Email: {" "}
                  <a className="font-bold text-gold underline-offset-4 hover:underline" href="mailto:highrangeflavoursidukki@gmail.com">
                    highrangeflavoursidukki@gmail.com
                  </a>
                </p>
              </address>
            </section>
          </article>
        </div>
      </div>
    </main>
  );
}
