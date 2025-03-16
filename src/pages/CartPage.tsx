
import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { useProduct } from "@/contexts/ProductContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CartPage: React.FC = () => {
  const { state, updateQuantity, removeFromCart, clearCart } = useProduct();
  
  if (state.cart.length === 0) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="64" 
              height="64" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="mx-auto mb-4 text-gray-400"
            >
              <circle cx="8" cy="21" r="1"/>
              <circle cx="19" cy="21" r="1"/>
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
            </svg>
            <h2 className="text-2xl font-semibold mb-3">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Looks like you haven't added any products to your cart yet.</p>
            <Button asChild size="lg">
              <Link to="/shop">Start Shopping</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="text-left py-4 px-6">Product</th>
                    <th className="text-center py-4 px-2">Price</th>
                    <th className="text-center py-4 px-2">Quantity</th>
                    <th className="text-right py-4 px-6">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {state.cart.map((item) => {
                    const discountedPrice = item.product.discount 
                      ? item.product.price * (1 - item.product.discount / 100) 
                      : item.product.price;
                    
                    return (
                      <tr key={item.product.id} className="border-b">
                        <td className="py-4 px-6">
                          <div className="flex items-center">
                            <img 
                              src={item.product.image} 
                              alt={item.product.name} 
                              className="w-16 h-16 object-cover rounded mr-4" 
                            />
                            <div>
                              <Link 
                                to={`/product/${item.product.id}`}
                                className="font-medium hover:text-blue-600 transition-colors"
                              >
                                {item.product.name}
                              </Link>
                              <div className="text-sm text-gray-500">
                                Per {item.product.unit}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-2 text-center">
                          <div className="flex flex-col items-center">
                            <span className="font-medium">${discountedPrice.toFixed(2)}</span>
                            {item.product.discount && (
                              <span className="text-sm text-gray-500 line-through">
                                ${item.product.price.toFixed(2)}
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="py-4 px-2">
                          <div className="flex items-center justify-center">
                            <button 
                              onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l-md bg-gray-50 hover:bg-gray-100"
                            >
                              -
                            </button>
                            <Input
                              type="number"
                              value={item.quantity}
                              onChange={(e) => {
                                const value = parseInt(e.target.value);
                                if (!isNaN(value) && value > 0) {
                                  updateQuantity(item.product.id, value);
                                }
                              }}
                              className="w-12 h-8 text-center rounded-none border-x-0"
                              min="1"
                            />
                            <button 
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r-md bg-gray-50 hover:bg-gray-100"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-right">
                          <div className="flex items-center justify-end">
                            <span className="font-medium">
                              ${(discountedPrice * item.quantity).toFixed(2)}
                            </span>
                            <button 
                              onClick={() => removeFromCart(item.product.id)}
                              className="ml-4 text-gray-400 hover:text-red-500 transition-colors"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 6h18"></path>
                                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              
              <div className="p-6 border-t flex justify-between">
                <Button variant="outline" onClick={clearCart}>
                  Clear Cart
                </Button>
                <Button asChild>
                  <Link to="/shop">Continue Shopping</Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              <div className="border-b pb-4 mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${state.totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">$0.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">${(state.totalPrice * 0.1).toFixed(2)}</span>
                </div>
              </div>
              
              <div className="flex justify-between mb-6">
                <span className="text-lg font-bold">Total</span>
                <span className="text-lg font-bold">
                  ${(state.totalPrice + state.totalPrice * 0.1).toFixed(2)}
                </span>
              </div>
              
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                <Link to="/checkout">
                  Proceed to Checkout
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
