"use client";

import React, { useState } from "react";
import { PRODUCTS, Product } from "../data/products";
import { useShop } from "../context/ShopContext";
import {
  BagIcon,
  HeartIcon,
  StarIcon,
  EyeIcon,
} from "./Icons";
import SafeImage from "./SafeImage";

export default function Bestsellers() {
  const {
    addToCart,
    toggleWishlist,
    isInWishlist,
    openQuickView,
    formatPrice,
    activeCategoryFilter,
    setActiveCategoryFilter,
  } = useShop();

  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);

  const filterTabs = [
    { label: "All Formulas", value: "All" },
    { label: "Cleansers", value: "Cleansers" },
    { label: "Serums", value: "Serums" },
    { label: "Moisturizers", value: "Moisturizers" },
    { label: "Sunscreens", value: "Sunscreens" },
  ];

  const filteredProducts =
    activeCategoryFilter === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategoryFilter);

  return (
    <section id="shop" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#536F5A] block mb-2">
              The Gold Standard
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-light text-[#1F2421] tracking-tight">
              Bestselling Formulas
            </h2>
            <p className="text-sm text-[#6E7570] font-light mt-2 max-w-lg">
              Clinically verified, peer-reviewed botanical concentrates trusted by over 24,000 discerning clients globally.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pt-6 md:pt-0 scrollbar-none">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveCategoryFilter(tab.value)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-widest font-medium transition-all whitespace-nowrap ${
                  activeCategoryFilter === tab.value
                    ? "bg-[#1F2421] text-[#FAF8F5] shadow-sm"
                    : "bg-[#F3EFEA] text-[#6E7570] hover:bg-[#EBE5DC] hover:text-[#1F2421]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product: Product) => {
            const inWishlist = isInWishlist(product.id);
            const isHovered = hoveredProductId === product.id;

            return (
              <div
                key={product.id}
                onMouseEnter={() => setHoveredProductId(product.id)}
                onMouseLeave={() => setHoveredProductId(null)}
                className="group bg-[#FDFBF8] rounded-xl overflow-hidden border border-[#E8E2D8] hover:border-[#536F5A]/60 transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
              >
                {/* Image Box */}
                <div className="relative aspect-[4/5] bg-[#EBE5DC] overflow-hidden">
                  {/* Primary & Secondary Hover Images */}
                  <SafeImage
                    src={product.primaryImage}
                    alt={product.name}
                    className={`w-full h-full object-cover object-center absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      isHovered ? "opacity-0 scale-105" : "opacity-100 scale-100"
                    }`}
                  />
                  <SafeImage
                    src={product.secondaryImage}
                    alt={`${product.name} texture detail`}
                    className={`w-full h-full object-cover object-center absolute inset-0 transition-all duration-700 ease-in-out ${
                      isHovered ? "opacity-100 scale-105" : "opacity-0 scale-100"
                    }`}
                  />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
                    {product.badges.slice(0, 2).map((b) => (
                      <span
                        key={b}
                        className="bg-[#1F2421]/90 backdrop-blur text-[#FAF8F5] text-[9px] uppercase font-bold px-2 py-0.5 rounded tracking-wider shadow-sm"
                      >
                        {b}
                      </span>
                    ))}
                  </div>

                  {/* Top Right Action Icons */}
                  <div className="absolute top-3 right-3 flex flex-col gap-1.5 z-10">
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className={`p-2 rounded-full backdrop-blur transition-all duration-200 shadow-sm ${
                        inWishlist
                          ? "bg-[#536F5A] text-white"
                          : "bg-white/85 text-[#1F2421] hover:bg-white hover:text-[#536F5A]"
                      }`}
                      aria-label="Save to wishlist"
                      title={inWishlist ? "Saved" : "Save to wishlist"}
                    >
                      <HeartIcon className="w-4 h-4" filled={inWishlist} />
                    </button>

                    <button
                      onClick={() => openQuickView(product)}
                      className="p-2 rounded-full bg-white/85 backdrop-blur text-[#1F2421] hover:bg-white hover:text-[#536F5A] transition-all duration-200 shadow-sm opacity-90 group-hover:opacity-100"
                      aria-label="Quick inspect"
                      title="Quick view"
                    >
                      <EyeIcon className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Bottom Image Subtitle Bar */}
                  <div className="absolute bottom-2 left-2 right-2 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] text-[#3D4440] font-medium truncate pointer-events-none">
                    ✨ Texture: {product.texture}
                  </div>
                </div>

                {/* Card Information */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category & Volume */}
                    <div className="flex items-center justify-between text-[11px] text-[#6E7570] mb-1.5">
                      <span className="uppercase font-semibold text-[#536F5A] tracking-wider">
                        {product.category}
                      </span>
                      <span>{product.volume}</span>
                    </div>

                    {/* Product Name */}
                    <h3
                      onClick={() => openQuickView(product)}
                      className="font-editorial text-lg font-normal text-[#1F2421] group-hover:text-[#536F5A] transition-colors cursor-pointer line-clamp-1"
                    >
                      {product.name}
                    </h3>

                    {/* Active actives summary */}
                    <p className="text-xs text-[#6E7570] line-clamp-1 mt-1">
                      {product.tagline}
                    </p>

                    {/* Star Rating */}
                    <div className="flex items-center gap-1.5 mt-2.5">
                      <div className="flex text-[#C5A880]">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon key={i} className="w-3 h-3" />
                        ))}
                      </div>
                      <span className="text-xs font-semibold text-[#1F2421]">
                        {product.rating}
                      </span>
                      <span className="text-[11px] text-[#9EA6A0]">
                        ({product.reviewCount})
                      </span>
                    </div>
                  </div>

                  {/* Price & Add to Bag CTA */}
                  <div className="pt-4 mt-4 border-t border-[#E8E2D8] flex items-center justify-between gap-3">
                    <span className="text-base font-semibold text-[#1F2421]">
                      {formatPrice(product.price)}
                    </span>

                    <button
                      onClick={() => addToCart(product)}
                      className="px-4 py-2 bg-[#1F2421] text-[#FAF8F5] text-[11px] font-medium uppercase tracking-[0.18em] hover:bg-[#3D4440] transition-colors rounded flex items-center gap-1.5 shadow-sm active:scale-95"
                    >
                      <BagIcon className="w-3.5 h-3.5" />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
