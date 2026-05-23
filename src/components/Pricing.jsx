import React from 'react';
import { WA_LINK, trackEvent } from '../utils/tracking';

export default function Pricing() {
    const handleCTA = () => {
        trackEvent('Contact');
        trackEvent('Lead');
    };

    return (
        <section data-testid="pricing-section" className="py-16 sm:py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <div className="mb-10 sm:mb-14 text-center">
                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#1A1A1A] mb-2 uppercase"
                        style={{ fontFamily: "'Coolvetica', sans-serif" }}
                    >
                        Simple Starting Prices
                    </h2>
                </div>

                {/* Pricing cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10">
                    {/* Tattoo */}
                    <div
                        data-testid="pricing-tattoo"
                        className="bg-[#1A1A1A] text-white rounded-2xl p-7 sm:p-8 shadow-md"
                    >
                        <div
                            className="text-xs text-[#C0C0C0] uppercase tracking-widest mb-2"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                            Tattoo
                        </div>
                        <div
                            className="text-3xl sm:text-4xl font-normal text-white mb-1 uppercase"
                            style={{ fontFamily: "'Coolvetica', sans-serif" }}
                        >
                            From IDR 700K
                        </div>
                        <p
                            className="text-sm text-white/60 mt-3 leading-relaxed"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                            Final pricing depends on size, placement, detail, design complexity, and session time.
                        </p>
                    </div>

                    {/* Piercing */}
                    <div
                        data-testid="pricing-piercing"
                        className="bg-white border border-[#C0C0C0]/60 rounded-2xl p-7 sm:p-8 shadow-sm"
                    >
                        <div
                            className="text-xs text-[#4B5563] uppercase tracking-widest mb-2"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                            Piercing
                        </div>
                        <div
                            className="text-3xl sm:text-4xl font-normal text-[#1A1A1A] mb-1 uppercase"
                            style={{ fontFamily: "'Coolvetica', sans-serif" }}
                        >
                            From IDR 500K
                        </div>
                        <p
                            className="text-sm text-[#4B5563] mt-3 leading-relaxed"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                            Price may vary depending on placement and jewelry selection.
                        </p>
                    </div>
                </div>

                {/* Bottom line + CTA */}
                <div className="text-center">
                    <p
                        className="text-sm text-[#4B5563] mb-6"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                        Want a quick estimate? Send your idea, size, and placement through WhatsApp.
                    </p>
                    <a
                        href={WA_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="pricing-wa-btn"
                        onClick={handleCTA}
                        className="inline-flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#2E8B57] text-white font-semibold px-8 py-4 rounded-full text-sm sm:text-base transition-colors duration-200"
                        aria-label="Ask for a price estimate via WhatsApp"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                        Ask for Price Estimate
                    </a>
                </div>
            </div>
        </section>
    );
}
