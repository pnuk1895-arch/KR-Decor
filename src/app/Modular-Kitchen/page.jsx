import OurProcess from "@/component/AboutComponent/ProcessSection";
import CommonHero from "@/component/CommonComponent/CommonHero";
import ClientReviews from "@/component/HomeComponent/Client";
import ModularKitchenSection from "@/component/HomeKitchen/kitchen_Mastary";


export default function ModularKitchen() {
  const detail = {
    image: "/images/About/AboutImage1.webp",
    title: "ABOUT US",
    description:
      "Discover the vision, precision craftsmanship, and quiet luxury behind KR Decor's bespoke interior solutions.",
    imageAlt: "ABOUT BG",
  };

  return (
    <main>
      <CommonHero detail={detail} />
      <ModularKitchenSection/>
      <OurProcess />
      <ClientReviews/>
    </main>
  )
}
