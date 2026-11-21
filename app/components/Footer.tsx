"use client";

import React from "react";
import { useShop, Currency } from "../context/ShopContext";
import { SparklesIcon, LeafIcon, ShieldCheckIcon } from "./Icons";

export default function Footer() {
  const { currency, setCurrency, setActiveCategoryFilter } = useShop();

  const handleCategoryNav = (cat: string) => {
    setActiveCategoryFilter(cat);
    const shopEl = document.getElementById("shop");
    if (shopEl) {
      shopEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-[#191D1A] text-[#FAF8F5] pt-16 pb-12 border-t border-[#2C332E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Credentials Banner */}
        <div className="pb-12 mb-12 border-b border-[#2C332E] grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#2C332E] flex items-center justify-center text-[#DFD3C3]">
              <LeafIcon className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-xs uppercase tracking-wider font-semibold text-[#FAF8F5]">
                100% Recyclable Glass
              </h5>
              <p className="text-[11px] text-[#9EA6A0]">Bottled in protective Miron glass</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#2C332E] flex items-center justify-center text-[#DFD3C3]">
              <ShieldCheckIcon className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-xs uppercase tracking-wider font-semibold text-[#FAF8F5]">
                Clinical Integrity
              </h5>
              <p className="text-[11px] text-[#9EA6A0]">Formulated without 2,800+ harmful toxins</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#2C332E] flex items-center justify-center text-[#DFD3C3]">
              <SparklesIcon className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-xs uppercase tracking-wider font-semibold text-[#FAF8F5]">
                Concierge Skincare
              </h5>
              <p className="text-[11px] text-[#9EA6A0]">Direct guidance from licensed aestheticians</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-[#2C332E]">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-editorial text-3xl font-light tracking-[0.25em] text-[#FAF8F5] uppercase">
              GLOWORA
            </h3>
            <p className="text-xs uppercase tracking-[0.3em] text-[#DFD3C3] font-light">
              Your skincare. Your glow.
            </p>
            <p className="text-xs text-[#9EA6A0] font-light leading-relaxed max-w-sm pt-2">
              Luxurious, high-efficacy botanical formulations merging French herbal extraction with clinical dermatological science. Designed for sensitive barriers and enduring radiance.
            </p>

            {/* Social Icons */}
            <div className="pt-4 flex items-center space-x-4 text-[#C2C7C4]">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#2C332E] hover:bg-[#536F5A] hover:text-white transition-colors flex items-center justify-center"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Pinterest */}
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#2C332E] hover:bg-[#536F5A] hover:text-white transition-colors flex items-center justify-center"
                aria-label="Pinterest"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.332 1.357-.053.211-.174.256-.402.155-1.498-.698-2.435-2.889-2.435-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#2C332E] hover:bg-[#536F5A] hover:text-white transition-colors flex items-center justify-center"
                aria-label="TikTok"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.29 0 .58.04.85.12V9.4a6.33 6.33 0 00-.85-.06A6.34 6.34 0 003.1 15.68a6.34 6.34 0 0010.82 4.47V10.8a8.28 8.28 0 005.67 2.2V9.54a4.85 4.85 0 01-3.77-2.85z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#2C332E] hover:bg-[#536F5A] hover:text-white transition-colors flex items-center justify-center"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 1: Shop */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#FAF8F5]">
              The Collection
            </h4>
            <ul className="space-y-2 text-xs text-[#9EA6A0]">
              <li>
                <button
                  onClick={() => handleCategoryNav("Cleansers")}
                  className="hover:text-[#FAF8F5] transition-colors"
                >
                  Balancing Cleansers
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryNav("Serums")}
                  className="hover:text-[#FAF8F5] transition-colors"
                >
                  Active Serums & Elixirs
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryNav("Moisturizers")}
                  className="hover:text-[#FAF8F5] transition-colors"
                >
                  Barrier Crèmes & Gels
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryNav("Sunscreens")}
                  className="hover:text-[#FAF8F5] transition-colors"
                >
                  Mineral Sun Protection
                </button>
              </li>
              <li>
                <a href="#routine" className="hover:text-[#FAF8F5] transition-colors">
                  Complete 4-Step Sets
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Science & Philosophy */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#FAF8F5]">
              Botanical Science
            </h4>
            <ul className="space-y-2 text-xs text-[#9EA6A0]">
              <li>
                <a href="#about" className="hover:text-[#FAF8F5] transition-colors">
                  Sub-Ambient Extraction
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#FAF8F5] transition-colors">
                  Skin pH 5.2 Equilibrium
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#FAF8F5] transition-colors">
                  Biomimetic Lipid Delivery
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#FAF8F5] transition-colors">
                  Clinical Trial Whitepapers
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#FAF8F5] transition-colors">
                  Zero Waste Violet Glass
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Client Concierge */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#FAF8F5]">
              Client Concierge
            </h4>
            <ul className="space-y-2 text-xs text-[#9EA6A0]">
              <li>
                <span className="block text-[#FAF8F5] font-medium">Paris Salon & Flagship:</span>
                <span className="text-[11px] block">14 Rue Saint-Honoré, 75001 Paris</span>
              </li>
              <li>
                <span className="block text-[#FAF8F5] font-medium">New York Atelier:</span>
                <span className="text-[11px] block">482 Broome Street, SoHo, NY 10013</span>
              </li>
              <li className="pt-2">
                <a
                  href="mailto:concierge@glowora.luxury"
                  className="text-[#DFD3C3] hover:underline"
                >
                  concierge@glowora.luxury
                </a>
              </li>
              <li>
                <span className="text-[11px]">Carbon-Neutral Shipping & Returns</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Currencies & Badges */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6E7570]">
          <div className="flex items-center gap-4">
            <p>© 2026 GLOWORA Paris & New York. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-[11px]">Currency:</span>
              {(["USD", "EUR", "GBP"] as Currency[]).map((c) => (
                <button
                  key={c}
                  onClick={() => setCurrency(c)}
                  className={`text-[11px] uppercase ${
                    currency === c ? "text-white font-semibold underline" : "hover:text-white"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <span className="text-[#3D4440]">|</span>
            <span className="text-[11px]">Certified B-Corporation Pending</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
