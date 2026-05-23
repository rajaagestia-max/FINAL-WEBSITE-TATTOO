import React, { useEffect, useRef } from 'react';
import { IG_LINK, trackEvent } from '../utils/tracking';

const PORTFOLIO = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    src: `/portfolio-${i + 1}.jpg`,
    alt: `Triple Ink Tattoo Bali — custom tattoo piece ${i + 1}`,
}));

const ROW_1 = PORTFOLIO.slice(0, 5);
const ROW_2 = PORTFOLIO.slice(5, 10);

function ScrollRow({ items }) {
    const rowRef = useRef(null);

    // Touch drag scroll
    useEffect(() => {
        const el = rowRef.current;
        if (!el) return;
        let isDown = false;
        let startX = 0;
        let scrollLeft = 0;

        const onDown = (e) => {
            isDown = true;
            startX = (e.pageX || e.touches[0].pageX) - el.offsetLeft;
            scrollLeft = el.scrollLeft;
        };
        const onUp = () => { isDown = false; };
        const onMove = (e) => {
            if (!isDown) return;
            const x = (e.pageX || e.touches[0].pageX) - el.offsetLeft;
            el.scrollLeft = scrollLeft - (x - startX);
        };

        el.addEventListener('mousedown', onDown);
        el.addEventListener('touchstart', onDown, { passive: true });
        el.addEventListener('mouseleave', onUp);
        el.addEventListener('mouseup', onUp);
        el.addEventListener('mousemove', onMove);
        el.addEventListener('touchend', onUp);
        el.addEventListener('touchmove', onMove, { passive: true });
        return () => {
            el.removeEventListener('mousedown', onDown);
            el.removeEventListener('touchstart', onDown);
            el.removeEventListener('mouseleave', onUp);
            el.removeEventListener('mouseup', onUp);
            el.removeEventListener('mousemove', onMove);
            el.removeEventListener('touchend', onUp);
            el.removeEventListener('touchmove', onMove);
        };
    }, []);

    return (
        <div
            ref={rowRef}
            className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none"
            role="list"
        >
            <div className="flex gap-3 sm:gap-4 pb-2" style={{ width: 'max-content' }}>
                {items.map((item) => (
                    <div
                        key={item.id}
                        role="listitem"
                        className="flex-shrink-0 w-40 sm:w-52 md:w-60 rounded-xl overflow-hidden border border-[#C0C0C0]/40 shadow-sm hover:shadow-md transition-shadow duration-200"
                        style={{ aspectRatio: '3/4' }}
                    >
                        <img
                            src={item.src}
                            alt={item.alt}
                            loading="lazy"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 pointer-events-none"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Portfolio() {
    const sectionRef = useRef(null);
    const trackedRef = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !trackedRef.current) {
                    trackEvent('ViewContent', { content_name: 'Portfolio Gallery' });
                    trackedRef.current = true;
                }
            },
            { threshold: 0.2 }
        );
        const el = sectionRef.current;
        if (el) observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="work"
            data-testid="portfolio-section"
            ref={sectionRef}
            className="py-16 sm:py-24 bg-[#FAFAFA] overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="mb-8 sm:mb-10">
                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#1A1A1A] mb-3 uppercase"
                        style={{ fontFamily: "'Coolvetica', sans-serif" }}
                    >
                        Our Work
                    </h2>
                    <p
                        className="text-sm sm:text-base text-[#4B5563] max-w-2xl leading-relaxed"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                        Explore some of our recent tattoo pieces, from clean fineline details to bold custom work, realism, mandala, Japanese-inspired, and cultural-inspired designs.
                    </p>
                </div>

                {/* Swipe hint */}
                <p
                    className="text-xs text-[#4B5563]/60 mb-3"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                    aria-label="Swipe to view more work"
                >
                    Swipe to view more work &rarr;
                </p>

                {/* 2-row carousel */}
                <div className="space-y-4">
                    <ScrollRow items={ROW_1} />
                    <ScrollRow items={ROW_2} />
                </div>

                {/* Instagram CTA */}
                <div className="mt-8 sm:mt-10 text-center">
                    <a
                        href={IG_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="portfolio-ig-btn"
                        onClick={() => trackEvent('ViewContent', { content_name: 'Instagram Portfolio' })}
                        className="inline-flex items-center gap-2 bg-white border border-[#C0C0C0] hover:border-[#2E8B57] text-[#1A1A1A] hover:text-[#2E8B57] font-semibold px-8 py-4 rounded-full text-sm sm:text-base transition-all duration-200 shadow-sm"
                        aria-label="View more tattoo work on Triple Ink Bali Instagram"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                        View More on Instagram
                    </a>
                </div>
            </div>
        </section>
    );
}
