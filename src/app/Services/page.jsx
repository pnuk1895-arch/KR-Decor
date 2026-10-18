
"use client"

import CommonHero from "@/component/CommonComponent/CommonHero"
import SolutionsSection1 from "@/component/HomeComponent/MoreDesign1"
import ServicesSection from "@/component/HomeComponent/Services"
import ServicesShaped from "@/component/ServicesComponent/ServiceShaped"

export default function Services() {
  const detail={
    image:"/Images/About/AboutImage1.webp",
    title:"OUR SERVICES",
    description:"Comprehensive interior architecture, bespoke design, and seamless execution tailored to your luxury lifestyle.",
    imageAlt:"Services"
  }

  return (
    <main>
      <CommonHero detail={detail} />
      <ServicesShaped/>
      <ServicesSection />
      <SolutionsSection1 />
    </main>
  )
}
