
"use client";

import { useState } from "react";
import { X, Sparkles } from "lucide-react";
import { Icon } from "@iconify/react"

const whatsappUrl =
  "https://wa.me/919958384263?text=Hello%2C%20I%20would%20like%20to%20discuss%20my%20interior%20design%20project.";

function WhatsAppIcon({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.4L3 20.3l1.2-4.7A8.5 8.5 0 1 1 20.5 11.7Z" />
      <path d="M8.3 7.8c.2-.4.4-.5.7-.5h.5c.2 0 .4.2.5.4l.8 1.8c.1.2.1.4-.1.6l-.6.7c-.2.2-.2.4-.1.6.5.9 1.4 1.7 2.3 2.1.2.1.4.1.6-.1l.8-1c.2-.2.4-.2.6-.1l1.8.8c.2.1.3.3.3.5 0 .3-.2 1.2-.7 1.6-.5.5-1.2.7-1.9.6-1.1-.2-2.4-.8-3.6-1.8-1.1-1-1.9-2.2-2.1-3.2-.2-.7 0-1.5.4-2Z" />
    </svg>
  );
}

export default function WhatsAppConcierge() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => setIsOpen((previous) => !previous);

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 sm:bottom-6 sm:left-auto sm:right-6">

      {/* Concierge Popup */}
      <div
        role="dialog"
        aria-label="KR Decor Concierge"
        aria-hidden={!isOpen}
        className={[
          "absolute bottom-20 sm:bottom-24 left-auto right-0 w-full max-w-96",
          "border border-neutral-300 bg-white p-5 shadow-2xl sm:w-96 sm:p-6",
          "transition-all duration-300 ease-out",
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible pointer-events-none translate-y-3 opacity-0",
        ].join(" ")}
      >
        {/* Popup Header */}
        <div className="flex items-start justify-between gap-3 border-b border-neutral-200 pb-4">
          <div>
            <h2 className="font-heading text-lg font-normal uppercase leading-tight tracking-wide text-neutral-900 sm:text-xl">
              KR Decor Concierge
            </h2>

            <p className="mt-1 text-xs uppercase tracking-widest text-neutral-500">
              Typically replies instantly
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close concierge popup"
            className="group flex size-8 shrink-0 items-center justify-center text-neutral-500 transition-colors hover:text-black"
          >
            <X
              size={21}
              strokeWidth={1.5}
              className="rotate-0 transition-transform duration-300 group-hover:rotate-0 group-hover:scale-110"
            />
          </button>
        </div>

        {/* Welcome Message */}
        <p className="py-5 text-sm leading-6 text-neutral-500 sm:text-base sm:leading-6">
          Namaste! Welcome to KR Decor. How may we assist you with your luxury
          interior aspirations today?
        </p>

        {/* WhatsApp Link */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex min-h-12 w-full items-center justify-center gap-3 bg-neutral-950 px-4 py-3 text-center text-xs font-medium uppercase tracking-widest text-white transition-colors duration-300 hover:bg-neutral-800 sm:text-sm"
        >
          <WhatsAppIcon className="size-5 shrink-0 rotate-6 transition-transform duration-300 group-hover:rotate-0 group-hover:scale-110" />

          <span>Start WhatsApp Chat</span>
        </a>
      </div>

      {/* Floating Buttons */}
      <div className="flex items-center justify-end gap-2 sm:gap-3">

        {/* Let's Talk Design */}
        <div
          className="animate-bounce inline-flex min-h-8  items-center gap-2 border border-neutral-300 bg-white shadow-lg transition-all duration-300 hover:shadow-xl sm:px-3 sm-py-1"
        >
          <span className="whitespace-nowrap anima text-[10px] font-medium uppercase tracking-wider text-neutral-800 sm:text-[12px] sm:tracking-wide">
            Let&apos;s Talk Design
          </span>

          <Sparkles
            size={15}
            aria-hidden="true"
            className="shrink-0 text-amber-500 transition-transform duration-300"
          />
        </div>

        {/* Circular WhatsApp / Close Button */}
        <button
          type="button"
          onClick={togglePopup}
          aria-label={isOpen ? "Close concierge" : "Open WhatsApp concierge"}
          aria-expanded={isOpen}
          className="relative group flex shrink-0 items-center justify-center rounded-full bg-neutral-100 transition-transform duration-300 hover:scale-105 active:scale-95"
        >
          <span className=" absolute animate-ring h-2.5 w-2.5 rounded-full bg-black " />
          <span className="flex size-12 items-center justify-center rounded-full bg-neutral-950 text-white shadow-sm transition-colors duration-300 group-hover:bg-neutral-800 sm:size-14">
            {isOpen ? (
              <X
                size={27} 
                strokeWidth={1.5}
                className="rotate-0 transition-transform duration-300 group-hover:rotate-0 group-hover:scale-110"
              />
            ) : (
              <Icon
              icon="bxl:whatsapp"
              className="size-7 rotate-0 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110 sm:size-8"
              />
            )}
          </span>
        </button>
      </div>
    </div>
  );
}
