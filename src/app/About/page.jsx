"use client"

import OurProcess from "@/component/AboutComponent/ProcessSection";
import CommonHero from "@/component/CommonComponent/CommonHero";
import Footer from "@/component/CommonComponent/Footer";
import Header from "@/component/CommonComponent/Header";
import AboutSection from "@/component/HomeComponent/About"
import FAQSection from "@/component/HomeComponent/Features";

export default function About()
{
  const detail={
    image:"/Images/About/AboutImage1.webp",
    title:"ABOUT US",
    description:"Discover the vision, precision craftsmanship, and quiet luxury behind KR Decor's bespoke interior solutions.",
    imageAlt:"ABOUT BG"
  }
  return (
  <>
    <main>
      <CommonHero detail={detail}/>
      <AboutSection/>
      <OurProcess/>
      <FAQSection/>
    </main>
  </>
  )
}
