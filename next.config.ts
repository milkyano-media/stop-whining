import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactCompiler: true,
    images: {
        remotePatterns: [new URL("https://s3.milkyano.com/**")],
    },
};

export default nextConfig;
