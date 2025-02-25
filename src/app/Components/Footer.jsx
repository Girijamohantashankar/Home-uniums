'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ChevronUp, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import logo from '../../assets/logonew-removebg-preview.png';

export default function Footer() {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScroll(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <footer className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-10 transition-all duration-300 relative">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">

                    {/* Logo & About */}
                    <div>
                        <Image src={logo} alt="UniUms Logo" width={100} height={50} className="mb-2" />
                        {/* <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">UniUms</h2> */}
                        <p className="text-gray-600 dark:text-gray-400 mt-3">
                            A smart institute management system designed to simplify administration and enhance learning experiences.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                            <li><Link href="/features" className="hover:text-blue-500 dark:hover:text-blue-400 transition">Features</Link></li>
                            <li><Link href="/pricing" className="hover:text-blue-500 dark:hover:text-blue-400 transition">Pricing</Link></li>
                            <li><Link href="/faq" className="hover:text-blue-500 dark:hover:text-blue-400 transition">FAQ</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-500 dark:hover:text-blue-400 transition">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
                        <p className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                            <Mail size={18} className="text-blue-500 dark:text-blue-400" /> uinums24hours@gmail.com
                        </p>
                        <p className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mt-2">
                            <Phone size={18} className="text-blue-500 dark:text-blue-400" /> +91 96926 15246
                        </p>
                        <p className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mt-2">
                            <MapPin size={18} className="text-blue-500 dark:text-blue-400" /> Mayurbhanj, Odisha, India
                        </p>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
                        <div className="flex gap-4">
                            <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition">
                                <Facebook size={24} />
                            </Link>
                            <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition">
                                <Twitter size={24} />
                            </Link>
                            <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition">
                                <Linkedin size={24} />
                            </Link>
                            <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition">
                                <Instagram size={24} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="mt-10 border-t border-gray-300 dark:border-gray-700 text-center pt-5 text-gray-600 dark:text-gray-400">
                    © {new Date().getFullYear()} UniUms. All rights reserved.
                </div>
            </footer>

            {/* WhatsApp Icon (External Link - Keep <a>) */}
            <a href="https://wa.me/9692615246" target="_blank" rel="noopener noreferrer"
                className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg transition transform hover:scale-110">
                <div className="relative flex items-center justify-center">
                    <div className="absolute w-14 h-14 bg-green-400 opacity-50 rounded-full animate-ping"></div>
                    <div className="absolute w-20 h-20 bg-green-300 opacity-30 rounded-full animate-ping delay-500"></div>
                    <MessageCircle size={28} />
                </div>
            </a>

            {/* Scroll to Top Button */}
            {showScroll && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-20 mb-5 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg transition transform hover:scale-110">
                    <ChevronUp size={24} />
                </button>
            )}
        </>
    );
}
