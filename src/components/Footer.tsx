
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-evidence-black text-evidence-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-black tracking-tighter mb-4">
              EVIDENCE<span className="text-evidence-red">SALES</span>
            </h2>
            <p className="text-gray-400 mb-6">
              Bold, confident streetwear designed for those who set trends, not follow them.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-evidence-red transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="hover:text-evidence-red transition-colors" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="hover:text-evidence-red transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="hover:text-evidence-red transition-colors" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
              </a>
            </div>
          </div>
          
          {/* Shop */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wider">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop?category=tops" className="text-gray-400 hover:text-evidence-red transition-colors">
                  Tops
                </Link>
              </li>
              <li>
                <Link to="/shop?category=bottoms" className="text-gray-400 hover:text-evidence-red transition-colors">
                  Bottoms
                </Link>
              </li>
              <li>
                <Link to="/shop?category=accessories" className="text-gray-400 hover:text-evidence-red transition-colors">
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/collections" className="text-gray-400 hover:text-evidence-red transition-colors">
                  Collections
                </Link>
              </li>
              <li>
                <Link to="/sale" className="text-gray-400 hover:text-evidence-red transition-colors">
                  Sale
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wider">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-evidence-red transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-evidence-red transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-gray-400 hover:text-evidence-red transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-evidence-red transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-evidence-red transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wider">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: support@evidencesales.com</li>
              <li>Phone: +1 (234) 567-8901</li>
              <li>Address: 123 Fashion Street, NYC</li>
            </ul>
            
            <h4 className="text-lg font-bold mt-6 mb-2 uppercase tracking-wider">Newsletter</h4>
            <p className="text-gray-400 mb-2">Subscribe for exclusive drops & offers</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="py-2 px-3 text-evidence-black w-full"
                required
              />
              <button
                type="submit"
                className="bg-evidence-red hover:bg-evidence-red/90 text-white py-2 px-4 font-medium"
              >
                Join
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-black py-4">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Evidence Sales. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
