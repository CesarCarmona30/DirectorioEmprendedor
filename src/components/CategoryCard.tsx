
import React from 'react';

interface CategoryCardProps {
  name: string;
  icon: string;
  count: number;
  isSelected: boolean;
  onClick: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ 
  name, 
  icon, 
  count, 
  isSelected, 
  onClick 
}) => {
  return (
    <button
      onClick={onClick}
      className={`p-6 rounded-lg border-2 transition-all duration-200 hover-scale ${
        isSelected 
          ? 'border-blue-500 bg-blue-50 shadow-md' 
          : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
      }`}
    >
      <div className="text-center">
        {/* Icon */}
        <div className="text-4xl mb-3">{icon}</div>
        
        {/* Category name */}
        <h3 className={`font-semibold mb-2 ${
          isSelected ? 'text-blue-700' : 'text-gray-900'
        }`}>
          {name}
        </h3>
        
        {/* Business count */}
        <p className={`text-sm ${
          isSelected ? 'text-blue-600' : 'text-gray-500'
        }`}>
          {count} {count === 1 ? 'business' : 'businesses'}
        </p>
      </div>
    </button>
  );
};

export default CategoryCard;
