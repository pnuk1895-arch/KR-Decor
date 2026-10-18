import Image from "next/image";

const kitchens = [
  {
    image: "/Images/Services/Image1.webp",
    title: "Warmly Lit Luxury Kitchen",
    alt: "Warm luxury kitchen with wooden cabinets and golden lighting",
  },
  {
    image: "/Images/Services/Image2.webp",
    title: "Luxurious Green Marble Kitchen",
    alt: "Modern green modular kitchen with marble countertops",
  },
  {
    image: "/Images/Services/Image1.webp",
    title: "Luxurious Navy Kitchen with Marble Island",
    alt: "Navy luxury kitchen with a marble island and pendant lighting",
  },
  {
    image: "/Images/Services/Image2.webp",
    title: "Moody Black Marble Luxury Kitchen",
    alt: "Black marble kitchen with warm accent lighting",
  },
  {
    image: "/Images/Services/Image1.webp",
    title: "Sage Green Luxury Kitchen Island",
    alt: "Sage green kitchen with a contemporary island",
  },
  {
    image: "/Images/Services/Image2.webp",
    title: "Luxurious Marble Kitchen with Golden Ring Lights",
    alt: "Luxury marble kitchen with golden ring pendant lights",
  },
];

export default function ModularKitchenSection() {
  return (
    <section className="w-full bg-white text-black">
      <div className="mx-auto w-full max-w-screen-2xl px-5 py-10 sm:px-8 sm:py-14 md:px-10 md:py-16 lg:px-12 lg:py-20 xl:px-18 ">
        {/* Section heading */}
        <div className="border-b border-black/10 pb-6 sm:pb-8">
          <h2 className="max-w-3xl font-heading text-4xl font-normal leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Modular Kitchen Mastery
          </h2>
        </div>

        {/* Kitchen gallery */}
        <div className="mt-8 grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 md:mt-10 md:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
          {kitchens.map((kitchen) => (
            <article key={kitchen.title} className="group min-w-0">
              {/* Image */}
              <div className="relative aspect-4/3 w-full overflow-hidden bg-neutral-100">
                <Image
                  src={kitchen.image}
                  alt={kitchen.alt}
                  fill
                  sizes="(max-width: 639px) 90vw, (max-width: 1023px) 43vw, 28vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
                />

                {/* Hover overlay */}
                <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
              </div>

              {/* Image title */}
              <h3 className="mt-3 font-heading text-base font-normal leading-snug sm:mt-4 sm:text-lg">
                {kitchen.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}