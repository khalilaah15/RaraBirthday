import React from 'react';
import { ChevronDown } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  const scrollToContent = () => {
    const contentElement = document.getElementById('timeline');
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-800 font-sans">
      <Navbar />
      <Hero onScrollDown={scrollToContent} />
      <Timeline />
      <Gallery />
      <About />
      <Footer />
      
      <button 
        onClick={scrollToContent}
        className="fixed bottom-8 right-8 bg-neutral-900 text-white p-3 rounded-full shadow-lg opacity-70 hover:opacity-100 transition-opacity duration-300 z-50 md:hidden"
        aria-label="Scroll down"
      >
        <ChevronDown size={24} />
      </button>
    </div>
  );
}

export default App;