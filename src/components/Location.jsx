import React from 'react';
import { MAPS_LINK, WA_LINK, trackEvent } from '../utils/tracking';
import { MapPin, Clock, ExternalLink } from 'lucide-react';

export default function Location() {
    const handleMaps = () => trackEvent('FindLocation');
    const handleWA = () => { trackEvent('Lead'); trackEvent('Contact'); };

    return (
        <section id="location" data-testid="location-section" className="py-16 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="mb-8 sm:mb-12">
                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#1A1A1A] mb-3 uppercase"
                        style={{ fontFamily: "'Coolvetica', sans-serif" }}
                    >
                        Easy to Find in Berawa, Canggu
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Info card — 2/3 lebar */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Studio front image — lebih besar */}
                        <div className="rounded-2xl overflow-hidden border border-[#C0C0C0]/40 shadow-sm">
                            <img
                                src="/studio-front.jpg"
                                alt="Triple Ink Tattoo Bali studio exterior at Berawa, Canggu"
                                loading="lazy"
                                className="w-full object-cover"
                            />
                        </div>
                        {/* Address */}
                        <div className="flex gap-4 items-start">
                            <MapPin className="w-5 h-5 text-[#2E8B57] shrink-0 mt-0.5" aria-hidden="true" />
                            <div>
                                <p
                                    className="text-sm font-semibold text-[#1A1A1A] mb-1"
                                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                                >
                                    Address
                                </p>
                                <p
                                    className="text-sm text-[#4B5563] leading-relaxed"
                                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                                >
                                    Jl. Pantai Berawa No.15, Tibubeneng, Kuta Utara, Badung, Bali 80361
                                    <br />
                                    <span className="text-[#2E8B57]">Near Finns Beach Club, Berawa, Canggu</span>
                                </p>
                            </div>
                        </div>

                        {/* Hours */}
                        <div className="flex gap-4 items-start">
                            <Clock className="w-5 h-5 text-[#2E8B57] shrink-0 mt-0.5" aria-hidden="true" />
                            <div>
                                <p
                                    className="text-sm font-semibold text-[#1A1A1A] mb-1"
                                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                                >
                                    Opening Hours
                                </p>
                                <p
                                    className="text-sm text-[#4B5563]"
                                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                                >
                                    Open daily from 10 AM to 10 PM
                                </p>
                            </div>
                        </div>

                        <p
                            className="text-sm sm:text-base text-[#4B5563] leading-relaxed"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                            Right in front of Finns Beach Club
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            <a
                                href={MAPS_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-testid="location-maps-btn"
                                onClick={handleMaps}
                                className="inline-flex items-center justify-center gap-2 bg-[#1A1A1A] hover:bg-[#2E8B57] text-white font-semibold px-7 py-3.5 rounded-full text-sm transition-colors duration-200"
                                aria-label="Open Google Maps for Triple Ink Tattoo Bali"
                                style={{ fontFamily: "'Montserrat', sans-serif" }}
                            >
                                <ExternalLink size={15} aria-hidden="true" />
                                Open Google Maps
                            </a>
                            <a
                                href={WA_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-testid="location-wa-btn"
                                onClick={handleWA}
                                className="inline-flex items-center justify-center gap-2 bg-white border border-[#C0C0C0] hover:border-[#2E8B57] text-[#1A1A1A] hover:text-[#2E8B57] font-semibold px-7 py-3.5 rounded-full text-sm transition-all duration-200"
                                aria-label="Book before you come via WhatsApp"
                                style={{ fontFamily: "'Montserrat', sans-serif" }}
                            >
                                Book Before You Come
                            </a>
                        </div>
                    </div>

                    {/* Map embed — lebih kecil, 1/3 lebar */}
                    <div className="lg:col-span-1 rounded-2xl overflow-hidden border border-[#C0C0C0]/40 shadow-sm">
                        <iframe
                            title="Triple Ink Tattoo Bali on Google Maps"
                            src="https://maps.google.com/maps?q=-8.6666929,115.1398726&z=17&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: '220px' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            aria-label="Google Maps showing Triple Ink Tattoo Bali location in Berawa, Canggu"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
