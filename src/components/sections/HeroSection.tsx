import Image from "next/image";
import { Button } from "@/ui/Button";
import { VideoPlaceholder } from "@/ui/VideoPlaceholder";

export function HeroSection() {
    return (
        <section className="xl:mb-29">
            <div className="mb-4 px-6 xl:mb-22">
                <h1 className="text-center text-2xl font-bold text-white xl:px-[500px]">
                    ARE YOU THE ONE WHO DESERVES THIS SPOT?
                </h1>
            </div>

            <div className="mb-6 px-6 xl:mb-20.5">
                <VideoPlaceholder />
            </div>

            <div className="mb-8 px-6">
                <h2 className="mb-1.5 text-center text-2xl font-bold text-white xl:mb-17">Associated with</h2>
                <div className="mx-auto flex h-7 items-center justify-center gap-5 xl:h-27 xl:w-196 xl:gap-19">
                    <div className="h-full xl:w-54">
                        <Image
                            alt="Muli Oyster Bar Logo"
                            src="https://s3.milkyano.com/milkyano/stop-whining/muli-oyster-bar-logo.png"
                            width={432}
                            height={214}
                            className="h-full w-full"
                        />
                    </div>
                    <div className="h-full xl:h-26 xl:w-123">
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
