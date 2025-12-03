import Image from "next/image";

export function Header() {
    return (
        <header>
            {/* Logo Image Container */}
            <div className="mb-4 px-6">
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
            <div className="mb-6 px-6">
                <Image
                    alt="Google Rating"
                    src="/google-rating.svg"
                    width={222}
                    height={44}
                    className="mx-auto w-auto"
                    loading="eager"
                />
            </div>
        </header>
    );
}
