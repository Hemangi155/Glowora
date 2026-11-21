"use client";

import React, { useState, useEffect } from "react";
import { useShop, Currency } from "../context/ShopContext";
import { ChevronLeft, ChevronRight, CloseIcon } from "./Icons";

export default function AnnouncementBar() {
  const { currency, setCurrency } = useShop();
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const announcements = [
    "Complimentary Botanical Cleanser Mini (30ml) on orders over $90",
    "Carbon-Neutral Global Shipping & Signature Sustainable Packaging",
    "Clinical Barrier Science • 100% Vegan & Leaping Bunny Certified",
    "New Formula: Bakuchiol Midnight Renewal Elixir is now live"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % announcements.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [announcements.length]);

  if (!isVisible) return null;

  return (
    <div className="bg-[#1F2421] text-[#FAF8F5] text-[11px] tracking-widest font-normal uppercase py-2.5 px-4 transition-all duration-300 relative z-40 border-b border-[#3D4440]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Currency Switcher */}
        <div className="hidden sm:flex items-center gap-1.5 text-[#C2C7C4]">
          <span className="text-[10px] text-[#9EA6A0]">REGION:</span>
          {(["USD", "EUR", "GBP"] as Currency[]).map((c) => (
            <button
              key={c}
              onClick={() => setCurrency(c)}
              className={`px-1.5 py-0.5 rounded transition-colors ${
                currency === c
                  ? "text-[#FAF8F5] font-semibold bg-[#3D4440]"
                  : "hover:text-[#FAF8F5]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Center Rotating Message */}
        <div className="flex-1 flex items-center justify-center gap-3">
          <button
            onClick={() =>
              setCurrentMessageIndex(
                (prev) => (prev - 1 + announcements.length) % announcements.length
              )
            }
            className="text-[#9EA6A0] hover:text-[#FAF8F5] transition-colors p-0.5"
            aria-label="Previous announcement"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <span className="text-center truncate px-2 font-light text-[#FAF8F5] transition-opacity duration-300">
            {announcements[currentMessageIndex]}
          </span>
          <button
            onClick={() =>
              setCurrentMessageIndex((prev) => (prev + 1) % announcements.length)
            }
            className="text-[#9EA6A0] hover:text-[#FAF8F5] transition-colors p-0.5"
            aria-label="Next announcement"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Right Info / Dismiss */}
        <div className="flex items-center gap-3">
          <a
            href="#routine"
            className="hidden md:inline-block text-[#C5A880] hover:underline lowercase font-sans text-xs tracking-normal"
          >
            take our skin quiz →
          </a>
          <button
            onClick={() => setIsVisible(false)}
            className="text-[#9EA6A0] hover:text-[#FAF8F5] p-1 transition-colors"
            aria-label="Dismiss banner"
          >
            <CloseIcon className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
