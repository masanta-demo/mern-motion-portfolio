
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { getProductsByCategory, products } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Product, ProductCategory } from "@/types/product";

const categories = [
  { value: "all", label: "All Products" },
  { value: "vegetables", label: "Vegetables" },
  { value: "fruits", label: "Fruits" },
  { value: "dairy", label: "Dairy" },
  { value: "bakery", label: "Bakery" },
  { value: "meat", label: "Meat" },
  { value: "organic", label: "Organic" }
];

const sortOptions = [
  { value: "name-asc", label: "Name (A-Z)" },
  { value: "name-desc", label: "Name (Z-A)" },
  { value: "price-asc", label: "Price (Low to High)" },
  { value: "price-desc", label: "Price (High to Low)" }
];

const ShopPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "all";
  const searchParam = searchParams.get("search") || "";
  
  const [category, setCategory] = useState<string>(categoryParam);
  const [searchTerm, setSearchTerm] = useState<string>(searchParam);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [sortBy, setSortBy] = useState<string>("name-asc");
  
  useEffect(() => {
    let filtered = category === "all" ? products : getProductsByCategory(category);
    
    if (searchTerm) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Sort products
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        default:
          return 0;
      }
    });
    
    setFilteredProducts(sorted);
  }, [category, searchTerm, sortBy]);
  
  const handleCategoryChange = (value: string) => {
    setCategory(value);
    searchParams.set("category", value);
    setSearchParams(searchParams);
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    searchParams.set("search", searchTerm);
    setSearchParams(searchParams);
  };
  
  const handleSortChange = (value: string) => {
    setSortBy(value);
  };
  
  return (
    <Layout>
      <div className="pt-10 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Shop</h1>
          
          {/* Filters and search */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-10">
            <div className="md:col-span-3">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Categories</h2>
                <div className="space-y-4">
                  {categories.map((cat) => (
                    <div key={cat.value} className="flex items-center">
                      <Button
                        variant={category === cat.value ? "default" : "ghost"}
                        className={`w-full justify-start ${category === cat.value ? 'bg-blue-600' : ''}`}
                        onClick={() => handleCategoryChange(cat.value)}
                      >
                        {cat.label}
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="md:col-span-9">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <form onSubmit={handleSearch} className="flex-1 flex gap-2">
                    <Input
                      type="text"
                      placeholder="Search products..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="flex-1"
                    />
                    <Button type="submit">Search</Button>
                  </form>
                  
                  <div className="w-full sm:w-64">
                    <Label htmlFor="sort-by" className="sr-only">Sort by</Label>
                    <Select value={sortBy} onValueChange={handleSortChange}>
                      <SelectTrigger id="sort-by">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        {sortOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              
              {/* Products grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold">No products found</h3>
                  <p className="text-gray-500 mt-2">Try changing your search or category filters</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ShopPage;
