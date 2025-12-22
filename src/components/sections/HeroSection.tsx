"use client";

import Image from "next/image";
import { Button } from "@/ui/Button";
import { VideoPlaceholder } from "@/ui/VideoPlaceholder";
import { VideoPlayer } from "@/ui/VideoPlayer";
import { scrollToForm } from "@/utils/scrollToForm";
import { trackCTAClick } from "@/lib/gtm";

export function HeroSection() {
    const handleCTAClick = () => {
        const scrollDepth = Math.round((window.scrollY / document.documentElement.scrollHeight) * 100);
        trackCTAClick("hero", "TAKE YOUR CHANCE", scrollDepth);
        scrollToForm();
    };

    return (
        <section className="xl:mb-22">
            <div className="mb-4 px-6 xl:mb-20">
                <h1 className="text-center text-2xl font-bold text-white xl:px-96 xl:text-5xl">
                    LOOKING TO WORK AND LEARN IN SEAFOOD?
                </h1>
            </div>

            <div className="mb-6 px-6 xl:mb-15">
                <VideoPlaceholder>
                    <VideoPlayer
                        src="https://s3.milkyano.com/milkyano/stop-whining/vsl-stop-whining.mp4"
                        poster="https://s3.milkyano.com/milkyano/stop-whining/vsl-video-thumbnail.png"
                        autoplay={false}
                        muted={false}
                        className="w-full rounded-sm"
                    />
                </VideoPlaceholder>
            </div>

            <div className="mb-8 px-6 text-center xl:px-0 xl:mb-20">
                <p className="px-7 font-medium xl:px-80 xl:text-2xl">
                    No experience needed. We&apos;ll teach you from zero. Bonus if you already have some knowledge.
                </p>
            </div>

            <div className="mb-10 px-6">
                <Image
                    alt="Google Rating"
                    src="https://s3.milkyano.com/milkyano/stop-whining/google-rating.svg"
                    width={222}
                    height={44}
                    className="mx-auto w-auto"
                    loading="eager"
                />
            </div>

            <div className="mb-15 px-6">
                <h2 className="mb-1.5 text-center text-2xl font-bold text-white xl:mb-16 xl:text-5xl">
                    Associated with
                </h2>
                <div className="mx-auto flex h-7 max-w-53 items-center justify-center gap-5 xl:h-28 xl:max-w-4xl xl:gap-20">
                    <div className="h-full xl:w-56">
                        <Image
                            alt="Muli Oyster Bar Logo"
                            src="https://s3.milkyano.com/milkyano/stop-whining/muli-oyster-bar-logo.png"
                            width={864}
                            height={428}
                            className="h-full w-full"
                        />
                    </div>
                    <div className="h-full xl:h-28 xl:w-auto">
                        <Image
                            alt="Stop Whining Long Logo"
                            src="https://s3.milkyano.com/milkyano/stop-whining/stop-whining-long-logo.png"
                            width={1964}
                            height={412}
                            className="h-full w-full"
                        />
                    </div>
                </div>
            </div>

            <div className="mb-12 px-6">
                <Button variant="primary" onClick={handleCTAClick}>
                    TAKE YOUR CHANCE
                </Button>
            </div>
        </section>
    );
}
