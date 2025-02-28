'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Page() {
    const [formData, setFormData] = useState({ name: '', email: '', institute: '', date: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const formRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(formRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' });
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        gsap.fromTo(".success-message", { scale: 0 }, { scale: 1, duration: 0.5, ease: 'elastic.out(1,0.5)' });
    };

    useEffect(() => {
        if (buttonRef.current) {
            gsap.fromTo(buttonRef.current, { scale: 1 }, {
                scale: 1.05,
                repeat: -1,
                yoyo: true,
                duration: 0.6,
                ease: "power1.inOut"
            });
        }
    }, []);

    return (
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen flex items-center justify-center py-20 px-6">
            <div ref={formRef} className="max-w-3xl w-full bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center mb-6">📅 Book Your Demo</h2>
                <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
                    Schedule a personalized demo to explore how UniUms can help your institute manage students and faculty efficiently.
                </p>

                {!submitted ? (
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="col-span-1">
                            <label className="block text-sm font-semibold mb-1">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-3 rounded border bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                placeholder="Enter your full name"
                            />
                        </div>

                        <div className="col-span-1">
                            <label className="block text-sm font-semibold mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-3 rounded border bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="col-span-1">
                            <label className="block text-sm font-semibold mb-1">Institute Name</label>
                            <input
                                type="text"
                                name="institute"
                                required
                                value={formData.institute}
                                onChange={handleChange}
                                className="w-full p-3 rounded border bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                placeholder="Enter your institute name"
                            />
                        </div>

                        <div className="col-span-2">
                            <label className="block text-sm font-semibold mb-1">Preferred Date</label>
                            <input
                                type="date"
                                name="date"
                                required
                                value={formData.date}
                                onChange={handleChange}
                                className="w-full p-3 rounded border bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            />
                        </div>

                        <div className="col-span-3">
                            <label className="block text-sm font-semibold mb-1">Message (Optional)</label>
                            <textarea
                                name="message"
                                rows="3"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-3 rounded border bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                placeholder="Write any specific requirements..."
                            />
                        </div>

                        <div className="col-span-3 flex justify-center">
                            <button ref={buttonRef} type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg text-lg font-semibold">
                                Book Demo
                            </button>
                        </div>
                    </form>
                ) : (
                    <div className="text-center success-message">
                        <h3 className="text-2xl font-semibold text-green-500">🎉 Thank You!</h3>
                        <p className="text-gray-700 dark:text-gray-300 mt-2">
                            Your demo has been successfully booked. We will contact you shortly.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
