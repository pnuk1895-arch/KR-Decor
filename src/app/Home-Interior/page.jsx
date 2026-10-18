import CommonHero from "@/component/CommonComponent/CommonHero";
import { InteriorGallery } from "@/component/Home-interior/Home-Interior";



export default function HomeInterior()
{
  const detail={
    image:"/images/About/AboutImage1.webp",
    title:"FULL HOME INTERIOR",
    description:`Curating bespoke, light-filled living spaces and turnkey architectural solutions with quiet luxury and uncompromising precision.`,
    imageAlt:"ABOUT BG"
  }
  return (
  <main>
    <CommonHero detail={detail} />
    <InteriorGallery/>
  </main>
  )
}
