import React from 'react';
import { WA_LINK, trackEvent } from '../utils/tracking';

const INFO = [
    'Walk-ins are welcome, but booking in advance is recommended to secure your preferred time.',
    'A deposit is required to confirm your booking. The deposit amount and booking details will be explained by our team through WhatsApp.',
    'Free pick-up is available for tattoo bookings above IDR 5,000,000 in selected areas.',
    'Card and cashless payments accepted. We accept debit cards, credit cards, NFC payments, and major international cards.',
];

export default function BookingInfo() {
    return (
        <section data-testid="booking-section" className="py-16 sm:py-24 bg-[#FAFAFA]">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
                <h2
                    className="text-3xl sm:text-4xl font-normal text-[#1A1A1A] mb-8 uppercase"
                    style={{ fontFamily: "'Coolvetica', sans-serif" }}
                >
                    Booking Information
                </h2>

                <div className="space-y-4 mb-10 text-left sm:text-center">
                    {INFO.map((text, i) => (
                        <div
                            key={i}
                            data-testid={`booking-info-${i + 1}`}
                            className="bg-white border border-[#C0C0C0]/50 rounded-xl px-6 py-5 shadow-sm"
                        >
                            <p
                                className="text-sm sm:text-base text-[#4B5563] leading-relaxed"
                                style={{ fontFamily: "'Montserrat', sans-serif" }}
                            >
                                {text}
                            </p>
                        </div>
                    ))}
                </div>

                <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="booking-wa-btn"
                    onClick={() => { trackEvent('Lead'); trackEvent('Contact'); }}
                    className="inline-flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#2E8B57] text-white font-semibold px-8 py-4 rounded-full text-sm sm:text-base transition-colors duration-200"
                    aria-label="Book via WhatsApp"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                    Book via WhatsApp
                </a>
            </div>
        </section>
    );
}
