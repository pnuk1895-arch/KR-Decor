"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Upload } from "lucide-react";

import "../../../style/Career/Career.css";

const TopMinHeading = "Careers at KR Decor";
const MainHeading = "Shape Spaces With Purpose Passion";

const MainContent = `We are always looking for visionary architects, interior
designers, and execution experts who share our dedication
to quiet luxury and meticulous craftsmanship.`;

export default function CareerContact() {
  const [fileName, setFileName] = useState("");
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = Array.from(
      section.querySelectorAll("[data-career-reveal]")
    );

    const revealAll = () => {
      elements.forEach((element) => {
        element.classList.add("career-is-visible");
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
        entries.forEach((entry) => {
          const element = entry.target;

          if (entry.isIntersecting) {
            const delay = Number(
              element.dataset.careerDelay || 0
            );

            element.style.setProperty(
              "--career-reveal-delay",
              `${delay * 100}ms`
            );

            element.classList.add("career-is-visible");
          } else {
            // Reset so the reveal plays again on re-entry.
            element.classList.remove("career-is-visible");
          }
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

  function handleSubmit(event) {
    event.preventDefault();

    // Connect your backend or API here to submit applications.
    alert("Form UI is ready. Connect your backend to submit applications.");
  }

  function handleFileChange(event) {
    const file = event.target.files?.[0];

    if (!file) {
      setFileName("");
      return;
    }

    const isPDF =
      file.type === "application/pdf" ||
      file.name.toLowerCase().endsWith(".pdf");

    if (!isPDF) {
      event.target.value = "";
      setFileName("");
      alert("Please select a PDF file.");
      return;
    }

    setFileName(file.name);
  }

  return (
    <section
      ref={sectionRef}
      className="career-contact w-full bg-white py-16 text-black sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid w-full max-w-screen-2xl grid-cols-1 gap-12 px-5 sm:px-8 md:grid-cols-2 md:gap-10 md:px-10 lg:gap-16 lg:px-12 xl:gap-24 xl:px-18">

        {/* Left content */}
        <div className="flex flex-col items-start">
          <p
            data-career-reveal="up"
            data-career-delay="0"
            className="mb-6 text-xs font-medium uppercase tracking-widest text-stone-500 sm:mb-8"
          >
            {TopMinHeading}
          </p>

          <h2
            data-career-reveal="left"
            data-career-delay="1"
            className="max-w-lg font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            {MainHeading.split("With")[0]}
            <br className="hidden lg:block" />{" "}
            {MainHeading.split(" ").slice(2, 4).join(" ")} &amp;{" "}
            {MainHeading.split("Purpose")[1]}
          </h2>

          <p
            data-career-reveal="up"
            data-career-delay="2"
            className="mt-6 max-w-md text-sm leading-6 tracking-wide text-stone-600 sm:mt-7 sm:text-base sm:leading-7"
          >
            {MainContent}
          </p>
        </div>

        {/* Application form */}
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col gap-7 sm:gap-8"
        >
          <div
            data-career-reveal="up"
            data-career-delay="1"
          >
            <label htmlFor="fullName" className="sr-only">
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Full Name"
              autoComplete="name"
              required
              className="w-full border-0 border-b border-stone-300 bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-stone-400 focus:border-black"
            />
          </div>

          <div
            data-career-reveal="up"
            data-career-delay="2"
            className="grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-8"
          >
            <div>
              <label htmlFor="phone" className="sr-only">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Phone Number"
                autoComplete="tel"
                required
                className="w-full border-0 border-b border-stone-300 bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-stone-400 focus:border-black"
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email Address"
                autoComplete="email"
                required
                className="w-full border-0 border-b border-stone-300 bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-stone-400 focus:border-black"
              />
            </div>
          </div>

          <div
            data-career-reveal="up"
            data-career-delay="3"
          >
            <label htmlFor="position" className="sr-only">
              Position Applying For
            </label>
            <input
              id="position"
              name="position"
              type="text"
              placeholder="Position Applying For (e.g. Senior Interior Designer)"
              required
              className="w-full border-0 border-b border-stone-300 bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-stone-400 focus:border-black"
            />
          </div>

          {/* Resume upload */}
          <div
            data-career-reveal="up"
            data-career-delay="4"
          >
            <label
              htmlFor="resume"
              className="mb-3 block text-xs font-medium uppercase tracking-wide text-stone-600"
            >
              Upload Resume / Portfolio (PDF)
            </label>

            <label
              htmlFor="resume"
              className="career-upload flex min-h-14 w-full cursor-pointer items-center justify-between gap-3 border border-stone-300 px-4 py-3 text-sm text-stone-500 transition-colors hover:border-black"
            >
              <span className="min-w-0 truncate">
                {fileName || "Choose file..."}
              </span>

              <Upload
                size={17}
                className="career-upload-icon shrink-0 text-stone-600"
              />
            </label>

            <input
              id="resume"
              name="resume"
              type="file"
              accept=".pdf,application/pdf"
              required
              className="sr-only"
              onChange={handleFileChange}
            />

            <p className="mt-2 text-xs text-stone-400">
              PDF format only.
            </p>
          </div>

          <div
            data-career-reveal="up"
            data-career-delay="5"
          >
            <label htmlFor="experience" className="sr-only">
              About yourself and your experience
            </label>
            <textarea
              id="experience"
              name="experience"
              rows={5}
              placeholder="Tell us about yourself and your experience"
              required
              className="w-full resize-y border border-stone-300 bg-transparent px-4 py-4 text-sm leading-6 outline-none transition-colors placeholder:text-stone-400 focus:border-black"
            />
          </div>

          <div
            data-career-reveal="up"
            data-career-delay="6"
            className="pt-2 sm:pt-4"
          >
            <button
              type="submit"
              className="career-submit group inline-flex items-center gap-4 border-b border-stone-400 pb-2 text-xs font-semibold uppercase tracking-widest transition-colors hover:border-black"
            >
              Submit Application
              <ArrowRight
                size={16}
                className="career-submit-icon transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}