
"use client";

import { useEffect, useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

import "../../../style/features.css";

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

const MainHeading = "Frequently Asked Questions";

const MainContent =
  "Find answers to common questions about our design process, timelines, and execution methodology.";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(-1);
  const sectionRef = useRef(null);

  const toggleFAQ = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const elements = section.querySelectorAll("[data-faq-reveal]");

    const showAll = () => {
      elements.forEach((element) => {
        element.classList.add("faq-is-visible");
      });
    };

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      typeof IntersectionObserver === "undefined"
    ) {
      showAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const element = entry.target;
          const delay = Number(element.dataset.faqDelay || 0);

          element.style.setProperty(
            "--faq-reveal-delay",
            `${delay * 100}ms`
          );

          element.classList.add("faq-is-visible");
          observer.unobserve(element);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white text-black"
    >
      <div className="mx-auto w-full max-w-screen-2xl px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-12 lg:py-24 xl:px-18">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-5">

          {/* Left: FAQ heading and description */}
          <div
            data-faq-reveal="left"
            className="col-span-2 min-w-0 md:translate-y-1/2 md:self-start"
          >
            <h2 className="font-heading text-4xl font-normal leading-[1.12] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              {MainHeading.split(" ")[0]}
              <span className="md:block">
                {MainHeading.split(" ").slice(1).join(" ")}
              </span>
            </h2>

            <p className="mt-5 max-w-md text-sm font-normal leading-6 tracking-wide text-neutral-500 sm:mt-6 sm:text-base sm:leading-7">
              {MainContent}
            </p>
          </div>

          {/* Right: FAQ accordion */}
          <div className="col-span-3 min-w-0">
            <div className="border-t border-neutral-200">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                const answerId = `faq-answer-${index}`;

                return (
                  <article
                    key={faq.question}
                    data-faq-reveal="up"
                    data-faq-delay={index}
                    data-faq-item
                    data-faq-open={isOpen ? "true" : "false"}
                    className="border-b border-neutral-100"
                  >
                    <button
                      type="button"
                      data-faq-trigger
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      className="group flex w-full items-start justify-between gap-4 py-5 text-left sm:items-center sm:gap-6 sm:py-6 lg:py-7"
                    >
                      <span className="min-w-0 flex-1 font-heading text-base font-normal leading-[1.45] text-neutral-800 transition-colors duration-300 group-hover:text-black sm:text-lg lg:text-2xl">
                        {faq.question}
                      </span>

                      <span className="relative mt-0.5 flex size-6 shrink-0 items-center justify-center text-neutral-500 transition-colors duration-300 group-hover:text-black sm:mt-0">
                        <Plus
                          aria-hidden="true"
                          size={22}
                          strokeWidth={1.3}
                          className={`absolute transition-all duration-300 ease-in-out ${isOpen
                              ? "rotate-90 scale-50 opacity-0"
                              : "rotate-0 scale-100 opacity-100"
                            }`}
                        />

                        <Minus
                          aria-hidden="true"
                          size={22}
                          strokeWidth={1.3}
                          className={`absolute transition-all duration-300 ease-in-out ${isOpen
                              ? "rotate-0 scale-100 opacity-100"
                              : "-rotate-90 scale-50 opacity-0"
                            }`}
                        />
                      </span>
                    </button>

                    {/* Animated answer panel */}
                    <div
                      id={answerId}
                      aria-hidden={!isOpen}
                      className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                        }`}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <p
                          data-faq-answer
                          className={`max-w-3xl pb-6 pr-7 text-sm leading-7 tracking-[0.01em] text-neutral-500 transition-transform duration-500 ease-in-out sm:pb-7 sm:text-base ${isOpen
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
