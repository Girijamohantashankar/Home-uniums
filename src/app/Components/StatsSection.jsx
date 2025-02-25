'use client';

import { useEffect, useState } from 'react';
import { Users, Building, FileText, Trophy } from 'lucide-react';

const stats = [
  { icon: <Users className="w-12 h-12 text-blue-600 dark:text-blue-400" />, label: 'Students Managed', value: 50000 },
  { icon: <Building className="w-12 h-12 text-green-600 dark:text-green-400" />, label: 'Institutes Enrolled', value: 200 },
  { icon: <FileText className="w-12 h-12 text-yellow-600 dark:text-yellow-400" />, label: 'Reports Generated', value: 120000 },
  { icon: <Trophy className="w-12 h-12 text-purple-600 dark:text-purple-400" />, label: 'Awards Won', value: 15 },
];

export default function StatsSection() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      return setInterval(() => {
        setCounts((prev) =>
          prev.map((count, i) => (i === index && count < stat.value ? count + Math.ceil(stat.value / 100) : count))
        );
      }, 50);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800 text-center">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">UniUms By the Numbers</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg">{stat.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-4">{counts[index]}</h3>
            <p className="text-gray-700 dark:text-gray-300">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
