/**
 * Google Tag Manager Data Layer Helper
 * Provides type-safe functions for pushing events to GTM dataLayer
 */

import type {
    GTMEvent,
    CTAClickEvent,
    FormSubmitEvent,
    ScrollDepthEvent,
    TimeOnPageEvent,
} from "./types";

// Type-safe dataLayer access
type DataLayer = GTMEvent[];

/**
 * Push event to GTM dataLayer (client-side only)
 * Gracefully handles missing GTM setup
 */
function pushToDataLayer(event: GTMEvent): void {
    if (typeof window === "undefined") {
        console.warn("[GTM] Attempted to push event on server-side:", event.event);
        return;
    }

    if (!window.dataLayer) {
        console.warn("[GTM] dataLayer not initialized. Event not sent:", event.event);
        return;
    }

    (window as any).dataLayer.push(event);

    // Development logging
    if (process.env.NODE_ENV === "development") {
        console.log("[GTM Event]", event);
    }
}

/**
 * Track CTA button clicks
 */
export function trackCTAClick(
    location: CTAClickEvent["cta_location"],
    text: string = "TAKE YOUR CHANCE",
    scrollDepth?: number
): void {
    pushToDataLayer({
        event: "cta_click",
        cta_location: location,
        cta_text: text,
        scroll_depth: scrollDepth,
    });
}

/**
 * Track form submission (success or error only)
 */
export function trackFormSubmit(formId: string, status: "success" | "error", errorMessage?: string): void {
    pushToDataLayer({
        event: "form_submit",
        form_id: formId,
        form_status: status,
        error_message: errorMessage,
    });
}

/**
 * Track scroll depth milestones
 */
export function trackScrollDepth(threshold: ScrollDepthEvent["scroll_depth_threshold"]): void {
    pushToDataLayer({
        event: "scroll_depth",
        scroll_depth_threshold: threshold,
        page_location: window.location.href,
    });
}

/**
 * Track time on page milestones
 */
export function trackTimeOnPage(threshold: number, totalTime: number): void {
    pushToDataLayer({
        event: "time_on_page",
        time_threshold: threshold as TimeOnPageEvent["time_threshold"],
        total_time: totalTime,
    });
}
