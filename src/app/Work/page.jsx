import CommonHero from "@/component/CommonComponent/CommonHero";
import ClientReviews from "@/component/HomeComponent/Client";
import SolutionsSection2Client from "@/component/HomeComponent/MoreDesign2";
import SignatureSpaces from "@/component/WorkComponent/SignatureSpaces";



export default function Work()
{

  const detail={
    image:"/images/About/AboutImage1.webp",
    title:"ABOUT US",
    description:"Discover the vision, precision craftsmanship, and quiet luxury behind KR Decor's bespoke interior solutions.",
    imageAlt:"ABOUT BG"
  }

  return (
  <main>
    <CommonHero detail={detail}/>
    <SignatureSpaces/>
    <SolutionsSection2Client/>
    <ClientReviews/>
  </main>
  )
}
