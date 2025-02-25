'use client';

import { useState } from 'react';

export default function page() {
    const [formData, setFormData] = useState({ name: '', email: '', institute: '', date: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen flex items-center justify-center py-20 px-6 ">
            <div className="max-w-2xl w-full bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg ">
                <h2 className="text-3xl font-bold text-center mb-6">📅 Book Your Demo</h2>
                <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
                    Schedule a personalized demo to explore how Uniums can help your institute manage students and faculty efficiently.
                </p>

                {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
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

                        <div>
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

                        <div>
                            <label className="block text-sm font-semibold mb-1">Institute/College Name</label>
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

                        <div>
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

                        <div>
                            <label className="block text-sm font-semibold mb-1">Message (Optional)</label>
                            <textarea
                                name="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-3 rounded border bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                placeholder="Write any specific requirements..."
                            />
                        </div>

                        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg text-lg font-semibold">
                            Book Demo
                        </button>
                    </form>
                ) : (
                    <div className="text-center">
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
