"use client";

import React, { useState } from "react";
import { PRESS_MENTIONS, TESTIMONIALS } from "../data/products";
import { StarIcon, CheckIcon } from "./Icons";

export default function PressAndReviews() {
  const [activePressIndex, setActivePressIndex] = useState(0);

  return (
    <section className="py-20 lg:py-28 bg-[#FDFBF8] border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Press Bar */}
        <div className="text-center pb-16 border-b border-[#E8E2D8]">
          <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-[#6E7570] block mb-6">
            Recognized by Global Editorial Authorities
          </span>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 mb-8">
            {PRESS_MENTIONS.map((item, idx) => (
              <button
                key={item.name}
                onClick={() => setActivePressIndex(idx)}
                className={`font-editorial text-xl sm:text-2xl tracking-[0.2em] uppercase transition-all ${
                  activePressIndex === idx
                    ? "text-[#1F2421] font-normal scale-105"
                    : "text-[#9EA6A0] hover:text-[#6E7570]"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <blockquote className="font-editorial text-xl sm:text-2xl font-light italic text-[#1F2421]">
              &ldquo;{PRESS_MENTIONS[activePressIndex].quote}&rdquo;
            </blockquote>
            <p className="text-xs uppercase tracking-widest text-[#536F5A] font-medium mt-2">
              — {PRESS_MENTIONS[activePressIndex].name} Editors
            </p>
          </div>
        </div>

        {/* Real Client Reviews Header */}
        <div className="pt-16 text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#536F5A] block mb-2">
            Verified Experiences
          </span>
          <h3 className="font-editorial text-3xl sm:text-4xl font-light text-[#1F2421] tracking-tight">
            Loved By Real Skin
          </h3>
          <p className="text-sm text-[#6E7570] font-light mt-2">
            Over 24,000 community members have unlocked their natural radiance.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-[#FAF8F5] p-6 sm:p-8 rounded-2xl border border-[#E8E2D8] flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex text-[#C5A880] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4" />
                  ))}
                </div>

                <p className="font-editorial text-base sm:text-lg text-[#1F2421] leading-relaxed italic mb-6">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8E2D8]">
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="text-xs font-semibold uppercase tracking-wider text-[#1F2421]">
                      {review.author}
                    </h5>
                    <p className="text-[11px] text-[#6E7570]">{review.skinProfile}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] text-[#536F5A] font-semibold uppercase bg-[#EBF2EC] px-2 py-0.5 rounded">
                    <CheckIcon className="w-3 h-3" />
                    Verified
                  </span>
                </div>
                <p className="text-[11px] text-[#9EA6A0] mt-2 italic truncate">
                  Formula: {review.productUsed}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
