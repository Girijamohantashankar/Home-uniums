'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import profile1 from '../../assets/1-intro-photo-final.jpg';
import profile2 from '../../assets/istockphoto-1437816897-612x612.jpg';
import profile3 from '../../assets/premium_photo-1689568126014-06fea9d5d341.jpeg';

const testimonials = [
  {
    name: 'Dr. Rajesh Kumar',
    role: 'Principal, XYZ College',
    quote: 'UniUms has transformed how we manage students and faculty. It’s a game-changer!',
    image: profile1,
  },
  {
    name: 'Ananya Sharma',
    role: 'Head of Administration, ABC Institute',
    quote: 'A seamless experience! Our institution runs more efficiently than ever.',
    image: profile2,
  },
  {
    name: 'Vikram Patel',
    role: 'IT Manager, DEF University',
    quote: 'Security and ease of use were our top concerns, and UniUms delivers on both!',
    image: profile3,
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
      <div className="container mx-auto text-center px-4">
        <div className="relative max-w-3xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg text-center">
          <p className="text-lg italic text-gray-700 dark:text-gray-300">"{testimonials[currentIndex].quote}"</p>
          <div className="mt-4 flex flex-col items-center">
            <Image
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              width={100}
              height={100}
              className="w-24 h-24 rounded-full border-2 border-blue-600 object-cover"
            />
            <h3 className="mt-2 text-lg font-semibold">{testimonials[currentIndex].name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{testimonials[currentIndex].role}</p>
          </div>
          <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 dark:bg-gray-700 p-2 rounded-full shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600">
            <ChevronLeft className="text-gray-900 dark:text-white" />
          </button>
          <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 dark:bg-gray-700 p-2 rounded-full shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600">
            <ChevronRight className="text-gray-900 dark:text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
