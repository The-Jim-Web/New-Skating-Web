import React, { useState } from 'react';
import { Check, Users } from 'lucide-react';
import { GroupBooking } from '../types';
import { GroupBookingForm } from './GroupBookingForm';

interface GroupBookingCardProps {
  booking: GroupBooking;
}

export function GroupBookingCard({ booking }: GroupBookingCardProps) {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-200">
        <img 
          src={booking.imageUrl} 
          alt={booking.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold dark:text-white">{booking.name}</h3>
            <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm capitalize">
              {booking.type}
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{booking.description}</p>
          
          <div className="flex items-center gap-2 mb-4 text-gray-600 dark:text-gray-300">
            <Users className="w-5 h-5" />
            <span>Min. {booking.minParticipants} participants</span>
          </div>

          <div className="space-y-2 mb-6">
            {booking.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-gray-600 dark:text-gray-300">{feature}</span>
              </div>
            ))}
          </div>

          <button
            onClick={() => setShowBooking(true)}
            className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            Book Group Session
          </button>
        </div>
      </div>
      {showBooking && (
        <GroupBookingForm
          booking={booking}
          onClose={() => setShowBooking(false)}
        />
      )}
    </>
  );
}