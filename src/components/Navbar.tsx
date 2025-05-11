
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';

const Navbar = () => {
  const { toggleCart, getTotalItems } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-evidence-black py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-black text-evidence-white tracking-tighter">
            EVIDENCE<span className="text-evidence-red">SALES</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-evidence-white hover:text-evidence-red transition-colors font-medium">
            HOME
          </Link>
          <Link to="/shop" className="text-evidence-white hover:text-evidence-red transition-colors font-medium">
            SHOP
          </Link>
          <Link to="/collections" className="text-evidence-white hover:text-evidence-red transition-colors font-medium">
            COLLECTIONS
          </Link>
          <Link to="/about" className="text-evidence-white hover:text-evidence-red transition-colors font-medium">
            ABOUT
          </Link>
        </nav>

        {/* Right side icons */}
        <div className="flex items-center space-x-4">
          <button 
            className="text-evidence-white hover:text-evidence-red transition-colors"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
          
          <button 
            className="text-evidence-white hover:text-evidence-red transition-colors relative"
            onClick={toggleCart}
            aria-label="Open shopping cart"
          >
            <ShoppingCart size={20} />
            {getTotalItems() > 0 && (
              <span className="absolute -top-2 -right-2 bg-evidence-red text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse-gentle">
                {getTotalItems()}
              </span>
            )}
          </button>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-evidence-white hover:text-evidence-red transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-evidence-black absolute w-full animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-evidence-white hover:text-evidence-red transition-colors py-2 border-b border-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              HOME
            </Link>
            <Link 
              to="/shop" 
              className="text-evidence-white hover:text-evidence-red transition-colors py-2 border-b border-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              SHOP
            </Link>
            <Link 
              to="/collections" 
              className="text-evidence-white hover:text-evidence-red transition-colors py-2 border-b border-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              COLLECTIONS
            </Link>
            <Link 
              to="/about" 
              className="text-evidence-white hover:text-evidence-red transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ABOUT
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
