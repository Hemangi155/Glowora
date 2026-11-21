"use client";

import React, { useState, useEffect } from "react";
import { useShop } from "../context/ShopContext";
import {
  BagIcon,
  HeartIcon,
  SearchIcon,
  UserIcon,
  MenuIcon,
  CloseIcon,
} from "./Icons";

export default function Navbar() {
  const {
    cartCount,
    openCart,
    wishlistCount,
    openWishlist,
    openSearch,
    openAccount,
    setActiveCategoryFilter,
  } = useShop();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [skincareDropdownOpen, setSkincareDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Shop", href: "#shop" },
    {
      label: "Skincare",
      href: "#categories",
      hasDropdown: true,
    },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const categoryQuickLinks = [
    { name: "Cleansers", filter: "Cleansers" },
    { name: "Serums & Elixirs", filter: "Serums" },
    { name: "Barrier Moisturizers", filter: "Moisturizers" },
    { name: "Mineral Sunscreens", filter: "Sunscreens" },
  ];

  const handleCategoryClick = (categoryName: string) => {
    setActiveCategoryFilter(categoryName);
    setSkincareDropdownOpen(false);
    setMobileMenuOpen(false);
    const shopEl = document.getElementById("shop");
    if (shopEl) {
      shopEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF8F5]/90 backdrop-blur-md shadow-sm border-b border-[#E8E2D8]"
          : "bg-[#FAF8F5] border-b border-[#E8E2D8]/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 -ml-2 text-[#1F2421] hover:text-[#536F5A] transition-colors"
              aria-label="Open menu"
            >
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Left Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => setSkincareDropdownOpen(true)}
                  onMouseLeave={() => setSkincareDropdownOpen(false)}
                >
                  <a
                    href={link.href}
                    className="text-xs font-medium uppercase tracking-[0.2em] text-[#1F2421] hover:text-[#536F5A] transition-colors py-2 flex items-center gap-1"
                  >
                    <span>{link.label}</span>
                    <span className="text-[10px]">▾</span>
                  </a>

                  {/* Dropdown Menu */}
                  {skincareDropdownOpen && (
                    <div className="absolute top-full left-0 w-64 bg-[#FAF8F5] border border-[#E8E2D8] shadow-xl rounded-md py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                      <div className="px-4 py-2 border-b border-[#E8E2D8] text-[10px] uppercase font-semibold text-[#6E7570] tracking-wider">
                        Shop By Ritual
                      </div>
                      {categoryQuickLinks.map((item) => (
                        <button
                          key={item.name}
                          onClick={() => handleCategoryClick(item.filter)}
                          className="w-full text-left px-4 py-2 text-xs text-[#1F2421] hover:bg-[#F3EFEA] hover:text-[#536F5A] transition-colors flex justify-between items-center"
                        >
                          <span>{item.name}</span>
                          <span className="text-[#9EA6A0] text-[10px]">→</span>
                        </button>
                      ))}
                      <div className="pt-2 mt-2 border-t border-[#E8E2D8] px-4">
                        <a
                          href="#routine"
                          onClick={() => setSkincareDropdownOpen(false)}
                          className="block py-1 text-xs text-[#536F5A] font-semibold hover:underline"
                        >
                          The 4-Step Routine Guide →
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs font-medium uppercase tracking-[0.2em] text-[#1F2421] hover:text-[#536F5A] transition-colors py-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#536F5A] hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          {/* Center Brand Identity */}
          <div className="flex-1 lg:flex-initial text-center lg:px-8">
            <a href="#" className="inline-block group">
              <h1 className="font-editorial text-2xl sm:text-3xl lg:text-4xl tracking-[0.28em] font-light text-[#1F2421] uppercase transition-colors group-hover:text-[#536F5A]">
                GLOWORA
              </h1>
              <p className="text-[9px] sm:text-[10px] tracking-[0.35em] uppercase text-[#6E7570] mt-0.5 font-light">
                Your skincare. Your glow.
              </p>
            </a>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-4 sm:space-x-5">
            {/* Search */}
            <button
              onClick={openSearch}
              className="p-1.5 text-[#1F2421] hover:text-[#536F5A] transition-colors"
              aria-label="Open search"
              title="Search formulas"
            >
              <SearchIcon className="w-5 h-5" />
            </button>

            {/* Account */}
            <button
              onClick={openAccount}
              className="p-1.5 text-[#1F2421] hover:text-[#536F5A] transition-colors"
              aria-label="Open user profile"
              title="Account"
            >
              <UserIcon className="w-5 h-5" />
            </button>

            {/* Wishlist */}
            <button
              onClick={openWishlist}
              className="p-1.5 text-[#1F2421] hover:text-[#536F5A] transition-colors relative"
              aria-label="Open saved items"
              title="Saved rituals"
            >
              <HeartIcon className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#536F5A] text-[#FAF8F5] text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Shopping Bag */}
            <button
              onClick={openCart}
              className="p-1.5 text-[#1F2421] hover:text-[#536F5A] transition-colors relative"
              aria-label="Open shopping bag"
              title="Shopping bag"
            >
              <BagIcon className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#1F2421] text-[#FAF8F5] text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-4/5 max-w-sm bg-[#FAF8F5] border-r border-[#E8E2D8] p-6 flex flex-col justify-between shadow-2xl animate-in slide-in-from-left duration-200">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#E8E2D8]">
                <div>
                  <span className="font-editorial text-2xl tracking-[0.2em] font-light text-[#1F2421]">
                    GLOWORA
                  </span>
                  <p className="text-[9px] tracking-widest text-[#6E7570] uppercase">
                    Your skincare. Your glow.
                  </p>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#1F2421]"
                  aria-label="Close menu"
                >
                  <CloseIcon className="w-5 h-5" />
                </button>
              </div>

              <div className="py-6 space-y-4">
                <a
                  href="#"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm uppercase tracking-widest font-medium text-[#1F2421] py-1"
                >
                  Home
                </a>
                <a
                  href="#shop"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm uppercase tracking-widest font-medium text-[#1F2421] py-1"
                >
                  Shop The Collection
                </a>
                <div className="pt-2 pb-1 border-y border-[#E8E2D8]/60 my-2">
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-[#6E7570] block mb-2">
                    Categories
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {categoryQuickLinks.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => handleCategoryClick(c.filter)}
                        className="text-left py-1 text-[#3D4440] hover:text-[#536F5A]"
                      >
                        {c.name}
                      </button>
                    ))}
                  </div>
                </div>
                <a
                  href="#routine"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm uppercase tracking-widest font-medium text-[#1F2421] py-1"
                >
                  4-Step Skincare Ritual
                </a>
                <a
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm uppercase tracking-widest font-medium text-[#1F2421] py-1"
                >
                  Brand Philosophy
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm uppercase tracking-widest font-medium text-[#1F2421] py-1"
                >
                  Concierge & Contact
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-[#E8E2D8] space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openAccount();
                }}
                className="w-full py-2.5 bg-[#FAF8F5] border border-[#1F2421] text-[#1F2421] text-xs uppercase tracking-widest font-medium"
              >
                Member Circle
              </button>
              <p className="text-[10px] text-center text-[#9EA6A0]">
                PARIS • NEW YORK • TOKYO
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
