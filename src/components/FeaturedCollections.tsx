
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collections } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

const FeaturedCollections = () => {
  const [inView, setInView] = useState(false);

  // For animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('featured-collections');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="featured-collections" className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          <span className="inline-block border-b-4 border-evidence-red pb-1">Collections</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div 
              key={collection.id}
              className={`relative overflow-hidden group transition-all duration-700 ${
                inView
                  ? 'opacity-100 transform-none'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="h-[400px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-evidence-black/80 to-evidence-black/0 z-10" />
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 transform-gpu group-hover:scale-110"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform transition-all duration-500">
                <h3 className="text-2xl font-bold mb-2 text-evidence-white">{collection.name}</h3>
                <p className="text-evidence-white/80 mb-4 transform transition-all duration-500 max-w-xs">
                  {collection.description}
                </p>
                <Link
                  to={`/collections/${collection.id}`}
                  className="inline-flex items-center text-evidence-white border-b border-evidence-red pb-1 group-hover:text-evidence-red transition-colors duration-300"
                >
                  <span>Explore Collection</span>
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
