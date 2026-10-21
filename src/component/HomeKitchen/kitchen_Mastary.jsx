"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

import "../../../style/Home_kitchen/Kitchen_Mastery.css";

const kitchens = [
  {
    image: "/Images/Services/Image1.webp",
    title: "Warmly Lit Luxury Kitchen",
    alt: "Warm luxury kitchen with wooden cabinets and golden lighting",
  },
  {
    image: "/Images/Services/Image2.webp",
    title: "Luxurious Green Marble Kitchen",
    alt: "Modern green modular kitchen with marble countertops",
  },
  {
    image: "/Images/Services/Image1.webp",
    title: "Luxurious Navy Kitchen with Marble Island",
    alt: "Navy luxury kitchen with a marble island and pendant lighting",
  },
  {
    image: "/Images/Services/Image2.webp",
    title: "Moody Black Marble Luxury Kitchen",
    alt: "Black marble kitchen with warm accent lighting",
  },
  {
    image: "/Images/Services/Image1.webp",
    title: "Sage Green Luxury Kitchen Island",
    alt: "Sage green kitchen with a contemporary island",
  },
  {
    image: "/Images/Services/Image2.webp",
    title: "Luxurious Marble Kitchen with Golden Ring Lights",
    alt: "Luxury marble kitchen with golden ring pendant lights",
  },
];

export default function ModularKitchenSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const elements = Array.from(
      section.querySelectorAll("[data-kitchen-reveal]")
    );

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const revealAll = () => {
      elements.forEach((element) => {
        element.classList.add("kitchen-is-visible");
      });
    };

    if (
      reducedMotion.matches ||
      typeof IntersectionObserver === "undefined"
    ) {
      revealAll();
      return;
    }

    const getColumnCount = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        return 3;
      }

      if (window.matchMedia("(min-width: 640px)").matches) {
        return 2;
      }

      return 1;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target;

          if (entry.isIntersecting) {
            if (element.hasAttribute("data-kitchen-card")) {
              const index = Number(
                element.dataset.kitchenIndex || 0
              );

              // Stagger cards within each visible grid row.
              const delay = (index % getColumnCount()) * 130;

              element.style.setProperty(
                "--kitchen-reveal-delay",
                `${delay}ms`
              );
            }

            element.classList.add("kitchen-is-visible");
          } else {
            // Reset the entrance for the next viewport entry.
            element.classList.remove("kitchen-is-visible");
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px",
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="modular-kitchen-section w-full bg-white text-black"
    >
      <div className="mx-auto w-full max-w-screen-2xl px-5 py-10 sm:px-8 sm:py-14 md:px-10 md:py-16 lg:px-12 lg:py-20 xl:px-18">
        {/* Section heading */}
        <div className="border-b border-black/10 pb-6 sm:pb-8">
          <h2
            data-kitchen-reveal="heading"
            className="max-w-3xl font-heading text-4xl font-normal leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            Modular Kitchen Mastery
          </h2>
        </div>

        {/* Kitchen gallery */}
        <div className="mt-8 grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 md:mt-10 md:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
          {kitchens.map((kitchen, index) => (
            <article
              key={kitchen.title}
              data-kitchen-reveal="card"
              data-kitchen-card
              data-kitchen-index={index}
              data-kitchen-direction={
                index % 3 === 0
                  ? "left"
                  : index % 3 === 1
                    ? "up"
                    : "right"
              }
              className="group min-w-0"
            >
              {/* Image */}
              <div
                data-kitchen-image
                className="relative aspect-4/3 w-full overflow-hidden bg-neutral-100"
              >
                <Image
                  src={kitchen.image}
                  alt={kitchen.alt}
                  fill
                  sizes="(max-width: 639px) 90vw, (max-width: 1023px) 43vw, 28vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
                />

                {/* Hover overlay */}
                <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
              </div>

              {/* Image title */}
              <h3
                data-kitchen-caption
                className="mt-3 font-heading text-base font-normal leading-snug sm:mt-4 sm:text-lg"
              >
                {kitchen.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}