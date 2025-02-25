'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        let newErrors = {};
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.email) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email";
        if (!formData.message) newErrors.message = "Message is required";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length === 0) {
            setSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setSubmitted(false), 3000);
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-800 text-white pb-12">
            <div className="max-w-5xl w-full mx-auto bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg mt-24 pb-6">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">📞 Contact Us</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Side - Google Map & Contact Info */}
                    <div className="space-y-6">
                        <div className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden shadow-md">
                            <iframe
                                className="w-full h-60"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12372.749179397413!2d86.83252613706388!3d21.74020461309228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1c54215ea882d7%3A0x2050ad8b95ddd1ca!2sBetnoti%2C%20Odisha%20757025!5e1!3m2!1sen!2sin!4v1740481770653!5m2!1sen!2sin" allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        <div className="space-y-2 text-gray-700 dark:text-gray-300">
                            <p className="flex items-center gap-2">
                                <Mail className="text-blue-500" /> <a href="mailto:bhabanishankarmohanta143@gmail.com">bhabanishankarmohanta143@gmail.com</a>
                            </p>
                            <p className="flex items-center gap-2">
                                <Phone className="text-blue-500" /> +91 96926 15246
                            </p>
                            <p className="flex items-center gap-2">
                                <MapPin className="text-blue-500" /> Mayurbhanj, Odisha, India
                            </p>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-gray-700 dark:text-gray-300">Full Name</label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full p-3 mt-1 border rounded-md focus:ring-2 focus:ring-blue-400 bg-gray-100 dark:bg-gray-800 dark:text-white"
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        </div>

                        <div>
                            <label className="block text-gray-700 dark:text-gray-300">Email Address</label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full p-3 mt-1 border rounded-md focus:ring-2 focus:ring-blue-400 bg-gray-100 dark:bg-gray-800 dark:text-white"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>

                        <div>
                            <label className="block text-gray-700 dark:text-gray-300">Your Message</label>
                            <textarea
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                rows="4"
                                className="w-full p-3 mt-1 border rounded-md focus:ring-2 focus:ring-blue-400 bg-gray-100 dark:bg-gray-800 dark:text-white"
                            ></textarea>
                            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2"
                        >
                            <Send size={18} /> Send Message
                        </button>

                        {submitted && <p className="text-green-500 text-center mt-4">Message sent successfully! ✅</p>}
                    </form>
                </div>
            </div>
        </section>
    );
}
