import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import localFont from "next/font/local";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

const gothamRounded = localFont({
    src: [
        {
            path: "../../public/fonts/gotham-rounded/gothamrnd_light.otf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../../public/fonts/gotham-rounded/gothamrnd_lightitalic.otf",
            weight: "300",
            style: "italic",
        },
        {
            path: "../../public/fonts/gotham-rounded/gothamrnd_book.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/gotham-rounded/gothamrnd_bookitalic.otf",
            weight: "400",
            style: "italic",
        },
        {
            path: "../../public/fonts/gotham-rounded/gothamrnd_medium.otf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../public/fonts/gotham-rounded/gothamrnd_mediumitalic.otf",
            weight: "500",
            style: "italic",
        },
        {
            path: "../../public/fonts/gotham-rounded/gothamrnd_bold.otf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../../public/fonts/gotham-rounded/gothamrnd_bolditalic.otf",
            weight: "700",
            style: "italic",
        },
    ],
    variable: "--next-font-gotham-rounded",
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--next-font-inter",
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500"],
    variable: "--next-font-poppins",
});

export const metadata: Metadata = {
    title: "Stop Whining - Seafood & Wine Bar",
    description: "Design amazing digital experiences that create more happy in the world.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${gothamRounded.variable} ${inter.variable} ${poppins.variable} overflow-x-hidden`}>
            <body className="bg-primary overflow-x-hidden pt-4 text-white antialiased">
                {process.env.NEXT_PUBLIC_GTM_ID && <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />}
                {children}
            </body>
        </html>
    );
}
