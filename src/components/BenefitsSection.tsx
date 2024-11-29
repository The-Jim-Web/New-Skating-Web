import React from 'react';
import { Heart, Brain, Users, Dumbbell } from 'lucide-react';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
  forAge: 'kids' | 'adults' | 'both';
}

const benefits: Benefit[] = [
  {
    icon: <Heart className="w-8 h-8 text-pink-500" />,
    title: 'Cardiovascular Health',
    description: 'Improves heart health and stamina through aerobic exercise',
    forAge: 'both'
  },
  {
    icon: <Brain className="w-8 h-8 text-purple-500" />,
    title: 'Balance & Coordination',
    description: 'Enhances motor skills and spatial awareness',
    forAge: 'kids'
  },
  {
    icon: <Users className="w-8 h-8 text-blue-500" />,
    title: 'Social Skills',
    description: 'Develops teamwork and communication through group activities',
    forAge: 'both'
  },
  {
    icon: <Dumbbell className="w-8 h-8 text-green-500" />,
    title: 'Full Body Workout',
    description: 'Strengthens muscles while being low-impact on joints',
    forAge: 'adults'
  }
];

export function BenefitsSection() {
  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-800 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Benefits of Skating
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
                <span className="mt-3 inline-block px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">
                  {benefit.forAge === 'both' 
                    ? 'For Everyone' 
                    : benefit.forAge === 'kids' 
                      ? 'Great for Kids' 
                      : 'Perfect for Adults'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}