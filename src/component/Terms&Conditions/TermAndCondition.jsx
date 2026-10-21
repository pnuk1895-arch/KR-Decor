"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";

import "../../../style/TermAndCondition/TermsAndCondition.css";

const termsSections = [
  {
    title: "Agreement to Terms",
    description:
      "By accessing the KR Decor website or engaging our boutique services for full home interiors, modular kitchens, modular wardrobes, work, and TV units, you agree to comply with and be bound by these terms and conditions.",
  },
  {
    title: "Scope of Design Services",
    description:
      "KR Decor provides professional architecture design, modular work, and interior execution services. All design concepts, 3D layouts, and technical drawings remain our intellectual property until project agreements are officially finalized.",
  },
  {
    title: "Quotations and Execution",
    description:
      "Project estimates and timelines (typically 45 to 90 days) are provided following site measurements and material selections. Execution and manufacturing follow our structured 10-step process, from consultation and approval to handover.",
  },
  {
    title: "Client Responsibilities",
    description:
      "Clients agree to provide timely approvals, access to the project site located at Jasola Apollo, New Delhi or designated locations, and adherence to agreed payment milestones to ensure seamless project delivery.",
  },
  {
    title: "Contact & Inquiries",
    description:
      "For any queries regarding these terms, project consultations, or collaborations, you may reach out to our team directly through our official channels or via WhatsApp at +91 9958384263.",
  },
];

const HeadingContent = `Last updated: October 2026. These Terms & Conditions govern
the provision of interior design, architectural, and modular
work services by KR Decor.`;

export default function TermsPage() {
  const pageRef = useRef(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const elements = Array.from(
      page.querySelectorAll("[data-terms-reveal]")
    );

    page.classList.add("terms-motion-ready");

    const revealAll = () => {
      elements.forEach((element) => {
        element.classList.add("terms-is-visible");
      });
    };

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      typeof IntersectionObserver === "undefined"
    ) {
      revealAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        // Reveal items entering together from top to bottom.
        const entering = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top
          );

        entering.forEach((entry, index) => {
          const element = entry.target;

          element.style.setProperty(
            "--terms-reveal-delay",
            `${index * 110}ms`
          );

          element.classList.add("terms-is-visible");
        });

        // Reset elements that leave the viewport.
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            entry.target.classList.remove("terms-is-visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -35px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main
      ref={pageRef}
      className="terms-page w-full overflow-hidden bg-white text-neutral-900"
    >
      {/* Terms Content */}
      <section
        aria-label="Terms and conditions details"
        className="mx-auto w-full max-w-screen-2xl px-5 py-8 sm:px-8 sm:py-10 md:px-10 lg:px-12 lg:py-14 xl:px-18"
      >
        {/* Last Updated */}
        <div
          data-terms-reveal="intro"
          className="border-b border-neutral-200 pb-6 sm:pb-8"
        >
          <p className="max-w-2xl text-sm leading-5 tracking-wide text-neutral-500 sm:text-base sm:leading-6">
            {HeadingContent}
          </p>
        </div>

        {/* Legal Sections */}
        <div className="divide-y divide-neutral-100">
          {termsSections.map((section, index) => (
            <article
              key={section.title}
              data-terms-reveal="article"
              data-terms-index={index}
              className="terms-article py-6 sm:py-7 lg:py-8"
            >
              <h2 className="terms-article-heading font-heading text-lg font-normal leading-snug text-neutral-900 sm:text-2xl">
                <span className="mr-1">{index + 1}.</span>
                {section.title}
              </h2>

              <p className="terms-article-description mt-3 max-w-6xl text-sm leading-6 tracking-wide text-neutral-500 sm:text-base sm:leading-7">
                {section.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <a
        href="https://wa.me/919958384263?text=Hello%2C%20I%20would%20like%20to%20discuss%20an%20interior%20design%20project."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact KR Decor on WhatsApp"
        className="terms-whatsapp-cta fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-white p-1.5 pl-3 shadow-lg ring-1 ring-black/10 transition-shadow hover:shadow-xl sm:bottom-6 sm:right-6 sm:gap-3 sm:pl-4"
      >
        <span className="terms-whatsapp-label text-[10px] font-semibold uppercase tracking-wider text-neutral-700 sm:text-xs">
          Let&apos;s Talk Design
        </span>

        <span className="terms-whatsapp-icon flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-white transition-colors hover:bg-neutral-700 sm:size-12">
          <MessageCircle size={20} strokeWidth={1.7} />
        </span>

        <ArrowUpRight
          size={14}
          className="terms-whatsapp-arrow mr-1 text-neutral-500"
          aria-hidden="true"
        />
      </a>
    </main>
  );
}