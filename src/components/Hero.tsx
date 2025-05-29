import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onScrollDown: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollDown }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-neutral-900">
      <div 
  className="absolute inset-0 bg-[url('/assets/background.jpg')] bg-cover bg-center"
  style={{ opacity: 0.3 }}
></div>

      
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 
          className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          Special Gift for<span className="text-neutral-400"> Rara</span>
        </h1>
        
        <p 
          className={`text-lg md:text-xl text-neutral-300 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-300 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          A collection of memories, stories, and moments that define our friendship.
          Scroll through our journey and relive the experiences that brought us together.
        </p>
        
        <button 
          onClick={onScrollDown}
          className={`bg-white bg-opacity-10 hover:bg-opacity-20 text-white py-3 px-8 rounded-full border border-white border-opacity-30 transition-all duration-300 animate-pulse-slow transition-all duration-1000 delay-500 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          Begin the journey
        </button>
      </div>
      
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer text-white animate-bounce"
        onClick={onScrollDown}
      >
        <ChevronDown size={32} />
      </div>
    </div>
  );
};

export default Hero;