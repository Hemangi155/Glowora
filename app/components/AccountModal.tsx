"use client";

import React from "react";
import { useShop } from "../context/ShopContext";
import { CloseIcon, SparklesIcon, CheckIcon } from "./Icons";

export default function AccountModal() {
  const { isAccountOpen, closeAccount } = useShop();

  if (!isAccountOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={closeAccount}
      />

      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-[#FAF8F5] border border-[#E8E2D8] w-full max-w-lg rounded-xl shadow-2xl p-6 md:p-8 animate-in fade-in zoom-in-95 duration-200">
          <button
            onClick={closeAccount}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#EBE5DC] text-[#1F2421] transition-colors"
            aria-label="Close modal"
          >
            <CloseIcon className="w-5 h-5" />
          </button>

          {/* Profile Header */}
          <div className="flex items-center gap-4 pb-6 border-b border-[#E8E2D8]">
            <div className="w-16 h-16 rounded-full bg-[#EBF2EC] text-[#536F5A] flex items-center justify-center text-xl font-editorial font-bold border border-[#CBDACC]">
              ER
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-editorial text-2xl text-[#1F2421]">Elena Rostova</h3>
                <span className="bg-[#DFD3C3] text-[#374B3C] text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded">
                  Luminary Member
                </span>
              </div>
              <p className="text-xs text-[#6E7570] mt-0.5">elena.rostova@glowora.luxury</p>
            </div>
          </div>

          {/* Glow Tier points */}
          <div className="my-6 p-4 bg-[#F3EFEA] rounded-lg border border-[#E8E2D8]">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs uppercase font-semibold text-[#1F2421] tracking-wider flex items-center gap-1.5">
                <SparklesIcon className="w-4 h-4 text-[#C5A880]" />
                GLOWORA Circle Rewards
              </span>
              <span className="text-xs font-semibold text-[#536F5A]">1,450 Glow Points</span>
            </div>
            <div className="w-full h-1.5 bg-[#E8E2D8] rounded-full overflow-hidden">
              <div className="h-full bg-[#C5A880] rounded-full" style={{ width: "72%" }} />
            </div>
            <p className="text-[11px] text-[#6E7570] mt-2">
              550 points until your next complimentary Botanical Discovery Travel Kit.
            </p>
          </div>

          {/* Member Preferences */}
          <div className="space-y-4">
            <div>
              <h4 className="text-xs uppercase font-semibold tracking-wider text-[#1F2421] mb-2">
                Your Skin Biology Profile
              </h4>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2.5 py-1 bg-white border border-[#D9D2C6] rounded text-[#3D4440]">
                  Dry & Reactive
                </span>
                <span className="px-2.5 py-1 bg-white border border-[#D9D2C6] rounded text-[#3D4440]">
                  Pigmentation Focus
                </span>
                <span className="px-2.5 py-1 bg-white border border-[#D9D2C6] rounded text-[#3D4440]">
                  Fragrance-Sensitive
                </span>
              </div>
            </div>

            <div className="pt-2">
              <h4 className="text-xs uppercase font-semibold tracking-wider text-[#1F2421] mb-2">
                Recent Ritual Orders
              </h4>
              <div className="p-3 bg-white border border-[#E8E2D8] rounded-lg flex justify-between items-center text-xs">
                <div>
                  <p className="font-medium text-[#1F2421]">Order #GLW-9281 • 3 Items</p>
                  <p className="text-[#6E7570] text-[11px]">Delivered on Nov 14, 2026</p>
                </div>
                <span className="text-[#536F5A] font-semibold flex items-center gap-1 text-[11px]">
                  <CheckIcon className="w-3.5 h-3.5" />
                  Delivered
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-[#E8E2D8] flex justify-between items-center text-xs text-[#6E7570]">
            <button
              onClick={closeAccount}
              className="text-[#1F2421] hover:underline uppercase tracking-wider text-[11px] font-semibold"
            >
              Close Profile
            </button>
            <span className="text-[11px] text-[#9EA6A0]">Member since 2024</span>
          </div>
        </div>
      </div>
    </div>
  );
}
