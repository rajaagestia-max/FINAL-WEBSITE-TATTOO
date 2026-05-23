import React from 'react';
import { WA_LINK, trackEvent } from '../utils/tracking';

const POINTS = [
    'Clean studio environment.',
    'Careful setup before every session.',
    'Professional tattoo process.',
    'Comfortable consultation.',
    'Clear aftercare guidance.',
];

export default function HygieneSafety() {
    return (
        <section data-testid="hygiene-section" className="py-16 sm:py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 items-center">
                    {/* Text side */}
                    <div>
                        <h2
                            className="text-3xl sm:text-4xl font-normal text-[#1A1A1A] mb-4 uppercase leading-tight"
                            style={{ fontFamily: "'Coolvetica', sans-serif" }}
                        >
                            Clean Work. Safe Process. Better Experience.
                        </h2>
                        <p
                            className="text-sm sm:text-base text-[#4B5563] mb-6 leading-relaxed"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                            Your comfort and safety matter. Our studio keeps the tattoo process clean, organized, and professional, so you can feel confident before the needle touches your skin.
                        </p>
                        <ul className="space-y-3 mb-8" aria-label="Hygiene and safety points">
                            {POINTS.map((point) => (
                                <li
                                    key={point}
                                    className="flex items-start gap-3 text-sm text-[#1A1A1A]"
                                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                                >
                                    <span
                                        className="w-1.5 h-1.5 rounded-full bg-[#2E8B57] shrink-0 mt-2"
                                        aria-hidden="true"
                                    />
                                    {point}
                                </li>
                            ))}
                        </ul>
                        <a
                            href={WA_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="hygiene-wa-btn"
                            onClick={() => trackEvent('Contact')}
                            className="inline-flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#2E8B57] text-white font-semibold px-8 py-4 rounded-full text-sm sm:text-base transition-colors duration-200"
                            aria-label="Chat with the team via WhatsApp"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                            Chat With Our Team
                        </a>
                    </div>

                    {/* Visual side */}
                    <div className="rounded-2xl overflow-hidden border border-[#C0C0C0]/40 shadow-sm aspect-video md:aspect-[4/5]">
                        <img
                            src="/tattoo-process.jpg"
                            alt="Professional tattoo process at Triple Ink Tattoo Bali"
                            loading="lazy"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
