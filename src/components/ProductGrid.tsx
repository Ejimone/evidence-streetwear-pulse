
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/lib/data';

interface ProductGridProps {
  title: string;
  products: Product[];
  filterOptions?: {
    categories?: string[];
  };
}

const ProductGrid = ({ title, products, filterOptions }: ProductGridProps) => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
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

    const element = document.getElementById(title.replace(/\s+/g, '-').toLowerCase());
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [title]);

  useEffect(() => {
    if (activeFilter) {
      setFilteredProducts(
        products.filter(product => product.categories.includes(activeFilter))
      );
    } else {
      setFilteredProducts(products);
    }
  }, [activeFilter, products]);

  const categories = filterOptions?.categories || [];

  return (
    <section 
      id={title.replace(/\s+/g, '-').toLowerCase()} 
      className={`py-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="inline-block border-b-4 border-evidence-red pb-1">{title}</span>
          </h2>
          
          {categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
              <button
                onClick={() => setActiveFilter(null)}
                className={`py-1 px-4 text-sm font-medium transition-all ${
                  activeFilter === null
                    ? 'bg-evidence-black text-evidence-white'
                    : 'border border-gray-300 hover:border-evidence-black'
                }`}
              >
                All
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`py-1 px-4 text-sm font-medium transition-all capitalize ${
                    activeFilter === category
                      ? 'bg-evidence-black text-evidence-white'
                      : 'border border-gray-300 hover:border-evidence-black'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
