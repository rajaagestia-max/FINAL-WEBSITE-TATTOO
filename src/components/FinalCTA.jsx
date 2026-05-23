import React from 'react';
import { WA_LINK, MAPS_LINK, trackEvent } from '../utils/tracking';

export default function FinalCTA() {
    const handleWA = () => { trackEvent('Lead'); trackEvent('Contact'); };
    const handleMaps = () => trackEvent('FindLocation');

    return (
        <section data-testid="final-cta-section" className="py-20 sm:py-32 bg-[#1A1A1A]">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
                {/* Heading */}
                <h2
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-5 uppercase leading-tight"
                    style={{ fontFamily: "'Coolvetica', sans-serif" }}
                >
                    Ready to Get Tattooed in Bali?
                </h2>

                {/* Body */}
                <p
                    className="text-sm sm:text-base text-white/70 mb-8 leading-relaxed max-w-xl mx-auto"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                    Send us your idea, reference, size, and preferred date. Our team will help you with design direction, pricing estimate, and booking details through WhatsApp.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
                    <a
                        href={WA_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="final-wa-btn"
                        onClick={handleWA}
                        className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#2E8B57] hover:text-white text-[#1A1A1A] font-semibold px-8 py-4 rounded-full text-sm sm:text-base transition-colors duration-300"
                        aria-label="Book your tattoo via WhatsApp"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                        Book via WhatsApp
                    </a>
                    <a
                        href={MAPS_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="final-maps-btn"
                        onClick={handleMaps}
                        className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-full text-sm sm:text-base transition-colors duration-300 border border-white/30"
                        aria-label="Get directions to Triple Ink Tattoo Bali"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                        Get Directions
                    </a>
                </div>

                {/* Trust */}
                <p
                    className="text-xs sm:text-sm text-white/40 mb-4 tracking-wide"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                    5.0 Google Rating &nbsp;&bull;&nbsp; 118+ Reviews &nbsp;&bull;&nbsp; Since 2022
                </p>

                {/* Small relaxed line */}
                <p
                    className="text-sm text-[#2E8B57]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                    Send us your idea. We will help from there.
                </p>
            </div>
        </section>
    );
}
