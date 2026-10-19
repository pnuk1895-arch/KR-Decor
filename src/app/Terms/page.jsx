import CommonHero from "@/component/CommonComponent/CommonHero";
import TermsPage from "@/component/Terms&Conditions/TermAndCondition";



export default function Terms()
{
    const detail = {
        image: "/Images/About/AboutImage1.webp",
        title: "TERMS & CONDITIONS",
        description:
            "Please read these terms and conditions carefully before engaging our services or using our digital platform.",
        imageAlt: "TERMS & CONDITIONS",

    }
  return (
  <main>
    <CommonHero detail={detail} />
    <TermsPage/>
  </main>

  )
}
