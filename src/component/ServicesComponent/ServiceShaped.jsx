"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const services = [
    {
        id: "01",
        name: "Full Home Interior",
        heading: "Bespoke Full Home Interiors & Mastery",
        subtitle: "Turnkey Architecture & Spatial Design",
        description:
            "We curate emotionally resonant, light-filled living environments tailored to your lifestyle. From spatial planning and structural work to custom lighting and final handover, every square foot reflects quiet intention.",
        features: [
            "End-to-End Turnkey Execution",
            "Architecture & Structural Work",
            "Customized False Ceiling & Lighting",
            "45–90 Days Target Handover",
        ],
        image: "/Images/Services/Image1.webp",
        imageAlt: "Luxury full home interior with refined contemporary finishes",
        caption: "KR Decor Signature Build",
        location: "Jasola Apollo Studio, New Delhi",
    },
    {
        id: "02",
        name: "Modular Kitchen",
        heading: "Ergonomic Modular Kitchen Mastery",
        subtitle: "Culinary Spaces That Breathe Elegance",
        description:
            "Engineered for absolute efficiency and striking minimalist aesthetics, our modular kitchen solutions combine world-class hardware with anti-scratch matte and gloss finishes designed specifically for refined modern living.",
        features: [
            "Hettich & Blum Soft-Close Hardware",
            "Waterproof & Termite-Resistant Cores",
            "Ergonomic Island & Parallel Layouts",
            "Anti-Fingerprint Premium Finishes",
        ],
        image: "/Images/Services/Image2.webp",
        imageAlt: "Contemporary modular kitchen with premium cabinetry",
        caption: "KR Decor Signature Build",
        location: "Jasola Apollo Studio, New Delhi",
    },
    {
        id: "03",
        name: "Modular Wardrobe",
        heading: "Bespoke Wardrobes & Personal Spaces",
        subtitle: "Refined Storage with Exceptional Craft",
        description:
            "Create organized, elegant spaces with custom wardrobes, walk-in closets, and carefully considered storage. Tailored layouts and refined finishes bring a seamless balance of everyday function and luxury.",
        features: [
            "Custom Wardrobe Configurations",
            "Walk-In Closet Design",
            "Space-Saving Storage Solutions",
            "Premium Finishes & Hardware",
        ],
        image: "/Images/Services/Image2.webp",
        imageAlt: "Custom modular wardrobe with elegant modern finishes",
        caption: "Designed Around You",
        location: "KR Decor, New Delhi",
    },
];

const MainHeading = "Services Shaped"
const MainContent = `Delivering architectural distinction and quiet luxury interiors
                        from our studio in Jasola Apollo, New Delhi.`

export default function ServicesShaped() {
    // Start with Modular Kitchen active, as in the reference.
    const [activeIndex, setActiveIndex] = useState(1);
    const activeService = services[activeIndex];

    return (
        <section
            aria-labelledby="services-shaped-heading"
            className="overflow-hidden bg-white py-16 text-neutral-950 sm:py-20 lg:py-24 "
        >
            <div className="mx-auto w-full max-w-screen-2xl px-5 sm:px-8 md:px-10 lg:px-12 xl:px-18 ">
                {/* Section heading */}
                <div className="grid gap-6 border-b border-neutral-200 pb-10 md:grid-cols-2 md:items-end md:gap-8 lg:pb-12">
                    <div className="self-start">
                        <h1
                            id="services-shaped-heading"
                            className="font-serif text-[38px] leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-[56px]"
                        >
                            {MainHeading}
                        </h1>
                    </div>

                    <p className="max-w-87.5 text-sm leading-6 text-neutral-500 md:ml-auto md:text-[16px]">
                        {MainContent}
                    </p>
                </div>

                {/* Service selector cards */}
                <div
                    aria-label="Choose an interior design service"
                    className="grid grid-cols-1 gap-3 border-b border-neutral-200 py-8 sm:grid-cols-3 sm:gap-2 sm:py-10"
                >
                    {services.map((service, index) => {
                        const isActive = activeIndex === index;

                        return (
                            <button
                                key={service.id}
                                type="button"
                                onClick={() => setActiveIndex(index)}
                                aria-pressed={isActive}
                                className={`group flex min-h-22 items-center justify-between gap-4 border px-5 py-4 text-left transition-all duration-300 sm:min-h-19 sm:px-4 lg:px-5 ${isActive
                                    ? "border-black bg-[#090909] text-white shadow-[0_12px_24px_rgba(0,0,0,0.12)]"
                                    : "border-neutral-100 bg-[#fdfdfd] text-neutral-900 hover:border-neutral-300 hover:bg-neutral-50"
                                    }`}
                            >
                                <span className="min-w-0">
                                    <span
                                        className={`mb-2 block text-[10px] tracking-[0.12em] ${isActive ? "text-neutral-300" : "text-neutral-400"
                                            }`}
                                    >
                                        {service.id}
                                    </span>

                                    <span className="block font-heading text-[17px] uppercase leading-tight sm:text-[20px] ">
                                        {service.name}
                                    </span>
                                </span>

                                <ArrowRight
                                    size={19}
                                    strokeWidth={2}
                                    className={`shrink-0 transition-transform duration-300 group-hover:translate-x-1 ${isActive ? "text-white" : "text-neutral-500"
                                        }`}
                                    aria-hidden="true"
                                />
                            </button>
                        );
                    })}
                </div>

                {/* Active service content */}
                <div
                    key={activeService.id}
                    className="grid gap-9 pt-12 sm:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 lg:pt-12 xl:gap-16"
                >
                    {/* Text content */}
                    <div className="flex min-w-0 flex-col self-start items-start gap-2">
                        <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-neutral-500 sm:text-[12px]">
                            /{activeService.id} — {activeService.name}
                        </p>

                        <h2 className="mt-4 max-w-130 font-heading text-[30px] uppercase leading-[1.08] tracking-tight sm:text-5xl lg:text-[52px] xl:text-[42px]">
                            {activeService.heading}
                        </h2>

                        <p className="mt-3 text-[12px] font-medium uppercase tracking-[0.15em] text-neutral-500 sm:text-[12px]">
                            {activeService.subtitle}
                        </p>

                        <p className="mt-6 max-w-135 text-[15px] brightness-150 leading-[1.8] text-neutral-600 sm:text-[16px]">
                            {activeService.description}
                        </p>

                        {/* Feature cards */}
                        <ul className="mt-6 grid w-full grid-cols-1 gap-2 sm:grid-cols-2">
                            {activeService.features.map((feature) => (
                                <li
                                    key={feature}
                                    className="flex min-h-13 items-center gap-3 bg-[#f8f8f8] px-3 py-3 text-[12px] font-semibold uppercase leading-normal tracking-[0.035em] text-neutral-800 sm:min-h-14.5 sm:px-4"
                                >
                                    <span
                                        className="h-2 w-2 shrink-0 rounded-full bg-black"
                                        aria-hidden="true"
                                    />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Enquiry link */}
                        <Link
                            href="/contact"
                            className="group mt-14 inline-flex items-center gap-4 border-b border-neutral-300 pb-2 text-[12px] font-semibold uppercase tracking-[0.12em] transition-colors duration-300 hover:border-black sm:mt-8 sm:text-xs"
                        >
                            Enquire About This Service

                            <ArrowRight
                                size={17}
                                strokeWidth={1.5}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                                aria-hidden="true"
                            />
                        </Link>
                    </div>

                    {/* Image and caption */}
                    <div className="min-w-0">
                        <div className="relative aspect-4/4 w-full overflow-hidden bg-neutral-100 sm:aspect-4/3.5 lg:aspect-square">
                            <Image
                                src={activeService.image}
                                alt={activeService.imageAlt}
                                fill
                                sizes="(max-width: 639px) 90vw, (max-width: 1023px) 80vw, 44vw"
                                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                            />

                            {/* Bottom image caption */}
                            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 bg-white px-4 py-4 sm:inset-x-5 sm:bottom-5 sm:px-5 sm:py-5">
                                <div className="min-w-0">
                                    <p className="font-serif text-[14px] uppercase leading-tight text-neutral-800 sm:text-base">
                                        {activeService.caption}
                                    </p>

                                    <p className="mt-1 text-[10px] uppercase tracking-[0.13em] text-neutral-500 sm:text-[10px]">
                                        {activeService.location}
                                    </p>
                                </div>

                                <span className="shrink-0 font-heading text-xs italic text-neutral-500 sm:text-sm">
                                    Quiet Luxury
                                </span>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
}