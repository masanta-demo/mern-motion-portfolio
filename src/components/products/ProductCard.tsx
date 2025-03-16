
import React from "react";
import { Link } from "react-router-dom";
import { Product } from "@/types/product";
import { useProduct } from "@/contexts/ProductContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, featured = false }) => {
  const { addToCart } = useProduct();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  const discountedPrice = product.discount 
    ? product.price * (1 - product.discount / 100) 
    : product.price;

  return (
    <Card className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${
      featured ? 'border-blue-500 shadow-md' : ''
    }`}>
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <img 
            src={product.image} 
            alt={product.name} 
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
          {product.discount && (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              {product.discount}% OFF
            </div>
          )}
          {product.isPopular && !product.discount && (
            <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              Popular
            </div>
          )}
        </div>

        <CardContent className="p-4">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-medium text-lg line-clamp-1">{product.name}</h3>
          </div>
          
          <div className="text-gray-500 mb-2 text-sm">
            Per {product.unit}
          </div>

          <div className="flex items-baseline gap-2">
            <span className="font-bold text-lg">${discountedPrice.toFixed(2)}</span>
            {product.discount && (
              <span className="text-gray-500 line-through text-sm">${product.price.toFixed(2)}</span>
            )}
          </div>
        </CardContent>
      </Link>

      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={handleAddToCart} 
          variant="default" 
          className="w-full"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
