"use client";

import { useEffect, useRef, useState } from "react";
import videojs from "video.js";
import type Player from "video.js/dist/types/player";

interface VideoPlayerProps {
    src: string;
    poster?: string;
    autoplay?: boolean;
    muted?: boolean;
    className?: string;
}

export function VideoPlayer({ src, poster, autoplay = false, muted = false, className = "" }: VideoPlayerProps) {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const playerRef = useRef<Player | null>(null);
    const [showAutoplayOverlay, setShowAutoplayOverlay] = useState(false);

    useEffect(() => {
        // Make sure Video.js player is only initialized once
        if (!playerRef.current && videoRef.current) {
            const videoElement = videoRef.current;

            const player = videojs(
                videoElement,
                {
                    autoplay: autoplay ? "any" : false,
                    muted: muted,
                    controls: true,
                    fluid: true,
                    responsive: true,
                    preload: "auto",
                    poster: poster,
                    playbackRates: [0.5, 0.75, 1, 1.25, 1.5, 2],
                    controlBar: {
                        volumePanel: {
                            inline: false,
                        },
                    },
                },
                () => {
                    // Player is ready
                    console.log("Video.js player is ready");

                    // Handle autoplay policy errors
                    if (autoplay && !muted) {
                        const playPromise = player.play();

                        if (playPromise !== undefined) {
                            playPromise.catch((error) => {
                                console.log("Autoplay with sound blocked by browser:", error);
                                // Show custom overlay to prompt user interaction
                                setShowAutoplayOverlay(true);
                                player.pause();
                            });
                        }
                    }
                },
            );

            playerRef.current = player;
        }
    }, [autoplay, muted, poster]);

    useEffect(() => {
        const player = playerRef.current;

        return () => {
            if (player && !player.isDisposed()) {
                player.dispose();
                playerRef.current = null;
            }
        };
    }, []);

    const handleOverlayClick = () => {
        const player = playerRef.current;
        if (player) {
            player.muted(false);
            player.play();
            setShowAutoplayOverlay(false);
        }
    };

    return (
        <div data-vjs-player style={{ position: "relative" }}>
            <video ref={videoRef} className={`video-js vjs-big-play-centered ${className}`}>
                <source src={src} type="video/mp4" />
                <p className="vjs-no-js">
                    To view this video please enable JavaScript, and consider upgrading to a web browser that{" "}
                    <a href="https://videojs.com/html5-video-support/" target="_blank" rel="noopener noreferrer">
                        supports HTML5 video
                    </a>
                </p>
            </video>

            {showAutoplayOverlay && (
                <div className="vjs-autoplay-overlay" onClick={handleOverlayClick}>
                    <button className="vjs-autoplay-overlay-button" type="button">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path d="M8 5v14l11-7z" />
                        </svg>
                        <span>Click to Play with Sound</span>
                    </button>
                </div>
            )}
        </div>
    );
}
