"use client"

import CommonHero from "@/component/CommonComponent/CommonHero";
import ClientReviews from "@/component/HomeComponent/Client";
import SolutionsSection2Client from "@/component/HomeComponent/MoreDesign2";
import SignatureSpaces from "@/component/WorkComponent/SignatureSpaces";
import { Suspense } from "react";



export default function Work() {

  const detail = {
    image: "/images/About/AboutImage1.webp",
    title: "SELECTED WORK",
    description: `Delivering architectural distinction and quiet luxury interiors
                        from our studio in Jasola Apollo, New Delhi.`,
    imageAlt: "ABOUT BG"
  }

  return (
    <main>
      <CommonHero detail={detail} />
      <SignatureSpaces />
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
    </main>
  )
}
