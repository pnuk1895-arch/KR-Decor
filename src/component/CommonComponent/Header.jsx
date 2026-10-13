
"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "ABOUT US", href: "/About" },
  { name: "SERVICES", href: "/Services" },
  { name: "OUR WORK", href: "/Work" },
  { name: "HOME INTERIOR", href: "/Home-Interior" },
  { name: "MODULAR KITCHEN", href: "/Modular-Kitchen" },
  { name: "MODULAR WARDROBE", href: "/Modular-Wardrobe" },
  { name: "CAREER", href: "/Career" },
  { name: "OUR TEAMS", href: "/Our-Teams" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const headerTheme = menuOpen
    ? "bg-white text-black shadow-[0_4px_12px_rgba(0,0,0,0.08)] border-b border-black/10"
    : scrolled
      ? "bg-white text-black shadow-sm"
      : "bg-transparent text-white";

  const linkTheme = scrolled
    ? "text-black/60 hover:text-black"
    : "text-white/70 hover:text-white";

  const quoteTheme = scrolled
    ? "text-black hover:text-black"
    : "text-white hover:text-white";

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${headerTheme}`}
      >
        <div className="mx-auto flex h-20 max-w-screen-2xl items-center justify-between gap-6 px-3 sm:px-8 lg:h-24 lg:px-8 xl:px-16">
          {/* RESPONSIVE LOGO */}
          <div className="relative h-10 w-24 shrink-0 lg:h-12 lg:w-32 xl:h-12 xl:w-36 2xl:w-40">
            <Link
              href="/"
              aria-label="KR Decor home"
              className="relative block h-full w-full"
            >
              <Image
                src="/Images/KR_Decor_logo.svg"
                alt="KR Decor"
                fill
                priority
                sizes="(min-width: 1536px) 160px, (min-width: 1280px) 144px, (min-width: 1024px) 128px, (min-width: 768px) 112px, (min-width: 640px) 96px, 80px"
                className={`object-contain object-left transition-all duration-300 ${menuOpen ? "brightness-0" : ""
                  }`}
              />
            </Link>
          </div>

          {/* DESKTOP NAVIGATION: LG AND ABOVE */}
          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-2 lg:flex lg:gap-3 xl:gap-3 2xl:gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`whitespace-nowrap text-[9px] font-semibold tracking-normal transition-colors duration-300 lg:text-[11px] xl:text-[13px] xl:tracking-wide 2xl:text-xs 2xl:tracking-wider ${linkTheme}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* DESKTOP GET A QUOTE: ORIGINAL XL BREAKPOINT */}
          <Link
            href="/contact"
            className={`group hidden shrink-0 items-center gap-3 border-b border-current/30 pb-2 text-xs font-bold tracking-widest transition-colors duration-300 xl:flex ${quoteTheme}`}
          >
            <span>GET A QUOTE</span>
            <ArrowRight
              size={19}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </Link>

          {/* MOBILE / TABLET ACTIONS: ORIGINAL XL BREAKPOINT */}
          <div className="flex shrink-0 items-center gap-5 xl:hidden">
            {/* MOBILE / TABLET GET A QUOTE */}
            <Link
              href="/contact"
              className={`group hidden items-center gap-2 border-b border-current/30 pb-2 text-xs font-bold tracking-wider transition-colors duration-300 sm:flex ${menuOpen ? "sm:hidden" : ""
                } ${scrolled ? "text-black" : "text-white"}`}
            >
              GET A QUOTE
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </Link>

            {/* MENU BUTTON */}
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className={`flex lg:hidden items-center gap-2 text-xs font-bold tracking-widest ${menuOpen || scrolled ? "text-black" : "text-white"
                }`}
            >
              {menuOpen ? "CLOSE" : "MENU"}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE / TABLET SIDEBAR */}
      <aside
        className={`fixed inset-x-0 bottom-0 top-20 z-40 overflow-y-auto bg-white text-black transition-transform duration-500 ease-in-out sm:top-18 xl:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex min-h-full flex-col px-6 pb-8 pt-8 sm:px-10">
          {/* NAVIGATION LINKS */}
          <nav className="flex flex-col">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="group flex items-center justify-between border-b border-transparent py-4 font-serif text-2xl tracking-widest text-stone-500 transition-colors duration-300 hover:text-black sm:text-3xl"
                style={{
                  transitionDelay: menuOpen ? `${index * 35}ms` : "0ms",
                }}
              >
                <span>{link.name}</span>
                <ArrowRight
                  size={20}
                  className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                />
              </Link>
            ))}
          </nav>

          {/* CENTERED SIDEBAR GET A QUOTE */}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="group mt-6 flex items-center justify-center gap-3 border-b border-black/20 py-5 text-sm font-bold tracking-widest text-black"
          >
            GET A QUOTE
            <ArrowRight
              size={21}
              className="transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </Link>
        </div>
      </aside>
    </>
  );
}
