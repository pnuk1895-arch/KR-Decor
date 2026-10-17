"use client"

import AboutSection from "@/component/HomeComponent/About";
import HeroComponent from "@/component/HomeComponent/HeroComponent";
import ServicesSection from "@/component/HomeComponent/Services";
import SolutionsSection1 from "@/component/HomeComponent/MoreDesign1";
import ClientReviews from "@/component/HomeComponent/Client";
import FAQSection from "@/component/HomeComponent/Features";
import SolutionsSection2Client from "@/component/HomeComponent/MoreDesign2";

import { Suspense } from "react";

export default function Page() {
  return (
      <main>
        <HeroComponent />
        <AboutSection />
        <SolutionsSection1 />
        <ServicesSection />
        <Suspense
          fallback={
            <section
              className="min-h-125 w-full bg-[#f5f5f3]"
              aria-label="Loading interior solutions"
            />
          }
        >
          <SolutionsSection2Client />
        </Suspense>
        <ClientReviews />
        <FAQSection />
      </main>
      
  )
}