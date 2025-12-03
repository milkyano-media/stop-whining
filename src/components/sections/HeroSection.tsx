import Image from "next/image";
import { Button } from "@/ui/Button";
import { VideoPlaceholder } from "@/ui/VideoPlaceholder";

export function HeroSection() {
    return (
        <section>
            {/* Hero Words */}
            <div className="mb-4 px-6">
                <h1 className="text-center text-2xl font-bold text-white">ARE YOU THE ONE WHO DESERVES THIS SPOT?</h1>
            </div>

            {/* Video Container */}
            <div className="mb-6 px-6">
                <VideoPlaceholder />
            </div>

            {/* Company Associated */}
            <div className="mb-8 px-6">
                <h2 className="mb-1.5 text-center text-2xl font-bold text-white">Associated with</h2>
                <div className="mx-auto flex h-7 w-52 items-center gap-5">
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
            <div className="mb-12 px-6">
                <Button variant="primary">SEE IF YOU QUALIFY</Button>
            </div>
        </section>
    );
}
