
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Descubre los increíbles
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              emprendimientos estudiantiles
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in">
            Conecta con los negocios de los compañeros,
            desde comidas y bebidas, hasta servicios de asesoría.
          </p>
          
          {/* CTA Button */}
          <button
            onClick={onGetStarted}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 animate-fade-in"
          >
            Explorar emprendimientos
            <ArrowRight className="ml-2" size={20} />
          </button>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center animate-fade-in">
              <div className="text-3xl font-bold text-blue-600">+15</div>
              <div className="text-gray-600">Negocios</div>
            </div>
            <div className="text-center animate-fade-in">
              <div className="text-3xl font-bold text-purple-600">8</div>
              <div className="text-gray-600">Categorias</div>
            </div>
            <div className="text-center animate-fade-in">
              <div className="text-3xl font-bold text-green-600">+100</div>
              <div className="text-gray-600">Estudiantes conectados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
