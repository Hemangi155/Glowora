"use client";

import React from "react";
import { PRODUCTS } from "../data/products";
import { useShop } from "../context/ShopContext";
import { BagIcon, HeartIcon, EyeIcon, SparklesIcon } from "./Icons";
import SafeImage from "./SafeImage";

export default function NewArrivals() {
  const { addToCart, toggleWishlist, isInWishlist, openQuickView, formatPrice } = useShop();

  const newArrivals = PRODUCTS.filter((p) => p.isNewArrival);

  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E8E2D8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#536F5A] block mb-2">
              Fresh From Our Grasse Laboratory
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-light text-[#1F2421] tracking-tight">
              New Harvest Arrivals
            </h2>
            <p className="text-sm text-[#6E7570] font-light mt-2 max-w-lg">
              The latest micro-batch formulations, blending seasonal botanical harvests with revolutionary cellular delivery systems.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <span className="inline-flex items-center gap-1.5 text-xs text-[#536F5A] font-semibold uppercase tracking-wider bg-[#EBF2EC] px-3.5 py-1.5 rounded-full border border-[#CBDACC]">
              <SparklesIcon className="w-3.5 h-3.5 text-[#C5A880]" />
              Limited First Pressing
            </span>
          </div>
        </div>

        {/* Feature Split Spotlight Banner */}
        <div className="mb-14 bg-[#F3EFEA] rounded-2xl border border-[#E8E2D8] overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-sm">
          <div className="lg:col-span-6 relative aspect-[4/3] lg:aspect-auto">
            <SafeImage
              src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1200&auto=format&fit=crop"
              alt="Bakuchiol Midnight Renewal Spotlight"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute top-4 left-4 bg-[#1F2421] text-[#FAF8F5] text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded">
              Formulation Spotlight
            </div>
          </div>

          <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase font-bold text-[#536F5A] tracking-wider block mb-1">
                Zero Irritation Phyto-Retinol
              </span>
              <h3 className="font-editorial text-3xl sm:text-4xl font-light text-[#1F2421] leading-snug">
                Bakuchiol Midnight Renewal Elixir
              </h3>
              <p className="text-sm text-[#3D4440] font-light leading-relaxed mt-4">
                Infused with rare Ayurvedic babchi seeds, Moroccan blue tansy, and cold-pressed squalane. Clinically delivers equivalent cellular turnover to 0.5% retinol while deeply soothing reactive skin barriers overnight.
              </p>

              <div className="mt-6 flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1 bg-white border border-[#D9D2C6] rounded text-[#3D4440]">
                  ✦ 2% Certified Pure Bakuchiol
                </span>
                <span className="px-3 py-1 bg-white border border-[#D9D2C6] rounded text-[#3D4440]">
                  ✦ Safe for Sun & Pregnancy
                </span>
                <span className="px-3 py-1 bg-white border border-[#D9D2C6] rounded text-[#3D4440]">
                  ✦ Azure Floral Aroma
                </span>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-[#E8E2D8] flex items-center justify-between">
              <div>
                <span className="text-xs text-[#6E7570] block">Initial Release</span>
                <span className="text-xl font-semibold text-[#1F2421]">{formatPrice(88)}</span>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => openQuickView(PRODUCTS[4])}
                  className="px-4 py-2.5 border border-[#1F2421] text-[#1F2421] text-xs uppercase tracking-wider hover:bg-[#FAF8F5] transition-colors"
                >
                  Inspect
                </button>
                <button
                  onClick={() => addToCart(PRODUCTS[4])}
                  className="px-6 py-2.5 bg-[#1F2421] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider hover:bg-[#3D4440] transition-colors flex items-center gap-2"
                >
                  <BagIcon className="w-4 h-4" />
                  <span>Claim Bottle</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* New Arrivals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {newArrivals.map((product) => {
            const inWishlist = isInWishlist(product.id);

            return (
              <div
                key={product.id}
                className="group bg-[#FDFBF8] rounded-xl overflow-hidden border border-[#E8E2D8] hover:border-[#536F5A] transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
              >
                <div className="relative aspect-[4/5] bg-[#EBE5DC] overflow-hidden">
                  <SafeImage
                    src={product.primaryImage}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#536F5A] text-white text-[9px] uppercase font-bold tracking-widest px-2.5 py-1 rounded shadow-sm">
                      New Release
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 flex flex-col gap-1.5">
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className={`p-2 rounded-full backdrop-blur transition-all ${
                        inWishlist
                          ? "bg-[#536F5A] text-white"
                          : "bg-white/80 text-[#1F2421] hover:bg-white"
                      }`}
                      aria-label="Wishlist"
                    >
                      <HeartIcon className="w-4 h-4" filled={inWishlist} />
                    </button>
                    <button
                      onClick={() => openQuickView(product)}
                      className="p-2 rounded-full bg-white/80 backdrop-blur text-[#1F2421] hover:bg-white"
                      aria-label="Quick View"
                    >
                      <EyeIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#536F5A] tracking-wider block mb-1">
                      {product.category}
                    </span>
                    <h4
                      onClick={() => openQuickView(product)}
                      className="font-editorial text-lg text-[#1F2421] group-hover:text-[#536F5A] transition-colors cursor-pointer line-clamp-1"
                    >
                      {product.name}
                    </h4>
                    <p className="text-xs text-[#6E7570] line-clamp-1 mt-1">
                      {product.tagline}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#E8E2D8] flex items-center justify-between">
                    <span className="text-base font-semibold text-[#1F2421]">
                      {formatPrice(product.price)}
                    </span>
                    <button
                      onClick={() => addToCart(product)}
                      className="px-3.5 py-1.5 bg-[#1F2421] text-[#FAF8F5] text-[11px] font-medium uppercase tracking-wider hover:bg-[#3D4440] transition-colors rounded"
                    >
                      Add
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
