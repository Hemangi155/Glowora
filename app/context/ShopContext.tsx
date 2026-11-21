"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, PRODUCTS } from "../data/products";

export interface CartItem {
  product: Product;
  quantity: number;
}

export type Currency = "USD" | "EUR" | "GBP";

interface ShopContextType {
  // Cart
  cart: CartItem[];
  cartCount: number;
  cartTotal: number;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  freeShippingThreshold: number;
  freeShippingProgress: number;

  // Wishlist
  wishlist: string[];
  wishlistCount: number;
  isWishlistOpen: boolean;
  openWishlist: () => void;
  closeWishlist: () => void;
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;

  // Quick View Modal
  quickViewProduct: Product | null;
  openQuickView: (product: Product) => void;
  closeQuickView: () => void;

  // Search Modal
  isSearchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchResults: Product[];

  // Account Modal
  isAccountOpen: boolean;
  openAccount: () => void;
  closeAccount: () => void;

  // Currency
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatPrice: (priceInUSD: number) => string;

  // Toast
  toastMessage: string | null;
  showToast: (msg: string) => void;
  hideToast: () => void;

  // Category filter state for jumping to section
  activeCategoryFilter: string;
  setActiveCategoryFilter: (cat: string) => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

const CURRENCY_RATES: Record<Currency, { symbol: string; rate: number }> = {
  USD: { symbol: "$", rate: 1.0 },
  EUR: { symbol: "€", rate: 0.92 },
  GBP: { symbol: "£", rate: 0.79 },
};

export function ShopProvider({ children }: { children: React.ReactNode }) {
  // Initial cart with a curated starter item so the cart isn't empty on first glance!
  const [cart, setCart] = useState<CartItem[]>([
    { product: PRODUCTS[0], quantity: 1 }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [wishlist, setWishlist] = useState<string[]>([PRODUCTS[1].id]);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [currency, setCurrency] = useState<Currency>("USD");
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState("All");

  const freeShippingThreshold = currency === "USD" ? 100 : currency === "EUR" ? 95 : 80;

  // Derived cart info
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const rawSubtotalUSD = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );
  const cartTotal = rawSubtotalUSD * CURRENCY_RATES[currency].rate;
  const freeShippingProgress = Math.min(
    100,
    Math.round((cartTotal / freeShippingThreshold) * 100)
  );

  const wishlistCount = wishlist.length;

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  const hideToast = () => {
    setToastMessage(null);
  };

  useEffect(() => {
    if (!toastMessage) return;
    const timer = setTimeout(() => {
      setToastMessage(null);
    }, 3800);
    return () => clearTimeout(timer);
  }, [toastMessage]);

  const addToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`Added ${product.name} to your bag.`);
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    const item = cart.find((i) => i.product.id === productId);
    setCart((prev) => prev.filter((i) => i.product.id !== productId));
    if (item) {
      showToast(`Removed ${item.product.name} from your bag.`);
    }
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      const prod = PRODUCTS.find((p) => p.id === productId);
      if (exists) {
        showToast(prod ? `Removed ${prod.name} from your wishlist.` : "Removed from wishlist.");
        return prev.filter((id) => id !== productId);
      } else {
        showToast(prod ? `Saved ${prod.name} to your wishlist.` : "Saved to wishlist.");
        return [...prev, productId];
      }
    });
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  const formatPrice = (priceInUSD: number) => {
    const { symbol, rate } = CURRENCY_RATES[currency];
    const converted = Math.round(priceInUSD * rate);
    return `${symbol}${converted}`;
  };

  const searchResults = searchQuery.trim() === ""
    ? []
    : PRODUCTS.filter((p) => {
        const q = searchQuery.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.activeIngredients.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.skinType.toLowerCase().includes(q)
        );
      });

  return (
    <ShopContext.Provider
      value={{
        cart,
        cartCount,
        cartTotal,
        isCartOpen,
        openCart: () => setIsCartOpen(true),
        closeCart: () => setIsCartOpen(false),
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        freeShippingThreshold,
        freeShippingProgress,

        wishlist,
        wishlistCount,
        isWishlistOpen,
        openWishlist: () => setIsWishlistOpen(true),
        closeWishlist: () => setIsWishlistOpen(false),
        toggleWishlist,
        isInWishlist,

        quickViewProduct,
        openQuickView: (product) => setQuickViewProduct(product),
        closeQuickView: () => setQuickViewProduct(null),

        isSearchOpen,
        openSearch: () => setIsSearchOpen(true),
        closeSearch: () => {
          setIsSearchOpen(false);
          setSearchQuery("");
        },
        searchQuery,
        setSearchQuery,
        searchResults,

        isAccountOpen,
        openAccount: () => setIsAccountOpen(true),
        closeAccount: () => setIsAccountOpen(false),

        currency,
        setCurrency,
        formatPrice,

        toastMessage,
        showToast,
        hideToast,

        activeCategoryFilter,
        setActiveCategoryFilter,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShop must be used within a ShopProvider");
  }
  return context;
}
