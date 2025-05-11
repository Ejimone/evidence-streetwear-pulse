
import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';

const Cart = () => {
  const { cart, isCartOpen, closeCart, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/60 z-50 transition-opacity" 
        onClick={closeCart}
      />
      
      <div className="fixed inset-y-0 right-0 w-full sm:w-96 bg-white z-50 shadow-xl transform transition-transform animate-slide-in-right">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="text-xl font-bold flex items-center">
              <ShoppingBag className="mr-2" size={20} />
              Your Cart
            </h2>
            <button 
              onClick={closeCart}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>
          
          {/* Cart Items */}
          <div className="flex-1 overflow-auto p-4">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={64} className="text-gray-300 mb-4" />
                <h3 className="text-xl font-medium mb-2">Your cart is empty</h3>
                <p className="text-gray-500 mb-6">Looks like you haven't added any items yet.</p>
                <button 
                  onClick={closeCart}
                  className="evidencebtn evidencebtn-primary"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <ul className="divide-y">
                {cart.map((item) => (
                  <li key={`${item.product.id}-${item.size}`} className="py-4 flex">
                    {/* Product Image */}
                    <div className="h-24 w-20 flex-shrink-0 overflow-hidden">
                      <img 
                        src={item.product.images[0]} 
                        alt={item.product.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    
                    {/* Product Details */}
                    <div className="ml-4 flex-1">
                      <div className="flex justify-between">
                        <div>
                          <h4 className="font-medium">{item.product.name}</h4>
                          <p className="text-sm text-gray-500">Size: {item.size}</p>
                        </div>
                        <p className="font-bold text-evidence-red">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                      
                      {/* Quantity Controls */}
                      <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center border border-gray-300">
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="px-2 py-1 hover:bg-gray-100"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="px-4 py-1">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="px-2 py-1 hover:bg-gray-100"
                            aria-label="Increase quantity"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        
                        <button 
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-gray-500 hover:text-evidence-red"
                          aria-label="Remove item"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          {/* Footer */}
          {cart.length > 0 && (
            <div className="border-t p-4">
              <div className="flex justify-between mb-4">
                <span className="font-medium">Subtotal</span>
                <span className="font-bold">${getTotalPrice().toFixed(2)}</span>
              </div>
              <p className="text-sm text-gray-500 mb-4">Shipping and taxes calculated at checkout</p>
              <Link
                to="/checkout"
                className="evidencebtn evidencebtn-primary w-full mb-2"
                onClick={closeCart}
              >
                Checkout
              </Link>
              <button 
                className="evidencebtn evidencebtn-outline w-full"
                onClick={closeCart}
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
