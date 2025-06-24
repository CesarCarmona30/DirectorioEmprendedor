
import React from 'react';
import CategoryCard from './CategoryCard';
import { useBusinessStore } from '../store/businessStore';

const CategoriesSection: React.FC = () => {
  const { businesses, selectedCategory, setSelectedCategory } = useBusinessStore();

  // Define categories with their icons and calculate counts
  const categories = [
    { name: 'Comida', icon: '🍕' },
    { name: 'Tecnología', icon: '💻' },
    { name: 'Ropa', icon: '👕' },
    { name: 'Servicios', icon: '🛠️' },
    { name: 'Asesorias', icon: '📚' },
    { name: 'Salud', icon: '⚕️' },
    { name: 'Arte', icon: '🎨' },
    { name: 'Deporte', icon: '⚽' }
  ];

  // Calculate business count for each category
  const categoriesWithCounts = categories.map(category => ({
    ...category,
    count: businesses.filter(business => business.category === category.name).length
  }));

  const handleCategoryClick = (categoryName: string) => {
    // Toggle category selection
    if (selectedCategory === categoryName) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryName);
    }
  };

  const handleShowAll = () => {
    setSelectedCategory(null);
  };

  return (
    <section id="categories" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Buscar por categoría
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explora entre los distintos emprendimientos y encuentra lo que estás buscando
          </p>
        </div>

        {/* Show All button */}
        <div className="text-center mb-8">
          <button
            onClick={handleShowAll}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              !selectedCategory
                ? 'bg-guinda text-white shadow-md'
                : 'bg-gray-100 text-guinda hover:bg-gray-200'
            }`}
          >
            Mostrar todas las categorías
          </button>
        </div>
        
        {/* Categories grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {categoriesWithCounts.map((category) => (
            <CategoryCard
              key={category.name}
              name={category.name}
              icon={category.icon}
              count={category.count}
              isSelected={selectedCategory === category.name}
              onClick={() => handleCategoryClick(category.name)}
            />
          ))}
        </div>

        {/* Current filter info */}
        {selectedCategory && (
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Mostrando los negocios de <span className="font-semibold text-guinda">{selectedCategory}</span>
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CategoriesSection;
