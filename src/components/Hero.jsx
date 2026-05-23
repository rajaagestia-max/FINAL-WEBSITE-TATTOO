import React, { useState } from 'react';
import { WA_LINK, trackEvent } from '../utils/tracking';

export default function Hero() {
    const [videoError, setVideoError] = useState(false);

    const handleBookingClick = () => {
        trackEvent('Lead');
        trackEvent('Contact');
    };

    return (
        <section
            data-testid="hero-section"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
        >
            {/* Video background */}
            {!videoError && (
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster="/hero-poster.jpg"
                    onError={() => setVideoError(true)}
                    className="absolute inset-0 w-full h-full object-cover"
                    aria-hidden="true"
                >
                    <source src="/hero-video.mp4" type="video/mp4" />
                </video>
            )}

            {/* Fallback background if video fails */}
            {videoError && (
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/hero-poster.jpg'), linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
                    }}
                    aria-hidden="true"
                />
            )}

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

            {/* Content — rata kiri */}
            <div className="relative z-10 text-left text-white px-6 sm:px-10 md:px-16 max-w-5xl mx-auto w-full">

                {/* Slogan — minimalis, thin italic */}
                <p
                    className="text-sm sm:text-base text-white/45 mb-4 tracking-widest"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, fontStyle: 'italic' }}
                    aria-label="Trust Your Vibes Energy Never Lies"
                >
                    Trust Your Vibes Energy Never Lies
                </p>

                {/* Main H1 */}
                <h1
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white leading-tight mb-8 tracking-wide uppercase"
                    style={{ fontFamily: "'Coolvetica', sans-serif" }}
                >
                    Triple Ink Tattoo Bali
                </h1>

                {/* CTA Button */}
                <div className="flex">
                    <a
                        href={WA_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="hero-wa-btn"
                        onClick={handleBookingClick}
                        className="inline-flex items-center justify-center gap-2 bg-[#1A1A1A] hover:bg-[#2E8B57] text-white font-semibold px-8 py-4 rounded-full text-sm sm:text-base transition-colors duration-300 border border-white/10"
                        aria-label="Book a tattoo or piercing via WhatsApp"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                        Book via WhatsApp
                    </a>
                </div>
            </div>

            {/* Trust line — paling bawah hero */}
            <p
                className="absolute bottom-8 left-6 sm:left-10 md:left-16 right-6 z-10 text-xs sm:text-sm text-white/40 tracking-wide"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
                5.0 Google Rating &nbsp;&bull;&nbsp; 118+ Reviews &nbsp;&bull;&nbsp; Since 2022 &nbsp;&bull;&nbsp; Open Daily 10 AM – 10 PM
            </p>

            {/* Scroll indicator */}
            <div
                className="absolute bottom-6 right-6 flex flex-col items-center gap-1 opacity-40 z-10"
                aria-hidden="true"
            >
                <div className="w-px h-8 bg-white/50 animate-pulse" />
            </div>
        </section>
    );
}
