
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: ProductCategory;
  description: string;
  unit: string;
  inStock: boolean;
  discount?: number;
  isPopular?: boolean;
}

export type ProductCategory = 
  | "vegetables" 
  | "fruits" 
  | "dairy" 
  | "bakery" 
  | "meat" 
  | "organic";

export interface CartItem {
  product: Product;
  quantity: number;
}
