import React, { useRef, useEffect, useState } from 'react';

// Timeline data
const timelineData = [
  {
    id: 1,
    year: '2022',
    title: 'How We Met',
    description: 'It all started on an ordinary day. We sat at the same desk in 11th grade or SEPRAPAT. We were just classmates, but little did we know that this would be the beginning of a best friendship.',
    imageUrl: '/assets/bangkuu.jpg',
    isLeft: true
  },
  {
    id: 2,
    year: '2022',
    title: 'Dies Natalis Moklet 2022',
    description: 'Cosplay, class drama, projects UKL, P5 assignments, we went through so many things this year. It was a year of growth and learning.',
    imageUrl: '/assets/2022.jpg',
    isLeft: false
  },
  {
    id: 3,
    year: '2023',
    title: 'First Beach Trip',
    description: 'Banyu Meneng Beach. Maybe its my first time going to the beach with classmates, but it was a memorable experience with friends.',
    imageUrl: '/assets/2023.jpg',
    isLeft: true
  },
  {
    id: 4,
    year: '2023',
    title: 'Separated in 12th Grade',
    description: 'We parted ways in our brief 12th grade year. We remained friends, but not as classmates. We still shared moments, laughter, and support.',
    imageUrl: '/assets/pisah.jpg',
    isLeft: false
  },
  {
    id: 5,
    year: '2024',
    title: 'Internship and Graduation',
    description: 'From differences in internship locations to differences in our current educational institutions. We may not be in the same school anymore, but we continue to support each other in our respective journeys.',
    imageUrl: '/assets/2024.png',
    isLeft: true
  },
];

const TimelineItem: React.FC<{
  item: typeof timelineData[0];
  isVisible: boolean;
}> = ({ item, isVisible }) => {
  return (
    <div className={`mb-24 md:mb-32 flex flex-col ${item.isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      <div 
        className={`w-full md:w-1/2 transition-all duration-1000 transform ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-16'
        }`}
      >
        <div className="relative h-64 md:h-96 overflow-hidden rounded-lg shadow-xl">
          <img 
            src={item.imageUrl} 
            alt={item.title} 
            className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 text-white py-2 px-4">
            <span className="text-neutral-400">{item.year}</span>
          </div>
        </div>
      </div>
      
      <div 
        className={`w-full md:w-1/2 flex items-center ${
          item.isLeft ? 'md:pl-12' : 'md:pr-12'
        } mt-6 md:mt-0 transition-all duration-1000 delay-300 transform ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-16'
        }`}
      >
        <div className={`bg-white p-6 rounded-lg shadow-lg ${
          item.isLeft ? 'md:-ml-24 z-10' : 'md:-mr-24 z-10'
        }`}>
          <h3 className="text-2xl font-bold mb-3 text-neutral-800">{item.title}</h3>
          <p className="text-neutral-600 leading-relaxed">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

const Timeline: React.FC = () => {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(Array(timelineData.length).fill(false));

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute('data-index'));
          setVisibleItems(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    itemRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="journey" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Journey</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-neutral-300 transform -translate-x-1/2"></div>
          
          {/* Timeline items */}
          {timelineData.map((item, index) => (
            <div 
              key={item.id} 
              ref={el => itemRefs.current[index] = el}
              data-index={index}
            >
              <TimelineItem 
                item={item} 
                isVisible={visibleItems[index]} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;