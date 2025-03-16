
import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "veg-1",
    name: "Fresh Broccoli",
    price: 2.99,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200' fill='none'%3E%3Ccircle cx='100' cy='100' r='80' fill='%23689F38'/%3E%3Cpath d='M100 60C130 60 140 100 120 120C100 140 70 120 70 90C70 70 85 60 100 60Z' fill='%2333691E'/%3E%3C/svg%3E",
    category: "vegetables",
    description: "Fresh and nutritious broccoli florets, perfect for steaming or stir-fry.",
    unit: "bunch",
    inStock: true,
    isPopular: true
  },
  {
    id: "veg-2",
    name: "Organic Carrots",
    price: 1.49,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200' fill='none'%3E%3Cpath d='M90 40L110 50L130 80L120 150L100 160L80 150L70 80L90 40Z' fill='%23FF7043'/%3E%3Cpath d='M90 40C90 40 85 30 100 25C115 20 110 40 110 40' fill='%234CAF50'/%3E%3C/svg%3E",
    category: "vegetables",
    description: "Sweet and crunchy organic carrots, locally sourced.",
    unit: "lb",
    inStock: true,
    discount: 10
  },
  {
    id: "fruit-1",
    name: "Red Apples",
    price: 3.99,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200' fill='none'%3E%3Ccircle cx='100' cy='110' r='70' fill='%23E53935'/%3E%3Cpath d='M100 50C100 50 90 30 100 25C110 20 120 35 120 35' fill='%234CAF50'/%3E%3C/svg%3E",
    category: "fruits",
    description: "Crisp and sweet red apples, perfect for snacking or baking.",
    unit: "lb",
    inStock: true,
    isPopular: true
  },
  {
    id: "fruit-2",
    name: "Bananas",
    price: 0.99,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200' fill='none'%3E%3Cpath d='M70 60C70 60 60 70 60 100C60 130 70 160 90 170C110 180 130 170 140 140C150 110 150 80 140 70C130 60 110 70 100 90C90 110 80 60 70 60Z' fill='%23FFEB3B'/%3E%3C/svg%3E",
    category: "fruits",
    description: "Ripe and ready-to-eat bananas, naturally sweet and nutritious.",
    unit: "bunch",
    inStock: true
  },
  {
    id: "dairy-1",
    name: "Fresh Milk",
    price: 2.49,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200' fill='none'%3E%3Crect x='60' y='50' width='80' height='120' fill='%23F5F5F5'/%3E%3Cpath d='M60 50H140V70H60V50Z' fill='%2342A5F5'/%3E%3C/svg%3E",
    category: "dairy",
    description: "Fresh whole milk from grass-fed cows, pasteurized and homogenized.",
    unit: "gallon",
    inStock: true,
    isPopular: true
  },
  {
    id: "bakery-1",
    name: "Whole Grain Bread",
    price: 3.49,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200' fill='none'%3E%3Crect x='40' y='70' width='120' height='60' rx='10' fill='%23A1887F'/%3E%3Cpath d='M50 70C50 70 60 50 100 50C140 50 150 70 150 70' fill='%238D6E63'/%3E%3C/svg%3E",
    category: "bakery",
    description: "Freshly baked whole grain bread, perfect for sandwiches and toast.",
    unit: "loaf",
    inStock: true
  },
  {
    id: "meat-1",
    name: "Chicken Breast",
    price: 5.99,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200' fill='none'%3E%3Cpath d='M60 80C60 80 70 60 100 60C130 60 140 80 140 100C140 120 130 140 100 140C70 140 60 120 60 100V80Z' fill='%23FFCCBC'/%3E%3C/svg%3E",
    category: "meat",
    description: "Boneless, skinless chicken breast fillets, perfect for grilling or baking.",
    unit: "lb",
    inStock: true,
    discount: 15
  },
  {
    id: "organic-1",
    name: "Organic Spinach",
    price: 3.99,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200' fill='none'%3E%3Cpath d='M50 100C50 100 70 60 100 60C130 60 150 100 150 100C150 100 130 140 100 140C70 140 50 100 50 100Z' fill='%2343A047'/%3E%3C/svg%3E",
    category: "organic",
    description: "Organic baby spinach leaves, washed and ready to eat.",
    unit: "bunch",
    inStock: true,
    isPopular: true
  }
];

export const getProductsByCategory = (category: string) => {
  if (category === "all") {
    return products;
  }
  return products.filter(product => product.category === category);
};

export const getPopularProducts = () => {
  return products.filter(product => product.isPopular);
};

export const getDiscountedProducts = () => {
  return products.filter(product => product.discount && product.discount > 0);
};
