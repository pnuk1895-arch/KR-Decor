import CommonHero from "@/component/CommonComponent/CommonHero";
import ContactSection from "@/component/ContactComponent/Contact";
import Links from "@/component/ContactComponent/LInks";


export default function Contact() {
  const detail = {
    image: "/images/About/AboutImage1.webp",
    title: "ABOUT US",
    description: "Discover the vision, precision craftsmanship, and quiet luxury behind KR Decor's bespoke interior solutions.",
    imageAlt: "ABOUT BG"
  }
  return (
    <main>
      <CommonHero detail={detail} />
      <ContactSection />
      <Links />
    </main>
  )
}
