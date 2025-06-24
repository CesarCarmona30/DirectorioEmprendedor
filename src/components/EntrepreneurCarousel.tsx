
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import BusinessCard from './BusinessCard';
import { useBusinessStore } from '../store/businessStore';

const EntrepreneurCarousel: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { getFilteredBusinesses, selectedCategory } = useBusinessStore();
  const businesses = getFilteredBusinesses();

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320; // Width of one card plus gap
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const newScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              {selectedCategory ? `${selectedCategory} Businesses` : 'Featured Student Businesses'}
            </h2>
            <p className="text-gray-600 mt-2">
              Discover innovative ventures created by talented students
            </p>
          </div>
          
          {/* Navigation buttons */}
          <div className="hidden md:flex space-x-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <ChevronLeft size={20} className="text-gray-600" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <ChevronRight size={20} className="text-gray-600" />
            </button>
          </div>
        </div>
        
        {/* Carousel container */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide space-x-6 pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {businesses.map((business) => (
              <BusinessCard key={business.id} business={business} />
            ))}
          </div>
          
          {/* Show message if no businesses in selected category */}
          {businesses.length === 0 && selectedCategory && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No businesses found in the {selectedCategory} category yet.
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Be the first to register a business in this category!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EntrepreneurCarousel;
