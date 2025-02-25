'use client';

import Image from 'next/image';
import university from "../../assets/university.jpg";
import college from "../../assets/college-students-2.jpg";
import leaders from "../../assets/images-14-626x381.jpeg";
import institute from "../../assets/YC-37.webp";

const partners = [
  { name: 'Tech University', logo: university },
  { name: 'Innovate College', logo: college },
  { name: 'Future Leaders Academy', logo: leaders },
  { name: 'Bright Institute', logo: institute },
];

export default function PartnerInstitutions() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Join Our Partner Institutions
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
        Trusted by top institutes and colleges worldwide.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mx-auto max-w-6xl px-4">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            {/* Image covering the full card */}
            <div className="relative w-full h-48">
              <Image
                src={partner.logo}
                alt={partner.name}
                layout="fill"
                objectFit="cover"
                className="group-hover:brightness-75 transition-all duration-300"
              />
            </div>
            {/* Text overlay */}
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4">
              <p className="text-lg font-semibold text-white">{partner.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
