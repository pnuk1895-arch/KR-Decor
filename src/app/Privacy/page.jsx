import CommonHero from "@/component/CommonComponent/CommonHero";
import PrivacyPage from "@/component/PrivacyPolicy/Privacy";


export default function Privacy() {
    const detail = {
        image: "/Images/About/AboutImage1.webp",
        title: "PRIVACY POLICY",
        description:
            "Our commitment to safeguarding your personal information and ensuring a secure, confidential experience with KR Decor.",
        imageAlt: "PRIVACY POLICY",
    }
    return (
        <main>
            <CommonHero detail={detail} />
            <PrivacyPage/>
        </main>
    )
}
