import Image from "next/image";

export function Header() {
    return (
        <header className="xl:mb-20">
            <div className="mb-4 px-6">
                <div className="mx-auto h-24 w-24 xl:h-64 xl:w-64">
                    <Image
                        alt="StopWhining Logo"
                        src="https://s3.milkyano.com/milkyano/stop-whining/stop-whining-logo.png"
                        width={532}
                        height={510}
                        className="w-full"
                        loading="eager"
                    />
                </div>
            </div>

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
