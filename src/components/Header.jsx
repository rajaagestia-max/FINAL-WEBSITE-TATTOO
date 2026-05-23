import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { WA_LINK, trackEvent } from '../utils/tracking';

const NAV_LINKS = [
    { label: 'Work', href: '#work' },
    { label: 'Styles', href: '#styles' },
    { label: 'Services', href: '#services' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location', href: '#location' },
    { label: 'FAQ', href: '#faq' },
];

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const closeMenu = () => setMobileOpen(false);

    const handleWA = () => {
        trackEvent('Contact');
        trackEvent('Lead');
    };

    return (
        <>
            <header
                data-testid="main-header"
                className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
                    scrolled
                        ? 'bg-white/97 backdrop-blur-md shadow-sm border-b border-[#C0C0C0]/30'
                        : 'bg-white/90 backdrop-blur-sm border-b border-[#C0C0C0]/20'
                }`}
                style={{ backdropFilter: 'blur(12px)' }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
                    {/* Logo + Text selalu tampil berdampingan */}
                    <a
                        href="#"
                        className="flex items-center gap-2.5 shrink-0"
                        aria-label="Triple Ink Tattoo Bali — Home"
                        data-testid="logo-link"
                    >
                        <img
                            src="/logo.png"
                            alt="Triple Ink Tattoo Bali"
                            className="h-9 w-auto"
                            onError={(e) => { e.target.style.display = 'none'; }}
                        />
                        <span
                            className="text-lg text-[#1A1A1A] tracking-widest uppercase leading-none"
                            style={{ fontFamily: "'Coolvetica', sans-serif" }}
                        >
                            Triple Ink Bali
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                data-testid={`nav-${link.label.toLowerCase()}`}
                                className="text-sm font-medium text-[#4B5563] hover:text-[#2E8B57] transition-colors duration-200"
                                style={{ fontFamily: "'Montserrat', sans-serif" }}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Right side */}
                    <div className="flex items-center gap-3">
                        <a
                            href={WA_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="header-wa-btn"
                            onClick={handleWA}
                            className="hidden sm:inline-flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#2E8B57] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-200"
                            aria-label="Book via WhatsApp"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                            Book via WhatsApp
                        </a>
                        <button
                            data-testid="hamburger-btn"
                            className="md:hidden p-2 text-[#1A1A1A] hover:text-[#2E8B57] transition-colors"
                            onClick={() => setMobileOpen(true)}
                            aria-label="Open navigation menu"
                            aria-expanded={mobileOpen}
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {mobileOpen && (
                <div
                    data-testid="mobile-menu"
                    className="fixed inset-0 bg-white z-50 flex flex-col"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Navigation menu"
                >
                    <div className="flex justify-between items-center px-4 py-3.5 border-b border-[#C0C0C0]/30">
                        <span
                            className="text-xl text-[#1A1A1A] tracking-widest uppercase"
                            style={{ fontFamily: "'Coolvetica', sans-serif" }}
                        >
                            Triple Ink Bali
                        </span>
                        <button
                            data-testid="close-menu-btn"
                            onClick={closeMenu}
                            className="p-2 text-[#1A1A1A] hover:text-[#2E8B57] transition-colors"
                            aria-label="Close navigation menu"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <nav className="flex flex-col flex-1 overflow-y-auto" aria-label="Mobile navigation">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                data-testid={`mobile-nav-${link.label.toLowerCase()}`}
                                onClick={closeMenu}
                                className="text-2xl font-medium text-[#1A1A1A] px-6 py-5 border-b border-[#C0C0C0]/20 hover:text-[#2E8B57] hover:bg-[#FAFAFA] transition-colors duration-200"
                                style={{ fontFamily: "'Coolvetica', sans-serif" }}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <div className="p-4 pb-8">
                        <a
                            href={WA_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="mobile-menu-wa-btn"
                            onClick={() => { handleWA(); closeMenu(); }}
                            className="flex items-center justify-center gap-2 bg-[#1A1A1A] text-white font-semibold py-4 px-6 rounded-full w-full text-base"
                            aria-label="Book via WhatsApp"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                            Book via WhatsApp
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}
