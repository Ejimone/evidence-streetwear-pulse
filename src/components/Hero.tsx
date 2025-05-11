
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: "New Collection",
    subtitle: "Bold Statements",
    description: "Elevate your street style with our latest drop",
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1974&auto=format&fit=crop",
    buttonText: "Shop Now",
    link: "/shop"
  },
  {
    id: 2,
    title: "Winter Essentials",
    subtitle: "Stay Bold",
    description: "Premium quality streetwear for the cold season",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1935&auto=format&fit=crop",
    buttonText: "Explore",
    link: "/collections"
  },
  {
    id: 3,
    title: "Accessories",
    subtitle: "Complete Your Look",
    description: "Statement pieces to elevate any outfit",
    image: "https://images.unsplash.com/photo-1598532213005-067bc5c952c6?q=80&w=1964&auto=format&fit=crop",
    buttonText: "Discover",
    link: "/shop?category=accessories"
  }
];

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === activeSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-evidence-black/80 to-evidence-black/40 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </div>
      ))}

      {/* Content */}
      <div className="container relative z-20 flex h-full items-center px-4 mx-auto">
        <div className="max-w-2xl">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`transition-all duration-1000 ease-in-out absolute ${
                index === activeSlide
                  ? 'opacity-100 transform translate-y-0'
                  : 'opacity-0 transform translate-y-8'
              }`}
              style={{ pointerEvents: index === activeSlide ? 'auto' : 'none' }}
            >
              <div className="w-16 h-1 bg-evidence-red mb-6" />
              <h3 className="text-evidence-red font-bold text-xl md:text-2xl mb-2">{slide.subtitle}</h3>
              <h2 className="text-evidence-white text-4xl md:text-6xl lg:text-7xl font-black mb-4">{slide.title}</h2>
              <p className="text-evidence-white/80 text-lg md:text-xl mb-8 max-w-lg">{slide.description}</p>
              
              <Link 
                to={slide.link}
                className="evidencebtn evidencebtn-primary group"
              >
                {slide.buttonText}
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
              </Link>
            </div>
          ))}
        </div>
        
        {/* Hero Navigation Dots */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeSlide
                  ? 'bg-evidence-red w-8'
                  : 'bg-evidence-white/40 hover:bg-evidence-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
