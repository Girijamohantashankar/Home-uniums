'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [theme, setTheme] = useState('light');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.add(storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
          UniUms
        </Link>

        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Home</Link>
          <Link href="/features" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Features</Link>
          <Link href="/pricing" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Pricing</Link>
          <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Contact</Link>
          <Link href="/bookdemo" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Book Demo</Link>
        </nav>


        <div className="flex items-center gap-4">
          <a href="https://uniums.com" target='_blank' className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Login
          </a>
          <button onClick={toggleTheme} className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full">
            {theme === 'light' ? <Moon className="text-gray-700 dark:text-white" /> : <Sun className="text-yellow-400" />}
          </button>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2">
            {menuOpen ? <X className="text-gray-700 dark:text-white" /> : <Menu className="text-gray-700 dark:text-white" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col bg-white dark:bg-gray-900 shadow-md p-4 space-y-4">
          <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-500" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/features" className="text-gray-700 dark:text-gray-300 hover:text-blue-500" onClick={() => setMenuOpen(false)}>Features</Link>
          <Link href="/pricing" className="text-gray-700 dark:text-gray-300 hover:text-blue-500" onClick={() => setMenuOpen(false)}>Pricing</Link>
          <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-500" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link href="/bookdemo" className="text-gray-700 dark:text-gray-300 hover:text-blue-500" onClick={() => setMenuOpen(false)}>Book Demo</Link>
          <Link href="https://uniums.com" className="text-gray-700 dark:text-gray-300 hover:text-blue-500" onClick={() => setMenuOpen(false)}>Login</Link>
        </div>
      )}
    </header>
  );
}
