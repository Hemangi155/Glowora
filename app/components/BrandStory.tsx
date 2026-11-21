"use client";

import React from "react";
import { LeafIcon, ShieldCheckIcon, SparklesIcon } from "./Icons";
import SafeImage from "./SafeImage";

export default function BrandStory() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E8E2D8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual Collage */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg bg-[#EBE5DC]">
                  <SafeImage
                    src="https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=800&auto=format&fit=crop"
                    alt="Botanical herbs and distillation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 bg-[#F3EFEA] rounded-xl border border-[#E8E2D8] text-center">
                  <span className="font-editorial text-3xl font-light text-[#536F5A] block">
                    100%
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-[#6E7570] font-medium">
                    Clean Active Ingredients
                  </span>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="p-4 bg-[#EBF2EC] rounded-xl border border-[#CBDACC] text-center">
                  <span className="font-editorial text-3xl font-light text-[#374B3C] block">
                    pH 5.2
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-[#536F5A] font-medium">
                    Biocompatible Balance
                  </span>
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg bg-[#EBE5DC]">
                  <SafeImage
                    src="https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=800&auto=format&fit=crop"
                    alt="Luxury skincare texture on glass"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Stamp Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1F2421] text-[#FAF8F5] p-5 rounded-full shadow-2xl border-4 border-[#FAF8F5] text-center">
              <span className="block text-[9px] uppercase tracking-[0.25em] text-[#DFD3C3]">
                Established
              </span>
              <span className="font-editorial text-lg tracking-widest font-normal">
                PARIS
              </span>
            </div>
          </div>

          {/* Right Editorial Story */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#536F5A] block">
              Our Formulation Philosophy
            </span>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-light text-[#1F2421] leading-tight tracking-tight">
              The Art of Slow Botanical Science
            </h2>

            <div className="w-12 h-px bg-[#C5A880]" />

            <div className="space-y-4 text-sm sm:text-base text-[#3D4440] font-light leading-relaxed">
              <p>
                At GLOWORA, we reject the false dichotomy between pure organic botanicals and clinical efficacy. Founded in Grasse by a team of cosmetic dermatologists and master herbalists, our formulations bridge ancient plant wisdom with modern biomimetic chemistry.
              </p>
              <p>
                We slow-extract rare wild flora at sub-ambient temperatures to protect fragile polyphenols and essential fatty acids. The result: high-potency elixirs that replenish cutaneous lipid barriers, regulate inflammation, and cultivate lasting, lit-from-within radiance.
              </p>
            </div>

            {/* Three Pillars */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-[#FDFBF8] rounded-xl border border-[#E8E2D8]">
                <LeafIcon className="w-5 h-5 text-[#536F5A] mb-2" />
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1F2421] mb-1">
                  Wild Harvesting
                </h4>
                <p className="text-[11px] text-[#6E7570] leading-snug">
                  Ethically gathered botanicals from regenerative micro-farms.
                </p>
              </div>

              <div className="p-4 bg-[#FDFBF8] rounded-xl border border-[#E8E2D8]">
                <ShieldCheckIcon className="w-5 h-5 text-[#536F5A] mb-2" />
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1F2421] mb-1">
                  Clinical Safety
                </h4>
                <p className="text-[11px] text-[#6E7570] leading-snug">
                  Hypoallergenic, dermatologist verified on sensitive skin types.
                </p>
              </div>

              <div className="p-4 bg-[#FDFBF8] rounded-xl border border-[#E8E2D8]">
                <SparklesIcon className="w-5 h-5 text-[#536F5A] mb-2" />
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1F2421] mb-1">
                  Eco-Circularity
                </h4>
                <p className="text-[11px] text-[#6E7570] leading-snug">
                  100% recyclable Italian violet glass and carbon-offset shipping.
                </p>
              </div>
            </div>

            {/* Founder Quote */}
            <div className="pt-6 border-t border-[#E8E2D8]">
              <blockquote className="font-editorial text-lg text-[#1F2421] italic">
                &ldquo;True radiance is never covered up. It is nurtured through deliberate respect for your skin&apos;s innate biology.&rdquo;
              </blockquote>
              <div className="mt-2 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase font-semibold tracking-wider text-[#1F2421]">
                    Dr. Hélène Moreau & Marc Vance
                  </p>
                  <p className="text-[11px] text-[#6E7570]">
                    Co-Founders & Clinical Formulators
                  </p>
                </div>
                <span className="font-editorial text-xl italic text-[#536F5A] tracking-wider">
                  Glowora Paris
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
