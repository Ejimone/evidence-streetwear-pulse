
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/lib/data';
import { Eye, ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();
  const defaultSize = product.sizes[0];

  return (
    <div 
      className={`group relative overflow-hidden bg-white hover-lift scroll-reveal animate-fade-in`} 
      style={{ animationDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badge */}
      {(product.newArrival || product.bestSeller) && (
        <div className="absolute top-4 left-4 z-10">
          {product.newArrival && (
            <span className="bg-evidence-red text-evidence-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 inline-block mb-2">
              New
            </span>
          )}
          {product.bestSeller && (
            <span className="bg-evidence-black text-evidence-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 inline-block">
              Best Seller
            </span>
          )}
        </div>
      )}
      
      {/* Image */}
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden">
        <div className="relative pb-[125%] overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 transform-gpu"
          />
          {product.images.length > 1 && (
            <img
              src={product.images[1]}
              alt={`${product.name} alternate view`}
              className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
            />
          )}
        </div>

        {/* Quick Actions */}
        <div 
          className={`absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-evidence-black/80 to-transparent transition-transform duration-300 ${
            isHovered ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <div className="flex justify-between items-center">
            <Link 
              to={`/product/${product.id}`}
              className="flex items-center text-evidence-white text-sm font-medium hover:text-evidence-red transition-colors"
            >
              <Eye size={16} className="mr-1" /> Quick View
            </Link>
            <button 
              onClick={(e) => {
                e.preventDefault();
                addToCart(product, 1, defaultSize);
              }}
              className="flex items-center text-evidence-white text-sm font-medium hover:text-evidence-red transition-colors"
            >
              <ShoppingCart size={16} className="mr-1" /> Add to Cart
            </button>
          </div>
        </div>
      </Link>
      
      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold mb-1 group-hover:text-evidence-red transition-colors">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="font-bold text-evidence-red">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
