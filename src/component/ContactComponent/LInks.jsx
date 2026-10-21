"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import "../../../style/Contact/Links.css";

const socialLinks = [
  {
    name: "Instagram",
    handle: "@KRDECOR.STUDIO",
    href: "https://www.instagram.com/_krdecor_/?hl=en",
  },
  {
    name: "LinkedIn",
    handle: "KR DECOR",
    href: "/Contact",
  },
  {
    name: "Facebook",
    handle: "KR DECOR OFFICIAL",
    href: "https://www.facebook.com/people/KRDecor/61587064716293/",
  },
];

const MainHeading = "Follow Our Journey";

export default function Links() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = Array.from(
      section.querySelectorAll("[data-social-reveal]")
    );

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      typeof IntersectionObserver === "undefined"
    ) {
      elements.forEach((element) => {
        element.classList.add("social-is-visible");
      });

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        // Process elements entering the viewport from top to bottom.
        const entering = entries
          .filter(
            (entry) =>
              entry.isIntersecting &&
              !entry.target.classList.contains("social-is-visible")
          )
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top
          );

        entering.forEach((entry, index) => {
          const element = entry.target;

          // Stagger only elements entering together.
          element.style.setProperty(
            "--social-reveal-delay",
            `${index * 140}ms`
          );

          element.classList.add("social-is-visible");
        });

        // Reset when elements leave the viewport.
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            entry.target.classList.remove("social-is-visible");
          }
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
      className="social-links-section bg-[#f5f5f5] py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-screen-2xl px-5 sm:px-8 md:px-10 lg:px-12 xl:px-15">
        <h2
          data-social-reveal="heading"
          className="border-b border-gray-300 pb-8 font-heading text-4xl tracking-tighter text-black sd:pb-10 md:pb-12 md:text-5xl lg:text-6xl"
        >
          {MainHeading}
        </h2>

        <div className="mt-6">
          {socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit KR Decor on ${social.name}`}
              data-social-reveal="row"
              className="social-link-row group flex items-center justify-between gap-4 border-b border-gray-300 py-7 sm:py-8 md:py-12 lg:py-14"
            >
              <div className="flex flex-col md:flex-row -gap-4 md:gap-18">
                <span className="social-link-name font-heading text-3xl text-black sm:text-4xl md:text-5xl lg:text-6xl">
                  {social.name}
                </span>

                <span className="social-link-handle mt-3 text-sm uppercase tracking-widest text-gray-500/70 sm:text-base md:mt-0 md:text-transparent">
                  {social.handle}
                </span>
              </div>

              <ArrowUpRight
                size={26}
                strokeWidth={1}
                className="social-link-arrow shrink-0 text-gray-500 sm:size-8 md:h-14! md:w-14!"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}