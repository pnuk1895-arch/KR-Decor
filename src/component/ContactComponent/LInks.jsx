
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    handle: "@KRDECOR.STUDIO",
    href: "https://www.instagram.com/_krdecor_/?hl=en",
  },
  {
    name: "LinkedIn",
    handle: "KR DECOR",
    href: "/Contact",
  },
  {
    name: "Facebook",
    handle: "KR DECOR OFFICIAL",
    href: "https://www.facebook.com/people/KRDecor/61587064716293/",
  },
];

const MainHeading="Follow Our Journey"

export default function Links() {
  return (
      <section className="bg-[#f5f5f5] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-screen-2xl px-5 sm:px-8 md:px-10 lg:px-12 xl:px-15">
          <h2 className="border-b border-gray-300 pb-8 font-heading text-4xl tracking-tighter text-black sd:pb-10 
          md:pb-12 md:text-5xl lg:text-6xl">
            {MainHeading}
          </h2>

          <div className="mt-6">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit KR Decor on ${social.name}`}
                className="group flex items-center justify-between gap-4 border-b border-gray-300 py-7 sm:py-8 md:py-12 lg:py-14"
              >
                <div className="flex flex-col md:flex-row -gap-4 md:gap-18 ">
                  <span className="font-heading text-3xl text-black transition-transform duration-300 group-hover:translate-x-6 sm:text-4xl md:text-5xl lg:text-6xl">
                    {social.name}
                  </span>

                  <span className="text-sm mt-3 uppercase tracking-widest text-gray-500/70 md:text-transparent sm:text-base transition-all duration-200 ease-in group-hover:translate-x-4 group-hover:text-black">
                    {social.handle}
                  </span>
                </div>

                <ArrowUpRight
                  size={26}
                  strokeWidth={1}
                  className="shrink-0 text-gray-500 md:h-14! md:w-14! transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black sm:size-8"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
  );
}
