
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Calendar, MapPin, User, Mail, Phone, Instagram, Facebook } from 'lucide-react';
import { Business } from '../store/businessStore';

interface BusinessModalProps {
  business: Business | null;
  isOpen: boolean;
  onClose: () => void;
}

const BusinessModal: React.FC<BusinessModalProps> = ({ business, isOpen, onClose }) => {
  if (!business) return null;

  // Get category color based on category name
  const getCategoryColor = (category: string) => {
    const colors = {
      'Comida': 'bg-orange-100 text-orange-800',
      'Tecnología': 'bg-blue-100 text-blue-800',
      'Ropa': 'bg-pink-100 text-pink-800',
      'Servicios': 'bg-green-100 text-green-800',
      'Asesorías': 'bg-purple-100 text-purple-800',
      'Salud': 'bg-red-100 text-red-800',
      'Arte': 'bg-yellow-100 text-yellow-800',
      'Deportes': 'bg-indigo-100 text-indigo-800',
      'Regalos': 'bg-rose-100 text-rose-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="space-y-4">
            {/* Category badge */}
            <div className="flex justify-between items-start">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(business.category)}`}>
                {business.category}
              </span>
              <div className="flex items-center text-gray-400 text-sm">
                <Calendar size={14} className="mr-1" />
                {business.createdAt.toLocaleDateString()}
              </div>
            </div>
            
            {/* Business name */}
            <DialogTitle className="text-2xl font-bold text-gray-900">
              {business.name}
            </DialogTitle>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Owner info */}
          <div className="flex items-center text-gray-700">
            <User size={18} className="mr-2 text-gray-500" />
            <span className="font-medium">Propietario:</span>
            <span className="ml-2">{business.owner}</span>
          </div>

          {/* Location */}
          {business.location && (
            <div className="flex items-center text-gray-700">
              <MapPin size={18} className="mr-2 text-gray-500" />
              <span className="font-medium">Ubicación:</span>
              <span className="ml-2">{business.location}</span>
            </div>
          )}

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Descripción</h3>
            <p className="text-gray-600 leading-relaxed">{business.description}</p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Información de Contacto</h3>
            <div className="space-y-3">
              {/* Email */}
              <div className="flex items-center text-gray-700">
                <Mail size={18} className="mr-3 text-gray-500" />
                <a 
                  href={`mailto:${business.contact.email}`}
                  className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  {business.contact.email}
                </a>
              </div>

              {/* Phone */}
              {business.contact.phone && (
                <div className="flex items-center text-gray-700">
                  <Phone size={18} className="mr-3 text-gray-500" />
                  <a 
                    href={`tel:${business.contact.phone}`}
                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                  >
                    {business.contact.phone}
                  </a>
                </div>
              )}

              {/* Instagram */}
              {business.contact.instagram && (
                <div className="flex items-center text-gray-700">
                  <Instagram size={18} className="mr-3 text-gray-500" />
                  <a 
                    href={`https://instagram.com/${business.contact.instagram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                  >
                    {business.contact.instagram}
                  </a>
                </div>
              )}

              {/* Facebook */}
              {business.contact.facebook && (
                <div className="flex items-center text-gray-700">
                  <Facebook size={18} className="mr-3 text-gray-500" />
                  <a 
                    href={`https://facebook.com/${business.contact.facebook}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                  >
                    {business.contact.facebook}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BusinessModal;
