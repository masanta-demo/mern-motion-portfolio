
import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/products/ProductCard";
import { getPopularProducts, getDiscountedProducts } from "@/data/products";

const Index: React.FC = () => {
  const popularProducts = getPopularProducts();
  const discountedProducts = getDiscountedProducts();

  return (
    <Layout showParticles={true}>
      {/* Hero Section */}
      <section className="pt-20 pb-32 relative overflow-hidden bg-gradient-to-tr from-gray-900 via-gray-800 to-black">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full -top-20 -left-20 blur-3xl"></div>
          <div className="absolute w-96 h-96 bg-blue-600/20 rounded-full -bottom-20 -right-20 blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Fresh <span className="text-blue-500">Groceries</span> Delivered To Your Door
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Discover premium quality vegetables, fruits, and grocery items that are locally sourced and delivered fresh to your doorstep.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link to="/shop">Shop Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                <Link to="/shop?category=organic">Explore Organic</Link>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg reveal fade-right">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-600/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              <div className="m-8 relative space-y-4">
                <div className="p-5 bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 shadow-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-500/20 rounded-lg p-4">
                      <img 
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200' fill='none'%3E%3Ccircle cx='100' cy='110' r='70' fill='%23E53935'/%3E%3Cpath d='M100 50C100 50 90 30 100 25C110 20 120 35 120 35' fill='%234CAF50'/%3E%3C/svg%3E" 
                        alt="Fresh Apples" 
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="bg-blue-500/10 rounded-lg p-4">
                      <img 
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200' fill='none'%3E%3Ccircle cx='100' cy='100' r='80' fill='%23689F38'/%3E%3Cpath d='M100 60C130 60 140 100 120 120C100 140 70 120 70 90C70 70 85 60 100 60Z' fill='%2333691E'/%3E%3C/svg%3E" 
                        alt="Fresh Broccoli" 
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="bg-blue-500/10 rounded-lg p-4">
                      <img 
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200' fill='none'%3E%3Cpath d='M70 60C70 60 60 70 60 100C60 130 70 160 90 170C110 180 130 170 140 140C150 110 150 80 140 70C130 60 110 70 100 90C90 110 80 60 70 60Z' fill='%23FFEB3B'/%3E%3C/svg%3E" 
                        alt="Fresh Bananas" 
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="bg-blue-500/20 rounded-lg p-4">
                      <img 
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200' fill='none'%3E%3Cpath d='M90 40L110 50L130 80L120 150L100 160L80 150L70 80L90 40Z' fill='%23FF7043'/%3E%3Cpath d='M90 40C90 40 85 30 100 25C115 20 110 40 110 40' fill='%234CAF50'/%3E%3C/svg%3E" 
                        alt="Fresh Carrots" 
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 reveal fade-up">
            <div className="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck text-blue-500"><path d="M10 17h4V5H2v12h3"/><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5"/><rect x="2" y="9" width="8" height="8"/><circle cx="9" cy="19" r="2"/><circle cx="17" cy="19" r="2"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Delivery</h3>
              <p className="text-gray-600">Free delivery on all orders over $50</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-leaf text-blue-500"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fresh Products</h3>
              <p className="text-gray-600">100% fresh and organic products</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock text-blue-500"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Customer support available all day</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-credit-card text-blue-500"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-600">Multiple secure payment methods</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Popular Products</h2>
            <Button asChild variant="outline">
              <Link to="/shop">View All</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 reveal fade-up">
            {popularProducts.map(product => (
              <ProductCard key={product.id} product={product} featured={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Deals Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Special Deals</h2>
            <Button asChild variant="outline">
              <Link to="/shop">View All Deals</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 reveal fade-up">
            {discountedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-400 mb-8">
            Get updates on new products, special offers, and seasonal tips for your home garden.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
