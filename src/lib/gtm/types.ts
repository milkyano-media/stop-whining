/**
 * TypeScript interfaces for GTM Data Layer events
 */

// Base event interface
export interface GTMEvent {
    event: string;
    [key: string]: any;
}

// CTA Button click events
export interface CTAClickEvent extends GTMEvent {
    event: "cta_click";
    cta_location: "hero" | "requirements" | "benefits";
    cta_text: string;
    scroll_depth?: number;
}

// Form submission events
export interface FormSubmitEvent extends GTMEvent {
    event: "form_submit";
    form_id: string;
    form_status: "success" | "error";
    error_message?: string;
}

// Scroll depth events
export interface ScrollDepthEvent extends GTMEvent {
    event: "scroll_depth";
    scroll_depth_threshold: 25 | 50 | 75 | 100;
    page_location: string;
}

// Time on page events
export interface TimeOnPageEvent extends GTMEvent {
    event: "time_on_page";
    time_threshold: 30 | 60 | 120 | 300;
    total_time: number;
}
