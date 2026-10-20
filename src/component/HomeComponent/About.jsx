
"use client";

import "../../../style/About.css"
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const MainHeading = "Our expertise in design and precision craft";

const MainContent = `Specializing in modular work, full home interiors, modular kitchens,
and modular wardrobes. We honor proportion and organic materials
to shape spaces that feel calm, natural, and seamlessly beautiful.`;

const Image1 = "/Images/About/AboutImage1.webp";
const Image2 = "/Images/About/AboutImage2.webp";

export default function AboutSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const elements = section.querySelectorAll("[data-reveal]");

    // Respect the user's reduced-motion preference.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => {
        element.classList.add("is-visible");
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
            "--reveal-delay",
            `${delay * 180}ms`
          );

          element.classList.add("is-visible");

          // Animate once instead of triggering on every scroll.
          observer.unobserve(element);
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate w-full overflow-hidden bg-white text-black"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-screen-2xl grid-cols-1 gap-12 px-5 py-16 sm:px-8 md:px-10 sm:py-20 md:gap-16 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-12 lg:py-24 xl:px-18">

        {/* Text content */}
        <div
          data-reveal="left"
          className="flex w-full flex-col"
        >
          <h2 className="about-heading max-w-2xl font-heading text-4xl font-normal leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl">
            {MainHeading}
          </h2>

          <div className="mt-5 h-px w-full bg-black/10 sm:mt-6 lg:mt-7" />

          <p className="mt-7 max-w-xl text-sm font-normal leading-6 tracking-wide text-neutral-600 sm:mt-9 sm:text-base sm:leading-7 lg:mt-9">
            {MainContent}
          </p>

          <Link
            href="/about"
            data-about-link
            className="mt-8 flex w-fit items-center gap-4 border-b border-black/25 pb-3 text-xs font-semibold tracking-widest sm:mt-10 sm:text-sm lg:mt-12"
          >
            <span>MORE ABOUT US</span>

            <ArrowRight
              size={20}
              strokeWidth={1.6}
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* Staggered image gallery */}
        <div className="grid grid-cols-2 items-stretch gap-3 sm:gap-5 lg:grid-cols-11 lg:gap-4 xl:gap-5">

          {/* Smaller image */}
          <div
            data-reveal="up"
            data-reveal-delay="1"
            className="relative col-span-1 flex h-full items-end lg:col-span-5"
          >
            <div
              data-hover-frame
              className="relative h-45 aspect-square w-full self-end overflow-hidden md:h-74"
            >
              <Image
                src={Image1}
                alt="Elegant modern living room interior"
                fill
                sizes="(max-width: 639px) 45vw, (max-width: 1023px) 42vw, 28vw"
                className="about-image object-cover"
              />
            </div>
          </div>

          {/* Larger image */}
          <div
            data-reveal="right"
            data-reveal-delay="2"
            data-hover-frame
            className="relative h-70 col-span-1 aspect-2/3 w-full overflow-hidden lg:col-span-6 md:h-130"
          >
            <Image
              src={Image2}
              alt="Luxury living room with contemporary interior design"
              fill
              sizes="(max-width: 639px) 45vw, (max-width: 1023px) 42vw, 32vw"
              className="about-image object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
