"use client"

import Image from "next/image";

export default function CommonHero({detail}) {
  return (
    <section className="relative isolate flex min-h-85 w-full items-end overflow-hidden bg-neutral-900 text-white sm:min-h-95 md:min-h-110 ">
      {/* Background image */}
      <Image
        src={detail.image}
        alt={detail.imageAlt}
        fill
        priority
        sizes="100vw"
        className={`-z-20 object-cover object-center`}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-black/80 via-black/40 to-black/10" />

      {/* Content */}
      <div className="mx-auto w-full max-w-screen-2xl px-5 pb-12 pt-28 sm:px-8 sm:pb-16 md:px-10 lg:px-12 lg:pb-20 xl:px-18">
        <div className="max-w-3xl">
          <h1 className="font-heading text-5xl font-medium leading-tight tracking-tight md:text-6xl lg:text-7xl xl:text-7xl">
            {detail.title}
          </h1>

          {detail.description && (
            <p className="mt-4 max-w-2xl text-base font-bold leading-1.7 tracking-wide text-white/80 sm:mt-5 sm:text-lg sm:leading-7">
              {detail.description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
