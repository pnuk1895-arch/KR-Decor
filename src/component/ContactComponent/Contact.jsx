
"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function ContactSection() {
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();

        // Connect your backend or email service here.
        setSubmitted(true);
        event.currentTarget.reset();
    }

    return (
        <main className="w-full overflow-hidden bg-white text-black">


            {/* Contact form */}
            <section className="mx-auto grid w-full max-w-screen-2xl grid-cols-1 gap-10 px-5 py-12 sm:px-8 sm:py-16 md:grid-cols-2 md:gap-12 md:px-12 lg:gap-20 lg:px-16 lg:py-24">
                {/* Left content */}
                <div className="flex flex-col justify-center">
                    <p className="mb-5 text-xs font-medium uppercase tracking-widest text-neutral-500">
                        Contact us
                    </p>

                    <h2 className="max-w-xl font-serif text-4xl uppercase leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                        Let&apos;s begin a conversation
                    </h2>

                    <p className="mt-5 max-w-lg text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
                        Tell us more about your space, your ideas, and your aspirations.
                        We&apos;ll guide you through the next steps with care and intention.
                    </p>
                </div>

                {/* Right form */}
                <div className="w-full">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-7">
                        <div>
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

                        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-10">
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

                        <div>
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

                        <div className="pt-1">
                            <button
                                type="submit"
                                className="group inline-flex items-center gap-3 border-b border-neutral-400 pb-2 text-xs font-semibold uppercase tracking-widest transition-colors hover:border-black"
                            >
                                Send request
                                <ArrowRight
                                    size={16}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </button>

                            {submitted && (
                                <p
                                    role="status"
                                    className="mt-4 text-sm text-green-700"
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
