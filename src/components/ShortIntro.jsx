import React from 'react';
import { WA_LINK, trackEvent } from '../utils/tracking';

export default function ShortIntro() {
    return (
        <section data-testid="short-intro-section" className="py-16 sm:py-24 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
                <h2
                    className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#1A1A1A] mb-6 uppercase leading-tight"
                    style={{ fontFamily: "'Coolvetica', sans-serif" }}
                >
                    Your Tattoo Experience in Bali Starts Here
                </h2>
                <p
                    className="text-base sm:text-lg text-[#4B5563] mb-5 leading-relaxed"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                    Whether it is your first tattoo, a small fineline piece, a full custom design, or a cover-up, our team will help you shape the idea, adjust the placement, and create something that feels right for you.
                </p>
                <p
                    className="text-sm sm:text-base text-[#1A1A1A] font-semibold mb-10 tracking-wide"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                    Clean studio. Friendly team. No pressure. Just good work.
                </p>
                <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="intro-wa-btn"
                    onClick={() => { trackEvent('Contact'); }}
                    className="inline-flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#2E8B57] text-white font-semibold px-8 py-4 rounded-full text-sm sm:text-base transition-colors duration-200"
                    aria-label="Send your tattoo idea via WhatsApp"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                    Send Your Tattoo Idea
                </a>
            </div>
        </section>
    );
}
