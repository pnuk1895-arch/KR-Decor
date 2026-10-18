import CommonHero from "@/component/CommonComponent/CommonHero";
import ContactSection from "@/component/ContactComponent/Contact";
import Links from "@/component/ContactComponent/LInks";


export default function Contact() {
  const detail = {
    image: "/Images/About/AboutImage1.webp",
    title: "Get in Touch",
    description: "Connect with our design team to discuss your vision and begin the journey toward your bespoke luxury space.",
    imageAlt: "Get in Touch"
  }
  return (
    <main>
      <CommonHero detail={detail} />
      <ContactSection />
      <Links />
    </main>
  )
}
