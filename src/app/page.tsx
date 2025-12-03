import Image from "next/image";
import Link from "next/link";
import CheckIcon from "./icons/CheckIcon";
import DribbbleIcon from "./icons/social-media/DribbbleIcon";
import FacebookIcon from "./icons/social-media/FacebookIcon";
import { GithubIcon } from "./icons/social-media/GithubIcon";
import LinkedinIcon from "./icons/social-media/LinkedinIcon";
import PeaceIcon from "./icons/social-media/PeaceIcon";
import TwitterIcon from "./icons/social-media/TwitterIcon";
import Ellipse6 from "./components/globals/ellipses/Ellipse6";
import Ellipse5 from "./components/globals/ellipses/Ellipse5";
import Ellipse4 from "./components/globals/ellipses/Ellipse4";
import Ellipse7 from "./components/globals/ellipses/Ellipse7";
import Ellipse8 from "./components/globals/ellipses/Ellipse8";

export default function Home() {
    return (
        <div>
            {/* Logo Image Container */}
            <div className="mb-4 px-6.25">
                <div className="mx-auto h-24 w-25">
                    <Image
                        alt="StopWhining Logo"
                        src="https://s3.milkyano.com/milkyano/stop-whining/stop-whining-logo.png"
                        width={200}
                        height={192}
                        className="w-full"
                        loading="eager"
                    />
                </div>
            </div>

            {/* Google Rating Container */}
            <div className="mb-5.5 px-6.25">
                <Image
                    alt="Google Rating"
                    src="/google-rating.svg"
                    width={222}
                    height={44}
                    className="mx-auto w-auto"
                    loading="eager"
                />
            </div>

            {/* Hero Words */}
            <div className="mb-4.25 px-6.25">
                <h1 className="text-center text-2xl font-bold text-white">ARE YOU THE ONE WHO DESERVES THIS SPOT?</h1>
            </div>

            {/* Video Container */}
            <div className="mb-5.75 px-6.25">
                {/* TODO: make color parameterized */}
                <div className="mx-auto h-58.75 max-w-85.75 rounded-xl bg-linear-to-br from-[#E7EBD6] to-[#0C7299] p-4">
                    <div className="h-full w-full rounded-sm bg-white">
                        <p className="text-center">Put the video here</p>
                    </div>
                </div>
            </div>

            {/* Company Associated */}
            <div className="mb-7.75 px-6.25">
                <h2 className="mb-1.5 text-center text-2xl font-bold text-white">Associated with</h2>
                <div className="mx-auto flex h-7.25 w-53.25 items-center gap-5">
                    <div className="h-full">
                        <Image
                            alt="Muli Oyster Bar Logo"
                            src="https://s3.milkyano.com/milkyano/stop-whining/muli-oyster-bar-logo.png"
                            width={118}
                            height={58}
                            className="h-full"
                        />
                    </div>
                    <div className="h-full">
                        <Image
                            alt="Stop Whining Long Logo"
                            src="https://s3.milkyano.com/milkyano/stop-whining/stop-whining-long-logo.png"
                            width={268}
                            height={56}
                            className="h-full"
                        />
                    </div>
                </div>
            </div>

            {/* CTA section */}
            <div className="mb-11.5 px-6.25">
                <button
                    className="mx-auto block rounded-lg px-13 py-3 text-xl font-bold text-[#104A73]"
                    style={{
                        background: "linear-gradient(198.29deg, #E7EBD6 45.51%, #035A7C 112.16%)",
                        boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
                    }}
                >
                    SEE IF YOU QUALIFY
                </button>
            </div>

            {/* Google Form Section */}
            <div className="mb-11.5 px-6.25">
                <div className="mx-auto h-120.25 max-w-85.75 rounded-[20px] bg-white">
                    <p className="text-center">GOOGLE FORM HERE</p>
                </div>
            </div>

            {/* How to join section */}
            <div className="mb-8 px-6.25 text-center">
                <h2 className="mb-3.75 text-2xl font-bold">How can you join our team?</h2>
                <p className="px-7 font-medium">
                    We&apos;re not looking for someone who&apos;s just looking for a work. But we&apos;re looking for
                    someone who are willing to be work and be a part of our Oyster Family.
                </p>
            </div>

            {/* Requirement Card */}
            <div className="mb-6.75">
                {/* Card Section */}
                <div className="font-inter mb-22.25 flex flex-col gap-4 px-6.25">
                    {/* Qualities */}
                    <div className="relative rounded-2xl bg-linear-180 from-[#ffffff42] to-[#99999942] px-6 py-10">
                        <Ellipse4 />
                        <h3 className="mb-8 text-center text-4xl">QUALITIES</h3>

                        {/* Checklist */}
                        <div className="mb-4 flex flex-col gap-4">
                            <div className="flex gap-6">
                                <div>
                                    <CheckIcon />
                                </div>
                                <p>Approachable, charismatic, easy to talk to</p>
                            </div>
                            <div className="flex gap-6">
                                <div>
                                    <CheckIcon />
                                </div>
                                <p>A fast learner</p>
                            </div>
                            <div className="flex gap-6">
                                <div>
                                    <CheckIcon />
                                </div>
                                <p>Quick with hands</p>
                            </div>
                            <div className="flex gap-6">
                                <div>
                                    <CheckIcon />
                                </div>
                                <p>Open to feedback & criticsm</p>
                            </div>
                            <div className="flex gap-6">
                                <div>
                                    <CheckIcon />
                                </div>
                                <p>Mentally strong</p>
                            </div>
                            <div className="flex gap-6">
                                <div>
                                    <CheckIcon />
                                </div>
                                <p>Big confidence in skills</p>
                            </div>
                            <div className="flex gap-6">
                                <CheckIcon />
                                <p>Able to work under pressure</p>
                            </div>
                        </div>

                        {/* Footnote */}
                        <p className="font-gotham-rounded font-bold">
                            *Note: we value someone who has unique personality with charisma, confidence, and ambitions.
                        </p>
                    </div>

                    {/* Seafood Knowledge */}
                    <div className="relative rounded-2xl bg-linear-180 from-[#ffffff42] to-[#99999942] px-6 py-10">
                        <Ellipse5 />
                        <h3 className="next-font-inter mb-8 text-center text-4xl">SEAFOOD KNOWLEDGE</h3>

                        {/* Checklist */}
                        <div className="mb-4 flex flex-col gap-4">
                            <div className="flex gap-6">
                                <div>
                                    <CheckIcon />
                                </div>
                                <p>Basic Understanding of Oysters & seafood in general</p>
                            </div>
                            <div className="flex gap-6">
                                <div>
                                    <CheckIcon />
                                </div>
                                <p>Has eaten a variety of seafood growing up</p>
                            </div>
                        </div>

                        {/* Footnote */}
                        <p className="font-gotham-rounded font-bold">
                            *BONUS: Grew up by the coast & and have experience in prepping seafood.
                        </p>
                    </div>

                    {/* Age Range */}
                    <div className="relative rounded-2xl bg-linear-180 from-[#ffffff42] to-[#99999942] px-6 py-10">
                        <Ellipse6 />
                        <h3 className="next-font-inter mb-8 text-center text-4xl">AGE RANGE</h3>

                        {/* Checklist */}
                        <div className="mb-4 flex flex-col gap-4">
                            <p>Let&apos;s Keep it Simple:</p>
                            <div className="flex gap-6">
                                <div>
                                    <CheckIcon />
                                </div>
                                <p>This slot is only for 20-30 yrs old</p>
                            </div>
                        </div>
                    </div>

                    {/* Availability */}
                    <div className="relative rounded-2xl bg-linear-180 from-[#ffffff42] to-[#99999942] px-6 py-10">
                        <Ellipse7 />
                        <h3 className="next-font-inter mb-8 text-center text-4xl">AVAILABILITY</h3>

                        {/* Checklist */}
                        <div className="mb-4 flex flex-col gap-4">
                            <div className="flex gap-6">
                                <div>
                                    <CheckIcon />
                                </div>
                                <p>Available 12PM onwards</p>
                            </div>
                            <div className="flex gap-6">
                                <div>
                                    <CheckIcon />
                                </div>
                                <p>Must be willing to work Night Shift until 10PM</p>
                            </div>
                            <div className="flex gap-6">
                                <div>
                                    <CheckIcon />
                                </div>
                                <p>Full Time Position (Committed)</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div>
                    <button
                        className="mx-auto block rounded-lg px-13 py-3 text-xl font-bold text-[#045B7D]"
                        style={{
                            background: "linear-gradient(198.29deg, #E7EBD6 23.6%, #478596 100.05%)",
                            boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
                        }}
                    >
                        SEE IF YOU QUALIFY
                    </button>
                </div>
            </div>

            {/* Now what is the long plan? */}
            <div className="px-11.75">
                <h2 className="font-inter mb-11 text-center text-3xl font-bold">Now What is the LONG TERM Plans?</h2>

                <div className="font-poppins relative text-center before:absolute before:top-0 before:left-0 before:block before:h-11 before:w-[53px] before:bg-[url(https://s3.milkyano.com/milkyano/stop-whining/double-quote-icon.svg)]">
                    <h3 className="mb-7 pt-11 text-3xl font-medium">
                        You&apos;re not just another number to us, You are special and will be a part of our growth
                        family business.
                    </h3>
                    <div className="flex flex-col items-center justify-between gap-10 px-3.25">
                        <p className="text-xl text-[#E7EBD6]">
                            There are so many opportunities we can run together. We grow, you grow.
                        </p>
                        <div className="w-full border-b-4 border-[#E7EBD6]"></div>
                    </div>
                </div>
            </div>

            {/* Benefit */}
            <div className="px-6 py-10.5">
                <div
                    className="relative rounded-2xl px-6 py-10"
                    style={{
                        background:
                            "linear-gradient(182.19deg, rgba(255, 255, 255, 0.26) 1.84%, rgba(153, 153, 153, 0.26) 98.45%)",
                        boxShadow: "0px 12px 16px -4px #10182814",
                    }}
                >
                    <h2 className="mb-8 text-center text-3xl font-bold">What You Get When You Join Us</h2>
                    <Ellipse8 />

                    {/* Checklist content */}
                    <div className="font-inter flex flex-col gap-6">
                        {/* Not temporary job */}
                        <div className="flex gap-3">
                            <div>
                                <CheckIcon />
                            </div>
                            <div>
                                <h3 className="mb-4 font-bold">A Career, Not a Temporary Job</h3>
                                <p className="text-[#b7cdd6]">
                                    You get long-term stability in a business that is actively growing, not declining.
                                    We invest in people who plan to grow with us, not hop from job to job.
                                </p>
                            </div>
                        </div>

                        {/* Above Average Skill Training */}
                        <div className="flex gap-3">
                            <div>
                                <CheckIcon />
                            </div>
                            <div>
                                <h3 className="mb-4 font-bold">Above-Average Skill Training</h3>
                                <p className="text-[#b7cdd6]">
                                    You&rsquo;ll learn real seafood preparation, speed, precision, and customer
                                    handling. These are high-value hospitality skills that stay with you for life.
                                </p>
                            </div>
                        </div>

                        {/* Supportive work environment */}
                        <div className="flex gap-3">
                            <div>
                                <CheckIcon />
                            </div>
                            <div>
                                <h3 className="mb-4 font-bold">A Supportive Work Environment</h3>
                                <p className="text-[#b7cdd6]">
                                    No toxic ego, no passive-aggressive culture. You&rsquo;ll work with people who
                                    actually take pride in their craft.
                                </p>
                            </div>
                        </div>

                        {/* Career Path */}
                        <div className="flex gap-3">
                            <div>
                                <CheckIcon />
                            </div>
                            <div>
                                <h3 className="mb-4 font-bold">Clear Path for Growth</h3>
                                <p className="text-[#b7cdd6]">
                                    If you perform, you&rsquo;ll never stay stuck in one role. We build leaders
                                    internally. We grow, you grow.
                                </p>
                            </div>
                        </div>

                        {/* Strong Team Culture */}
                        <div className="flex gap-3">
                            <div>
                                <CheckIcon />
                            </div>
                            <div>
                                <h3 className="mb-4 font-bold">Strong Team Culture</h3>
                                <p className="text-[#b7cdd6]">
                                    This is a family-style work culture where everyone relies on each other. If you
                                    value teamwork, you&rsquo;ll fit right in.
                                </p>
                            </div>
                        </div>

                        {/* Not temporary job */}
                        <div className="flex gap-3">
                            <div>
                                <CheckIcon />
                            </div>
                            <div>
                                <h3 className="mb-4 font-bold">Respect & Fair Treatment</h3>
                                <p className="text-[#b7cdd6]">
                                    We don&rsquo;t treat staff like replaceable labour. Your personality, ambition, and
                                    work ethic matter.
                                </p>
                            </div>
                        </div>

                        <button
                            className="font-gotham-rounded rounded-lg bg-white py-3 text-xl font-bold text-[#095478]"
                            style={{
                                boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
                            }}
                        >
                            SEE IF YOU QUALIFY
                        </button>
                    </div>
                </div>
            </div>

            <footer className="font-inter bg-[#E7EBD6] text-[#095478]">
                {/* Container */}
                <div className="px-4 py-12">
                    {/* Footer content */}
                    <div className="mb-12 flex flex-col gap-6">
                        {/* Footer Logo */}
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

                    {/* Footer Nav */}
                    <div className="grid grid-cols-2 gap-8">
                        <div className="flex flex-col gap-4">
                            <h4 className="font-semibold text-black">Product</h4>
                            <div className="flex flex-col gap-3 font-medium">
                                <Link href="#">Overview</Link>
                                <Link href="#">Features</Link>
                                <Link href="#">
                                    Solutions <span className="rounded-2xl bg-[#F2F4F7] px-2 py-0.5 text-xs">New</span>
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
                    </div>
                </div>

                {/* Social */}
                <div className="bg-[#095478] px-4 py-12 text-white">
                    <div className="mb-6 flex gap-6">
                        <TwitterIcon />
                        <LinkedinIcon />
                        <FacebookIcon />
                        <GithubIcon />
                        <PeaceIcon />
                        <DribbbleIcon />
                    </div>

                    <p>© 2077 Untitled UI. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
