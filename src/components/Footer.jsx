import React from 'react';
import { WA_LINK, MAPS_LINK, IG_LINK, FB_LINK, BARBERSHOP_LINK, GOOGLE_REVIEWS_LINK, trackEvent } from '../utils/tracking';
import { Instagram, Facebook, MapPin, MessageCircle, ExternalLink } from 'lucide-react';

export default function Footer() {
    return (
        <footer data-testid="footer" className="bg-[#0F0F0F] text-white pt-14 pb-28 sm:pb-14">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand col */}
                    <div className="lg:col-span-2">
                        {/* 3 logo berdampingan */}
                        <div className="flex items-center gap-4 mb-4">
                            <img
                                src="/logo.png"
                                alt="Triple Ink Tattoo Bali"
                                className="h-12 w-auto"
                                onError={(e) => { e.target.style.display = 'none'; }}
                            />
                            <img
                                src="/logo-triple-line-barber.jpg"
                                alt="Triple Line Barbershop"
                                className="h-12 w-auto rounded-lg bg-white p-1"
                            />
                            <img
                                src="/logo-triple-j.jpg"
                                alt="Triple J"
                                className="h-12 w-auto rounded-lg bg-white p-1"
                            />
                        </div>
                        <p
                            className="text-sm text-white/50 mb-5 leading-relaxed max-w-xs"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                            Custom Tattoo and Piercing Studio in Berawa, Canggu
                        </p>
                        {/* Social icons */}
                        <div className="flex gap-3">
                            <a
                                href={IG_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-testid="footer-ig-link"
                                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-[#2E8B57] hover:text-[#2E8B57] transition-colors duration-200"
                                aria-label="Triple Ink Bali on Instagram"
                            >
                                <Instagram size={16} />
                            </a>
                            <a
                                href={FB_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-testid="footer-fb-link"
                                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-[#2E8B57] hover:text-[#2E8B57] transition-colors duration-200"
                                aria-label="Triple Ink Bali on Facebook"
                            >
                                <Facebook size={16} />
                            </a>
                            <a
                                href={MAPS_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-testid="footer-maps-link"
                                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-[#2E8B57] hover:text-[#2E8B57] transition-colors duration-200"
                                aria-label="Triple Ink Bali on Google Maps"
                                onClick={() => trackEvent('FindLocation')}
                            >
                                <MapPin size={16} />
                            </a>
                            <a
                                href={WA_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-testid="footer-wa-link"
                                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-[#2E8B57] hover:text-[#2E8B57] transition-colors duration-200"
                                aria-label="Book via WhatsApp"
                                onClick={() => trackEvent('Contact')}
                            >
                                <MessageCircle size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Contact col */}
                    <div>
                        <h4
                            className="text-xs text-white/40 uppercase tracking-widest mb-4"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                            Contact
                        </h4>
                        <ul className="space-y-2">
                            <li
                                className="text-sm text-white/60"
                                style={{ fontFamily: "'Montserrat', sans-serif" }}
                            >
                                Jl. Pantai Berawa No.15, Tibubeneng, Kuta Utara, Badung, Bali 80361
                            </li>
                            <li>
                                <a
                                    href={WA_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    data-testid="footer-phone"
                                    className="text-sm text-white/60 hover:text-[#2E8B57] transition-colors"
                                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                                    aria-label="WhatsApp: 0881-0805-42381"
                                    onClick={() => trackEvent('Contact')}
                                >
                                    0881-0805-42381
                                </a>
                            </li>
                            <li
                                className="text-sm text-white/60"
                                style={{ fontFamily: "'Montserrat', sans-serif" }}
                            >
                                Open daily, 10 AM – 10 PM
                            </li>
                        </ul>
                    </div>

                    {/* Links col */}
                    <div>
                        <h4
                            className="text-xs text-white/40 uppercase tracking-widest mb-4"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            {[
                                { label: 'Our Work', href: '#work' },
                                { label: 'Services', href: '#services' },
                                { label: 'Reviews', href: '#reviews' },
                                { label: 'Location', href: '#location' },
                                { label: 'FAQ', href: '#faq' },
                            ].map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-white/60 hover:text-white transition-colors"
                                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Barbershop Button */}
                <div className="border-t border-white/10 mt-8 pt-6 pb-4 text-center">
                    <p
                        className="text-xs text-white/40 mb-4 uppercase tracking-widest"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                        Our sister business
                    </p>
                    <a
                        href={BARBERSHOP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="barbershop-btn"
                        className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                        aria-label="Visit Triple Line Barbershop website"
                        style={{
                            fontFamily: "'Coolvetica', sans-serif",
                            letterSpacing: '0.06em',
                            background: 'linear-gradient(135deg, #F5F5F5 0%, #E8E8E8 100%)',
                            color: '#1A1A1A',
                            boxShadow: '0 4px 20px rgba(255,255,255,0.15)',
                        }}
                        onClick={() => trackEvent('ViewContent', { content_name: 'Triple Line Barbershop' })}
                    >
                        <ExternalLink size={15} aria-hidden="true" />
                        Triple Line Barbershop
                    </a>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/10 pt-5 flex justify-center">
                    <p
                        className="text-xs text-white/30"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                        &copy; 2026 Triple Ink Tattoo Bali. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
