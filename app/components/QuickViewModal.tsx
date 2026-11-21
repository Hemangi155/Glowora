"use client";

import React, { useState } from "react";
import { useShop } from "../context/ShopContext";
import { CloseIcon, HeartIcon, BagIcon, StarIcon, CheckIcon } from "./Icons";
import SafeImage from "./SafeImage";

export default function QuickViewModal() {
  const {
    quickViewProduct,
    closeQuickView,
    addToCart,
    toggleWishlist,
    isInWishlist,
    formatPrice,
  } = useShop();

  const [activeImageIndex, setActiveImageIndex] = useState<0 | 1>(0);
  const [quantity, setQuantity] = useState(1);

  if (!quickViewProduct) return null;

  const images = [quickViewProduct.primaryImage, quickViewProduct.secondaryImage];
  const inWishlist = isInWishlist(quickViewProduct.id);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={closeQuickView}
      />

      <div className="relative min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-10">
        <div className="relative bg-[#FAF8F5] border border-[#E8E2D8] w-full max-w-4xl rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          <button
            onClick={closeQuickView}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-[#1F2421] transition-colors shadow-sm"
            aria-label="Close modal"
          >
            <CloseIcon className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image Gallery */}
            <div className="bg-[#F3EFEA] p-6 flex flex-col justify-between">
              <div className="aspect-[4/5] rounded-lg overflow-hidden bg-white/50 relative shadow-inner">
                <SafeImage
                  src={images[activeImageIndex]}
                  alt={quickViewProduct.name}
                  className="w-full h-full object-cover object-center transition-all duration-500"
                />
                {quickViewProduct.badges.length > 0 && (
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5 pointer-events-none">
                    {quickViewProduct.badges.map((b) => (
                      <span
                        key={b}
                        className="bg-[#1F2421]/90 backdrop-blur text-[#FAF8F5] text-[10px] uppercase font-semibold px-2.5 py-1 rounded tracking-wider shadow-sm"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3 mt-4 justify-center">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx as 0 | 1)}
                    className={`w-16 h-16 rounded-md overflow-hidden border-2 transition-all ${
                      activeImageIndex === idx
                        ? "border-[#536F5A] ring-2 ring-[#536F5A]/20"
                        : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <SafeImage src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="p-6 md:p-8 flex flex-col justify-between overflow-y-auto max-h-[85vh]">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs uppercase font-semibold text-[#536F5A] tracking-wider">
                    {quickViewProduct.category}
                  </span>
                  <span className="text-xs text-[#9EA6A0]">•</span>
                  <span className="text-xs text-[#6E7570] font-medium">
                    {quickViewProduct.volume}
                  </span>
                </div>

                <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-[#1F2421] leading-snug">
                  {quickViewProduct.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex text-[#C5A880]">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="w-3.5 h-3.5" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-[#1F2421]">
                    {quickViewProduct.rating}
                  </span>
                  <span className="text-xs text-[#6E7570]">
                    ({quickViewProduct.reviewCount} verified reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="mt-4 flex items-baseline gap-3">
                  <span className="text-2xl font-semibold text-[#1F2421]">
                    {formatPrice(quickViewProduct.price)}
                  </span>
                  <span className="text-xs text-[#536F5A] font-medium bg-[#EBF2EC] px-2 py-0.5 rounded">
                    In Stock & Ready to Dispatch
                  </span>
                </div>

                <p className="text-sm text-[#3D4440] leading-relaxed mt-4">
                  {quickViewProduct.description}
                </p>

                {/* Active Actives Box */}
                <div className="mt-5 p-3.5 bg-[#F3EFEA] rounded-lg border border-[#E8E2D8]">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#1F2421] block mb-1">
                    Signature Bio-Actives:
                  </span>
                  <p className="text-xs text-[#536F5A] font-medium leading-relaxed">
                    {quickViewProduct.activeIngredients}
                  </p>
                </div>

                {/* Efficacy Points */}
                <div className="mt-4 space-y-1.5">
                  {quickViewProduct.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#3D4440]">
                      <CheckIcon className="w-4 h-4 text-[#536F5A] flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Ritual Usage */}
                <div className="mt-4 pt-4 border-t border-[#E8E2D8]">
                  <span className="text-xs uppercase font-semibold text-[#1F2421] tracking-wider block mb-1">
                    The Ritual:
                  </span>
                  <p className="text-xs text-[#6E7570] italic">
                    &ldquo;{quickViewProduct.ritualHowTo}&rdquo;
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-6 pt-5 border-t border-[#E8E2D8] flex items-center gap-3">
                {/* Quantity */}
                <div className="inline-flex items-center border border-[#D9D2C6] rounded bg-[#FAF8F5]">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-xs text-[#1F2421] hover:bg-[#EBE5DC]"
                  >
                    -
                  </button>
                  <span className="px-3 py-2 text-xs font-semibold text-[#1F2421]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-xs text-[#1F2421] hover:bg-[#EBE5DC]"
                  >
                    +
                  </button>
                </div>

                {/* Add to Bag */}
                <button
                  onClick={() => {
                    addToCart(quickViewProduct, quantity);
                    closeQuickView();
                  }}
                  className="flex-1 py-3 bg-[#1F2421] text-[#FAF8F5] text-xs font-medium uppercase tracking-[0.2em] hover:bg-[#3D4440] transition-colors rounded flex items-center justify-center gap-2"
                >
                  <BagIcon className="w-4 h-4" />
                  <span>Add to Bag • {formatPrice(quickViewProduct.price * quantity)}</span>
                </button>

                {/* Wishlist toggle */}
                <button
                  onClick={() => toggleWishlist(quickViewProduct.id)}
                  className={`p-3 border rounded transition-colors ${
                    inWishlist
                      ? "border-[#536F5A] text-[#536F5A] bg-[#EBF2EC]"
                      : "border-[#D9D2C6] text-[#1F2421] hover:border-[#536F5A]"
                  }`}
                  aria-label="Toggle wishlist"
                >
                  <HeartIcon className="w-5 h-5" filled={inWishlist} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
