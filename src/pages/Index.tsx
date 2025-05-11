
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import FeaturedCollections from '@/components/FeaturedCollections';
import { products } from '@/lib/data';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const featuredProducts = products.filter(product => product.featured);
  const newArrivals = products.filter(product => product.newArrival);
  const bestSellers = products.filter(product => product.bestSeller);

  // Initialize scroll reveal animation
  useEffect(() => {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });
    
    revealElements.forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      revealElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="bg-white">
      <Hero />
      
      {/* Featured Message */}
      <div className="py-16 bg-evidence-red text-evidence-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 scroll-reveal">
            WEAR YOUR CONFIDENCE
          </h2>
          <p className="max-w-2xl mx-auto text-lg opacity-90 scroll-reveal">
            Bold designs for those who dare to stand out. Our premium streetwear is crafted for style and comfort, designed for those who set trends, not follow them.
          </p>
        </div>
      </div>
      
      {/* New Arrivals */}
      <ProductGrid 
        title="New Arrivals" 
        products={newArrivals} 
        filterOptions={{ 
          categories: ['tops', 'bottoms', 'accessories'] 
        }}
      />
      
      {/* Collections Banner */}
      <FeaturedCollections />
      
      {/* Best Sellers */}
      <ProductGrid 
        title="Best Sellers" 
        products={bestSellers}
        filterOptions={{ 
          categories: ['tops', 'bottoms', 'accessories', 'footwear'] 
        }}
      />
      
      {/* Newsletter */}
      <section className="py-24 bg-evidence-black text-evidence-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Movement</h2>
            <p className="text-gray-400 mb-8">
              Subscribe to get exclusive access to drops, promotions, and streetwear culture.
            </p>
            
            <form className="flex flex-col sm:flex-row max-w-md mx-auto mb-4">
              <input
                type="email"
                placeholder="Your email"
                className="py-3 px-4 w-full text-black mb-2 sm:mb-0"
                required
              />
              <button
                type="submit"
                className="bg-evidence-red hover:bg-evidence-red/90 text-white py-3 px-6 font-medium sm:ml-2 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-gray-500 text-sm">
              By subscribing, you agree to our Privacy Policy and consent to receive updates.
            </p>
          </div>
        </div>
      </section>
      
      {/* CTA Banner */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0 scroll-reveal">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop the Full Collection</h2>
              <p className="text-gray-600 mb-6 max-w-md">
                Explore our complete range of premium streetwear designed for style and confidence.
              </p>
              <Link to="/shop" className="evidencebtn evidencebtn-primary group">
                Shop All
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
              </Link>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="overflow-hidden scroll-reveal">
                <img 
                  src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1974&auto=format&fit=crop" 
                  alt="Streetwear Collection"
                  className="w-full h-80 object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="overflow-hidden scroll-reveal">
                <img 
                  src="https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1935&auto=format&fit=crop" 
                  alt="Streetwear Collection"
                  className="w-full h-80 object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
