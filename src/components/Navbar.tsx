import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white bg-opacity-90 shadow-md py-3' : 'bg-transparent py-5'
      }`}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold tracking-tighter">
              <span className="text-neutral-800">Happy</span>
              <span className="text-neutral-500">Birthday</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['journey', 'gallery', 'Nineteen', 'thank'].map((section) => (
                <button 
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-neutral-600 hover:text-neutral-900 transition-colors capitalize"
                >
                  {section}
                </button>
              ))}
            </div>
            
            <button 
              className="md:hidden text-neutral-800"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <div className={`fixed inset-0 bg-white z-50 transform ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 md:hidden`}>
        <div className="flex justify-end p-6">
          <button onClick={toggleMenu} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>
        
        <div className="flex flex-col items-center space-y-8 mt-12">
          {['journey', 'gallery', 'Nineteen', 'thank'].map((section) => (
            <button 
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-xl text-neutral-800 hover:text-neutral-500 transition-colors capitalize"
            >
              {section}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;