
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    handle: "@KRDECOR.STUDIO",
    href: "https://www.instagram.com/krdecor.studio/",
  },
  {
    name: "LinkedIn",
    handle: "KR DECOR",
    href: "https://www.linkedin.com/",
  },
  {
    name: "Facebook",
    handle: "KR DECOR OFFICIAL",
    href: "https://www.facebook.com/",
  },
];

export default function Links() {
  return (
      <section className="bg-[#f5f5f5] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="border-b border-gray-300 pb-8 font-serif text-3xl tracking-tight text-black sm:pb-10 sm:text-4xl lg:text-5xl">
            Follow Our Journey
          </h2>

          <div className="mt-6">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit KR Decor on ${social.name}`}
                className="group flex items-center justify-between gap-4 border-b border-gray-300 py-7 sm:py-8 lg:py-10"
              >
                <div className="flex flex-row gap-1 sm:gap-18 ">
                  <span className="font-serif text-3xl text-black transition-transform duration-300 group-hover:translate-x-2 sm:text-4xl lg:text-5xl">
                    {social.name}
                  </span>

                  <span className="text-xs mt-3 uppercase tracking-widest text-transparent sm:text-sm transition-all duration-200 ease-in group-hover:text-black">
                    {social.handle}
                  </span>
                </div>

                <ArrowUpRight
                  size={26}
                  strokeWidth={1}
                  className="shrink-0 text-gray-500 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black sm:size-8"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
  );
}
