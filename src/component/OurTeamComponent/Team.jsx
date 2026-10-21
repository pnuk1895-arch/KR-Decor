"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import "../../../style/OurTeam/Team.css";

const teamMembers = [
    {
        name: "Kaif Raza",
        role: "Founder & CEO",
        image: "/Images/Team/KaifRaza.webp",
        alt: "Kaif Raza, founder and CEO of KR Decor",
    },
];

const TopMinHeading = "The minds behind KR Decor";
const MainHeading = "Crafted by visionaries";

const MainContent = `Operating from our studio at F Block, Plot Number 160, Jasola
Apollo, New Delhi, our multidisciplinary team brings together
rigorous architecture, engineering precision, and quiet luxury
design.`;

const heading = "Ready to collaborate on your dream interior?";

const Content = `Connect with our design experts via WhatsApp at +91 99583 84263
or visit our Jasola Apollo studio.`;

export default function OurTeams() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const elements = Array.from(
            section.querySelectorAll("[data-team-reveal]")
        );

        const revealAll = () => {
            elements.forEach((element) => {
                element.classList.add("team-is-visible");
            });
        };

        if (
            window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
            typeof IntersectionObserver === "undefined"
        ) {
            revealAll();
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const element = entry.target;

                    if (entry.isIntersecting) {
                        const delay = Number(
                            element.dataset.teamDelay || 0
                        );

                        element.style.setProperty(
                            "--team-reveal-delay",
                            `${delay * 110}ms`
                        );

                        element.classList.add("team-is-visible");
                    } else {
                        // Reset when the element leaves the viewport.
                        // It will animate again when it re-enters.
                        element.classList.remove("team-is-visible");
                    }
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
            className="our-teams w-full bg-white text-black"
        >
            <div className="mx-auto w-full max-w-screen-2xl px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">

                {/* Section heading */}
                <div className="grid grid-cols-1 gap-6 border-b border-neutral-100 pb-8 sm:pb-10 md:grid-cols-2 md:items-center md:gap-10">
                    <div>
                        <p
                            data-team-reveal="up"
                            data-team-delay="0"
                            className="mb-4 text-xs font-medium uppercase tracking-widest text-neutral-500"
                        >
                            {TopMinHeading}
                        </p>

                        <h2
                            data-team-reveal="left"
                            data-team-delay="1"
                            className="font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl"
                        >
                            Crafted by
                            <br />
                            <span className="italic">visionaries</span>
                        </h2>
                    </div>

                    <p
                        data-team-reveal="right"
                        data-team-delay="2"
                        className="max-w-lg text-sm leading-7 text-neutral-600 md:ml-auto lg:text-base"
                    >
                        {MainContent}
                    </p>
                </div>

                {/* Team members */}
                <div className="grid grid-cols-1 gap-10 py-12 sm:py-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 lg:py-20">
                    {teamMembers.map((member, index) => (
                        <article
                            key={member.name}
                            data-team-reveal="card"
                            data-team-delay={index}
                            className="team-member group w-full max-w-sm"
                        >
                            <div
                                data-team-image
                                className="relative aspect-4/5 w-full overflow-hidden bg-neutral-50"
                            >
                                <Image
                                    src={member.image}
                                    alt={member.alt}
                                    fill
                                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                                    className="object-cover object-top transition-transform duration-700"
                                />

                                {/* Image hover indicator */}
                                <span
                                    aria-hidden="true"
                                    className="team-image-indicator pointer-events-none absolute bottom-4 right-4 z-10 flex size-10 translate-y-2 items-center justify-center rounded-full bg-white text-black opacity-0"
                                >
                                    <ArrowRight size={18} strokeWidth={1.5} />
                                </span>
                            </div>

                            <div className="team-member-details pt-4">
                                <p className="mb-2 text-xs font-medium uppercase tracking-widest text-neutral-500">
                                    {member.role}
                                </p>

                                <h3 className="font-serif text-xl">
                                    {member.name}
                                </h3>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Consultation banner */}
                <div className="team-consultation flex flex-col gap-6 bg-neutral-100 px-6 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10 lg:py-10">
                    <div
                        data-team-reveal="up"
                        data-team-delay="0"
                        className="max-w-2xl"
                    >
                        <h3 className="font-serif text-2xl leading-snug sm:text-3xl">
                            {heading}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-neutral-600">
                            {Content}
                        </p>
                    </div>

                    <Link
                        href="/contact"
                        data-team-reveal="right"
                        data-team-delay="1"
                        className="team-consultation-link group inline-flex w-fit shrink-0 items-center gap-3 border-b border-neutral-400 pb-2 text-xs font-semibold uppercase tracking-widest transition-colors hover:border-black"
                    >
                        Schedule consultation

                        <ArrowRight
                            size={16}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
}