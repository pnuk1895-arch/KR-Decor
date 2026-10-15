
"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is your typical timeline for a full home interior project?",
    answer:
      "A complete bespoke full home interior project typically takes between 15 to 30 days from final design approval to handover, depending on the scale, custom requirements, and structural work involved.",
  },
  {
    question: "Do you manufacture custom furniture and wardrobes?",
    answer:
      "Yes. We create custom furniture, modular wardrobes, TV units, and kitchen solutions tailored to your space, storage needs, materials, and preferred design style.",
  },
  {
    question: "Is project management included in your services?",
    answer:
      "Yes. Our team coordinates design planning, material selection, execution, and installation to help maintain quality and consistency throughout the project.",
  },
  {
    question: "How do you ensure the quality of materials used?",
    answer:
      "We carefully select materials, fittings, finishes, and hardware based on durability, functionality, and the design requirements of each project.",
  },
  {
    question: "Can you work within a specific investment bracket?",
    answer:
      "Absolutely. We discuss your requirements and budget before recommending suitable materials, finishes, and design solutions that align with your investment range.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? -1 : index
    );
  };

  return (
    <section className="w-full bg-white text-black">
      <div className="mx-auto max-w-screen-2xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28 2xl:px-14 ">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10 lg:gap-16">

          {/* Left content */}
          <div className="md:sticky md:top-24 md:col-span-4 md:h-fit">
            <h2 className="font-heading text-4xl font-normal leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Frequently Asked Questions
            </h2>

            <p className="mt-6 max-w-md text-sm leading-6 tracking-wide text-neutral-500 sm:mt-8 sm:text-base sm:leading-7">
              Find answers to common questions about our design
              process, timelines, and execution methodology.
            </p>
          </div>

          {/* FAQ list */}
          <div className="md:col-span-8">
            <div className="border-t border-neutral-100">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                const answerId = `faq-answer-${index}`;

                return (
                  <article
                    key={faq.question}
                    className="mt-6"
                  >
                    {/* Question */}
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      className="group flex w-full items-center justify-between gap-7 py-6 text-left sm:py-7 lg:py-8"
                    >
                      <span className="max-w-xl w-full font-heading text-lg font-normal leading-snug text-neutral-800 transition-colors duration-300 group-hover:text-black sm:text-xl lg:text-2xl">
                        {faq.question}
                      </span>

                      {/* Smooth plus/minus transition */}
                      <span className="relative flex size-6 shrink-0 items-center justify-center text-neutral-500 transition-colors duration-300 group-hover:text-black">
                        <Plus
                          size={24}
                          strokeWidth={1.3}
                          className={`absolute transition-all duration-300 ease-in-out ${
                            isOpen
                              ? "rotate-90 scale-50 opacity-0"
                              : "rotate-0 scale-100 opacity-100"
                          }`}
                        />

                        <Minus
                          size={24}
                          strokeWidth={1.3}
                          className={`absolute transition-all duration-300 ease-in-out ${
                            isOpen
                              ? "rotate-0 scale-100 opacity-100"
                              : "-rotate-90 scale-50 opacity-0"
                          }`}
                        />
                      </span>
                    </button>

                    {/* Smooth expanding answer */}
                    <div
                      id={answerId}
                      aria-hidden={!isOpen}
                      className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p
                          className={`max-w-3xl pr-8 pb-7 text-sm leading-7 tracking-wide text-neutral-500 transition-transform duration-500 ease-in-out sm:pb-8 sm:text-base ${
                            isOpen
                              ? "translate-y-0"
                              : "-translate-y-2"
                          }`}
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
