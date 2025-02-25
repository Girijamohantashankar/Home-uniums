'use client';

import { Users, BookOpen, Calendar, ShieldCheck, BarChart3, Layers } from 'lucide-react';

export default function Page() {
    const features = [
        {
            title: "Effortless Student Management",
            description: "Easily manage student profiles, track academic progress, and automate administrative tasks.",
            icon: <Users size={32} className="text-blue-500 transition-transform duration-300 group-hover:rotate-6" />,
        },
        {
            title: "Digital Library Access",
            description: "Seamless integration with e-books, research papers, and course materials for enhanced learning.",
            icon: <BookOpen size={32} className="text-green-500 transition-transform duration-300 group-hover:rotate-6" />,
        },
        {
            title: "Smart Timetable Scheduling",
            description: "Auto-generate and optimize timetables, reducing conflicts and enhancing efficiency.",
            icon: <Calendar size={32} className="text-purple-500 transition-transform duration-300 group-hover:rotate-6" />,
        },
        {
            title: "Advanced Security & Access Control",
            description: "Ensure data protection with role-based access control and secure authentication.",
            icon: <ShieldCheck size={32} className="text-red-500 transition-transform duration-300 group-hover:rotate-6" />,
        },
        {
            title: "AI-Powered Analytics & Insights",
            description: "Get valuable insights on student performance, attendance, and faculty engagement.",
            icon: <BarChart3 size={32} className="text-yellow-500 transition-transform duration-300 group-hover:rotate-6" />,
        },
        {
            title: "Seamless Integration with Third-Party Tools",
            description: "Connect with existing systems like LMS, payment gateways, and communication platforms.",
            icon: <Layers size={32} className="text-indigo-500 transition-transform duration-300 group-hover:rotate-6" />,
        },
    ];

    return (
        <section className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6">
            <div className="max-w-6xl mx-auto text-center mt-24 pb-6">
                <h2 className="text-4xl font-bold mb-6">
                    🚀 Key Features of <span className="text-blue-600 dark:text-blue-400">UniUms</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
                    UniUms is designed to simplify institute management with cutting-edge technology, automation, and AI-driven insights.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md flex flex-col items-center text-center
                            transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                        >
                            <div className="mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-blue-500 dark:group-hover:text-blue-400">
                                {feature.title}
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
