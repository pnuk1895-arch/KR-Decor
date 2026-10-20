
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

import "../../../style/Work/SignatureSpaces.css";

const spaces = [
    {
        type: "image",
        image: "/Images/Services/Image1.webp",
        alt: "Luxury modular kitchen interior",
    },
    {
        type: "image",
        image: "/Images/Services/Image1.webp",
        alt: "Modern architectural shelving details",
    },
    {
        type: "image",
        image: "/Images/Services/Image1.webp",
        alt: "Contemporary wooden interior finishes",
    },
    {
        type: "image",
        image: "/Images/Services/Image1.webp",
        alt: "Full home interior with modern finishes",
    },
    {
        type: "image",
        image: "/Images/Services/Image2.webp",
        alt: "Modern staircase with natural materials",
    },
    {
        type: "text",
        title: "Spaces, Thoughtfully Composed",
        description:
            "A closer look at full home interiors and modular work where architecture, material, and atmosphere come together with quiet intention.",
    },
    {
        type: "text",
        title: "Crafted With Precision",
        description:
            "Showcasing bespoke modular kitchens, custom wardrobes, and TV units built to elevate modern everyday living.",
    },
    {
        type: "image",
        image: "/Images/Services/Image1.webp",
        alt: "Elegant classic living room with detailed finishes",
    },
    {
        type: "image",
        image: "/Images/Services/Image1.webp",
        alt: "Premium wooden finishes and luxury styling",
    },
];

function SpaceImage({ image, alt }) {
    return (
        <div
            data-space-image
            className="group relative aspect-4/5 w-full overflow-hidden bg-neutral-200"
        >
            <Image
                src={image}
                alt={alt}
                fill
                sizes="(max-width: 639px) 90vw, (max-width: 1023px) 45vw, 33vw"
                className="space-image-media object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />

            <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/5" />
        </div>
    );
}

function SpaceText({ title, description }) {
    return (
        <div className="flex aspect-4/5 w-full flex-col items-center justify-center bg-white px-5 py-8 text-center sm:px-7 md:px-5 lg:px-8">
            <h3
                data-space-copy
                className="max-w-sm font-heading text-2xl font-normal leading-[1.08] tracking-tight sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl"
            >
                {title}
            </h3>

            <p
                data-space-copy
                className="mt-4 max-w-70 text-xs font-normal leading-relaxed tracking-wide text-neutral-500 sm:text-sm"
            >
                {description}
            </p>
        </div>
    );
}

export default function SignatureSpaces() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const elements = section.querySelectorAll("[data-space-reveal]");

        const showAll = () => {
            elements.forEach((element) => {
                element.classList.add("space-reveal-visible");
            });
        };

        if (
            window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
            typeof IntersectionObserver === "undefined"
        ) {
            showAll();
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;

                    const element = entry.target;
                    const delay = Number(element.dataset.spaceDelay || 0);

                    element.style.setProperty(
                        "--space-reveal-delay",
                        `${delay * 90}ms`
                    );

                    element.classList.add("space-reveal-visible");

                    // Animate each grid item only once.
                    observer.unobserve(element);
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

    return (
        <section
            ref={sectionRef}
            className="w-full bg-white text-black"
        >
            <div className="mx-auto w-full max-w-screen-2xl px-5 py-10 sm:px-8 sm:py-14 md:px-10 md:py-20 lg:px-12 lg:py-24 xl:px-18">

                {/* Section heading */}
                <div className="flex flex-col items-start justify-between gap-5 border-b border-black/10 pb-5 sm:pb-6">
                    <h2
                        data-space-reveal="left"
                        className="w-full max-w-2xl font-heading text-4xl font-normal leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
                    >
                        Signature Spaces
                    </h2>
                </div>

                {/* Editorial image grid */}
                <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 md:mt-12 md:grid-cols-3 md:gap-3 lg:mt-14 lg:gap-4 xl:gap-5">
                    {spaces.map((space, index) => (
                        <div
                            key={`${space.type}-${index}`}
                            data-space-reveal="up"
                            data-space-delay={index}
                            className="min-w-0"
                        >
                            {space.type === "image" ? (
                                <SpaceImage
                                    image={space.image}
                                    alt={space.alt}
                                />
                            ) : (
                                <SpaceText
                                    title={space.title}
                                    description={space.description}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
