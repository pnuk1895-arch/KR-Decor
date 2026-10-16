
"use client";

import { useState } from "react";
import { ArrowRight, Upload } from "lucide-react";

export default function CareerContact() {
  const [fileName, setFileName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    // Connect your backend or API here to submit the application.
    alert("Form UI is ready. Connect your backend to submit applications.");
  }

  return (
    <section className="w-full bg-white px-5 py-16 text-black sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
      <div className="mx-auto grid w-full max-w-screem-2xl grid-cols-1 gap-12 md:grid-cols-2 md:gap-10 lg:gap-16 xl:gap-24">
        {/* Left content */}
        <div className="flex flex-col items-start">
          <p className="mb-6 text-xs font-medium uppercase tracking-widest text-stone-500 sm:mb-8">
            Careers at KR Decor
          </p>

          <h2 className="max-w-lg font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Shape Spaces
            <br className="hidden lg:block" /> With Purpose &amp; Passion
          </h2>

          <p className="mt-6 max-w-md text-sm leading-6 tracking-wide text-stone-600 sm:mt-7 sm:text-base sm:leading-7">
            We are always looking for visionary architects, interior
            designers, and execution experts who share our dedication
            to quiet luxury and meticulous craftsmanship.
          </p>
        </div>

        {/* Application form */}
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col gap-7 sm:gap-8"
        >
          <div>
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

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-8">
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

          <div>
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
          <div>
            <label
              htmlFor="resume"
              className="mb-3 block text-xs font-medium uppercase tracking-wide text-stone-600"
            >
              Upload Resume / Portfolio (PDF)
            </label>

            <label
              htmlFor="resume"
              className="flex min-h-14 w-full cursor-pointer items-center justify-between gap-3 border border-stone-300 px-4 py-3 text-sm text-stone-500 transition-colors hover:border-black"
            >
              <span className="min-w-0 truncate">
                {fileName || "Choose file..."}
              </span>
              <Upload size={17} className="shrink-0 text-stone-600" />
            </label>

            <input
              id="resume"
              name="resume"
              type="file"
              accept=".pdf,application/pdf"
              required
              className="sr-only"
              onChange={(event) => {
                const file = event.target.files?.[0];

                if (file && file.type !== "application/pdf") {
                  event.target.value = "";
                  setFileName("");
                  alert("Please select a PDF file.");
                  return;
                }

                setFileName(file?.name || "");
              }}
            />

            <p className="mt-2 text-xs text-stone-400">
              PDF format only.
            </p>
          </div>

          <div>
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

          <div className="pt-2 sm:pt-4">
            <button
              type="submit"
              className="group inline-flex items-center gap-4 border-b border-stone-400 pb-2 text-xs font-semibold uppercase tracking-widest transition-colors hover:border-black"
            >
              Submit Application
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
