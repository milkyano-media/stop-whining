"use client";

import { useEffect, useRef } from "react";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/HeroSection";
import { GoogleFormSection } from "@/sections/GoogleFormSection";
import { IntroSection } from "@/sections/IntroSection";
import { RequirementsSection } from "@/sections/RequirementsSection";
import { LongTermPlanSection } from "@/sections/LongTermPlanSection";
import { BenefitsSection } from "@/sections/BenefitsSection";
import { trackScrollDepth, trackTimeOnPage } from "@/lib/gtm";

export default function Home() {
    const trackedDepths = useRef<Set<number>>(new Set());

    // Scroll depth tracking
    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const handleScroll = () => {
            clearTimeout(timeoutId);

            timeoutId = setTimeout(() => {
                const windowHeight = window.innerHeight;
                const documentHeight = document.documentElement.scrollHeight;
                const scrollTop = window.scrollY;
                const scrollPercent = Math.round(((scrollTop + windowHeight) / documentHeight) * 100);

                // Track scroll depth milestones
                [25, 50, 75, 100].forEach((threshold) => {
                    if (scrollPercent >= threshold && !trackedDepths.current.has(threshold)) {
                        trackedDepths.current.add(threshold);
                        trackScrollDepth(threshold as 25 | 50 | 75 | 100);
                    }
                });
            }, 150); // 150ms debounce
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // Check initial state

        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Time on page tracking
    useEffect(() => {
        const startTime = Date.now();
        const trackedTimes = new Set<number>();

        const intervalId = setInterval(() => {
            const timeElapsed = Math.floor((Date.now() - startTime) / 1000);

            // Track time milestones (30s, 60s, 120s, 300s)
            [30, 60, 120, 300].forEach((threshold) => {
                if (timeElapsed >= threshold && !trackedTimes.has(threshold)) {
                    trackedTimes.add(threshold);
                    trackTimeOnPage(threshold, timeElapsed);
                }
            });
        }, 1000); // Check every second

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <Header />

            <main>
                <HeroSection />
                <IntroSection />
                <RequirementsSection />
                <LongTermPlanSection />
                <BenefitsSection />
                <GoogleFormSection />
            </main>

            <footer className="font-inter bg-accent text-primary-dark">
                <div className="bg-primary-dark px-4 py-12 text-white xl:px-32 xl:text-gray-400">
                    <p>© {new Date().getFullYear()} Stop Whining. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
