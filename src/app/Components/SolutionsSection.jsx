'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import studentmanage from "../../assets/female-teacher.webp"
import faculty from "../../assets/faculty.png"
import timetable from "../../assets/timetable.png"
import secureimage from "../../assets/secureimage.jpeg"



const solutions = [
  {
    title: 'Student Management',
    description: 'Seamlessly manage student enrollment, attendance, and performance tracking in one place.',
    image: studentmanage,
  },
  {
    title: 'Faculty Portal',
    description: 'A dedicated platform for faculty to track classes, assignments, and student progress.',
    image: faculty,
  },
  {
    title: 'Automated Timetables',
    description: 'AI-powered scheduling system to generate optimized timetables for efficiency.',
    image: timetable,
  },
  {
    title: 'Secure Data Storage',
    description: 'Ensure the safety of institutional records with encrypted cloud storage solutions.',
    image: secureimage,
  },
];

export default function SolutionsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play effect (every 5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === solutions.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? solutions.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === solutions.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Our Smart Solutions
        </h2>

        <div className="relative flex items-center justify-center">
          {/* Left Button */}
          <button onClick={prevSlide} className="absolute left-0 p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 z-10">
            <ChevronLeft size={24} className="text-gray-700 dark:text-white" />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden w-[80%] md:w-[60%] mx-auto">
            <div className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {solutions.map((solution, index) => (
                <div key={index} className="min-w-full px-4">
                  <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center">
                    <Image src={solution.image} alt={solution.title} width={180}
                      height={120}
                      className="w-full h-auto max-w-[200px] mx-auto mb-4 rounded-lg" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{solution.title}</h3>
                    <p className="text-gray-700 dark:text-gray-400 mt-2">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Button */}
          <button onClick={nextSlide} className="absolute right-0 p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 z-10">
            <ChevronRight size={24} className="text-gray-700 dark:text-white" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {solutions.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full cursor-pointer ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-400 dark:bg-gray-600'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
