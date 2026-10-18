import CommonHero from "@/component/CommonComponent/CommonHero";
import OurTeams from "@/component/OurTeamComponent/Team";

export default function OurTeam()
{
  const detail = {
    image: "/Images/About/AboutImage1.webp",
    title: "Our Visionary Team",
    description:
      "Meet the architectural minds and master craftsmen shaping quiet luxury spaces at KR Decor.",
    imageAlt: "Our Visionary Team",
  };

  return (
    <main>
      <CommonHero detail={detail} />
      <OurTeams/>
    </main>
  )
}
