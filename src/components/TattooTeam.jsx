import React from 'react';
import { WA_LINK, trackEvent } from '../utils/tracking';

export default function TattooTeam() {
    return (
        <section data-testid="team-section" className="py-16 sm:py-24 bg-[#FAFAFA]">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 items-center">
                    {/* Studio image */}
                    <div className="rounded-2xl overflow-hidden border border-[#C0C0C0]/40 shadow-sm aspect-video md:aspect-[4/5] order-2 md:order-1">
                        <img
                            src="/studio-inside.jpg"
                            alt="Inside Triple Ink Tattoo Bali studio"
                            loading="lazy"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.parentNode.style.background = '#FAFAFA';
                            }}
                        />
                    </div>

                    {/* Text side */}
                    <div className="order-1 md:order-2">
                        <h2
                            className="text-3xl sm:text-4xl font-normal text-[#1A1A1A] mb-5 uppercase leading-tight"
                            style={{ fontFamily: "'Coolvetica', sans-serif" }}
                        >
                            Professional Tattoo Team
                        </h2>
                        <p
                            className="text-sm sm:text-base text-[#4B5563] mb-4 leading-relaxed"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                            Our tattoo team works with experienced resident and guest artists, allowing us to match each tattoo idea with the right style, technique, and execution.
                        </p>
                        <p
                            className="text-sm sm:text-base text-[#4B5563] mb-8 leading-relaxed"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                            No pressure. No rushed decisions. We help you choose the right size, placement, and design direction before starting.
                        </p>
                        <a
                            href={WA_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="team-wa-btn"
                            onClick={() => { trackEvent('Contact'); trackEvent('Lead'); }}
                            className="inline-flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#2E8B57] text-white font-semibold px-8 py-4 rounded-full text-sm sm:text-base transition-colors duration-200"
                            aria-label="Discuss your design via WhatsApp"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                            Discuss Your Design
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
