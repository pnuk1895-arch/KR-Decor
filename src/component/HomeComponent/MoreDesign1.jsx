"use client"

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const solutions = [
    {
        number: "01",
        title: `Custom culinary spaces tailored for your modern lifestyle.`,
        image: "/Images/Solutions/Image1.webp",
        alt: "Luxury modern bedroom interior",
        href: "/services/modular-wardrobes",
    },
    {
        number: "02",
        title: "Expert architecture design & precision craftsmanship.",
        image: "/Images/Solutions/Image2.webp",
        alt: "Modern modular kitchen design",
        href: "/services/architecture",
    },
    {
        number: "03",
        title: "Complete luxury home interiors and custom modular work.",
        image: "/Images/Solutions/Image3.webp",
        alt: "Complete luxury home interior",
        href: "/services/home-interiors",
    },
    {
        number: "04",
        title: "Walk-in closets, wardrobes, and elegant TV units.",
        image: "/Images/Solutions/Image4.webp",
        alt: "Modern wardrobe and TV unit",
        href: "/services/modular-wardrobes",
    },
];

export default function SolutionsSection1() {
    return (
        <section className="w-full bg-[#f5f5f3] text-black">
            <div className="mx-auto max-w-screen-2xl px-5 py-10 sm:px-8 sm:py-20 md:px-10 lg:px-12 lg:py-24 xl:px-18">

                {/* Heading */}
                <div className="flex flex-col items-start justify-between gap-7 border-b border-black/5 pb-5 sm:pb-6">
                    <h2 className="max-w-212.5 font-heading text-4xl font-normal leading-[1.08] tracking-[-0.045em] sm:text-4xl md:text-5xl lg:text-6xl">
                        Smart interior solutions for
                        <br className="hidden sm:block" /> modern living
                    </h2>


                    <Link
                        href="/services"
                        className="group/link mb-1 inline-flex shrink-0 flex-col items-start gap-3 pb-2 text-[12px] font-semibold tracking-[0.12em] transition-colors duration-300 sm:text-xs"
                    >
                        <div className="flex flex-row items-center gap-4">
                            <span className="whitespace-nowrap transition-colors duration-300 group-hover/link:text-black">
                                VIEW MORE
                            </span>

                            <ArrowRight
                                size={20}
                                strokeWidth={2.5}
                                className="text-black/50 transition-all duration-300 ease-out group-hover/link:translate-x-2 group-hover/link:text-black"
                            />
                        </div>

                        <div className="h-0.5 w-full bg-black/30 transition-all duration-300 group-hover/link:bg-[#000000]" />
                    </Link>

                </div>

                {/* Solution cards */}
                <div className="mt-8 grid grid-cols-1 gap-x-4 gap-y-20 sm:mt-10 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-10 md:grid-cols-4 md:gap-x-4 lg:mt-12 lg:gap-x-5 xl:gap-x-6">
                    {solutions.map((solution) => (
                        <div
                            key={solution.number}
                            className="group/card block min-w-0"
                        >
                            {/* Taller image */}
                            <div className="relative aspect-square w-full overflow-hidden bg-neutral-200 sm:aspect-square h-64 md:h-80 md:aspect-3/4 lg:aspect-3/4 ">
                                <Image
                                    src={solution.image}
                                    alt={solution.alt}
                                    fill
                                    sizes="(max-width: 639px) 90vw, (max-width: 767px) 44vw, (max-width: 1023px) 22vw, 24vw"
                                    className="object-cover transition-transform duration-700 ease-out group-hover/card:scale-105"
                                />

                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover/card:bg-black/10" />
                            </div>

                            {/* Card details */}
                            <div className="mt-3 flex items-start justify-between gap-3 sm:mt-4">
                                <span className="shrink-0 font-heading text-sm font-normal tracking-wide text-black">
                                    /{solution.number}
                                </span>

                                <p className="max-w-33 text-right text-[12px] font-semibold leading-[1.6] text-neutral-500/80 transition-colors duration-300 group-hover/card:text-black lg:max-w-30 lg:text-[11px]">
                                    {`${solution.title}`}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
