
"use client";

import { useEffect, useRef } from "react";
import "../../../style/Client.css"

const reviews = [
  {
    name: "Aanya Sharma",
    project: "Bespoke Residence, South Delhi",
    review:
      "KR Decor transformed our bare apartment into a warm, inviting sanctuary with their exquisite full home interior and work. Their attention to detail was truly exceptional.",
  },
  {
    name: "Vikram Mehta",
    project: "Modern Kitchen, Gurugram",
    review:
      "The perfect balance of aesthetics and flawless modular work. They delivered our bespoke modular kitchen and TV units ahead of schedule without compromising on the luxury finish.",
  },
  {
    name: "Priya & Rohan",
    project: "Full Home Interior, Jasola",
    review:
      "A truly boutique experience from consultation to final handover. Their architecture design and quiet luxury approach reflect in every corner of our modular wardrobe and living space.",
  },
];

export default function ClientReviews() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const elements = section.querySelectorAll("[data-review-reveal]");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => {
        element.classList.add("review-is-visible");
      });

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const element = entry.target;
          const delay = Number(element.dataset.reviewDelay || 0);

          element.style.setProperty(
            "--review-reveal-delay",
            `${delay * 140}ms`
          );

          element.classList.add("review-is-visible");

          // Reveal each element only once.
          observer.unobserve(element);
        });
      },
      {
        threshold: 0.15,
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
      <div className="mx-auto w-full max-w-screen-2xl px-5 py-18 sm:px-8 sm:py-22 md:px-10 lg:px-12 lg:py-25 xl:px-18">

        {/* Section heading */}
        <div className="pb-7 sm:pb-9 lg:pb-10">
          <h2
            data-review-reveal="left"
            className="font-heading text-[36px] font-normal leading-[1.08] tracking-[-0.055em] sm:text-[44px] md:text-[52px] lg:text-[64px]"
          >
            Client Reviews
          </h2>
        </div>

        {/* Reviews grid */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:mt-12 lg:grid-cols-3 lg:gap-10">
          {reviews.map((item, index) => (
            <article
              key={item.name}
              data-review-reveal="up"
              data-review-delay={index}
              data-review-card
              className="flex min-w-0 flex-col bg-[#f5f5f5] px-6 py-10 sm:px-8 sm:py-12 lg:px-8 lg:py-14"
            >
              {/* Quote mark */}
              <span
                data-review-quote
                aria-hidden="true"
                className="font-serif text-[56px] leading-[0.8] text-[#c8c8c8]"
              >
                “
              </span>

              {/* Review text */}
              <p className="mt-2 text-[14px] leading-[1.65] tracking-[0.01em] text-[#666666] sm:text-[16px] lg:text-[16px]">
                {item.review}
              </p>

              {/* Reviewer details */}
              <div className="mt-7 border-t border-[#00000008] pt-6 sm:mt-8 lg:mt-12 lg:pt-7">
                <h3 className="font-heading text-[18px] font-normal leading-tight tracking-[-0.02em] sm:text-[20px]">
                  {item.name}
                </h3>

                <p className="mt-2 max-w-60 text-[10px] leading-[1.6] tracking-[0.12em] text-[#858585] uppercase sm:text-sm">
                  {item.project}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
