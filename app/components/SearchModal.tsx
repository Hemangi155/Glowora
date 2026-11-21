"use client";

import React, { useEffect, useRef } from "react";
import { useShop } from "../context/ShopContext";
import { SearchIcon, CloseIcon, EyeIcon } from "./Icons";
import SafeImage from "./SafeImage";
import { Product } from "../data/products";

export default function SearchModal() {
  const {
    isSearchOpen,
    closeSearch,
    searchQuery,
    setSearchQuery,
    searchResults,
    addToCart,
    openQuickView,
    formatPrice,
  } = useShop();

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const popularTags = [
    "Vitamin C",
    "Ceramides",
    "Sunscreens",
    "Cleansers",
    "Bakuchiol",
    "Hyaluronic Acid",
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={closeSearch}
      />

      <div className="relative min-h-screen flex items-start justify-center pt-16 sm:pt-24 px-4 pb-12">
        <div className="relative bg-[#FAF8F5] border border-[#E8E2D8] w-full max-w-2xl rounded-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          {/* Search Header */}
          <div className="p-4 sm:p-6 border-b border-[#E8E2D8] flex items-center gap-3 bg-[#FDFBF8]">
            <SearchIcon className="w-6 h-6 text-[#6E7570] flex-shrink-0" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search botanical serums, cleansers, ingredients, skin concerns..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent border-none text-[#1F2421] text-base placeholder-[#9EA6A0] focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="text-xs uppercase text-[#9EA6A0] hover:text-[#1F2421] px-2 py-1"
              >
                Clear
              </button>
            )}
            <button
              onClick={closeSearch}
              className="p-1.5 rounded-full hover:bg-[#EBE5DC]/70 transition-colors text-[#1F2421]"
              aria-label="Close search"
            >
              <CloseIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Quick suggestions tags */}
          <div className="px-6 py-3 bg-[#F3EFEA] border-b border-[#E8E2D8] flex items-center gap-2 overflow-x-auto text-xs">
            <span className="text-[#6E7570] uppercase tracking-wider text-[11px] font-medium whitespace-nowrap">
              Trending:
            </span>
            {popularTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSearchQuery(tag)}
                className="px-2.5 py-1 rounded-full bg-[#FAF8F5] border border-[#D9D2C6] text-[#3D4440] hover:border-[#536F5A] hover:text-[#536F5A] transition-colors whitespace-nowrap text-xs"
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Search Results Area */}
          <div className="p-6 max-h-[60vh] overflow-y-auto">
            {searchQuery.trim() === "" ? (
              <div className="text-center py-10">
                <p className="font-editorial text-xl text-[#1F2421] mb-1">
                  Discover Your Targeted Glow
                </p>
                <p className="text-xs text-[#6E7570]">
                  Type a skin concern like &ldquo;Dullness&rdquo; or an active ingredient like &ldquo;Ceramides&rdquo;.
                </p>
              </div>
            ) : searchResults.length === 0 ? (
              <div className="text-center py-12">
                <p className="font-editorial text-lg text-[#1F2421] mb-2">
                  No formulas found matching &ldquo;{searchQuery}&rdquo;
                </p>
                <p className="text-xs text-[#6E7570]">
                  Try searching for Vitamin C, Mineral Sunscreen, Cleanser, or Barrier Cream.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-wider text-[#6E7570] mb-2 font-medium">
                  Found {searchResults.length} formula{searchResults.length > 1 ? "s" : ""}
                </p>
                {searchResults.map((product: Product) => (
                  <div
                    key={product.id}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-[#F3EFEA] transition-colors border border-transparent hover:border-[#E8E2D8]"
                  >
                    <SafeImage src={product.primaryImage} alt={product.name} className="w-16 h-16 object-cover rounded bg-[#EBE5DC] flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] uppercase font-semibold text-[#536F5A] tracking-wider">
                          {product.category}
                        </span>
                        <span className="text-xs text-[#9EA6A0]">• {product.volume}</span>
                      </div>
                      <h4 className="text-sm font-medium text-[#1F2421] truncate">
                        {product.name}
                      </h4>
                      <p className="text-xs text-[#6E7570] truncate mt-0.5">
                        {product.tagline}
                      </p>
                      <span className="text-xs font-semibold text-[#1F2421] mt-1 block">
                        {formatPrice(product.price)}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          closeSearch();
                          openQuickView(product);
                        }}
                        className="p-2 border border-[#D9D2C6] rounded hover:bg-[#FAF8F5] text-[#1F2421] transition-colors"
                        title="Quick View"
                      >
                        <EyeIcon className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          addToCart(product);
                          closeSearch();
                        }}
                        className="px-3 py-2 bg-[#1F2421] text-[#FAF8F5] rounded text-xs uppercase tracking-wider hover:bg-[#3D4440] transition-colors whitespace-nowrap"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


