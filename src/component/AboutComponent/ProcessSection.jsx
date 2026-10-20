
"use client";

import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";

import "../../../style/AboutComponentCss/Process.css";

const processSteps = [
    {
        title: "Consultation",
        description:
            "Understanding your vision, lifestyle requirements, and spatial possibilities.",
    },
    {
        title: "Measurement",
        description:
            "Precise site mapping and structural evaluation for flawless execution.",
    },
    {
        title: "Design",
        description:
            "Crafting bespoke layouts and 3D visual concepts tailored to your aesthetic.",
    },
    {
        title: "Selection",
        description:
            "Curating premium materials, finishes, and custom luxury hardware.",
    },
    {
        title: "Quotation",
        description:
            "Transparent and detailed cost structuring aligned with your investment.",
    },
    {
        title: "Approval",
        description:
            "Finalizing blueprints, materials, and timelines to commence the transformation.",
    },
    {
        title: "Production",
        description:
            "Precision manufacturing using state-of-the-art technology and master craft.",
    },
    {
        title: "Quality Control",
        description:
            "Rigorous factory inspections to ensure absolute perfection in every module.",
    },
    {
        title: "Installation",
        description:
            "Seamless, non-intrusive on-site execution by our expert installation team.",
    },
    {
        title: "Inspection",
        description:
            "Final walkthrough to ensure every minute detail meets our exacting standards.",
    },
    {
        title: "Handover",
        description:
            "Delivering your beautifully finished, ready-to-live luxury sanctuary.",
    },
];

export default function OurProcess() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const elements = section.querySelectorAll("[data-process-reveal]");
        const track = section.querySelector("[data-process-track]");

        const showAll = () => {
            elements.forEach((element) => {
                element.classList.add("process-is-visible");
            });

            track?.classList.add("process-track-visible");
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
                    const delay = Number(element.dataset.processDelay || 0);

                    element.style.setProperty(
                        "--process-reveal-delay",
                        `${delay * 100}ms`
                    );

                    element.classList.add("process-is-visible");
                    track?.classList.add("process-track-visible");

                    // Reveal each element only once.
                    observer.unobserve(element);
                });
            },
            {
                threshold: 0.15,
                rootMargin: "0px 0px -40px 0px",
            }
        );

        elements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            aria-labelledby="our-process-heading"
            className="w-full overflow-hidden bg-white py-4 text-neutral-900 lg:py-10"
        >
            <div className="mx-auto w-full max-w-screen-2xl px-5 sm:px-8 md:px-10 lg:px-12 xl:px-18">

                {/* Section heading */}
                <div className="border-b border-neutral-200 pb-6 sm:pb-8">
                    <h2
                        id="our-process-heading"
                        data-process-reveal="heading"
                        className="max-w-2xl font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl"
                    >
                        Our Process
                    </h2>
                </div>

                {/* Timeline */}
                <div className="relative mx-auto mt-10 max-w-5xl sm:mt-14">

                    {/* Timeline line */}
                    <div
                        data-process-track
                        aria-hidden="true"
                        className="absolute bottom-2 left-4 top-2 border-l border-dashed border-neutral-300 md:left-1/2 md:-translate-x-1/2"
                    >
                        <ArrowDown
                            size={18}
                            strokeWidth={1.5}
                            className="absolute -bottom-5 -left-2.25 rounded-full bg-white text-neutral-500"
                        />
                    </div>

                    {processSteps.map((step, index) => {
                        const stepNumber = String(index + 1).padStart(2, "0");
                        const isLeft = index % 2 === 0;

                        return (
                            <article
                                key={step.title}
                                data-process-reveal="step"
                                data-process-delay={index % 4}
                                data-process-item
                                className="group relative grid grid-cols-[2rem_minmax(0,1fr)] pb-12 last:pb-0 sm:pb-16 md:grid-cols-2"
                            >
                                {/* Timeline marker */}
                                <span
                                    data-process-marker
                                    aria-hidden="true"
                                    className="absolute left-4 top-5 z-10 size-2.5 -translate-x-1/2 rounded-full border border-neutral-800 bg-white ring-4 ring-white transition-transform duration-300 group-hover:scale-125 group-hover:bg-black md:left-1/2 md:top-1/2 md:-translate-y-1/2"
                                />

                                {/* Step content */}
                                <div
                                    className={[
                                        "col-start-2 min-w-0 pl-4",
                                        "md:row-start-1 md:flex md:items-center md:pl-0",
                                        isLeft
                                            ? "md:col-start-1 md:justify-end md:pr-12 lg:pr-20 md:text-right"
                                            : "md:col-start-2 md:justify-start md:pl-12 lg:pl-20 md:text-left",
                                    ].join(" ")}
                                >
                                    <div
                                        data-process-content
                                        className="max-w-md"
                                    >
                                        <span className="font-serif text-4xl leading-none text-neutral-200 transition-colors duration-300 group-hover:text-neutral-400 sm:text-5xl lg:text-6xl">
                                            /{stepNumber}
                                        </span>

                                        <h3 className="mt-3 font-heading text-xl tracking-wide text-neutral-900 sm:text-2xl lg:text-3xl">
                                            {step.title}
                                        </h3>

                                        <p className="mt-3 text-base leading-6 tracking-wide text-neutral-600/50 sm:text-lg sm:leading-7">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
