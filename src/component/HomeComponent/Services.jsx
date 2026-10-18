"use client"

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
    {
        number: "01",
        title: "Full Home Interior",
        description:
            "Curating personalized living spaces and bespoke full home interior solutions.",
        type: "text",
        href: "/Services",
    },
    {
        number: "02",
        title: "Architecture",
        description:
            "Expert architecture design and high-impact structural work.",
        type: "text",
        href: "/Services",
    },
    {
        number: "03",
        title: "Modular Kitchen & Wardrobe",
        description:
            "Custom modular kitchens, walk-in wardrobes, and stylish TV units.",
        type: "text",
        href: "/Services",
    },
    {
        number: "04",
        title: "Spatial Renovation",
        description:
            "Reimagining existing structures with innovative modular work layouts.",
        type: "text",
        href: "/Services",
    },
];

const serviceImages = [
    {
        src: "/Images/Services/Image1.webp",
        alt: "Modern modular kitchen interior"
    },
    {
        src: "/Images/Services/Image2.webp",
        alt: "Elegant staircase and renovated home interior"
    },
];

const MainHeading="Complete interior services for modern space"


function ServiceTextCard({ service }) {
    return (
        <div className="flex min-h-65 flex-col bg-[#f5f5f4] p-6 sm:min-h-70 sm:p-7 lg:min-h-75 lg:p-8 xl:min-h-75">
            {/* Number and title */}
            <div className="flex items-start gap-3 border-b border-black/4 pb-5 sm:gap-4 sm:pb-6">
                <span className="mt-1 shrink-0 font-heading text-sm font-normal sm:text-base">
                    /{service.number}
                </span>

                <h3 className="font-heading text-xl font-normal leading-[1.15] tracking-tight sm:text-2xl lg:text-[30px]">
                    {service.title}
                </h3>
            </div>

            {/* Description */}
            <p className="mt-5 max-w-105 text-sm font-normal leading-[1.7] tracking-[0.01em] text-neutral-500 sm:mt-6 sm:text-base">
                {service.description}
            </p>

            {/* See details */}
            <Link
                href={service.href}
                className="group/link mt-auto flex w-fit items-center gap-4 border-b border-black/20 pb-2 pt-7 text-[11px] font-semibold tracking-widest transition-colors duration-300 hover:border-black sm:pt-9 sm:text-xs"
            >
                <span>SEE DETAILS</span>

                <ArrowRight
                    size={19}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 ease-out group-hover/link:translate-x-2"
                />
            </Link>
        </div>
    );
}

function ServiceImageCard({ image }) {
    return (
        <div
            className="group/image relative block min-h-65 overflow-hidden bg-neutral-200 sm:min-h-70 lg:min-h-75"
        >
            <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 639px) 90vw, (max-width: 767px) 44vw, (max-width: 1023px) 29vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover/image:scale-105"
            />

            <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover/image:bg-black/10" />
        </div>
    );
}

export default function ServicesSection() {
    return (
        <section className="w-full bg-white text-black">
            <div className="mx-auto max-w-screen-2xl px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-12 lg:py-24 xl:px-18">
                {/* Section heading */}
                <div className="mx-auto max-w-212.5 border-b border-black/4 pb-5 text-center sm:pb-7">
                    <h2 className="font-heading text-4xl font-normal leading-[1.08] tracking-[-0.045em] sm:text-4xl md:text-5xl lg:text-[56px]">
                        {MainHeading.split("modern")[0]}
                        <br />
                        {MainHeading.split("for")[1]}
                    </h2>
                </div>

                {/* Services grid */}
                <div className="mx-auto mt-16 grid  grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 md:gap-4 lg:mt-14 lg:gap-5">
                    {/* Row 1 */}
                    <ServiceTextCard service={services[0]} />
                    <ServiceTextCard service={services[1]} />
                    <ServiceImageCard image={serviceImages[0]} />

                    {/* Row 2 */}
                    <ServiceImageCard image={serviceImages[1]} />
                    <ServiceTextCard service={services[2]} />
                    <ServiceTextCard service={services[3]} />
                </div>

                {/* View all services */}
                <div className="mt-10 flex justify-center sm:mt-12 lg:mt-14">
                    <Link
                        href="/Services"
                        className="group/link flex w-fit items-center gap-3 border-b border-black/10 pb-2 text-[10px] font-semibold tracking-[0.08em] transition-colors duration-300 hover:border-black sm:text-[11px]"
                    >
                        <span>VIEW ALL SERVICES</span>

                        <ArrowRight
                            size={16}
                            strokeWidth={1.5}
                            className="transition-transform duration-300 ease-out group-hover/link:translate-x-2"
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
}
