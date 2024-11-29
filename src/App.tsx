import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Header } from './components/Header';
import { CategoryCard } from './components/CategoryCard';
import { ClassCard } from './components/ClassCard';
import { GroupBookingCard } from './components/GroupBookingCard';
import { BenefitsSection } from './components/BenefitsSection';
import { categories } from './data/categories';
import { classes } from './data/classes';
import { groupBookings } from './data/groupBookings';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <section id="categories" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </section>

          <BenefitsSection />

          <section id="classes" className="mt-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Available Classes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {classes.map((classItem) => (
                <ClassCard key={classItem.id} class={classItem} />
              ))}
            </div>
          </section>

          <section id="group-bookings" className="mt-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Schools & Estates</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-3xl">
              We offer specialized skating programs for schools and residential estates. 
              Our group sessions are tailored to accommodate larger groups with special rates 
              and flexible scheduling options.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {groupBookings.map((booking) => (
                <GroupBookingCard key={booking.id} booking={booking} />
              ))}
            </div>
          </section>
        </main>

        <footer className="bg-indigo-900 dark:bg-gray-800 text-white py-8 mt-12 transition-colors duration-200">
          <div className="container mx-auto px-4 text-center">
            <p>© 2024 Skate Manias Academy. All rights reserved.</p>
          </div>
        </footer>
        <Toaster position="top-right" />
      </div>
    </ThemeProvider>
  );
}

export default App;