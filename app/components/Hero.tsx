"use client";

import React from "react";
import { ArrowRight, SparklesIcon, ShieldCheckIcon, LeafIcon, DropletIcon } from "./Icons";
import SafeImage from "./SafeImage";

export default function Hero() {
  return (
    <section id="hero" className="relative bg-[#FAF8F5] overflow-hidden pt-6 pb-16 lg:py-20 border-b border-[#E8E2D8]">
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#EBF2EC]/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-[#DFD3C3]/30 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF2EC] border border-[#CBDACC] text-[#374B3C] text-[11px] uppercase tracking-[0.2em] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#536F5A] animate-pulse" />
              <span>Slow Botanical Science • Paris</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-[#1F2421] leading-[1.08] tracking-tight">
              Bio-Active Alchemy for Luminous,{" "}
              <span className="italic font-normal text-[#536F5A] block sm:inline">
                Resilient Skin.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#3D4440] font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              Consciously formulated in Grasse and perfected by clinical dermatologists.
              We harness wild-harvested botanicals and biomimetic lipid ceramides to restore your skin barrier to its purest, candlelit radiance.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#shop"
                className="w-full sm:w-auto px-8 py-4 bg-[#1F2421] text-[#FAF8F5] text-xs font-semibold uppercase tracking-[0.25em] hover:bg-[#3D4440] transition-all shadow-md hover:shadow-lg text-center rounded-none"
              >
                Shop The Collection
              </a>
              <a
                href="#routine"
                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[#1F2421] text-[#1F2421] text-xs font-semibold uppercase tracking-[0.25em] hover:bg-[#1F2421] hover:text-[#FAF8F5] transition-all text-center flex items-center justify-center gap-2 group"
              >
                <span>Discover Your Ritual</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Trust Points */}
            <div className="pt-6 border-t border-[#E8E2D8] grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#536F5A]">
                  <LeafIcon className="w-4 h-4" />
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#1F2421]">
                    100% Vegan
                  </span>
                </div>
                <p className="text-[11px] text-[#6E7570]">Cold-pressed bio-actives</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#536F5A]">
                  <ShieldCheckIcon className="w-4 h-4" />
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#1F2421]">
                    Derm Tested
                  </span>
                </div>
                <p className="text-[11px] text-[#6E7570]">Clinically proven efficacy</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#536F5A]">
                  <DropletIcon className="w-4 h-4" />
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#1F2421]">
                    Barrier First
                  </span>
                </div>
                <p className="text-[11px] text-[#6E7570]">pH 5.2 biocompatible</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#536F5A]">
                  <SparklesIcon className="w-4 h-4" />
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#1F2421]">
                    24k+ Reviews
                  </span>
                </div>
                <p className="text-[11px] text-[#6E7570]">4.9 / 5.0 client rating</p>
              </div>
            </div>
          </div>

          {/* Right Visual Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Editorial Image */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-[#EBE5DC] border border-[#E8E2D8]">
                <SafeImage
                  src="https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop"
                  alt="GLOWORA skincare model with luminous dewy skin"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-1000 ease-out"
                />

                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#DFD3C3]">
                    Signature Daily Ritual
                  </p>
                  <p className="font-editorial text-2xl font-light leading-snug">
                    Cultivating timeless skin luminescence.
                  </p>
                </div>
              </div>

              {/* Floating Award Card */}
              <div className="absolute -bottom-6 -left-6 sm:-left-8 bg-[#FAF8F5]/95 backdrop-blur-md p-4 sm:p-5 rounded-xl border border-[#E8E2D8] shadow-xl max-w-xs transition-transform hover:-translate-y-1 duration-300">
                <div className="flex items-center gap-2 text-[#C5A880] mb-1">
                  <SparklesIcon className="w-4 h-4" />
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#1F2421]">
                    Vogue Beauty 2026
                  </span>
                </div>
                <p className="text-xs font-editorial text-[#1F2421] italic">
                  &ldquo;The purest formulation we tested this year. Instant glass skin.&rdquo;
                </p>
                <span className="text-[10px] uppercase tracking-wider text-[#536F5A] font-semibold mt-1 block">
                  Best Bio-Active Serum
                </span>
              </div>

              {/* Floating Small Product Card */}
              <div className="absolute -top-6 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-[#E8E2D8] shadow-lg flex items-center gap-3">
                <div className="w-12 h-12 rounded overflow-hidden bg-[#EBE5DC]">
                  <SafeImage
                    src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=300&auto=format&fit=crop"
                    alt="Product bottle"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-wider font-bold text-[#536F5A] block">
                    Cult Favorite
                  </span>
                  <p className="text-xs font-medium text-[#1F2421]">Luminescent C</p>
                  <p className="text-[10px] text-[#6E7570]">$82 • 30ml</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
