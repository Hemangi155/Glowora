"use client";

import React from "react";
import { useShop } from "../context/ShopContext";
import { PRODUCTS } from "../data/products";
import { CloseIcon, TrashIcon, BagIcon, HeartIcon } from "./Icons";
import SafeImage from "./SafeImage";

export default function WishlistDrawer() {
  const {
    wishlist,
    isWishlistOpen,
    closeWishlist,
    toggleWishlist,
    addToCart,
    formatPrice,
  } = useShop();

  if (!isWishlistOpen) return null;

  const wishlistProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  const handleMoveAllToBag = () => {
    wishlistProducts.forEach((p) => addToCart(p));
    closeWishlist();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={closeWishlist}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF8F5] border-l border-[#E8E2D8] shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="px-6 py-5 border-b border-[#E8E2D8] flex items-center justify-between bg-[#FDFBF8]">
            <div className="flex items-center gap-2">
              <HeartIcon className="w-5 h-5 text-[#536F5A]" filled />
              <h2 className="font-editorial text-2xl font-light tracking-wide text-[#1F2421]">
                Your Saved Rituals
              </h2>
            </div>
            <button
              onClick={closeWishlist}
              className="p-2 rounded-full hover:bg-[#EBE5DC]/60 transition-colors text-[#1F2421]"
              aria-label="Close wishlist"
            >
              <CloseIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto px-6 py-5 divide-y divide-[#E8E2D8]/80">
            {wishlistProducts.length === 0 ? (
              <div className="py-20 text-center flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#F3EFEA] flex items-center justify-center text-[#6E7570] mb-4">
                  <HeartIcon className="w-7 h-7" />
                </div>
                <h3 className="font-editorial text-xl font-normal text-[#1F2421] mb-2">
                  No saved formulas yet
                </h3>
                <p className="text-sm text-[#6E7570] max-w-xs mb-6">
                  Save your desired serums, elixirs, and creams by clicking the heart icon on any product.
                </p>
                <button
                  onClick={closeWishlist}
                  className="px-6 py-3 bg-[#1F2421] text-[#FAF8F5] text-xs uppercase tracking-widest hover:bg-[#3D4440] transition-colors"
                >
                  Explore Skincare
                </button>
              </div>
            ) : (
              wishlistProducts.map((product) => (
                <div key={product.id} className="py-4 flex gap-4 items-center">
                  <SafeImage src={product.primaryImage} alt={product.name} className="w-20 h-24 object-cover rounded bg-[#EBE5DC] flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] uppercase font-semibold text-[#536F5A] tracking-wider block">
                      {product.category}
                    </span>
                    <h4 className="text-sm font-medium text-[#1F2421] truncate">
                      {product.name}
                    </h4>
                    <p className="text-xs text-[#6E7570] mt-0.5">{product.volume}</p>
                    <span className="text-xs font-semibold text-[#1F2421] mt-1 block">
                      {formatPrice(product.price)}
                    </span>

                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => {
                          addToCart(product);
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1F2421] text-[#FAF8F5] text-[11px] uppercase tracking-wider rounded hover:bg-[#3D4440] transition-colors"
                      >
                        <BagIcon className="w-3.5 h-3.5" />
                        <span>Move to Bag</span>
                      </button>
                      <button
                        onClick={() => toggleWishlist(product.id)}
                        className="text-xs text-[#9EA6A0] hover:text-[#C5A880] transition-colors p-1"
                        title="Remove"
                      >
                        <TrashIcon className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {wishlistProducts.length > 0 && (
            <div className="p-6 border-t border-[#E8E2D8] bg-[#FDFBF8]">
              <button
                onClick={handleMoveAllToBag}
                className="w-full py-3.5 bg-[#536F5A] text-[#FAF8F5] text-xs font-medium uppercase tracking-[0.2em] hover:bg-[#465E4B] transition-colors flex items-center justify-center gap-2"
              >
                <BagIcon className="w-4 h-4" />
                <span>Move All to Bag ({wishlistProducts.length})</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


