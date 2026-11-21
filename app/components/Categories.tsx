"use client";

import React from "react";
import { CATEGORIES_DATA } from "../data/products";
import { useShop } from "../context/ShopContext";
import { ArrowRight } from "./Icons";
import SafeImage from "./SafeImage";

export default function Categories() {
  const { setActiveCategoryFilter } = useShop();

  const handleSelectCategory = (categoryName: string) => {
    setActiveCategoryFilter(categoryName);
    const shopEl = document.getElementById("shop");
    if (shopEl) {
      shopEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="categories" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#536F5A] block mb-3">
            Targeted Bio-Formulations
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-light text-[#1F2421] tracking-tight">
            Shop By Category
          </h2>
          <div className="w-12 h-px bg-[#C5A880] mx-auto my-4" />
          <p className="text-sm sm:text-base text-[#6E7570] font-light leading-relaxed">
            Every step is thoughtfully calibrated to work in synergy with your skin&apos;s natural circadian rhythm and cellular repair cycles.
          </p>
        </div>

        {/* 4 Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {CATEGORIES_DATA.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleSelectCategory(cat.name)}
              className="group cursor-pointer bg-[#FDFBF8] rounded-xl overflow-hidden border border-[#E8E2D8] hover:border-[#536F5A] transition-all duration-500 hover:shadow-xl flex flex-col justify-between"
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#EBE5DC]">
                <SafeImage
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="bg-[#FAF8F5]/90 backdrop-blur text-[#1F2421] text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded shadow-sm">
                    {cat.productCount} Formulas
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#DFD3C3] block mb-1">
                    {cat.tagline}
                  </span>
                  <h3 className="font-editorial text-2xl font-light tracking-wide text-white">
                    {cat.name}
                  </h3>
                </div>
              </div>

              {/* Card Footer Content */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-[#FDFBF8]">
                <p className="text-xs text-[#6E7570] leading-relaxed line-clamp-2 mb-4">
                  {cat.description}
                </p>

                <div className="pt-3 border-t border-[#E8E2D8] flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#1F2421] group-hover:text-[#536F5A] transition-colors">
                  <span>Explore {cat.name}</span>
                  <span className="p-1 rounded-full bg-[#FAF8F5] group-hover:bg-[#EBF2EC] text-[#536F5A] transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
