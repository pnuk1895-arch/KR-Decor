"use client"

import CommonHero from "@/component/CommonComponent/CommonHero";
import ClientReviews from "@/component/HomeComponent/Client";
import SolutionsSection2Client from "@/component/HomeComponent/MoreDesign2";
import SignatureSpaces from "@/component/WorkComponent/SignatureSpaces";
import { Suspense } from "react";



export default function Work() {

  const detail = {
    image: "/images/About/AboutImage1.webp",
    title: "ABOUT US",
    description: "Discover the vision, precision craftsmanship, and quiet luxury behind KR Decor's bespoke interior solutions.",
    imageAlt: "ABOUT BG"
  }

  return (
    <main>
      <CommonHero detail={detail} />
      {/* <SignatureSpaces /> */}
      <Suspense
        fallback={
          <section
            className="min-h-125 w-full bg-[#f5f5f3]"
            aria-label="Loading interior solutions"
          />
        }
      >
        {/* <SolutionsSection2Client /> */}
      </Suspense>
      {/* <ClientReviews /> */}
    </main>
  )
}
