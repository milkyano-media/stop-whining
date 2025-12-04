import Image from "next/image";
import Link from "next/link";
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
                <div className="px-4 py-12 xl:flex xl:gap-16 xl:px-28">
                    <div className="mb-12 flex flex-col gap-6">
                        <div className="flex items-center gap-2">
                            <div className="h-8 w-8">
                                <Image
                                    alt="StopWhining Footer Logo"
                                    src="https://s3.milkyano.com/milkyano/stop-whining/stop-whining-bg-logo.png"
                                    width={76}
                                    height={76}
                                    className="w-full"
                                />
                            </div>
                            <p>Stop whining</p>
                        </div>

                        <p>Design amazing digital experiences that create more happy in the world.</p>
                    </div>

                    <nav className="grid grid-cols-2 gap-8 xl:grid-cols-5">
                        <div className="flex flex-col gap-4">
                            <h4 className="font-semibold text-black">Product</h4>
                            <div className="flex flex-col gap-3 font-medium">
                                <Link href="#">Overview</Link>
                                <Link href="#">Features</Link>
                                <Link href="#">
                                    Solutions{" "}
                                    <span className="bg-accent-light rounded-2xl px-2 py-0.5 text-xs">New</span>
                                </Link>
                                <Link href="#">Tutorials</Link>
                                <Link href="#">Pricing</Link>
                                <Link href="#">Releases</Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="font-semibold text-black">Company</h4>
                            <div className="flex flex-col gap-3 font-medium">
                                <Link href="#">About us</Link>
                                <Link href="#">Careers</Link>
                                <Link href="#">Press</Link>
                                <Link href="#">News</Link>
                                <Link href="#">Media kit</Link>
                                <Link href="#">Contact</Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="font-semibold text-black">Resources</h4>
                            <div className="flex flex-col gap-3 font-medium">
                                <Link href="#">Blog</Link>
                                <Link href="#">Newsletter</Link>
                                <Link href="#">Events</Link>
                                <Link href="#">Help centre</Link>
                                <Link href="#">Tutorials</Link>
                                <Link href="#">Support</Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="font-semibold text-black">Social</h4>
                            <div className="flex flex-col gap-3 font-medium">
                                <Link href="#">Twitter</Link>
                                <Link href="#">LinkedIn</Link>
                                <Link href="#">Facebook</Link>
                                <Link href="#">GitHub</Link>
                                <Link href="#">AngelList</Link>
                                <Link href="#">Dribbble</Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="font-semibold text-black">Legal</h4>
                            <div className="flex flex-col gap-3 font-medium">
                                <Link href="#">Terms</Link>
                                <Link href="#">Privacy</Link>
                                <Link href="#">Cookies</Link>
                                <Link href="#">Licenses</Link>
                                <Link href="#">Settings</Link>
                                <Link href="#">Contact</Link>
                            </div>
                        </div>
                    </nav>
                </div>

                <div className="bg-primary-dark px-4 py-12 text-white xl:flex xl:flex-row-reverse xl:justify-between xl:px-28 xl:text-[#98A2B3]">
                    <div className="mb-6 flex gap-6 xl:mb-0">
                        <TwitterIcon />
                        <LinkedinIcon />
                        <FacebookIcon />
                        <GithubIcon />
                        <PeaceIcon />
                        <DribbbleIcon />
                    </div>

                    <p>© 2077 Stop Whining. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
