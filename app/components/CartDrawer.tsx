"use client";

import React, { useState } from "react";
import { useShop } from "../context/ShopContext";
import { CloseIcon, TrashIcon, ArrowRight, CheckIcon, SparklesIcon } from "./Icons";
import SafeImage from "./SafeImage";

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    cartTotal,
    freeShippingThreshold,
    freeShippingProgress,
    formatPrice,
  } = useShop();

  const [promoCode, setPromoCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);
  const [selectedSample, setSelectedSample] = useState<string>("Rose Dew Mini");
  const [checkoutInitiated, setCheckoutInitiated] = useState(false);

  if (!isCartOpen) return null;

  const discountAmount = discountApplied ? cartTotal * 0.15 : 0;
  const finalTotal = Math.max(0, cartTotal - discountAmount);
  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - cartTotal);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === "GLOW15" || promoCode.trim().toUpperCase() === "WELCOME") {
      setDiscountApplied(true);
    } else {
      alert("Invalid code. Try entering GLOW15 for 15% off your ritual.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF8F5] border-l border-[#E8E2D8] shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="px-6 py-5 border-b border-[#E8E2D8] flex items-center justify-between bg-[#FDFBF8]">
            <div>
              <h2 className="font-editorial text-2xl font-light tracking-wide text-[#1F2421]">
                Your Shopping Bag
              </h2>
              <p className="text-xs text-[#6E7570] tracking-wider uppercase mt-0.5">
                {cart.length === 0 ? "Empty" : `${cart.length} distinct item${cart.length > 1 ? "s" : ""}`}
              </p>
            </div>
            <button
              onClick={closeCart}
              className="p-2 rounded-full hover:bg-[#EBE5DC]/60 transition-colors text-[#1F2421]"
              aria-label="Close cart"
            >
              <CloseIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Free shipping bar */}
          <div className="bg-[#F3EFEA] px-6 py-3 border-b border-[#E8E2D8]">
            <div className="flex justify-between items-center text-xs mb-1.5 text-[#3D4440]">
              <span className="font-medium">
                {cartTotal >= freeShippingThreshold ? (
                  <span className="text-[#536F5A] flex items-center gap-1 font-semibold">
                    <CheckIcon className="w-3.5 h-3.5" />
                    Complimentary Carbon-Neutral Shipping Unlocked
                  </span>
                ) : (
                  <span>
                    Add <strong className="text-[#1F2421]">{formatPrice(amountNeededForFreeShipping)}</strong> more for complimentary shipping
                  </span>
                )}
              </span>
              <span className="font-mono text-[11px] text-[#6E7570]">{freeShippingProgress}%</span>
            </div>
            <div className="w-full h-1.5 bg-[#E8E2D8] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#536F5A] rounded-full transition-all duration-500 ease-out"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Items Scrollable list */}
          <div className="flex-1 overflow-y-auto px-6 py-5 divide-y divide-[#E8E2D8]/80">
            {cart.length === 0 ? (
              <div className="py-16 text-center flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#EBF2EC] flex items-center justify-center text-[#536F5A] mb-4">
                  <SparklesIcon className="w-7 h-7" />
                </div>
                <h3 className="font-editorial text-xl font-normal text-[#1F2421] mb-2">
                  Your bag is awaiting its ritual
                </h3>
                <p className="text-sm text-[#6E7570] max-w-xs mb-6">
                  Explore our cold-pressed elixirs and clinical botanical serums designed to elevate your skin.
                </p>
                <button
                  onClick={closeCart}
                  className="px-6 py-3 bg-[#1F2421] text-[#FAF8F5] text-xs uppercase tracking-widest hover:bg-[#3D4440] transition-colors rounded-none"
                >
                  Discover Collections
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.product.id} className="py-4 flex gap-4">
                  <div className="w-20 h-24 bg-[#EBE5DC] rounded overflow-hidden flex-shrink-0 relative">
                    <SafeImage src={item.product.primaryImage} alt={item.product.name} className="w-full h-full object-cover object-center" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="text-sm font-medium text-[#1F2421] line-clamp-1 pr-2">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-[#9EA6A0] hover:text-[#C5A880] p-1 transition-colors"
                          title="Remove item"
                        >
                          <TrashIcon className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-xs text-[#6E7570] mt-0.5">{item.product.volume}</p>
                      <p className="text-xs font-semibold text-[#536F5A] mt-1">
                        {formatPrice(item.product.price)}
                      </p>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center justify-between mt-3">
                      <div className="inline-flex items-center border border-[#D9D2C6] rounded bg-[#FDFBF8]">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="px-2.5 py-0.5 text-xs text-[#1F2421] hover:bg-[#EBE5DC] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="px-2.5 py-0.5 text-xs font-medium text-[#1F2421]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2.5 py-0.5 text-xs text-[#1F2421] hover:bg-[#EBE5DC] transition-colors"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-xs font-semibold text-[#1F2421]">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}

            {/* Complimentary luxury sample selector */}
            {cart.length > 0 && (
              <div className="pt-5 pb-2">
                <span className="text-xs font-medium uppercase tracking-wider text-[#3D4440] block mb-2">
                  Complimentary Luxury Sample (Select 1)
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {["Rose Dew Mini (10ml)", "Bakuchiol Drop (5ml)"].map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSample(s)}
                      className={`p-2 rounded border text-left transition-all ${
                        selectedSample === s
                          ? "border-[#536F5A] bg-[#EBF2EC] text-[#374B3C] font-medium"
                          : "border-[#E8E2D8] bg-[#FDFBF8] text-[#6E7570] hover:border-[#C5A880]"
                      }`}
                    >
                      <span className="block text-[11px] uppercase tracking-wider font-semibold">Included</span>
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer & Totals */}
          {cart.length > 0 && (
            <div className="border-t border-[#E8E2D8] bg-[#FDFBF8] px-6 py-5 space-y-3">
              {/* Promo code */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Promo code (e.g. GLOW15)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 bg-white border border-[#D9D2C6] rounded px-3 py-1.5 text-xs text-[#1F2421] placeholder-[#9EA6A0] focus:outline-none focus:border-[#536F5A]"
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 bg-[#FAF8F5] border border-[#1F2421] text-[#1F2421] text-xs uppercase tracking-wider hover:bg-[#1F2421] hover:text-[#FAF8F5] transition-colors rounded"
                >
                  Apply
                </button>
              </form>

              {discountApplied && (
                <div className="flex justify-between text-xs text-[#536F5A] font-medium">
                  <span>Ritual Welcome Discount (15%)</span>
                  <span>-{formatPrice(discountAmount)}</span>
                </div>
              )}

              <div className="space-y-1.5 text-xs text-[#6E7570]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium text-[#1F2421]">{formatPrice(cartTotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{cartTotal >= freeShippingThreshold ? "Complimentary" : formatPrice(12)}</span>
                </div>
                <div className="flex justify-between text-sm font-semibold text-[#1F2421] pt-2 border-t border-[#E8E2D8]">
                  <span>Estimated Total</span>
                  <span>{formatPrice(finalTotal)}</span>
                </div>
              </div>

              {checkoutInitiated ? (
                <div className="p-3 bg-[#EBF2EC] border border-[#CBDACC] rounded text-xs text-[#374B3C] text-center space-y-1">
                  <p className="font-semibold">Review Order Simulation Ready</p>
                  <p>
                    All {cart.length} items staged. In accordance with system safety guidelines, no live payment gateway or credit card charge is simulated.
                  </p>
                  <button
                    onClick={() => setCheckoutInitiated(false)}
                    className="text-[11px] underline font-medium hover:text-[#1F2421] mt-1"
                  >
                    Return to Bag
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setCheckoutInitiated(true)}
                  className="w-full py-3.5 bg-[#1F2421] text-[#FAF8F5] text-xs font-medium uppercase tracking-[0.2em] hover:bg-[#3D4440] transition-colors flex items-center justify-center gap-2"
                >
                  <span>Proceed to Ritual Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}

              <p className="text-[10px] text-center text-[#9EA6A0] tracking-wider">
                100% Recyclable Glass Bottles • Carbon Neutral Delivery
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


