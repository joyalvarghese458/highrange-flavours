"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { Product, ProductVariant } from "@/lib/products";

export type CartItem = {
  productId: string;
  name: string;
  localName: string;
  image: string;
  weight: string;
  unitPrice: number;
  quantity: number;
};

type AddToCartInput = {
  product: Product;
  variant: ProductVariant;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  addItem: (input: AddToCartInput) => void;
  setItemQuantity: (productId: string, weight: string, quantity: number) => void;
  removeItem: (productId: string, weight: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);
const STORAGE_KEY = "highrange-flavours-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const saved = window.localStorage.getItem(STORAGE_KEY);
        setItems(saved ? (JSON.parse(saved) as CartItem[]) : []);
      } catch {
        setItems([]);
      } finally {
        setHydrated(true);
      }
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (hydrated) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }
  }, [hydrated, items]);

  const value = useMemo<CartContextValue>(() => {
    const addItem = ({ product, variant, quantity }: AddToCartInput) => {
      setItems((current) => {
        const existing = current.find(
          (item) =>
            item.productId === product.id && item.weight === variant.weight,
        );

        if (existing) {
          return current.map((item) =>
            item.productId === product.id && item.weight === variant.weight
              ? { ...item, quantity: item.quantity + quantity }
              : item,
          );
        }

        return [
          ...current,
          {
            productId: product.id,
            name: product.name,
            localName: product.localName,
            image: product.image,
            weight: variant.weight,
            unitPrice: variant.price,
            quantity,
          },
        ];
      });
    };

    const setItemQuantity = (
      productId: string,
      weight: string,
      quantity: number,
    ) => {
      setItems((current) =>
        quantity < 1
          ? current.filter(
              (item) => item.productId !== productId || item.weight !== weight,
            )
          : current.map((item) =>
              item.productId === productId && item.weight === weight
                ? { ...item, quantity }
                : item,
            ),
      );
    };

    const removeItem = (productId: string, weight: string) => {
      setItems((current) =>
        current.filter(
          (item) => item.productId !== productId || item.weight !== weight,
        ),
      );
    };

    const subtotal = items.reduce(
      (total, item) => total + item.unitPrice * item.quantity,
      0,
    );

    return {
      items,
      itemCount: items.reduce((total, item) => total + item.quantity, 0),
      subtotal,
      addItem,
      setItemQuantity,
      removeItem,
      clearCart: () => setItems([]),
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }

  return context;
}
