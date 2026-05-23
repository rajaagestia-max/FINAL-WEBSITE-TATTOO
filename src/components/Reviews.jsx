import React from 'react';
import { GOOGLE_REVIEWS_LINK, trackEvent } from '../utils/tracking';
import { Star } from 'lucide-react';

const REVIEWS = [
    {
        id: 1,
        name: 'Natalie Turnour',
        meta: 'Local Guide · 35 reviews · 7 photos',
        text: '"The studio is spotless, professional, and has such a welcoming vibe. Clean lines, beautiful detail, and exactly how I envisioned them."',
    },
    {
        id: 2,
        name: 'Sam Gladman',
        meta: '4 reviews · 2 photos · 9 months ago',
        text: '"Great location right next to Finns Beach Club. I messaged them on WhatsApp and within minutes I had a draft sent back."',
    },
    {
        id: 3,
        name: 'Thomas Judd',
        meta: '6 reviews · 1 photo · a year ago',
        text: '"Studio was clean and they showed me the new needles, so I knew I was in safe hands."',
    },
    {
        id: 4,
        name: 'Jason C',
        meta: 'Local Guide · 33 reviews · 59 photos · 11 months ago',
        text: '"No pressure or rush, which made it easy to be happy with the whole process. Felt very clean and hygienic."',
    },
    {
        id: 5,
        name: 'Jaakko Laakso',
        meta: '5 reviews · 8 photos · a year ago',
        text: '"Super-professional tattoo studio in Bali. Location is perfect and the facilities are very clean and cool."',
    },
    {
        id: 6,
        name: 'Pippa Travers-Mason',
        meta: 'Local Guide · 19 reviews · 9 photos · 11 months ago',
        text: '"Fantastic for my very first tattoos. Very professional and clean, and no pain."',
    },
    {
        id: 7,
        name: 'BlackMermaid',
        meta: 'Local Guide · 5 reviews · 4 photos · 2 weeks ago',
        text: '"Incredible service. Artists very talented, shop is well maintained and clean."',
    },
    {
        id: 8,
        name: 'Alex Cotsonis',
        meta: '2 reviews · 2 months ago',
        text: '"Very professional and experienced tattoo shop. Great quality and detail."',
    },
    {
        id: 9,
        name: 'B. Riel',
        meta: '3 reviews · 2 photos · 7 months ago',
        text: '"Very friendly, speak good English. And very importantly, hygiene."',
    },
    {
        id: 10,
        name: 'Dustin Apps',
        meta: '3 reviews · 1 photo · 6 months ago',
        text: '"Very clean lines and hygienic. They fixed my tattoo and made me happy when I look at it now."',
    },
];

/* Google Maps icon inline SVG */
const GoogleMapsIcon = () => (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-label="Google Maps" role="img">
        <path fill="#EA4335" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
        <circle fill="white" cx="12" cy="9" r="2.8"/>
    </svg>
);

function StarRating() {
    return (
        <div className="flex gap-0.5" aria-label="5 stars">
            {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
            ))}
        </div>
    );
}

function ReviewCard({ review }) {
    return (
        <div
            data-testid={`review-${review.id}`}
            className="bg-white border border-[#C0C0C0]/50 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200"
        >
            {/* Google Maps badge */}
            <div className="flex items-center gap-1.5 mb-3">
                <GoogleMapsIcon />
                <span className="text-xs text-[#4B5563]" style={{ fontFamily: "'Montserrat', sans-serif" }}>Google Maps</span>
                <div className="ml-auto">
                    <StarRating />
                </div>
            </div>
            <p
                className="text-sm text-[#1A1A1A] mb-3 leading-relaxed italic"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
                {review.text}
            </p>
            <div>
                <p
                    className="text-sm font-semibold text-[#1A1A1A]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                    {review.name}
                </p>
                <p
                    className="text-xs text-[#4B5563]/70 mt-0.5"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                    {review.meta}
                </p>
            </div>
        </div>
    );
}

export default function Reviews() {
    return (
        <section id="reviews" data-testid="reviews-section" className="py-16 sm:py-24 bg-[#FAFAFA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="mb-8 sm:mb-10">
                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#1A1A1A] mb-3 uppercase"
                        style={{ fontFamily: "'Coolvetica', sans-serif" }}
                    >
                        Trusted by Travelers Around the World
                    </h2>
                    <p
                        className="text-sm sm:text-base text-[#4B5563] max-w-2xl leading-relaxed"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                        Real customers. Real tattoos. Real experiences from people who trusted Triple Ink Tattoo Bali during their time in Bali.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="list">
                    {REVIEWS.map((r) => <ReviewCard key={r.id} review={r} />)}
                </div>

                <div className="mt-8 sm:mt-10 text-center">
                    <a
                        href={GOOGLE_REVIEWS_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="reviews-google-btn"
                        onClick={() => trackEvent('FindLocation')}
                        className="inline-flex items-center gap-2 bg-white border border-[#C0C0C0] hover:border-[#EA4335]/50 text-[#1A1A1A] hover:text-[#EA4335] font-semibold px-8 py-4 rounded-full text-sm sm:text-base transition-all duration-200 shadow-sm"
                        aria-label="Read more Google reviews for Triple Ink Tattoo Bali"
                    >
                        <GoogleMapsIcon />
                        Read More Google Reviews
                    </a>
                </div>
            </div>
        </section>
    );
}
