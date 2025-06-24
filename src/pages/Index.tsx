
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
            Join the Student Entrepreneur Community
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Connect with like-minded student entrepreneurs, share resources, and grow your business together
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-white mb-2">Network</h3>
              <p className="text-blue-100">Connect with fellow student entrepreneurs</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-2">Grow</h3>
              <p className="text-blue-100">Scale your business with community support</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold text-white mb-2">Innovate</h3>
              <p className="text-blue-100">Share ideas and learn from others</p>
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
              StudentVentures
            </h3>
            <p className="text-gray-400 mb-6">
              Empowering the next generation of entrepreneurs
            </p>
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-500 text-sm">
                © 2024 StudentVentures. Built with ❤️ for student entrepreneurs.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
