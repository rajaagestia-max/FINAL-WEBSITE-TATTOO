import React from 'react';
import { WA_LINK, trackEvent } from '../utils/tracking';
import { CheckCircle } from 'lucide-react';

const REASONS = [
    {
        id: 'clean-studio',
        title: 'Clean and Professional Studio',
        desc: 'We keep the process clean, careful, and comfortable from start to finish.',
    },
    {
        id: 'custom-design',
        title: 'Custom Design Support',
        desc: 'You can bring your own idea or let our team help shape the design with you.',
    },
    {
        id: 'no-pressure',
        title: 'Relaxed, No-Pressure Experience',
        desc: 'We take time with your design, placement, and adjustments before starting.',
    },
    {
        id: 'easy-location',
        title: 'Easy Location in Berawa',
        desc: 'Find us on Jl. Pantai Berawa, near Finns Beach Club in Canggu.',
    },
    {
        id: 'walk-ins',
        title: 'Walk-Ins Welcome',
        desc: 'Walk-ins are accepted depending on availability, but booking is recommended.',
    },
    {
        id: 'trusted',
        title: 'Trusted Since 2022',
        desc: 'Rated 5.0 on Google by 118+ customers.',
    },
];

export default function WhyChooseUs() {
    return (
        <section data-testid="why-section" className="py-16 sm:py-24 bg-[#FAFAFA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="mb-8 sm:mb-12">
                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#1A1A1A] mb-3 uppercase"
                        style={{ fontFamily: "'Coolvetica', sans-serif" }}
                    >
                        Why Choose Triple Ink Tattoo Bali
                    </h2>
                    <p
                        className="text-sm sm:text-base text-[#4B5563] max-w-2xl leading-relaxed"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                        A good tattoo is not just about the final result. It is also about feeling comfortable, safe, and understood during the process.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {REASONS.map((r) => (
                        <div
                            key={r.id}
                            data-testid={`why-${r.id}`}
                            className="bg-white border border-[#C0C0C0]/50 rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-200 flex gap-4"
                        >
                            <CheckCircle className="w-5 h-5 text-[#2E8B57] shrink-0 mt-0.5" aria-hidden="true" />
                            <div>
                                <h3
                                    className="text-sm sm:text-base font-normal text-[#1A1A1A] mb-1 uppercase leading-tight"
                                    style={{ fontFamily: "'Coolvetica', sans-serif" }}
                                >
                                    {r.title}
                                </h3>
                                <p
                                    className="text-xs sm:text-sm text-[#4B5563] leading-relaxed"
                                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                                >
                                    {r.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <a
                        href={WA_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="why-wa-btn"
                        onClick={() => { trackEvent('Lead'); trackEvent('Contact'); }}
                        className="inline-flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#2E8B57] text-white font-semibold px-8 py-4 rounded-full text-sm sm:text-base transition-colors duration-200"
                        aria-label="Book your spot via WhatsApp"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                        Book Your Spot
                    </a>
                </div>
            </div>
        </section>
    );
}
