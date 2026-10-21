"use client";

import { InteriorCard } from "../Home-interior/Home-Interior";
import { useEffect, useRef } from "react";
import Image from "next/image";

import "../../../style/Home_Warbrobe/Warbrode.css";


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
      image: "/Images/Services/Image2.webp",
      title: "Luxurious Modern Indoor Garden Atrium",
      alt: "Modern luxury home with indoor garden and architectural staircase",
    },
    {
      image: "/Images/Services/Image2.webp",
      title: "Sunlit Indoor-Outdoor Luxury Living Space",
      alt: "Bright luxury living room opening onto an outdoor garden",
    },
    {
      image: "/Images/Services/Image1.webp",
      title: "Modern Luxury Villa in Daylight",
      alt: "Contemporary luxury villa with landscaped front garden",
    },
    {
      image: "/Images/Services/Image2.webp",
      title: "Twilight Modern Villa Retreat",
      alt: "Modern luxury villa illuminated with warm architectural lighting at dusk",
    },
  ];


export default function ModularWardrobeSection() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const elements = Array.from(
            section.querySelectorAll(
                "[data-wardrobe-reveal], [data-wardrobe-card]"
            )
        );

        const revealAll = () => {
            elements.forEach((element) => {
                element.classList.add("wardrobe-is-visible");
            });
        };

        if (
            window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
            typeof IntersectionObserver === "undefined"
        ) {
            revealAll();
            return;
        }

        const getColumns = () => {
            if (window.matchMedia("(min-width: 768px)").matches) return 3;
            if (window.matchMedia("(min-width: 640px)").matches) return 2;
            return 1;
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const element = entry.target;

                    if (entry.isIntersecting) {
                        if (element.hasAttribute("data-wardrobe-card")) {
                            const index = Number(
                                element.dataset.wardrobeIndex || 0
                            );

                            // Short, responsive stagger within each grid row.
                            element.style.setProperty(
                                "--wardrobe-delay",
                                `${(index % getColumns()) * 120}ms`
                            );
                        }

                        element.classList.add("wardrobe-is-visible");
                    } else {
                        // Reset so the reveal replays on the next scroll entry.
                        element.classList.remove("wardrobe-is-visible");
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
            className="wardrobe-gallery w-full bg-white text-black"
        >
            <div className="mx-auto w-full max-w-screen-2xl px-5 py-10 sm:px-8 sm:py-14 md:px-10 md:py-16 lg:px-12 lg:py-20 xl:px-18">
                {/* Interior gallery */}
                <h1
                    data-wardrobe-reveal="heading"
                    className="pb-12 text-4xl font-heading tracking-tighter md:pb-20 md:text-5xl lg:text-6xl"
                >
                    Modular Wardrobe Systems
                </h1>

                <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-10 md:grid-cols-3 md:gap-x-4 lg:gap-x-5">
                    {interiors.map((interior, index) => (
                        <InteriorCard
                            key={interior.title}
                            image={interior.image}
                            title={interior.title}
                            alt={interior.alt}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}


