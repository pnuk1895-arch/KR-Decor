"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function About() {
    // const [cursor, setCursor] = useState({
    //     x: 0,
    //     y: 0,
    //     visible: false,
    // });

    // const handlePointerMove = (event) => {
    //     if (event.pointerType === "touch") return;

    //     const rect = event.currentTarget.getBoundingClientRect();

    //     setCursor({
    //         x: event.clientX - rect.left,
    //         y: event.clientY - rect.top,
    //         visible: true,
    //     });
    // };

    return (
        <section
            className="relative isolate w-full overflow-hidden bg-white text-black"
        >
            {/* Main content */}
            <div className="relative z-10 mx-auto grid w-full max-w-screen-2xl grid-cols-1 gap-12 px-5 py-16 sm:px-8 sm:py-20 md:gap-16 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-12 lg:py-24 2xl:px-14">

                {/* Text content */}
                <div className="flex w-full flex-col">
                    <h2 className="max-w-2xl font-heading text-4xl font-normal leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl">
                        Our expertise in design and precision craft
                    </h2>

                    <div className="mt-5 h-px w-full bg-black/10 sm:mt-6 lg:mt-7" />

                    <p className="mt-7 max-w-xl text-sm font-normal leading-6 tracking-wide text-neutral-600 sm:mt-9 sm:text-base sm:leading-7 lg:mt-9">
                        Specializing in modular work, full home interiors, modular kitchens,
                        and modular wardrobes. We honor proportion and organic materials
                        to shape spaces that feel calm, natural, and seamlessly beautiful.
                    </p>

                    <Link
                        href="/about"
                        className="group/link mt-8 flex w-fit items-center gap-4 border-b border-black/25 pb-3 text-xs font-semibold tracking-widest transition-colors duration-300 hover:border-black sm:mt-10 sm:text-sm lg:mt-12"
                    >
                        <span>MORE ABOUT US</span>

                        <ArrowRight
                            size={20}
                            strokeWidth={1.6}
                            className="transition-transform duration-300 group-hover/link:translate-x-2"
                        />
                    </Link>
                </div>

                {/* Staggered image gallery */}


                <div className="grid grid-cols-2 items-stretch gap-3 sm:gap-5 lg:grid-cols-11 lg:gap-4 xl:gap-5">
                    {/* Smaller image: anchored to the bottom of the gallery */}
                    <div className="relative col-span-1 flex h-full items-end lg:col-span-5">
                        <div className="relative h-45 aspect-square w-full self-end overflow-hidden md:h-74">
                            <Image
                                src="/Images/About/AboutImage1.webp"
                                alt="Elegant modern living room interior"
                                fill
                                sizes="(max-width: 639px) 45vw, (max-width: 1023px) 42vw, 28vw"
                                className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Larger image: determines the gallery height */}
                    <div className="relative h-70 col-span-1 aspect-2/3 w-full overflow-hidden lg:col-span-6 md:h-130">
                        <Image
                            src="/Images/About/AboutImage2.webp"
                            alt="Luxury living room with contemporary interior design"
                            fill
                            sizes="(max-width: 639px) 45vw, (max-width: 1023px) 42vw, 32vw"
                            className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}