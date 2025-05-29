import React from 'react';
import { ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const currentYear = new Date().getFullYear();

  return (
    <footer id="thank" className="bg-neutral-100 py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center">
          <button 
            onClick={scrollToTop}
            className="bg-neutral-800 text-white p-3 rounded-full hover:bg-neutral-700 transition-colors duration-300 mb-8"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </button>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-neutral-800">Happy</span>
            <span className="text-neutral-500">Birthday</span>
          </h2>
          
          <p className="text-neutral-600 text-center max-w-xl mb-6">
            This website is a special gift to celebrate your birthday. Wishing you joy, happy, and wonderful memories on your special day!
          </p>
          
          <div className="w-16 h-px bg-neutral-300 mb-6"></div>
          
          <p className="text-neutral-500 text-sm">
            © {currentYear} | Happy Birthday Rara
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;