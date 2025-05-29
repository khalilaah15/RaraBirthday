import React, { useRef, useEffect, useState } from 'react';

const friendsData = [
  {
    name: '16 Mei 2006',
    bio: 'Today marks the day the world was gifted with someone so special. On this day, years ago, someone truly amazing was born. Your presence has brought joy, warmth, and color into the lives of many.',
    quote: '"You deserve to feel loved and appreciated today and every day."',
    image: '/assets/about1.jpg',
  },
  {
    name: 'Today, 16 Mei 2025',
    bio: 'I hope this new chapter of your life brings you closer to your dreams, filled with purpose, peace, and new adventures. May you continue to shine and grow stronger in the years to come.',
    quote: '"Whatever comes next in your life, I hope it’s something that makes your soul excited to wake up every morning."',
    image: '/assets/about2.jpg',
  }
];

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="Nineteen" className="py-20 bg-neutral-900 text-white">
      <div ref={aboutRef} className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">19 years of your presence</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {friendsData.map((person, index) => (
            <div 
              key={index}
              className={`bg-neutral-800 rounded-lg overflow-hidden shadow-2xl transition-all duration-1000 transform ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-16'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={person.image} 
                  alt={person.name} 
                  className="w-full h-full object-cover object-center filter grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-70"></div>
                <h3 className="absolute bottom-4 left-6 text-2xl font-bold">{person.name}</h3>
              </div>
              
              <div className="p-6">
                <p className="text-neutral-300 mb-4 leading-relaxed">{person.bio}</p>
                <p className="text-neutral-400 italic text-lg">{person.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;