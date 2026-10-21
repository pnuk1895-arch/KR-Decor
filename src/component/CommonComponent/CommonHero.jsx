
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

import "../../../style/CommonHero.css";

export default function CommonHero({ detail }) {
  const sectionRef = useRef(null);

  // Reveal the hero once when it enters the viewport.
  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const reveal = () => {
      section.classList.add("common-hero-is-visible");
    };

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      typeof IntersectionObserver === "undefined"
    ) {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;

        reveal();
        observer.disconnect();
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -20px 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Update CSS variables directly instead of re-rendering React
  // for every mouse movement.
  const handlePointerMove = (event) => {
    if (event.pointerType === "touch") return;

    const section = sectionRef.current;

    if (!section) return;

    const rect = section.getBoundingClientRect();

    if (!rect.width || !rect.height) return;

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    section.style.setProperty("--hero-pointer-x", `${x}px`);
    section.style.setProperty("--hero-pointer-y", `${y}px`);

    // Restrained movement creates a subtle sense of depth.
    const offsetX = (x / rect.width - 0.5) * 8;
    const offsetY = (y / rect.height - 0.5) * 8;

    section.style.setProperty("--hero-parallax-x", `${offsetX}px`);
    section.style.setProperty("--hero-parallax-y", `${offsetY}px`);

    section.classList.add("hero-pointer-active");
  };

  const handlePointerLeave = () => {
    const section = sectionRef.current;

    if (!section) return;

    section.classList.remove("hero-pointer-active");
    section.style.setProperty("--hero-parallax-x", "0px");
    section.style.setProperty("--hero-parallax-y", "0px");
  };

  return (
    <section
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="common-hero-section relative isolate flex min-h-85 w-full items-end overflow-hidden bg-neutral-900 text-white sm:min-h-95 md:min-h-110"
    >
      {/* Cinematic background image */}
      <Image
        src={detail.image}
        alt={detail.imageAlt}
        fill
        priority
        sizes="100vw"
        className="common-hero-background -z-30 object-cover object-center"
      />

      {/* Existing dark gradient */}
      <div className="common-hero-overlay absolute inset-0 -z-10 bg-linear-to-t from-black/80 via-black/40 to-black/10" />

      {/* Soft, cursor-following spotlight */}
      <div
        aria-hidden="true"
        className="common-hero-glow pointer-events-none absolute inset-0 z-0"
      />

      {/* Moving diagonal reflection */}
      <div
        aria-hidden="true"
        className="common-hero-shine pointer-events-none absolute inset-0 z-1"
      />

      {/* Additional cinematic edge shading */}
      <div
        aria-hidden="true"
        className="common-hero-vignette pointer-events-none absolute inset-0 z-2"
      />

      {/* Original content layout */}
      <div className="relative z-10 mx-auto w-full max-w-screen-2xl px-5 pb-12 pt-28 sm:px-8 sm:pb-16 md:px-10 lg:px-12 lg:pb-20 xl:px-18">
        <div className="max-w-3xl">
          <h1
            data-common-reveal="title"
            className="font-heading text-5xl font-medium leading-tight tracking-tight md:text-6xl lg:text-7xl xl:text-7xl"
          >
            {detail.title}
          </h1>

          {detail.description && (
            <p
              data-common-reveal="description"
              className="mt-4 max-w-2xl text-base font-bold leading-1.7 tracking-wide text-white/80 sm:mt-5 sm:text-lg sm:leading-7"
            >
              {detail.description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
