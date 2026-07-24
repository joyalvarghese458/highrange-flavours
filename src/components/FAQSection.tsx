"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { SectionReveal } from "./SectionReveal";

const faqs = [
  {
    question: "Where do your spices come from?",
    answer:
      "Our cardamom and black pepper are grown in our own plantations in the high ranges of Idukki, Kerala. Each batch is handpicked from carefully tended plants to bring you the real aroma and character of the hills.",
  },
  {
    question: "How fresh are the spices when I receive them?",
    answer:
      "We pack in small batches so the spices reach you with their natural oils, aroma, and flavour intact. After harvest, they are naturally dried, sorted, and hygienically packed with freshness as the priority.",
  },
  {
    question: "Do you ship pan-India?",
    answer:
      "Yes, we deliver across India. Once your order is packed, it is shipped through trusted delivery partners so our Idukki-grown spices can reach homes throughout the country.",
  },
  {
    question: "What packaging do you use?",
    answer:
      "Our spices are hygienically packed in clean, food-safe packaging designed to protect them from moisture and preserve their aroma until they reach your kitchen.",
  },
  {
    question: "Do you offer bulk or wholesale orders?",
    answer:
      "Yes, we welcome bulk and wholesale enquiries for homes, retailers, restaurants, and gifting needs. You can contact us with your required quantity, and we will share availability and current pricing.",
  },
  {
    question: "What is your return/refund policy?",
    answer:
      "If your order arrives damaged, incorrect, or with a quality concern, please contact us soon after delivery with order details and photos. We will review it carefully and help with a suitable replacement or refund where applicable.",
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
