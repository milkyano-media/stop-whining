import DribbbleIcon from "../components/icons/social-media/DribbbleIcon";
import FacebookIcon from "../components/icons/social-media/FacebookIcon";
import { GithubIcon } from "../components/icons/social-media/GithubIcon";
import LinkedinIcon from "../components/icons/social-media/LinkedinIcon";
import PeaceIcon from "../components/icons/social-media/PeaceIcon";
import TwitterIcon from "../components/icons/social-media/TwitterIcon";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/HeroSection";
import { GoogleFormSection } from "@/sections/GoogleFormSection";
import { IntroSection } from "@/sections/IntroSection";
import { RequirementsSection } from "@/sections/RequirementsSection";
import { LongTermPlanSection } from "@/sections/LongTermPlanSection";
import { BenefitsSection } from "@/sections/BenefitsSection";

export default function Home() {
    return (
        <div>
            <Header />

            <main>
                <HeroSection />
                <GoogleFormSection />
                <IntroSection />
                <RequirementsSection />
                <LongTermPlanSection />
                <BenefitsSection />
            </main>

            <footer className="font-inter bg-accent text-primary-dark">
                <div className="bg-primary-dark px-4 py-12 text-white xl:flex xl:flex-row-reverse xl:justify-between xl:px-32 xl:text-gray-400">
                    <div className="mb-6 flex gap-6 xl:mb-0">
                        <TwitterIcon />
                        <LinkedinIcon />
                        <FacebookIcon />
                        <GithubIcon />
                        <PeaceIcon />
                        <DribbbleIcon />
                    </div>

                    <p>© {new Date().getFullYear()} Stop Whining. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
