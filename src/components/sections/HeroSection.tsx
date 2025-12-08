import Image from "next/image";
import { Button } from "@/ui/Button";
import { VideoPlaceholder } from "@/ui/VideoPlaceholder";

export function HeroSection() {
    return (
        <section className="xl:mb-28">
            <div className="mb-4 px-6 xl:mb-20">
                <h1 className="text-center text-2xl font-bold text-white xl:px-96">
                    ARE YOU THE ONE WHO DESERVES THIS SPOT?
                </h1>
            </div>

            <div className="mb-6 px-6 xl:mb-20">
                <VideoPlaceholder>
                    <video
                        className="h-full w-full rounded-sm"
                        controls
                        poster="https://s3.milkyano.com/milkyano/stop-whining/vsl-video-thumbnail.png"
                    >
                        <source
                            src="https://s3.milkyano.com/milkyano/stop-whining/vsl-stop-whining.mp4"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                </VideoPlaceholder>
            </div>

            <div className="mb-8 px-6">
                <h2 className="mb-1.5 text-center text-2xl font-bold text-white xl:mb-16">Associated with</h2>
                <div className="mx-auto flex h-7 items-center justify-center gap-5 xl:h-28 xl:max-w-4xl xl:gap-20">
                    <div className="h-full xl:w-56">
                        <Image
                            alt="Muli Oyster Bar Logo"
                            src="https://s3.milkyano.com/milkyano/stop-whining/muli-oyster-bar-logo.png"
                            width={432}
                            height={214}
                            className="h-full w-full"
                        />
                    </div>
                    <div className="h-full xl:h-28 xl:w-auto">
                        <Image
                            alt="Stop Whining Long Logo"
                            src="https://s3.milkyano.com/milkyano/stop-whining/stop-whining-long-logo.png"
                            width={982}
                            height={206}
                            className="h-full w-full"
                        />
                    </div>
                </div>
            </div>

            <div className="mb-12 px-6">
                <Button variant="primary">SEE IF YOU QUALIFY</Button>
            </div>
        </section>
    );
}
