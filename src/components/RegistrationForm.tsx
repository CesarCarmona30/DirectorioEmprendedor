
import React, { useState } from 'react';
import { useBusinessStore } from '../store/businessStore';
import { toast } from '@/hooks/use-toast';

const RegistrationForm: React.FC = () => {
  const { addBusiness } = useBusinessStore();
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    'Comida', 'Tecnología', 'Ropa', 'Servicios', 
    'Asesorias', 'Salud', 'Arte', 'Deportes'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.category || !formData.description.trim()) {
      toast({
        title: "Información requerida",
        description: "Por favor, llena todos los campos.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Add business to store
      addBusiness({
        name: formData.name.trim(),
        category: formData.category,
        description: formData.description.trim()
      });

      // Reset form
      setFormData({
        name: '',
        category: '',
        description: ''
      });

      // Show success message
      toast({
        title: "Negocio Registrado!",
        description: "El emprendimiento ha sido añadido correctamente al directorio",
      });

    } catch (error) {
      toast({
        title: "Error",
        description: "Algo salió mal. Por favor intenta de nuevo.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="register" className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Registra tu negocio
          </h2>
          <p className="text-xl text-gray-600">
            Comparte tu emprendimiento con la comunidad y conecta con clientes potenciales
          </p>
        </div>

        {/* Registration form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Business name input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Nombre de tu negocio *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Tacos el sugus"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                disabled={isSubmitting}
              />
            </div>

            {/* Category selection */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                Categoría *
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                disabled={isSubmitting}
              >
                <option value="">Selecciona una categoría</option>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Description textarea */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Descripción *
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Describe tu negocio, que ofreces, y que es lo que te hace único..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-vertical"
                disabled={isSubmitting}
              />
              <p className="text-sm text-gray-500 mt-1">
                {formData.description.length}/500 char
              </p>
            </div>

            {/* Submit button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-lg font-semibold text-white transition-all duration-200 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg transform hover:scale-105'
                }`}
              >
                {isSubmitting ? 'Registrando...' : 'Registrar Negocio'}
              </button>
            </div>
          </form>

          {/* Additional info */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Note:</strong> Tu negocio aparecerá inmediatamente después del registro. 
              Asegúrate de que la información sea la correcta antes de envíar el formulario.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
