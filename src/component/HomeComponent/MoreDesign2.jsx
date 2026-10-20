
"use client";

import "../../../style/Solution2.css"

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";

import "swiper/css";

const solutions = [
  {
    number: "06",
    title: "Precision-engineered fittings and high-end cabinetry solutions.",
    image: "/Images/Solutions/Image1.webp",
    alt: "Modern luxury modular kitchen",
  },
  {
    number: "07",
    title: "Bespoke entertainment units designed for quiet luxury living.",
    image: "/Images/Solutions/Image2.webp",
    alt: "Elegant living room with custom entertainment unit",
  },
  {
    number: "08",
    title: "Reimagining living environments with flawless execution.",
    image: "/Images/Solutions/Image3.webp",
    alt: "Contemporary staircase and interior",
  },
  {
    number: "01",
    title: "Custom culinary spaces tailored for your modern lifestyle.",
    image: "/Images/Solutions/Image4.webp",
    alt: "Custom-designed modern home interior",
  },
  {
    number: "02",
    title: "Expert architecture design and precision craftsmanship.",
    image: "/Images/Solutions/Image1.webp",
    alt: "Contemporary architectural interior",
  },
  {
    number: "03",
    title: "Custom modular kitchens, wardrobes, and stylish TV units.",
    image: "/Images/Solutions/Image2.webp",
    alt: "Custom modular wardrobe and kitchen",
  },
  {
    number: "04",
    title: "Thoughtfully designed spaces with refined materials.",
    image: "/Images/Solutions/Image3.webp",
    alt: "Premium contemporary interior design",
  },
  {
    number: "05",
    title: "Beautiful interiors created around everyday living.",
    image: "/Images/Solutions/Image4.webp",
    alt: "Modern luxury home interior",
  },
];

const MainHeading = "Smart interior solutions for modern living";

export default function SolutionsSection2Client() {
  const swiperRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const elements = section.querySelectorAll("[data-solutions-reveal]");

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      elements.forEach((element) => {
        element.classList.add("solutions-is-visible");
      });

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const element = entry.target;
          const delay = Number(element.dataset.revealDelay || 0);

          element.style.setProperty(
            "--solutions-reveal-delay",
            `${delay * 120}ms`
          );

          element.classList.add("solutions-is-visible");

          // Reveal each element only once.
          observer.unobserve(element);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-x-hidden bg-[#f5f5f3] text-black"
    >
      <div className="mx-auto max-w-screen-2xl px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-12 lg:py-24 xl:px-18">
        <div className="flex flex-col items-start justify-between gap-10 border-b border-black/10 pb-8 sm:gap-6 sm:pb-10 md:flex-row md:items-end lg:pb-12">
          <h2
            data-solutions-reveal="left"
            className="max-w-162.5 font-heading text-4xl font-normal leading-[1.08] tracking-[-0.045em] sm:text-4xl md:text-5xl lg:text-6xl"
          >
            {MainHeading}
          </h2>

          <div
            data-solutions-reveal="right"
            data-reveal-delay="1"
            className="mb-1 flex shrink-0 items-center gap-6 sm:gap-5"
          >
            <button
              type="button"
              aria-label="Previous projects"
              onClick={() => swiperRef.current?.slidePrev()}
              className="group/arrow flex h-9 w-9 items-center justify-center text-neutral-500 transition-colors duration-300 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
            >
              <ArrowLeft
                size={20}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover/arrow:-translate-x-1"
              />
            </button>

            <button
              type="button"
              aria-label="Next projects"
              onClick={() => swiperRef.current?.slideNext()}
              className="group/arrow flex h-9 w-9 items-center justify-center text-neutral-500 transition-colors duration-300 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
            >
              <ArrowRight
                size={20}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover/arrow:translate-x-1"
              />
            </button>
          </div>
        </div>

        <div className="mt-12 sm:mt-10 lg:mt-12">
          <Swiper
            modules={[A11y]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={1}
            spaceBetween={16}
            speed={600}
            watchOverflow
            breakpoints={{
              480: { slidesPerView: 1, spaceBetween: 16 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="overflow-hidden"
          >
            {solutions.map((solution, index) => (
              <SwiperSlide key={solution.number} className="h-auto">
                <article
                  data-solutions-reveal="up"
                  data-reveal-delay={index}
                  className="group/project min-w-0"
                >
                  <div
                    data-solutions-image
                    className="relative h-70 w-full overflow-hidden bg-neutral-200 sm:h-80 lg:h-90"
                  >
                    <Image
                      src={solution.image}
                      alt={solution.alt}
                      fill
                      sizes="(max-width: 479px) 90vw, (max-width: 639px) 44vw, (max-width: 1023px) 45vw, 24vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover/project:scale-105"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover/project:bg-black/10" />
                  </div>

                  <div className="mt-3 flex items-start justify-between gap-3 sm:mt-4">
                    <span className="shrink-0 font-heading text-[14px] tracking-wide text-neutral-900 sm:text-xs">
                      /{solution.number}
                    </span>

                    <p className="max-w-32 text-right font-semibold text-[12px] leading-[1.6] text-neutral-500/80 transition-colors duration-300 group-hover/project:text-black sm:text-[11px]">
                      {solution.title}
                    </p>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
