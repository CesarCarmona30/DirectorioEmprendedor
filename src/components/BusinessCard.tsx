
import React from 'react';
import { Calendar } from 'lucide-react';
import { Business } from '../store/businessStore';

interface BusinessCardProps {
  business: Business;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ business }) => {
  // Get category color based on category name
  const getCategoryColor = (category: string) => {
    const colors = {
      'Comida': 'bg-orange-100 text-orange-800',
      'Tecnología': 'bg-blue-100 text-blue-800',
      'Ropa': 'bg-pink-100 text-pink-800',
      'Servicios': 'bg-green-100 text-green-800',
      'Asesorias': 'bg-purple-100 text-purple-800',
      'Salud': 'bg-red-100 text-red-800',
      'Arte': 'bg-yellow-100 text-yellow-800',
      'Deporte': 'bg-indigo-100 text-indigo-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 min-w-[300px] hover-scale">
      {/* Category badge */}
      <div className="flex justify-between items-start mb-4">
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(business.category)}`}>
          {business.category}
        </span>
        <div className="flex items-center text-gray-400 text-sm">
          <Calendar size={14} className="mr-1" />
          {business.createdAt.toLocaleDateString()}
        </div>
      </div>
      
      {/* Business name */}
      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {business.name}
      </h3>
      
      {/* Description */}
      <p className="text-gray-600 leading-relaxed">
        {business.description}
      </p>
      
      {/* Action button */}
      <div className="mt-4">
        <button className="text-gray-600 hover:text-guinda font-medium text-sm transition-colors duration-200">
          Ver más →
        </button>
      </div>
    </div>
  );
};

export default BusinessCard;
