import React, { useState } from 'react';
import { Class } from '../types';
import { BookingForm } from './BookingForm';

interface ClassCardProps {
  class: Class;
}

export function ClassCard({ class: classItem }: ClassCardProps) {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors duration-200">
        <img 
          src={classItem.imageUrl} 
          alt={classItem.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2 dark:text-white">{classItem.name}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{classItem.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {classItem.categories.map((category) => (
              <span 
                key={category}
                className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm"
              >
                {category}
              </span>
            ))}
          </div>
          <button
            onClick={() => setShowBooking(true)}
            className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            Book Now
          </button>
        </div>
      </div>
      {showBooking && (
        <BookingForm
          selectedClass={classItem}
          onClose={() => setShowBooking(false)}
        />
      )}
    </>
  );
}