import OurProcess from "@/component/AboutComponent/ProcessSection";
import CommonHero from "@/component/CommonComponent/CommonHero";
import ClientReviews from "@/component/HomeComponent/Client";
import ModularKitchenSection from "@/component/HomeKitchen/kitchen_Mastary";


export default function ModularKitchen() {
  const detail = {
    image: "/Images/About/AboutImage1.webp",
    title: "MODULAR KITCHENS",
    description:
      "Redefining culinary spaces with precision engineering, ergonomic flow, and timeless aesthetic elegance.",
    imageAlt: "MODULAR KITCHEN",
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
