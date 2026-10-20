
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import "../../../style/HeroSection.css";

// Hero image
const HeroImage = "/Images/HeroImage.webp";
const HeroAlt = "Luxury Home Decor Image";

// Main heading
const headingFirst = "Transforming";
const headingSecond = "Extraordinary";
const headingThird = "Living.";

// Hero description
const MainContent = `Expert architecture design, work, and luxury full home interiors.
From custom modular kitchens and wardrobes to TV units — we bring
your vision to life.`;

export default function HeroComponent() {
  const handlePointerMove = (event) => {
    if (event.pointerType === "touch") return;

    const section = event.currentTarget;
    const rect = section.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    section.style.setProperty("--hero-pointer-x", `${x}px`);
    section.style.setProperty("--hero-pointer-y", `${y}px`);

    // Small, subtle background parallax.
    const offsetX = (x / rect.width - 0.5) * 10;
    const offsetY = (y / rect.height - 0.5) * 10;

    section.style.setProperty("--hero-parallax-x", `${offsetX}px`);
    section.style.setProperty("--hero-parallax-y", `${offsetY}px`);

    section.classList.add("hero-glow-active");
  };

  const handleSectionPointerLeave = (event) => {
    event.currentTarget.classList.remove("hero-glow-active");
    event.currentTarget.style.setProperty("--hero-parallax-x", "0px");
    event.currentTarget.style.setProperty("--hero-parallax-y", "0px");
  };

  const handleButtonPointerMove = (event) => {
    if (event.pointerType === "touch") return;

    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();

    button.style.setProperty(
      "--button-pointer-x",
      `${event.clientX - rect.left}px`
    );
    button.style.setProperty(
      "--button-pointer-y",
      `${event.clientY - rect.top}px`
    );

    button.classList.add("hero-button-glow-active");
  };

  const handleButtonPointerLeave = (event) => {
    event.currentTarget.classList.remove("hero-button-glow-active");
  };

  return (
    <section
      onPointerMove={handlePointerMove}
      onPointerLeave={handleSectionPointerLeave}
      className="hero-section group relative isolate min-h-screen w-full overflow-hidden bg-stone-950 text-white"
    >
      {/* Cinematic background image */}
      <Image
        src={HeroImage}
        alt={HeroAlt}
        fill
        priority
        sizes="100vw"
        className="hero-background-image absolute inset-0 -z-30 object-cover object-center"
      />

      {/* Dark contrast overlay */}
      <div className="hero-dark-overlay pointer-events-none absolute inset-0 -z-20 bg-black/55" />

      {/* Cursor-following ambient light */}
      <div
        aria-hidden="true"
        className="hero-cursor-glow pointer-events-none absolute inset-0 z-0"
      />

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-screen-2xl flex-col justify-center px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:px-12 lg:pb-24 lg:pt-36 2xl:px-14">

        {/* Responsive heading */}
        <div className="w-full">
          <h1 className="hero-heading flex w-full flex-col items-center text-center font-heading font-normal uppercase leading-[0.82] tracking-[-0.055em] text-[clamp(2.15rem,8.5vw,3.5rem)] sm:text-[clamp(3.5rem,7.2vw,5rem)] md:items-start md:text-left md:text-[clamp(3.5rem,7.5vw,5.5rem)] lg:text-[clamp(4.5rem,7vw,7rem)] xl:text-[clamp(5rem,6.5vw,8rem)] 2xl:text-[clamp(6rem,6.2vw,9rem)]">
            <span className="hero-title-line hero-title-line-1 block whitespace-nowrap">
              {headingFirst}
            </span>

            <span className="hero-title-line hero-title-line-2 block whitespace-nowrap italic">
              {headingSecond}
            </span>

            <span className="hero-title-line hero-title-line-3 block whitespace-nowrap">
              {headingThird}
            </span>
          </h1>
        </div>

        {/* Description and CTA */}
        <div className="mt-8 flex flex-col items-center justify-between gap-7 sm:mt-12 sm:gap-8 md:items-start lg:mt-12 lg:flex-row lg:items-end lg:gap-10 2xl:mt-16">
          <p className="hero-copy w-full max-w-xl text-center text-[15px] font-medium leading-[1.7] tracking-[0.06em] text-white/80 sm:text-base md:text-left lg:max-w-[48%] 2xl:max-w-2xl 2xl:text-lg">
            {MainContent}
          </p>

          {/* Get in touch CTA */}
          <Link
            href="/Contact"
            onPointerMove={handleButtonPointerMove}
            onPointerLeave={handleButtonPointerLeave}
            className="hero-cta group/button relative isolate flex w-fit shrink-0 items-center gap-4 overflow-hidden border-b border-white/50 px-1 py-3 text-xs font-bold tracking-[0.12em] text-white transition-colors duration-300 hover:border-white sm:text-sm lg:mb-1"
          >
            {/* CTA cursor glow */}
            <span
              aria-hidden="true"
              className="hero-button-glow pointer-events-none absolute inset-0 z-[-1]"
            />

            <span className="hero-cta-label">GET IN TOUCH</span>

            <ArrowRight
              size={20}
              strokeWidth={1.6}
              className="hero-cta-arrow transition-transform duration-300 group-hover/button:translate-x-1.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
