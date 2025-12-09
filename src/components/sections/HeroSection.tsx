"use client";

import Image from "next/image";
import { Button } from "@/ui/Button";
import { VideoPlaceholder } from "@/ui/VideoPlaceholder";
import { VideoPlayer } from "@/ui/VideoPlayer";
import { scrollToForm } from "@/utils/scrollToForm";

export function HeroSection() {
    return (
        <section className="xl:mb-22">
            <div className="mb-4 px-6 xl:mb-20">
                <h1 className="text-center text-2xl font-bold text-white xl:px-96 xl:text-5xl">
                    ARE YOU THE ONE WHO DESERVES THIS SPOT?
                </h1>
            </div>

            <div className="mb-6 px-6 xl:mb-20">
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

            <div className="mb-8 px-6">
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
                <Button variant="primary" onClick={scrollToForm}>
                    SEE IF YOU QUALIFY
                </Button>
            </div>
        </section>
    );
}
