
import Image from "next/image";

const interiors = [
    {
        image: "/Images/HomeInterior/Image1.webp",
        title: "Luxurious Warm Modern Living Space",
        alt: "Warm modern living room with elegant lighting and neutral furniture",
    },
    {
        image: "/Images/HomeInterior/Image2.webp",
        title: "Moody Green and Gold Luxury Bedroom",
        alt: "Luxury bedroom with dark green accents and warm gold lighting",
    },
    {
        image: "/Images/HomeInterior/Image3.webp",
        title: "Luxurious Modern Indoor Garden Atrium",
        alt: "Modern luxury home with indoor garden and architectural staircase",
    },
    {
        image: "/Images/HomeInterior/Image4.webp",
        title: "Sunlit Indoor-Outdoor Luxury Living Space",
        alt: "Bright luxury living room opening onto an outdoor garden",
    },
    {
        image: "/Images/HomeInterior/Image5.webp",
        title: "Modern Luxury Villa in Daylight",
        alt: "Contemporary luxury villa with landscaped front garden",
    },
    {
        image: "/Images/HomeInterior/Image6.webp",
        title: "Twilight Modern Villa Retreat",
        alt: "Modern luxury villa illuminated with warm architectural lighting at dusk",
    },
];

export function InteriorCard({ image, title, alt }) {
    return (
        <article className="group min-w-0">
            {/* Image */}
            <div className="relative aspect-4/5 w-full overflow-hidden bg-neutral-100">
                <Image
                    src={image}
                    alt={alt}
                    fill
                    sizes="(max-width: 639px) 90vw, (max-width: 767px) 44vw, (max-width: 1279px) 30vw, 28vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transform-none"
                />

                {/* Subtle hover overlay */}
                <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/5" />
            </div>

            {/* Caption */}
            <h3 className="mt-3 font-heading text-sm font-normal leading-relaxed text-neutral-800 transition-colors duration-300 group-hover:text-black sm:text-base">
                {title}
            </h3>
        </article>
    );
}

export function InteriorGallery() {
    return (
        <section className="w-full bg-white text-black">
            <div className="mx-auto w-[90%] max-w-screen-2xl py-10 sm:py-14 md:py-16 lg:py-20">
                {/* Heading */}
                <div className="flex flex-col gap-5 border-b border-neutral-200 pb-6 md:flex-row md:items-end md:justify-between md:gap-10">
                    <h2 className="max-w-2xl font-heading text-4xl font-normal leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                        Bespoke Full Home Interiors
                    </h2>

                    <p className="max-w-sm text-sm leading-relaxed text-neutral-500 md:pb-1">
                        Curating emotionally resonant living spaces from our Jasola Apollo
                        studio in New Delhi with complete turnkey execution.
                    </p>
                </div>

                {/* Gallery */}
                <div className="mt-8 grid grid-cols-1 gap-x-4 gap-y-8 sm:mt-10 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-10 md:mt-12 md:grid-cols-3 md:gap-x-4 lg:gap-x-5">
                    {interiors.map((interior) => (
                        <InteriorCard key={interior.title} {...interior} />
                    ))}
                </div>
            </div>
        </section>
    );
}
