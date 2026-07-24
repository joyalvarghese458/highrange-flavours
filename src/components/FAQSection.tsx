"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { SectionReveal } from "./SectionReveal";

const faqs = [
  {
    question: "Where are your spices sourced from?",
    answer:
      "Our spices are carefully sourced from the high ranges of Idukki, Kerala, a region known for producing premium quality spices with exceptional aroma and flavor.",
  },
  {
    question: "Are your spices 100% natural?",
    answer:
      "Yes. Our spices are made from carefully selected ingredients without artificial colors, preservatives, or added flavors, ensuring authentic taste and quality.",
  },
  {
    question: "How should I store the spices?",
    answer:
      "Store the spices in an airtight container in a cool, dry place away from direct sunlight and moisture to preserve their freshness and aroma.",
  },
  {
    question: "Do you deliver across India?",
    answer:
      "Yes. We offer delivery across India through trusted courier partners. Shipping timelines may vary depending on your location.",
  },
  {
    question: "How long do your spices stay fresh?",
    answer:
      "When stored properly, our spices retain their freshness and flavor for the duration mentioned on the product packaging. We recommend using them within the best before period for optimal taste.",
  },
  {
    question: "Are your spice powders freshly ground?",
    answer:
      "Yes. Our spices are processed in small batches and packed carefully to retain their natural oils, aroma, and freshness before reaching our customers.",
  },
  {
    question: "Can I place bulk or wholesale orders?",
    answer:
      "Absolutely. We welcome bulk, wholesale, and business orders for retailers, restaurants, and distributors. Please contact us for pricing and availability.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach us through our contact page, phone number, WhatsApp, or email. Our team is happy to assist with product inquiries, orders, and shipping questions.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <SectionReveal className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-gold">
            Got questions
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-forest sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-5 text-base leading-8 text-charcoal/62 sm:text-lg">
            A few helpful notes about how our Idukki-grown spices are harvested,
            packed, shipped, and supported.
          </p>
        </div>

        <div className="mt-10 space-y-4 sm:mt-12">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-forest/10 bg-ivory/55 shadow-[0_16px_48px_rgba(27,59,47,0.08)] transition-all duration-300 hover:border-gold/45 hover:bg-ivory"
              >
                <button
                  type="button"
                  className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="text-base font-extrabold leading-6 text-forest sm:text-lg">
                    {faq.question}
                  </span>
                  <span className="grid size-10 shrink-0 place-items-center rounded-full border border-forest/10 bg-white text-forest shadow-sm">
                    <ChevronDown
                      size={20}
                      aria-hidden="true"
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-7 text-charcoal/66 sm:px-6 sm:pb-6 sm:text-base sm:leading-8">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </SectionReveal>
    </section>
  );
}
