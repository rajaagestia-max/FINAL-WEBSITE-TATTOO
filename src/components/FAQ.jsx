import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

const FAQS = [
    {
        q: 'Do you accept walk-ins?',
        a: 'Yes, walk-ins are welcome depending on availability. For custom tattoos, we recommend booking first.',
    },
    {
        q: 'Do I need to pay a deposit?',
        a: 'Yes. A deposit is required to secure your appointment. Our team will explain the deposit amount and booking details through WhatsApp.',
    },
    {
        q: 'How much does a tattoo cost?',
        a: 'Tattoo starts from IDR 700K. Final pricing depends on size, placement, detail, design complexity, and session time.',
    },
    {
        q: 'How much is piercing?',
        a: 'Piercing starts from IDR 500K. Price may vary depending on placement and jewelry selection.',
    },
    {
        q: 'Can I send my tattoo idea before coming?',
        a: 'Yes. Send your idea, reference, size, and placement through WhatsApp. Our team will help guide you.',
    },
    {
        q: 'Do you do cover-up tattoos?',
        a: 'Yes. We can help transform old or unwanted tattoos into a new custom design.',
    },
    {
        q: 'Where are you located?',
        a: 'We are located on Jl. Pantai Berawa No.15, Berawa, Canggu, near Finns Beach Club.',
    },
    {
        q: 'Can I pay by card?',
        a: 'Yes. Card and cashless payments are accepted.',
    },
    {
        q: 'Do you offer free pick-up?',
        a: 'Free pick-up is available for tattoo bookings above IDR 5,000,000 in selected areas.',
    },
    {
        q: 'Can I swim after getting a tattoo?',
        a: 'We recommend avoiding swimming, direct sun exposure, and soaking the tattoo until it is properly healed. Our team will explain aftercare after your session.',
    },
];

export default function FAQ() {
    return (
        <section id="faq" data-testid="faq-section" className="py-16 sm:py-24 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
                <h2
                    className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#1A1A1A] mb-10 uppercase"
                    style={{ fontFamily: "'Coolvetica', sans-serif" }}
                >
                    Frequently Asked Questions
                </h2>

                <Accordion
                    type="single"
                    collapsible
                    className="space-y-2"
                    data-testid="faq-accordion"
                >
                    {FAQS.map((item, i) => (
                        <AccordionItem
                            key={i}
                            value={`faq-${i}`}
                            data-testid={`faq-item-${i + 1}`}
                            className="border border-[#C0C0C0]/40 rounded-xl px-2 hover:border-[#2E8B57]/30 transition-colors duration-200 bg-white"
                        >
                            <AccordionTrigger
                                data-testid={`faq-trigger-${i + 1}`}
                                className="text-left text-sm sm:text-base font-medium text-[#1A1A1A] py-4 px-3 hover:no-underline"
                                style={{ fontFamily: "'Montserrat', sans-serif" }}
                            >
                                {item.q}
                            </AccordionTrigger>
                            <AccordionContent
                                data-testid={`faq-content-${i + 1}`}
                                className="text-sm text-[#4B5563] leading-relaxed px-3 pb-4"
                                style={{ fontFamily: "'Montserrat', sans-serif" }}
                            >
                                {item.a}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
