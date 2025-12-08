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
                <IntroSection />
                <RequirementsSection />
                <LongTermPlanSection />
                <BenefitsSection />
                <GoogleFormSection />
            </main>

            <footer className="font-inter bg-accent text-primary-dark">
                <div className="bg-primary-dark px-4 py-12 text-white xl:flex xl:flex-row-reverse xl:justify-between xl:px-32 xl:text-gray-400">
                    <p>© {new Date().getFullYear()} Stop Whining. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
