
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroComponent() {
  const [cursor, setCursor] = useState({
    x: 0,
    y: 0,
    visible: false,
  });

  const [buttonCursor, setButtonCursor] = useState({
    x: 0,
    y: 0,
    visible: false,
  });

  const handlePointerMove = (event) => {
    if (event.pointerType === "touch") return;

    const rect = event.currentTarget.getBoundingClientRect();

    setCursor({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      visible: true,
    });
  };

  const handleButtonPointerMove = (event) => {
    if (event.pointerType === "touch") return;

    const rect = event.currentTarget.getBoundingClientRect();

    setButtonCursor({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      visible: true,
    });
  };

  return (
    <section
      onPointerMove={handlePointerMove}
      onPointerLeave={() =>
        setCursor((previous) => ({ ...previous, visible: false }))
      }
      className="group relative isolate min-h-screen w-full overflow-hidden bg-stone-950 text-white"
    >
      {/* Full-Width Background Image */}
      <Image
        src="/Images/HeroImage.webp"
        alt="Luxury modern kitchen interior"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 z-[-30] object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="pointer-events-none absolute inset-0 z-[-20] bg-black/55" />

      {/* Cursor-Following Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity: cursor.visible ? 1 : 0,
          background: `radial-gradient(450px circle at ${cursor.x}px ${cursor.y}px, rgba(255,255,255,0.16), transparent 70%)`,
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-screen-2xl flex-col justify-center px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:px-12 lg:pb-24 lg:pt-36 2xl:px-14">
        {/* Responsive Heading */}
        <div className="w-full">
          <h1 className="flex w-full flex-col items-center text-center font-heading font-normal uppercase leading-[0.82] tracking-[-0.055em] text-[clamp(2.15rem,8.5vw,3.5rem)] sm:text-[clamp(3.5rem,7.2vw,5rem)] md:items-start md:text-left md:text-[clamp(3.5rem,7.5vw,5.5rem)] lg:text-[clamp(4.5rem,7vw,7rem)] xl:text-[clamp(5rem,6.5vw,8rem)] 2xl:text-[clamp(6rem,6.2vw,9rem)]">
            <span className="block whitespace-nowrap">Transforming</span>
            <span className="block whitespace-nowrap italic">Extraordinary</span>
            <span className="block whitespace-nowrap">Living.</span>
          </h1>
        </div>

        {/* Description and CTA */}
        <div className="mt-8 flex flex-col items-center justify-between gap-7 sm:mt-12 sm:gap-8 md:items-start lg:mt-12 lg:flex-row lg:items-end lg:gap-10 2xl:mt-16">
          <p className="w-full max-w-xl text-center text-[13px] font-medium leading-[1.7] tracking-[0.06em] text-white/80 sm:text-base md:text-left lg:max-w-[48%] 2xl:max-w-2xl 2xl:text-lg">
            Expert architecture design, work, and luxury full home interiors.
            From custom modular kitchens and wardrobes to TV units — we bring
            your vision to life.
          </p>

          {/* Get In Touch Button */}
          <Link
            href="/contact"
            onPointerMove={handleButtonPointerMove}
            onPointerLeave={() =>
              setButtonCursor((previous) => ({
                ...previous,
                visible: false,
              }))
            }
            className="group/button relative isolate flex w-fit shrink-0 items-center gap-4 overflow-hidden border-b border-white/50 px-1 py-3 text-xs font-bold tracking-[0.12em] text-white transition-colors duration-300 hover:border-white sm:text-sm lg:mb-1"
          >
            {/* Button Cursor Glow */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-[-1] transition-opacity duration-300"
              style={{
                opacity: buttonCursor.visible ? 1 : 0,
                background: `radial-gradient(100px circle at ${buttonCursor.x}px ${buttonCursor.y}px, rgba(255,255,255,0.24), transparent 75%)`,
              }}
            />

            <span>GET IN TOUCH</span>

            <ArrowRight
              size={20}
              strokeWidth={1.6}
              className="transition-transform duration-300 group-hover/button:translate-x-1.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
