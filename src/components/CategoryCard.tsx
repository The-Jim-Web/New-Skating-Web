import React from 'react';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-all duration-300">
      <img 
        src={category.imageUrl} 
        alt={category.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 dark:text-white">{category.name}</h3>
        <p className="text-gray-600 dark:text-gray-300">{category.description}</p>
      </div>
    </div>
  );
}