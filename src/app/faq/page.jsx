'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import gsap from 'gsap';

export default function Page() {
    const [openIndex, setOpenIndex] = useState(null);
    const faqRef = useRef([]);
    
    const faqs = [
        {
            question: "What is UniUms and how does it help educational institutes?",
            answer: "UniUms is a smart institute management system that automates student and faculty management, streamlines administration, and enhances productivity with AI-driven insights.",
        },
        {
            question: "How does the pricing model work?",
            answer: "UniUms charges ₹10 per student per month. The basic package starts at ₹5000 per month, and if you purchase for 3 months, you get 1 additional month free.",
        },
        {
            question: "Can UniUms integrate with our existing systems?",
            answer: "Yes, UniUms seamlessly integrates with existing Learning Management Systems (LMS), payment gateways, and other third-party tools.",
        },
        {
            question: "Is UniUms secure and compliant with data protection laws?",
            answer: "Absolutely. UniUms employs industry-standard encryption, secure authentication, and complies with global data protection regulations to safeguard user information.",
        },
        {
            question: "Do you offer customer support?",
            answer: "Yes, we provide 24/7 customer support via email and live chat for all our plans. Priority support is available for premium users.",
        },
    ];

    useEffect(() => {
        gsap.fromTo(
            faqRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out' }
        );
    }, []);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-6 py-20">
            <h2 className="text-4xl font-bold mb-6 text-center">❓ Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center">
                Find answers to the most common questions about UniUms.
            </p>

            <div className="max-w-3xl w-full">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        ref={(el) => (faqRef.current[index] = el)}
                        className="mb-4 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md overflow-hidden transition-all"
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
                        >
                            <span className="text-lg font-semibold">{faq.question}</span>
                            <ChevronDown
                                className={`transition-transform duration-300 ${
                                    openIndex === index ? 'rotate-180' : ''
                                }`}
                            />
                        </button>
                        <div
                            style={{ height: openIndex === index ? 'auto' : 0, opacity: openIndex === index ? 1 : 0 }}
                            className="overflow-hidden transition-all duration-500 ease-in-out p-4"
                        >
                            <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
