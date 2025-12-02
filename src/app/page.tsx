import Image from "next/image";
import CheckIcon from "./icons/CheckIcon";

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
                <button className="mx-auto block rounded-lg bg-linear-to-b from-[#E7EBD6] to-[#035A7C] px-13 py-3 text-xl font-bold text-[#104A73] shadow-xs shadow-[#1018280D]">
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
            <div className="mb-7.5 px-6.25 text-center">
                <h2 className="mb-3.75 text-2xl font-bold">How can you join our team?</h2>
                <p className="px-7 font-medium">
                    We&apos;re not looking for someone who&apos;s just looking for a work. But we&apos;re looking for
                    someone who are willing to be work and be a part of our Oyster Family.
                </p>
            </div>

            {/* Requirement Card */}
            <div className="font-inter flex flex-col gap-4 px-6.25">
                {/* Qualities */}
                <div className="rounded-2xl bg-linear-180 from-[#ffffff42] to-[#99999942] px-6 py-10">
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
                <div className="rounded-2xl bg-linear-180 from-[#ffffff42] to-[#99999942] px-6 py-10">
                    <h3 className="next-font-inter mb-8 text-center text-4xl">SEAFOOD KNOWLEDGE</h3>
                </div>

                {/* Age Range */}
                <div className="rounded-2xl bg-linear-180 from-[#ffffff42] to-[#99999942] px-6 py-10">
                    <h3 className="next-font-inter mb-8 text-center text-4xl">AGE RANGE</h3>
                </div>

                {/* Availability */}
                <div className="rounded-2xl bg-linear-180 from-[#ffffff42] to-[#99999942] px-6 py-10">
                    <h3 className="next-font-inter mb-8 text-center text-4xl">AVAILABILITY</h3>
                </div>
            </div>
        </div>
    );
}
