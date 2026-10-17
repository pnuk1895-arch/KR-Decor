"use client"


import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaArrowUp } from "react-icons/fa";

const navigationLinks = [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Home Interior", href: "/home-interior" },
    { label: "Modular Kitchen", href: "/modular-kitchen" },
    { label: "Modular Wardrobe", href: "/modular-wardrobe" },
    { label: "Our Work", href: "/our-work" },
    { label: "Our Teams", href: "/our-teams" },
    { label: "Career", href: "/career" },
];

const marqueeItems = Array.from({ length: 2 });

const headingClass =
    "mb-5 text-[12px] font-semibold uppercase leading-[1.4] tracking-[0.1em] text-[#777777] sm:mb-2 sm:text-[14px] sm:tracking-[0.1em]";

const linkClass =
    "w-fit text-[12px] font-semibold uppercase scale-x-110 leading-[1.65] tracking-[0.025em] text-[#171717] transition-colors duration-300 hover:text-[#858585] sm:text-[13px] sm:leading-[1.8]";

export default function Footer() {
    return (
        <footer className="overflow-hidden bg-white text-[#171717]">
            {/* Footer content */}
            <div className="mx-auto w-full max-w-screen-2xl px-5 pb-12 pt-16 sm:px-8 sm:pb-14 sm:pt-20 md:px-10 md:pb-16 md:pt-24 lg:px-12 lg:pt-28 xl:px-18">
                <div className="grid grid-cols-2 gap-x-10 gap-y-12 sm:gap-y-12 lg:grid-cols-[1.25fr_0.8fr_0.65fr_1fr] lg:gap-x-12">
                    {/* Brand */}
                    <div className="min-w-0 col-span-2 lg:col-span-1">
                        <Link
                            href="/"
                            aria-label="KR Decor home"
                            className="inline-flex"
                        >
                            <Image
                                src="/Images/KR_Decor_logo.svg"
                                alt="KR Decor"
                                width={190}
                                height={70}
                                className="h-auto w-33.75 object-contain object-left brightness-0 sm:w-38.75 lg:w-42.5"
                            />
                        </Link>

                        <p className="mt-5 max-w-85 text-[13px] font-normal leading-[1.8] tracking-[0.005em] text-[#777777] sm:mt-6 sm:text-[13px] sm:leading-[1.85]">
                            Specializing in architecture design, full home interiors,
                            modular kitchens, wardrobes, and TV units with quiet luxury
                            and precision craft.
                        </p>

                        <div className="mt-4 flex items-center gap-2">
                            <Link
                                href="https://www.instagram.com/_krdecor_/?hl=en"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="flex items-center justify-start text-[13px] text-[#171717] transition-colors hover:text-[#858585]"
                            >
                                <FaInstagram className="h-5 w-5" />
                            </Link>

                            <Link
                                href="https://www.facebook.com/people/KRDecor/61587064716293/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="flex h-6 w-5 items-center justify-start text-[12px] text-[#171717] transition-colors hover:text-[#858585]"
                            >
                                <FaFacebookF className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav aria-label="Footer navigation" className="min-w-0">
                        <h2 className={headingClass}>Navigation</h2>

                        <ul className="flex flex-col items-start gap-1.75 sm:gap-2">
                            {navigationLinks.map((item) => (
                                <li key={item.label} className="max-w-full">
                                    <Link href={item.href} className={linkClass}>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Social */}
                    <div className="min-w-0">
                        <h2 className={headingClass}>Follow Us</h2>

                        <ul className="flex flex-col items-start gap-1.75 sm:gap-2">
                            <li>
                                <Link
                                    href="https://www.instagram.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={linkClass}
                                >
                                    Instagram
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={linkClass}
                                >
                                    Facebook
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="min-w-0 col-span-2 lg:col-span-1">
                        <h2 className={headingClass}>Studio Address &amp; Contact</h2>

                        <address className="text-[12px] font-semibold not-italic uppercase leading-[1.8] tracking-[0.015em] text-[#171717] sm:text-[13px] sm:leading-[1.85]">
                            <p>F Block, Plot Number 160,</p>
                            <p>Jasola Apollo,</p>
                            <p>New Delhi - India</p>
                        </address>

                        <div className="mt-4 flex flex-col items-start gap-2">
                            <Link
                                href="tel:+919958384263"
                                target="_blank"
                                className="wrap-break-word text-[13px] font-semibold leading-[1.8] tracking-[0.005em] text-[#171717] transition-colors hover:text-[#858585] sm:text-[13px]"
                            >
                                Call / WhatsApp: +91 99583 84263
                            </Link>

                            <Link
                                href="mailto:contact@krdecor.in"
                                target="_blank"
                                className="break-all text-[13px] font-semibold leading-[1.8] text-[#777777] transition-colors hover:text-[#171717] sm:text-[14px]"
                            >
                                contact@krdecor.in
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Large animated marquee */}
            <div
                aria-label="Get in touch with KR Decor"
                className=" block overflow-hidden py-14 sm:py-10 md:py-12 lg:py-14"
            >
                <div className="footer-marquee flex w-max">
                    {marqueeItems.map((_, index) => (
                        <div
                            key={index}
                            aria-hidden={index === 1}
                            className="flex shrink-0 items-center"
                        >
                            {Array.from({ length: 2 }).map((__, itemIndex) => (
                                <span
                                    key={itemIndex}
                                    className="flex shrink-0 items-center gap-5 px-3 sm:gap-8 sm:px-5 md:gap-10"
                                >
                                    <span className="footer-marquee-text whitespace-nowrap text-[clamp(3.1rem,10.5vw,9.5rem)] font-heading  leading-[0.95] tracking-[-0.065em] text-[#A5A5A5] transition-colors duration-300 ">
                                        <span className="italic">
                                            GET IN
                                        </span>
                                        <span className="pl-3 sm:pl-6 xl:pl-10 " >TOUCH</span>
                                    </span>

                                    <span className="relative -top-1 text-3xl font-normal text-[#A5A5A5] sm:text-2xl md:text-3xl">
                                        ✦
                                    </span>
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* Copyright and legal links */}
            <div className="mx-auto max-w-[1600px] px-6 pb-7 pt-5 sm:px-8 sm:pb-8 sm:pt-6 md:px-10 lg:px-16 xl:px-20">
                <div className="flex flex-col items-center gap-3 border-t border-[#EEEEEE] pt-5 text-center">
                    <p className="text-[12px] font-medium uppercase leading-[1.3] tracking-[0.12em] text-[#777777] sm:text-[12px] sm:tracking-[0.14em]">
                        © 2026 KR Decor. All rights reserved.
                    </p>

                    <p className="text-[11px] font-normal leading-[1.7] text-[#777777] sm:text-[13px]">
                        Designed and Developed by{" "}
                        <Link
                            href="https://axvionel.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-[#171717] transition-colors hover:text-[#777777]"
                        >
                            Axvionel Digital Private Limited
                        </Link>
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 ">
                        <Link
                            href="/privacy-policy"
                            className="text-[11px] font-normal uppercase leading-[1.7] tracking-[0.12em] text-[#777777] transition-colors hover:text-[#171717] sm:text-[12px]"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="/terms-and-conditions"
                            className="text-[11px] font-normal uppercase leading-[1.7] tracking-[0.12em] text-[#777777] transition-colors hover:text-[#171717] sm:text-[10px]"
                        >
                            Terms &amp; Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
