import React from 'react';
import { WA_LINK, trackEvent } from '../utils/tracking';

const SERVICES = [
    {
        id: 'custom',
        name: 'Custom Tattoo',
        desc: 'Bring your idea, reference, or story. We will help turn it into a tattoo that fits your body and style.',
        icon: '✦',
    },
    {
        id: 'coverup',
        name: 'Cover-Up Tattoo',
        desc: 'Old tattoo you do not love anymore? We can help transform it into something cleaner, stronger, and better designed.',
        icon: '✦',
    },
    {
        id: 'fineline',
        name: 'Fineline Tattoo',
        desc: 'Perfect for clean, elegant, detailed, and minimal tattoos.',
        icon: '✦',
    },
    {
        id: 'piercing',
        name: 'Piercing',
        desc: 'Professional piercing service with careful placement and a clean studio process.',
        icon: '✦',
    },
    {
        id: 'consultation',
        name: 'Tattoo Consultation',
        desc: 'Not sure about size, placement, or design? Message us first and we will guide you before booking.',
        icon: '✦',
    },
];

export default function Services() {
    return (
        <section id="services" data-testid="services-section" className="py-16 sm:py-24 bg-[#FAFAFA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="mb-8 sm:mb-12">
                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#1A1A1A] mb-2 uppercase"
                        style={{ fontFamily: "'Coolvetica', sans-serif" }}
                    >
                        What We Offer
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {SERVICES.map((s) => (
                        <div
                            key={s.id}
                            data-testid={`service-${s.id}`}
                            className="bg-white border border-[#C0C0C0]/50 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-[#2E8B57]/30 transition-all duration-200"
                        >
                            <span className="text-[#2E8B57] text-lg mb-3 block" aria-hidden="true">{s.icon}</span>
                            <h3
                                className="text-base sm:text-lg font-normal text-[#1A1A1A] mb-2 uppercase"
                                style={{ fontFamily: "'Coolvetica', sans-serif" }}
                            >
                                {s.name}
                            </h3>
                            <p
                                className="text-sm text-[#4B5563] leading-relaxed"
                                style={{ fontFamily: "'Montserrat', sans-serif" }}
                            >
                                {s.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <a
                        href={WA_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="services-wa-btn"
                        onClick={() => { trackEvent('Contact'); trackEvent('Lead'); }}
                        className="inline-flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#2E8B57] text-white font-semibold px-8 py-4 rounded-full text-sm sm:text-base transition-colors duration-200"
                        aria-label="Start a consultation via WhatsApp"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                        Start Consultation
                    </a>
                </div>
            </div>
        </section>
    );
}
