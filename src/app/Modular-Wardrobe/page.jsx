
import OurProcess from "@/component/AboutComponent/ProcessSection";
import CommonHero from "@/component/CommonComponent/CommonHero";
import ClientReviews from "@/component/HomeComponent/Client";
import FAQSection from "@/component/HomeComponent/Features";
import ModularWardrobeSection from "@/component/WardrobeComponent/Wardrobe";

export default function Modular_Wardrobe() {
  const detail = {
    image: "/Images/About/AboutImage1.webp",
    title: "MODULAR WARDROBES",
    description:
      "Crafting bespoke walk-in closets and storage systems designed for uncompromising elegance and flawless organization.",
    imageAlt: "MODULAR WAEDROBES",
  };


  return (
    <main>
      <CommonHero detail={detail} />
      <ModularWardrobeSection/>
      <OurProcess />
      < ClientReviews />
      <FAQSection />
    </main>
  );
}
