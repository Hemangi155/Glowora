"use client";

import React from "react";
import { useShop } from "../context/ShopContext";
import { SparklesIcon, CloseIcon } from "./Icons";

export default function Toast() {
  const { toastMessage, hideToast } = useShop();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="bg-[#1F2421] text-[#FAF8F5] px-5 py-3.5 rounded-lg shadow-xl border border-[#3D4440] flex items-center gap-3 max-w-sm">
        <SparklesIcon className="w-5 h-5 text-[#C5A880] flex-shrink-0" />
        <span className="text-xs tracking-wide flex-1 font-light">{toastMessage}</span>
        <button
          onClick={hideToast}
          className="text-[#9EA6A0] hover:text-[#FAF8F5] p-1 transition-colors"
          aria-label="Dismiss notification"
        >
          <CloseIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
