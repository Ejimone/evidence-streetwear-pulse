
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { products } from '@/lib/data';
import { ArrowLeft, Minus, Plus, ChevronRight } from 'lucide-react';
import ProductCard from '@/components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(products.find(p => p.id === Number(id)));
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  
  const similarProducts = products
    .filter(p => p.id !== Number(id) && p.categories.some(cat => product?.categories.includes(cat)))
    .slice(0, 4);

  useEffect(() => {
    // Reset state when product changes
    const foundProduct = products.find(p => p.id === Number(id));
    setProduct(foundProduct);
    setSelectedSize(foundProduct?.sizes[0] || '');
    setQuantity(1);
    setActiveImage(0);
    setIsZoomed(false);
    
    // Scroll to top when product changes
    window.scrollTo(0, 0);
  }, [id]);

  const handleAddToCart = () => {
    if (product && selectedSize) {
      addToCart(product, quantity, selectedSize);
    }
  };

  const handleImageZoom = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    
    setZoomPosition({ x, y });
  };

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <Link to="/" className="text-evidence-red hover:underline">Return to Home</Link>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Breadcrumbs */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm">
            <Link to="/" className="hover:text-evidence-red">Home</Link>
            <ChevronRight size={16} className="mx-2" />
            <Link to="/shop" className="hover:text-evidence-red">Shop</Link>
            <ChevronRight size={16} className="mx-2" />
            <span className="text-gray-500">{product.name}</span>
          </div>
        </div>
      </div>
      
      {/* Product Detail */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div 
              className="relative overflow-hidden h-[500px] bg-gray-100"
              onMouseMove={handleImageZoom}
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
            >
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className={`w-full h-full object-contain transition-transform duration-300 ${
                  isZoomed ? 'scale-150' : ''
                }`}
                style={
                  isZoomed
                    ? {
                        transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                      }
                    : {}
                }
              />
            </div>
            
            {/* Image Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex space-x-4">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    className={`w-24 h-24 bg-gray-100 hover-lift ${
                      activeImage === index ? 'border-2 border-evidence-red' : ''
                    }`}
                    onClick={() => setActiveImage(index)}
                  >
                    <img
                      src={img}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover object-center"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Product Info */}
          <div className="animate-fade-in">
            <Link to="/shop" className="flex items-center text-gray-500 hover:text-evidence-red mb-4 transition-colors">
              <ArrowLeft size={16} className="mr-1" /> Back to Shop
            </Link>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-2xl font-bold text-evidence-red mb-6">${product.price.toFixed(2)}</p>
            
            <div className="mb-8">
              <h3 className="font-bold mb-2">Description</h3>
              <p className="text-gray-700">{product.description}</p>
            </div>
            
            {/* Size Selection */}
            <div className="mb-8">
              <h3 className="font-bold mb-2">Size</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`w-14 h-14 flex items-center justify-center transition-all ${
                      selectedSize === size
                        ? 'bg-evidence-black text-evidence-white'
                        : 'border border-gray-300 hover:border-evidence-black'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Quantity Selection */}
            <div className="mb-8">
              <h3 className="font-bold mb-2">Quantity</h3>
              <div className="flex border border-gray-300">
                <button
                  className="px-4 py-2 hover:bg-gray-100"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus size={18} />
                </button>
                <span className="px-8 py-2 flex items-center justify-center">{quantity}</span>
                <button
                  className="px-4 py-2 hover:bg-gray-100"
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>
            
            {/* Add to Cart Button */}
            <button
              className="evidencebtn evidencebtn-primary w-full text-center mb-4 hover:animate-pulse-gentle"
              onClick={handleAddToCart}
              disabled={!selectedSize}
            >
              Add to Cart
            </button>
            
            {/* Additional Info */}
            <div className="border-t border-gray-200 pt-6 mt-8">
              <div className="mb-4">
                <h3 className="font-bold mb-1">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {product.categories.map(category => (
                    <Link
                      key={category}
                      to={`/shop?category=${category}`}
                      className="text-sm bg-gray-100 px-3 py-1 capitalize hover:bg-gray-200 transition-colors"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-bold mb-1">Details</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Premium quality materials</li>
                  <li>Machine wash cold</li>
                  <li>Exclusive design</li>
                  <li>Imported</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Similar Products Section */}
      {similarProducts.length > 0 && (
        <div className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {similarProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
