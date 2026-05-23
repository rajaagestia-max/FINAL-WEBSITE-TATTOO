import React from 'react';
import { Star, Award, MapPin, Clock } from 'lucide-react';

const ITEMS = [
    {
        icon: <Star className="w-6 h-6 text-[#2E8B57]" aria-hidden="true" />,
        title: '5.0 Google Rating',
        body: 'Trusted by 118+ customers',
        testid: 'trust-rating',
    },
    {
        icon: <Award className="w-6 h-6 text-[#2E8B57]" aria-hidden="true" />,
        title: 'Since 2022',
        body: 'Professional tattoo and piercing studio in Bali',
        testid: 'trust-since',
    },
    {
        icon: <MapPin className="w-6 h-6 text-[#2E8B57]" aria-hidden="true" />,
        title: 'Near Finns Beach Club',
        body: 'Easy to find in Berawa, Canggu',
        testid: 'trust-location',
    },
    {
        icon: <Clock className="w-6 h-6 text-[#2E8B57]" aria-hidden="true" />,
        title: 'Open Daily',
        body: '10 AM to 10 PM',
        testid: 'trust-hours',
    },
];

export default function TrustBadge() {
    return (
        <section data-testid="trust-badge-section" className="py-10 sm:py-14 bg-[#FAFAFA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                    {ITEMS.map((item) => (
                        <div
                            key={item.testid}
                            data-testid={item.testid}
                            className="bg-white border border-[#C0C0C0]/50 rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md hover:border-[#2E8B57]/30 transition-all duration-200"
                        >
                            <div className="mb-3">{item.icon}</div>
                            <h3
                                className="text-base sm:text-lg font-normal text-[#1A1A1A] mb-1 uppercase leading-tight"
                                style={{ fontFamily: "'Coolvetica', sans-serif" }}
                            >
                                {item.title}
                            </h3>
                            <p
                                className="text-xs sm:text-sm text-[#4B5563] leading-snug"
                                style={{ fontFamily: "'Montserrat', sans-serif" }}
                            >
                                {item.body}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
