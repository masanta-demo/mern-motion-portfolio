
import React, { createContext, useContext, useReducer, useEffect } from "react";
import { Product, CartItem } from "@/types/product";
import { toast } from "sonner";

interface ProductState {
  cart: CartItem[];
  totalItems: number;
  totalPrice: number;
}

type ProductAction =
  | { type: "ADD_TO_CART"; payload: { product: Product; quantity: number } }
  | { type: "REMOVE_FROM_CART"; payload: { productId: string } }
  | { type: "UPDATE_QUANTITY"; payload: { productId: string; quantity: number } }
  | { type: "CLEAR_CART" };

const initialState: ProductState = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
};

const calculateTotals = (cart: CartItem[]): { totalItems: number; totalPrice: number } => {
  return cart.reduce(
    (acc, item) => {
      const itemPrice = item.product.discount
        ? item.product.price * (1 - item.product.discount / 100)
        : item.product.price;
      
      return {
        totalItems: acc.totalItems + item.quantity,
        totalPrice: acc.totalPrice + itemPrice * item.quantity,
      };
    },
    { totalItems: 0, totalPrice: 0 }
  );
};

const productReducer = (state: ProductState, action: ProductAction): ProductState => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { product, quantity } = action.payload;
      const existingItemIndex = state.cart.findIndex(
        (item) => item.product.id === product.id
      );

      let newCart;
      if (existingItemIndex > -1) {
        newCart = [...state.cart];
        newCart[existingItemIndex].quantity += quantity;
      } else {
        newCart = [...state.cart, { product, quantity }];
      }

      const { totalItems, totalPrice } = calculateTotals(newCart);
      return { ...state, cart: newCart, totalItems, totalPrice };
    }

    case "REMOVE_FROM_CART": {
      const newCart = state.cart.filter(
        (item) => item.product.id !== action.payload.productId
      );
      const { totalItems, totalPrice } = calculateTotals(newCart);
      return { ...state, cart: newCart, totalItems, totalPrice };
    }

    case "UPDATE_QUANTITY": {
      const { productId, quantity } = action.payload;
      const newCart = state.cart.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      );
      const { totalItems, totalPrice } = calculateTotals(newCart);
      return { ...state, cart: newCart, totalItems, totalPrice };
    }

    case "CLEAR_CART":
      return initialState;

    default:
      return state;
  }
};

interface ProductContextProps {
  state: ProductState;
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

const ProductContext = createContext<ProductContextProps | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart) as CartItem[];
      parsedCart.forEach(item => {
        dispatch({
          type: "ADD_TO_CART",
          payload: { product: item.product, quantity: item.quantity },
        });
      });
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  const addToCart = (product: Product, quantity: number) => {
    dispatch({ type: "ADD_TO_CART", payload: { product, quantity } });
    toast.success(`Added ${product.name} to cart`);
  };

  const removeFromCart = (productId: string) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { productId } });
    toast.info("Item removed from cart");
  };

  const updateQuantity = (productId: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { productId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
    toast.info("Cart cleared");
  };

  return (
    <ProductContext.Provider
      value={{ state, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = (): ProductContextProps => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
  return context;
};
