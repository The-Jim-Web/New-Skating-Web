import React from 'react';
import { Bike, Sun, Moon, MapPin } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-indigo-600 dark:bg-gray-800 text-white py-6 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bike className="h-8 w-8 rotate-90" />
              <h1 className="text-2xl font-bold">Skate Manias Academy</h1>
            </div>
            <div className="flex items-center space-x-6">
              <nav>
                <ul className="flex space-x-6">
                  <li><a href="#categories" className="hover:text-indigo-200 dark:hover:text-gray-300">Categories</a></li>
                  <li><a href="#classes" className="hover:text-indigo-200 dark:hover:text-gray-300">Classes</a></li>
                  <li><a href="#group-bookings" className="hover:text-indigo-200 dark:hover:text-gray-300">Schools & Estates</a></li>
                </ul>
              </nav>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-indigo-700 dark:hover:bg-gray-700 transition-colors"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-indigo-200 dark:text-gray-300">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">Athi River, Machakos</span>
          </div>
        </div>
      </div>
    </header>
  );
}