'use client';

import { GraduationCap, UserCheck, FileText, CheckCircle } from 'lucide-react';

const steps = [
    {
        title: 'Register Your Institute',
        description: 'Sign up and onboard your institute in just a few simple steps.',
        icon: <UserCheck className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
    },
    {
        title: 'Add Students & Faculty',
        description: 'Easily import student and faculty data into the system.',
        icon: <GraduationCap className="w-10 h-10 text-green-600 dark:text-green-400" />,
    },
    {
        title: 'Manage Everything',
        description: 'From attendance to exams, handle everything in one place.',
        icon: <FileText className="w-10 h-10 text-yellow-600 dark:text-yellow-400" />,
    },
    {
        title: 'Grow with UniUms',
        description: 'Experience seamless management and focus on academic excellence.',
        icon: <CheckCircle className="w-10 h-10 text-purple-600 dark:text-purple-400" />,
    },
];

export default function HowItWorks() {
    return (
        <section className="py-16 bg-white dark:bg-gray-800 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">How It Works</h2>
            <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-4">
                {steps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-full">{step.icon}</div>
                        <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{step.title}</h3>
                        <p className="text-gray-700 dark:text-gray-300 mt-2">{step.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
