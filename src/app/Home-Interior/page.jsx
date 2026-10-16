import CommonHero from "@/component/CommonComponent/CommonHero";
import { InteriorGallery } from "@/component/Home-interior/Home-Interior";



export default function HomeInterior()
{
  const detail={
    image:"/images/About/AboutImage1.webp",
    title:"ABOUT US",
    description:"Discover the vision, precision craftsmanship, and quiet luxury behind KR Decor's bespoke interior solutions.",
    imageAlt:"ABOUT BG"
  }
  return (
  <main>
    <CommonHero detail={detail} />
    <InteriorGallery/>
  </main>
  )
}
