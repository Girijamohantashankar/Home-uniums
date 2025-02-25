'use client';

import { Calendar, Video, Mic, Clock } from 'lucide-react';

const events = [
  {
    title: 'AI in Education: The Future of Learning',
    date: 'March 15, 2025',
    time: '5:00 PM IST',
    icon: <Video size={40} className="text-blue-500" />,
  },
  {
    title: 'Efficient Student Management with UniUms',
    date: 'March 22, 2025',
    time: '3:00 PM IST',
    icon: <Mic size={40} className="text-green-500" />,
  },
  {
    title: 'Unleashing Data Insights for Better Administration',
    date: 'April 5, 2025',
    time: '6:30 PM IST',
    icon: <Clock size={40} className="text-purple-500" />,
  },
];

export default function Events() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">📅 Upcoming Events & Webinars</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {events.map((event, index) => (
          <div key={index} className="flex items-center gap-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
            {event.icon}
            <div className="text-left">
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{event.date} • {event.time}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
