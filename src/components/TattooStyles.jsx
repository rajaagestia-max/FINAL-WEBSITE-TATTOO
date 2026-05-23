import React from 'react';
import { WA_LINK, trackEvent } from '../utils/tracking';

const STYLES = [
    {
        id: 'fineline',
        name: 'Fineline',
        desc: 'Clean, delicate, and minimal tattoo work for scripts, small symbols, angel numbers, and meaningful personal designs.',
    },
    {
        id: 'japanese',
        name: 'Japanese',
        desc: 'Bold composition, strong flow, and classic Japanese-inspired elements such as dragons, koi, waves, flowers, and masks.',
    },
    {
        id: 'oriental',
        name: 'Oriental',
        desc: 'Asian-inspired ornamental designs with symbolic visuals, decorative details, and flowing body placement.',
    },
    {
        id: 'realism',
        name: 'Realism',
        desc: 'Detailed tattoo work focused on realistic shading, depth, faces, animals, objects, and lifelike results.',
    },
    {
        id: 'polynesian',
        name: 'Polynesian / Maori-Inspired',
        desc: 'Custom tribal-inspired designs influenced by Polynesian and Maori-style visual patterns, created with a respectful custom approach.',
    },
    {
        id: 'filipino',
        name: 'Filipino-Inspired',
        desc: 'Custom ornamental and tribal-inspired tattoo designs influenced by Filipino visual traditions and pattern work.',
    },
    {
        id: 'mandala',
        name: 'Mandala',
        desc: 'Symmetrical, geometric, and ornamental tattoos with clean patterns and balanced composition.',
    },
    {
        id: 'oldschool',
        name: 'Old School',
        desc: 'Classic tattoo style with bold lines, strong shapes, vintage icons, and timeless attitude.',
    },
    {
        id: 'balinese',
        name: 'Balinese-Inspired',
        desc: 'Custom designs inspired by Balinese ornaments, mythology, masks, patterns, and local visual culture.',
    },
];

export default function TattooStyles() {
    return (
        <section id="styles" data-testid="styles-section" className="py-16 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="mb-8 sm:mb-12">
                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#1A1A1A] mb-3 uppercase"
                        style={{ fontFamily: "'Coolvetica', sans-serif" }}
                    >
                        Tattoo Styles We Create
                    </h2>
                    <p
                        className="text-sm sm:text-base text-[#4B5563] max-w-3xl leading-relaxed"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                        We create custom tattoos across fineline, Japanese, oriental, realism, mandala, old school, Balinese-inspired, Filipino-inspired, and Polynesian or Maori-inspired styles. Every design is adjusted to your idea, placement, and personal meaning.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {STYLES.map((s) => (
                        <div
                            key={s.id}
                            data-testid={`style-${s.id}`}
                            className="bg-white border border-[#C0C0C0]/50 rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-[#2E8B57]/40 transition-all duration-200"
                        >
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
                        data-testid="styles-wa-btn"
                        onClick={() => trackEvent('Contact')}
                        className="inline-flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#2E8B57] text-white font-semibold px-8 py-4 rounded-full text-sm sm:text-base transition-colors duration-200"
                        aria-label="Ask about tattoo styles via WhatsApp"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                        Ask About Your Style
                    </a>
                </div>
            </div>
        </section>
    );
}
