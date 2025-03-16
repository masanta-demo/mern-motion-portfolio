
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { useProduct } from "@/contexts/ProductContext";
import { products } from "@/data/products";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/products/ProductCard";

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useProduct();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    // Find the product by ID
    const foundProduct = products.find(p => p.id === id) || null;
    setProduct(foundProduct);
    
    // Find related products (same category)
    if (foundProduct) {
      const related = products
        .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
        .slice(0, 4);
      setRelatedProducts(related);
    }
    
    // Reset quantity when product changes
    setQuantity(1);
    
    // Scroll to top on product change
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!product) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-6">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link to="/shop">Continue Shopping</Link>
          </Button>
        </div>
      </Layout>
    );
  }
  
  const discountedPrice = product.discount 
    ? product.price * (1 - product.discount / 100) 
    : product.price;
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-blue-600">Shop</Link>
          <span className="mx-2">/</span>
          <Link 
            to={`/shop?category=${product.category}`} 
            className="hover:text-blue-600"
          >
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>
        
        {/* Product Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="aspect-square relative">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-contain p-8" 
              />
              {product.discount && (
                <div className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                  {product.discount}% OFF
                </div>
              )}
            </div>
          </div>
          
          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            
            <div className="flex items-baseline mb-6">
              <span className="text-3xl font-bold mr-3">${discountedPrice.toFixed(2)}</span>
              {product.discount && (
                <span className="text-xl text-gray-500 line-through">
                  ${product.price.toFixed(2)}
                </span>
              )}
              <span className="ml-3 text-gray-500">Per {product.unit}</span>
            </div>
            
            <div className="prose prose-sm max-w-none mb-8">
              <p>{product.description}</p>
            </div>
            
            <div className="mb-8">
              <div className="flex space-x-4 items-center">
                <div className="w-32">
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                    Quantity
                  </label>
                  <div className="flex">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 border border-gray-300 rounded-l-md bg-gray-50"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      min="1"
                      value={quantity}
                      onChange={(e) => {
                        const val = parseInt(e.target.value);
                        if (!isNaN(val) && val > 0) {
                          setQuantity(val);
                        }
                      }}
                      className="flex-1 border-y border-gray-300 py-2 text-center"
                    />
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 border border-gray-300 rounded-r-md bg-gray-50"
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <Button
                  onClick={() => addToCart(product, quantity)}
                  className="flex-1 bg-blue-600 hover:bg-blue-700"
                  size="lg"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Category</h3>
                  <p>{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Availability</h3>
                  <p className={`${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductPage;
