"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

import "../../../style/Contact/Contact.css";

const TopMinHeading = "Contact us";
const MainHeading = "LET's BEGIN A CONVERSATION";

const MainContent = `Tell us more about your space, your ideas, and your aspirations.
We'll guide you through the next steps with care and intention.`;

export default function ContactSection() {
    const [submitted, setSubmitted] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const elements = Array.from(
            section.querySelectorAll("[data-contact-reveal]")
        );

        const revealAll = () => {
            elements.forEach((element) => {
                element.classList.add("contact-is-visible");
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
                            element.dataset.contactDelay || 0
                        );

                        element.style.setProperty(
                            "--contact-reveal-delay",
                            `${delay * 110}ms`
                        );

                        element.classList.add("contact-is-visible");
                    } else {
                        // Replay the animation when the element re-enters view.
                        element.classList.remove("contact-is-visible");
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

    function handleSubmit(event) {
        event.preventDefault();

        // Connect your backend or email service here.
        setSubmitted(true);
        event.currentTarget.reset();
    }

    return (
        <main className="contact-page w-full overflow-hidden bg-white text-black">
            {/* Contact form */}
            <section
                ref={sectionRef}
                className="mx-auto grid w-full max-w-screen-2xl grid-cols-1 gap-10 px-5 py-12 sm:px-8 sm:py-16 md:grid-cols-2 md:gap-12 md:px-12 lg:gap-20 lg:px-16 lg:py-24"
            >
                {/* Left content */}
                <div className="flex flex-col justify-center">
                    <p
                        data-contact-reveal="up"
                        data-contact-delay="0"
                        className="mb-5 text-xs font-medium uppercase tracking-widest text-neutral-500"
                    >
                        {TopMinHeading}
                    </p>

                    <h2
                        data-contact-reveal="left"
                        data-contact-delay="1"
                        className="max-w-xl font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl"
                    >
                        {MainHeading}
                    </h2>

                    <p
                        data-contact-reveal="up"
                        data-contact-delay="2"
                        className="mt-5 max-w-lg text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7"
                    >
                        {MainContent}
                    </p>
                </div>

                {/* Right form */}
                <div className="w-full">
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-7"
                    >
                        <div
                            data-contact-reveal="up"
                            data-contact-delay="1"
                        >
                            <label htmlFor="contact-name" className="sr-only">
                                Name
                            </label>
                            <input
                                id="contact-name"
                                name="name"
                                type="text"
                                placeholder="Name"
                                autoComplete="name"
                                required
                                className="w-full border-0 border-b border-neutral-300 bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-neutral-400 focus:border-black"
                            />
                        </div>

                        <div
                            data-contact-reveal="up"
                            data-contact-delay="2"
                            className="grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-10"
                        >
                            <div>
                                <label htmlFor="contact-phone" className="sr-only">
                                    Phone
                                </label>
                                <input
                                    id="contact-phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="Phone"
                                    autoComplete="tel"
                                    required
                                    className="w-full border-0 border-b border-neutral-300 bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-neutral-400 focus:border-black"
                                />
                            </div>

                            <div>
                                <label htmlFor="contact-email" className="sr-only">
                                    Email
                                </label>
                                <input
                                    id="contact-email"
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    autoComplete="email"
                                    required
                                    className="w-full border-0 border-b border-neutral-300 bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-neutral-400 focus:border-black"
                                />
                            </div>
                        </div>

                        <div
                            data-contact-reveal="up"
                            data-contact-delay="3"
                        >
                            <label htmlFor="contact-message" className="sr-only">
                                Message
                            </label>
                            <textarea
                                id="contact-message"
                                name="message"
                                placeholder="Message"
                                rows={4}
                                required
                                className="w-full resize-y border border-neutral-300 bg-transparent px-4 py-4 text-sm outline-none transition-colors placeholder:text-neutral-400 focus:border-black sm:rows-5"
                            />
                        </div>

                        <div
                            data-contact-reveal="up"
                            data-contact-delay="4"
                            className="pt-1"
                        >
                            <button
                                type="submit"
                                className="contact-submit group inline-flex items-center gap-3 border-b border-neutral-400 pb-2 text-xs font-semibold uppercase tracking-widest transition-colors hover:border-black"
                            >
                                Send request

                                <ArrowRight
                                    size={16}
                                    className="contact-submit-arrow transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </button>

                            {submitted && (
                                <p
                                    role="status"
                                    className="contact-submission-status mt-4 text-sm text-green-700"
                                >
                                    Form submitted locally. Connect a backend to send your
                                    request to KR Decor.
                                </p>
                            )}
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}