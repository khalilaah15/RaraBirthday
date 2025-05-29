import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Gallery data
const galleryData = [
  {
    id: 1,
    image: '/assets/galeri1.jpg',
    caption: 'Admin Cafe Seprapat'
  },
  {
    id: 2,
    image: '/assets/galeri2.jpg',
    caption: 'after physical education class'
  },
  {
    id: 3,
    image: '/assets/galeri3.jpg',
    caption: 'Sleep at Keputrian Class'
  },
  {
    id: 4,
    image: '/assets/bangku.jpg',
    caption: 'Take picture with William iPhone'
  },
  {
    id: 5,
    image: '/assets/galeri4.jpg',
    caption: 'lost in the Surabaya Zoo'
  },
  {
    id: 6,
    image: '/assets/galeri5.jpg',
    caption: 'Practice Theater Class'
  },
  {
    id: 7,
    image: '/assets/galeri6.jpg',
    caption: 'Eating Tumpeng on August 17'
  },
  {
    id: 8,
    image: '/assets/galeri7.jpg',
    caption: 'Preparation for the Lomba Makan Kerupuk'
  },
  {
    id: 9,
    image: '/assets/galeri8.jpg',
    caption: 'Try eat kerupuk without soto...'
  },
  {
    id: 10,
    image: '/assets/galeri9.jpg',
    caption: 'Why did you take a picture like this?'
  },
  {
    id: 11,
    image: '/assets/galeri10.jpg',
    caption: 'Prepare for Sholat Dhuhur'
  },
  {
    id: 12,
    image: '/assets/galeri11.jpg',
    caption: 'Always took a picture in this class'
  }
];

const Gallery: React.FC = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
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
    
    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToImage = (index: number) => {
    setActiveIndex(index);
    const scrollContainer = document.querySelector('.gallery-scroll');
    const items = scrollContainer?.querySelectorAll('.gallery-item');
    
    if (scrollContainer && items && items[index]) {
      const item = items[index] as HTMLElement;
      scrollContainer.scrollTo({
        left: item.offsetLeft - (scrollContainer.clientWidth - item.clientWidth) / 2,
        behavior: 'smooth'
      });
    }
  };

  const handlePrevious = () => {
    const newIndex = activeIndex === 0 ? galleryData.length - 1 : activeIndex - 1;
    scrollToImage(newIndex);
  };

  const handleNext = () => {
    const newIndex = activeIndex === galleryData.length - 1 ? 0 : activeIndex + 1;
    scrollToImage(newIndex);
  };

  return (
    <section id="gallery" className="py-20 bg-neutral-100">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Moments</h2>
        <p className="text-neutral-600 text-center max-w-2xl mx-auto mb-12">
          Glimpses of our journey together, Do you still remember?
        </p>
        
        <div 
          ref={galleryRef}
          className={`relative transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}
        >
          <div className="relative overflow-hidden">
            <div className="gallery-scroll flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8">
              {galleryData.map((item, index) => (
                <div 
  key={item.id}
  className={`gallery-item flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center px-2 transition-transform duration-500 ${
    activeIndex === index ? 'scale-100' : 'scale-95 opacity-80'
  }`}
>
  <div className="bg-white p-3 rounded-lg shadow-lg">
    <div className="relative h-48 md:h-72 overflow-hidden rounded-lg shadow-xl">
      <img 
        src={item.image} 
        alt={`Gallery image ${index + 1}`} 
        className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
      />
    </div>
    <p className="text-center py-4 text-neutral-700">{item.caption}</p>
  </div>
</div>

              ))}
            </div>
            
            <button 
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 p-2 rounded-full shadow-lg text-neutral-800 transition-all duration-300 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 p-2 rounded-full shadow-lg text-neutral-800 transition-all duration-300 z-10"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {galleryData.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToImage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-neutral-800 w-6' : 'bg-neutral-400'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;