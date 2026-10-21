"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

import "../../../style/Home_Interior/Home_interior.css";

const interiors = [
    {
        image: "/Images/Services/Image1.webp",
        title: "Luxurious Warm Modern Living Space",
        alt: "Warm modern living room with elegant lighting and neutral furniture",
    },
    {
        image: "/Images/Services/Image2.webp",
        title: "Moody Green and Gold Luxury Bedroom",
        alt: "Luxury bedroom with dark green accents and warm gold lighting",
    },
    {
        image: "/Images/Services/Image1.webp",
        title: "Luxurious Modern Indoor Garden Atrium",
        alt: "Modern luxury home with indoor garden and architectural staircase",
    },
    {
        image: "/Images/Services/Image2.webp",
        title: "Sunlit Indoor-Outdoor Luxury Living Space",
        alt: "Bright luxury living room opening onto an outdoor garden",
    },
    {
        image: "/Images/Services/Image2.webp",
        title: "Modern Luxury Villa in Daylight",
        alt: "Contemporary luxury villa with landscaped front garden",
    },
    {
        image: "/Images/Services/Image2.webp",
        title: "Twilight Modern Villa Retreat",
        alt: "Modern luxury villa illuminated with warm architectural lighting at dusk",
    },
];

const MainHeading = "Bespoke Full Home Interiors";

const MainContent =
    "Curating emotionally resonant living spaces from our Jasola Apollo studio in New Delhi with complete turnkey execution.";

export function InteriorCard({
    image,
    title,
    alt,
    index = 0,
}) {
    const cardRef = useRef(null);

    // Each reusable card manages its own observer.
    useEffect(() => {
        const card = cardRef.current;

        if (!card) return;

        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );

        if (
            reducedMotion.matches ||
            typeof IntersectionObserver === "undefined"
        ) {
            card.classList.add("gallery-is-visible");
            return;
        }

        const getColumnCount = () => {
            if (window.matchMedia("(min-width: 768px)").matches) return 3;
            if (window.matchMedia("(min-width: 640px)").matches) return 2;
            return 1;
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Stagger cards within each responsive row.
                    const delay = (index % getColumnCount()) * 120;

                    card.style.setProperty(
                        "--gallery-reveal-delay",
                        `${delay}ms`
                    );

                    card.classList.add("gallery-is-visible");
                } else {
                    // Remove the class so the animation replays on re-entry.
                    card.classList.remove("gallery-is-visible");
                }
            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -35px 0px",
            }
        );

        observer.observe(card);

        return () => observer.disconnect();
    }, [index]);

    return (
        <article
            ref={cardRef}
            data-gallery-card
            className="interior-gallery-card group min-w-0"
        >
            {/* Image */}
            <div
                data-gallery-image
                className="relative aspect-4/5 w-full overflow-hidden bg-neutral-100"
            >
                <Image
                    src={image}
                    alt={alt}
                    fill
                    sizes="(max-width: 639px) 90vw, (max-width: 767px) 44vw, (max-width: 1279px) 30vw, 28vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transform-none"
                />

                {/* Existing overlay */}
                <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/5" />
            </div>

            {/* Caption */}
            <h3
                data-gallery-caption
                className="mt-3 font-heading text-sm font-normal leading-relaxed text-neutral-800 transition-colors duration-300 group-hover:text-black sm:text-base"
            >
                {title}
            </h3>
        </article>
    );
}

export function InteriorGallery() {
    const sectionRef = useRef(null);

    // The parent observer now handles only the heading and description.
    useEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const elements = Array.from(
            section.querySelectorAll("[data-gallery-reveal]")
        );

        if (
            window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
            typeof IntersectionObserver === "undefined"
        ) {
            elements.forEach((element) =>
                element.classList.add("gallery-is-visible")
            );
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("gallery-is-visible");
                    } else {
                        entry.target.classList.remove("gallery-is-visible");
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
        <section
            ref={sectionRef}
            className="interior-gallery w-full bg-white text-black"
        >
            <div className="mx-auto w-full max-w-screen-2xl px-5 py-10 sm:px-8 sm:py-14 md:px-10 md:py-16 lg:px-12 lg:py-20 xl:px-18">
                {/* Heading */}
                <div className="flex flex-col gap-5 border-b border-neutral-200 pb-6 md:flex-row md:items-end md:justify-between md:gap-10">
                    <h2
                        data-gallery-reveal="title"
                        className="max-w-2xl font-heading text-4xl font-normal leading-tight tracking-tight sm:text-5xl lg:text-6xl"
                    >
                        {MainHeading}
                    </h2>

                    <p
                        data-gallery-reveal="description"
                        className="max-w-sm text-sm leading-relaxed text-neutral-500 md:pb-1"
                    >
                        {MainContent}
                    </p>
                </div>

                {/* Gallery */}
                <div className="mt-8 grid grid-cols-1 gap-x-4 gap-y-8 sm:mt-10 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-10 md:mt-12 md:grid-cols-3 md:gap-x-4 lg:gap-x-5">
                    {interiors.map((interior, index) => (
                        <InteriorCard
                            key={interior.title}
                            {...interior}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}