/**
 * Meta Pixel tracking helper.
 * Safely fires events only when fbq is available.
 * Replace YOUR_PIXEL_ID_HERE in public/index.html with real Pixel ID.
 */
export const trackEvent = (eventName, params = {}) => {
    try {
        if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
            window.fbq('track', eventName, params);
        }
    } catch (e) {
        // Silent fail — never break the page due to tracking errors
    }
};

const waText = encodeURIComponent(
    'Hi Triple Ink Bali, I want to book a tattoo or piercing appointment.\n\nService:\nTattoo idea:\nPlacement:\nSize:\nPreferred date:'
);

export const WA_LINK = `https://wa.me/62881080542381?text=${waText}`;
export const MAPS_LINK = 'https://maps.app.goo.gl/au3E86yH6twpNuaGA';
export const IG_LINK = 'https://www.instagram.com/tripleinkbali/';
export const FB_LINK = 'https://www.facebook.com/tripleinkbali/';
export const BARBERSHOP_LINK = 'https://triplelinebarbershop.com/';
export const GOOGLE_REVIEWS_LINK = 'https://maps.app.goo.gl/au3E86yH6twpNuaGA';
