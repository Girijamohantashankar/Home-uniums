"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Page() {
    const cardsRef = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            cardsRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: cardsRef.current,
                    start: "top 80%", // Animates when cards enter the viewport
                    toggleActions: "play none none none",
                },
            }
        );
    }, []);

    const plans = [
        {
            title: "Basic Plan",
            price: "₹5000/month",
            features: [
                "Up to 500 students",
                "Student & Faculty Management",
                "Basic Reports & Analytics",
                "Email Support"
            ],
        },
        {
            title: "Growth Plan",
            price: "₹10 per student/month",
            features: [
                "Unlimited Students",
                "Advanced Reports & Analytics",
                "Custom Role Management",
                "Priority Support"
            ],
        },
        {
            title: "3-Month Offer",
            price: "Buy 3 months, Get 1 month Free!",
            features: [
                "Applies to all plans",
                "Cost-effective for institutions",
                "Flexible payment options",
                "Exclusive early-access features"
            ],
        },
    ];

    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-20">
            <h2 className="text-4xl font-bold mb-6 text-center pt-4">💰 Pricing Plans</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center">
                Choose the perfect plan for your institution. Transparent pricing, no hidden fees.
            </p>

            <div className="grid md:grid-cols-3 gap-10 max-w-6xl w-full">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        ref={(el) => (cardsRef.current[index] = el)}
                        className="p-8 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg transform transition-all duration-300 opacity-0"
                        onMouseEnter={() =>
                            gsap.to(cardsRef.current[index], {
                                scale: 1.05,
                                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                                duration: 0.3,
                                ease: "power3.out",
                            })
                        }
                        onMouseLeave={() =>
                            gsap.to(cardsRef.current[index], {
                                scale: 1,
                                boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
                                duration: 0.3,
                                ease: "power3.out",
                            })
                        }
                    >
                        <h3 className="text-2xl font-semibold text-center mb-4">{plan.title}</h3>
                        <p className="text-xl font-bold text-blue-600 dark:text-blue-400 text-center">{plan.price}</p>
                        <ul className="mt-6 space-y-3 text-gray-700 dark:text-gray-300">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    ✅ {feature}
                                </li>
                            ))}
                        </ul>
                        <Link href="/contact">
                            <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                                Get Started
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}
