import CommonHero from "@/component/CommonComponent/CommonHero";
import OurTeams from "@/component/OurTeamComponent/Team";

export default function OurTeam()
{
  const detail = {
    image: "/images/About/AboutImage1.webp",
    title: "ABOUT US",
    description:
      "Discover the vision, precision craftsmanship, and quiet luxury behind KR Decor's bespoke interior solutions.",
    imageAlt: "ABOUT BG",
  };

  return (
    <main>
      <CommonHero detail={detail} />
      <OurTeams/>
    </main>
  )
}
