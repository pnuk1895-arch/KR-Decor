
import OurProcess from "@/component/AboutComponent/ProcessSection";
import CommonHero from "@/component/CommonComponent/CommonHero";
import { InteriorCard } from "@/component/Home-interior/Home-Interior";
import ClientReviews from "@/component/HomeComponent/Client";
import FAQSection from "@/component/HomeComponent/Features";

export default function Modular_Wardrobe() {
  const detail = {
    image: "/images/About/AboutImage1.webp",
    title: "ABOUT US",
    description:
      "Discover the vision, precision craftsmanship, and quiet luxury behind KR Decor's bespoke interior solutions.",
    imageAlt: "ABOUT BG",
  };

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

  return (
    <main>
      <CommonHero detail={detail} />

      {/* Interior gallery */}
      <section className="w-full bg-white text-black">
        <div className="mx-auto w-full max-w-screen-2xl px-5 py-10 sm:px-8 sm:py-14 md:px-10 md:py-16 lg:px-12 lg:py-20 xl:px-18 ">
          <div className="">
            <h2 className="w-full font-heading text-4xl font-normal leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Modular Wardrobe Systems
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-10 md:grid-cols-3 md:gap-x-4 lg:gap-x-5">
            {interiors.map((interior) => (
              <InteriorCard
                key={interior.title}
                image={interior.image}
                title={interior.title}
                alt={interior.alt}
              />
            ))}
          </div>
        </div>
      </section>

      <OurProcess />
      < ClientReviews/>
      <FAQSection/>
    </main>
  );
}
