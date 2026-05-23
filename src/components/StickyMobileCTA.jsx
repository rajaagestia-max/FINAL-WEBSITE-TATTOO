import React, { useState, useEffect } from 'react';
import { WA_LINK, trackEvent } from '../utils/tracking';
import { MessageCircle } from 'lucide-react';

export default function StickyMobileCTA() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 200);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleClick = () => {
        trackEvent('Lead');
        trackEvent('Contact');
    };

    return (
        <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="sticky-wa-btn"
            onClick={handleClick}
            aria-label="Book via WhatsApp — Triple Ink Tattoo Bali"
            className={`
                fixed bottom-6 left-6 z-50
                w-14 h-14 rounded-full
                bg-[#25D366] hover:bg-[#1ebe5d]
                flex items-center justify-center
                shadow-lg hover:shadow-xl
                transition-all duration-300
                wa-pulse
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
            `}
        >
            <MessageCircle size={26} className="text-white" aria-hidden="true" />
        </a>
    );
}
