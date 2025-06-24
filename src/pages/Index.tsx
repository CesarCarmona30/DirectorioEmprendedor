
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import EntrepreneurCarousel from '../components/EntrepreneurCarousel';
import CategoriesSection from '../components/CategoriesSection';
import RegistrationForm from '../components/RegistrationForm';

const Index = () => {
  // Smooth scroll navigation function
  const handleNavigate = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Handle hero CTA button click
  const handleGetStarted = () => {
    const categoriesSection = document.getElementById('categories');
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar onNavigate={handleNavigate} />
      
      {/* Hero Section */}
      <section id="home">
        <Hero onGetStarted={handleGetStarted} />
      </section>
      
      {/* Entrepreneur Carousel */}
      <EntrepreneurCarousel />
      
      {/* Categories Section */}
      <CategoriesSection />
      
      {/* Additional Featured Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Únete a la comunidad de estudiantes emprendedores
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Conecta con otros emprendedores, comparte recursos y haz crecer tu negocio.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-white mb-2">Conecta</h3>
              <p className="text-blue-100">Relaciónate con otros emprendedores estudiantiles.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-2">Crece</h3>
              <p className="text-blue-100">Haz crecer tu emprendimiento con el apoyo de la comunidad</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold text-white mb-2">Innova</h3>
              <p className="text-blue-100">Comparte ideas y aprende junto a los demás</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Registration Form */}
      <RegistrationForm />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Emprende UPIICSA
            </h3>
            <p className="text-gray-400 mb-6">
              Apoyando a los emprendedores de nuestra institución.
            </p>
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-500 text-sm">
                © 2024. Hecho con ❤️ para la comunidad de emprendedores.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
