"use client";

import { useEffect, useRef } from "react";

import "../../../style/Privacy/Privacy.css";

const privacySections = [
    {
        title: "Information We Collect",
        description:
            "When you interact with KR Decor, we may collect personal information such as your name, email address, phone number, and specific project details regarding full home interiors, modular kitchens, modular wardrobes, and work. We also collect non-personal data through website analytics to improve our digital experience.",
    },
    {
        title: "How We Use Your Information",
        description:
            "Your personal information is strictly used to provide tailored bespoke interior solutions, architecture design consultation, project updates, respond to your inquiries, and enhance our overall service quality. We do not use your data for unrelated promotional purposes without your explicit consent.",
    },
    {
        title: "Data Security",
        description:
            "We implement robust, industry-standard security measures to safeguard your personal and project-related information against unauthorized access, alteration, or disclosure. Your privacy is treated with the same meticulous care as our studio projects at Jasola Apollo, New Delhi.",
    },
    {
        title: "Third-Party Sharing",
        description:
            "KR Decor does not sell, trade, or rent your personal information to third parties. We may share necessary details with trusted execution partners, vendors, or contractors strictly for the purpose of fulfilling your design project requirements.",
    },
    {
        title: "Your Rights",
        description:
            "You have the right to access, modify, or request the deletion of your personal data at any time. To exercise these rights or if you have any questions regarding our privacy practices, please contact us through our official channels or WhatsApp at +91 9958384263.",
    },
];

const HeadingContent =
    "Last updated: October 2026. This Privacy Policy governs the manner in which KR Decor collects, uses, and protects your information.";

export default function PrivacyPage() {
    const pageRef = useRef(null);

    useEffect(() => {
        const page = pageRef.current;
        if (!page) return;

        const elements = Array.from(
            page.querySelectorAll("[data-privacy-reveal]")
        );

        const revealAll = () => {
            elements.forEach((element) => {
                element.classList.add("privacy-is-visible");
            });
        };

        // Keep content visible for reduced-motion users and
        // browsers without IntersectionObserver support.
        if (
            window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
            typeof IntersectionObserver === "undefined"
        ) {
            revealAll();
            return;
        }

        // Enable animation styles only after JavaScript initializes.
        page.classList.add("privacy-motion-ready");

        const observer = new IntersectionObserver(
            (entries) => {
                const entering = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            a.boundingClientRect.top - b.boundingClientRect.top
                    );

                // Stagger elements that enter together from top to bottom.
                entering.forEach((entry, index) => {
                    const element = entry.target;

                    element.style.setProperty(
                        "--privacy-reveal-delay",
                        `${index * 110}ms`
                    );

                    element.classList.add("privacy-is-visible");
                });

                // Reset elements that leave the viewport so they replay.
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) {
                        entry.target.classList.remove("privacy-is-visible");
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -35px 0px",
            }
        );

        elements.forEach((element) => {
            observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <main
            ref={pageRef}
            className="privacy-page w-full overflow-hidden bg-white text-neutral-900"
        >
            {/* Privacy Policy Content */}
            <section
                aria-label="Privacy policy"
                className="mx-auto w-full max-w-screen-2xl px-5 py-12 sm:px-8 sm:pb-14 sm:pt-10 md:px-10 lg:px-12 lg:pb-16 lg:pt-12 xl:px-18"
            >
                {/* Introduction */}
                <div
                    data-privacy-reveal="intro"
                    className="border-b border-neutral-100 pb-6 sm:pb-8"
                >
                    <p className="max-w-3xl text-sm leading-5 tracking-wide text-neutral-500 sm:leading-6">
                        {HeadingContent}
                    </p>
                </div>

                {/* Policy Sections */}
                <div className="space-y-7 py-12 sm:space-y-9 sm:py-14 lg:space-y-10 lg:py-18">
                    {privacySections.map((section, index) => (
                        <article
                            key={section.title}
                            data-privacy-reveal="article"
                            data-privacy-index={index}
                            className="privacy-article"
                        >
                            <h2 className="privacy-article-heading font-heading text-lg font-normal leading-snug text-neutral-900 sm:text-2xl">
                                <span className="mr-1">{index + 1}.</span>
                                {section.title}
                            </h2>

                            <p className="privacy-article-description mt-3 max-w-6xl text-sm leading-5 tracking-wider text-neutral-500 sm:leading-6 lg:text-base lg:leading-7">
                                {section.description}
                            </p>
                        </article>
                    ))}
                </div>

                {/* Bottom Divider */}
                <div
                    aria-hidden="true"
                    className="border-t border-neutral-100"
                />
            </section>
        </main>
    );
}