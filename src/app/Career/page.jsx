import CareerContact from "@/component/CareerComponent/CareerContact";
import CommonHero from "@/component/CommonComponent/CommonHero";



export default function Career()
{
  const detail={
    image:"/Images/About/AboutImage1.webp",
    title:"CAREERS & CULTURE",
    description:"Join a multidisciplinary team of designers and architects shaping the future of quiet luxury interiors.",
    imageAlt:"CAREERS & CULTURE"
  }

  return (
  <main>
    <CommonHero detail={detail} />
    <CareerContact/>
  </main>
  )
}
