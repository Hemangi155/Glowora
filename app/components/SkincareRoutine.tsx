"use client";

import React, { useState } from "react";
import { ROUTINE_STEPS } from "../data/products";
import { useShop } from "../context/ShopContext";
import { BagIcon, SparklesIcon } from "./Icons";
import SafeImage from "./SafeImage";

export default function SkincareRoutine() {
  const { addToCart, openQuickView, formatPrice, showToast } = useShop();
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeStep = ROUTINE_STEPS[activeStepIndex];

  // Calculate complete 4-step ritual bundle
  const bundleRegularPrice = ROUTINE_STEPS.reduce(
    (total, step) => total + step.recommendedProduct.price,
    0
  );
  const bundleDiscountedPrice = Math.round(bundleRegularPrice * 0.8); // 20% off

  const handleAddEntireRitual = () => {
    ROUTINE_STEPS.forEach((step) => {
      addToCart(step.recommendedProduct, 1);
    });
    showToast("Added complete 4-Step GLOWORA Ritual to your bag with 20% bundle savings!");
  };

  return (
    <section id="routine" className="py-20 lg:py-28 bg-[#F3EFEA] border-b border-[#E8E2D8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#536F5A] block mb-2">
            The Radiance Architecture
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-light text-[#1F2421] tracking-tight">
            The 4-Step Daily Ritual
          </h2>
          <div className="w-12 h-px bg-[#C5A880] mx-auto my-4" />
          <p className="text-sm sm:text-base text-[#6E7570] font-light leading-relaxed">
            Layered in deliberate order to work synergistically with skin physiology: dissolve impurities, ignite cellular turnover, seal the lipid mantle, and protect against phototargeted aging.
          </p>
        </div>

        {/* Step Selector Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto mb-12">
          {ROUTINE_STEPS.map((step, idx) => (
            <button
              key={step.stepNumber}
              onClick={() => setActiveStepIndex(idx)}
              className={`p-4 rounded-xl text-left border transition-all duration-300 ${
                activeStepIndex === idx
                  ? "bg-[#FAF8F5] border-[#536F5A] shadow-md ring-1 ring-[#536F5A]/20"
                  : "bg-white/60 border-[#E8E2D8] hover:bg-white"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-editorial text-lg text-[#536F5A] font-bold">
                  {step.stepNumber}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-[#9EA6A0]">
                  {step.timing.split(" ")[0]}
                </span>
              </div>
              <h4 className="font-semibold text-xs uppercase tracking-wider text-[#1F2421]">
                {step.stepName}
              </h4>
              <p className="text-[11px] text-[#6E7570] truncate mt-0.5">{step.title}</p>
            </button>
          ))}
        </div>

        {/* Active Step Showcase Card */}
        <div className="bg-[#FAF8F5] rounded-2xl border border-[#E8E2D8] shadow-xl overflow-hidden max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Image Showcase */}
            <div className="lg:col-span-5 relative aspect-square sm:aspect-[4/3] lg:aspect-auto lg:h-[460px] bg-[#EBE5DC]">
              <SafeImage
                src={activeStep.image}
                alt={activeStep.recommendedProduct.name}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-4 left-4 bg-[#1F2421]/90 backdrop-blur text-[#FAF8F5] text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded">
                Step {activeStep.stepNumber} of 04
              </div>
            </div>

            {/* Right Step Content */}
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs uppercase font-bold text-[#536F5A] tracking-wider">
                    {activeStep.timing}
                  </span>
                  <span className="text-xs text-[#9EA6A0]">•</span>
                  <span className="text-xs text-[#6E7570] font-medium">
                    {activeStep.stepName} Phase
                  </span>
                </div>

                <h3 className="font-editorial text-2xl sm:text-3xl text-[#1F2421] font-normal leading-snug">
                  {activeStep.title}
                </h3>
                <p className="text-sm text-[#3D4440] font-light leading-relaxed mt-3">
                  {activeStep.description}
                </p>
              </div>

              {/* Clinical Benefit Highlight */}
              <div className="p-4 bg-[#F3EFEA] rounded-xl border border-[#E8E2D8] flex items-start gap-3">
                <SparklesIcon className="w-5 h-5 text-[#C5A880] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#1F2421] block">
                    Proven Biomimetic Action
                  </span>
                  <p className="text-xs text-[#536F5A] mt-0.5">
                    {activeStep.keyBenefit}
                  </p>
                </div>
              </div>

              {/* Recommended Product Box */}
              <div className="p-4 bg-white rounded-xl border border-[#E8E2D8] flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-14 h-14 rounded overflow-hidden bg-[#EBE5DC] flex-shrink-0">
                    <SafeImage
                      src={activeStep.recommendedProduct.primaryImage}
                      alt={activeStep.recommendedProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] uppercase font-bold text-[#536F5A] tracking-wider">
                      Recommended Formula
                    </span>
                    <h5 className="text-xs font-semibold text-[#1F2421] truncate">
                      {activeStep.recommendedProduct.name}
                    </h5>
                    <span className="text-xs font-bold text-[#1F2421]">
                      {formatPrice(activeStep.recommendedProduct.price)}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    onClick={() => openQuickView(activeStep.recommendedProduct)}
                    className="px-3 py-2 border border-[#D9D2C6] rounded text-xs text-[#1F2421] hover:bg-[#FAF8F5]"
                  >
                    Details
                  </button>
                  <button
                    onClick={() => addToCart(activeStep.recommendedProduct)}
                    className="px-4 py-2 bg-[#1F2421] text-[#FAF8F5] rounded text-xs uppercase tracking-wider hover:bg-[#3D4440]"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bundle Banner */}
        <div className="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-[#1F2421] to-[#374B3C] text-[#FAF8F5] p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#DFD3C3] block">
              Curated Master Set
            </span>
            <h4 className="font-editorial text-2xl sm:text-3xl font-light">
              The Complete 4-Step Glow Architecture
            </h4>
            <p className="text-xs text-[#CBDACC] max-w-md">
              Receive all 4 full-sized formulations in our signature keepsake gift box, plus a complimentary vegan silk sleep mask.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
            <div className="text-right">
              <span className="text-xs line-through text-[#9EA6A0] block">
                {formatPrice(bundleRegularPrice)}
              </span>
              <span className="text-2xl font-bold text-[#FAF8F5]">
                {formatPrice(bundleDiscountedPrice)}
              </span>
              <span className="text-[10px] text-[#DFD3C3] uppercase font-semibold block">
                Save 20% Bundle
              </span>
            </div>

            <button
              onClick={handleAddEntireRitual}
              className="px-6 py-3.5 bg-[#FAF8F5] text-[#1F2421] text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#DFD3C3] transition-colors rounded-none flex items-center gap-2 whitespace-nowrap shadow-md"
            >
              <BagIcon className="w-4 h-4" />
              <span>Add Complete Set</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
