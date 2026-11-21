"use client";

import React from "react";
import { ShopProvider } from "./context/ShopContext";
import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Bestsellers from "./components/Bestsellers";
import SkincareRoutine from "./components/SkincareRoutine";
import NewArrivals from "./components/NewArrivals";
import BrandStory from "./components/BrandStory";
import PressAndReviews from "./components/PressAndReviews";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import SearchModal from "./components/SearchModal";
import WishlistDrawer from "./components/WishlistDrawer";
import QuickViewModal from "./components/QuickViewModal";
import AccountModal from "./components/AccountModal";
import Toast from "./components/Toast";

export default function GloworaHome() {
  return (
    <ShopProvider>
      <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1F2421]">
        {/* 1. Promotional announcement bar */}
        <AnnouncementBar />

        {/* 2, 3, 4. Navigation bar with GLOWORA logo, main links and e-commerce icons */}
        <Navbar />

        <main className="flex-1">
          {/* 5. Premium photographic hero section with a Shop Now CTA */}
          <Hero />

          {/* 6. Shop by category: Cleansers, Serums, Moisturizers and Sunscreens */}
          <Categories />

          {/* 7. Bestselling products with images, prices and ratings */}
          <Bestsellers />

          {/* 8. Skincare routine section (4-Step Ritual Architecture) */}
          <SkincareRoutine />

          {/* 9. New arrivals */}
          <NewArrivals />

          {/* 10. Brand story (Slow Botanical Alchemy) */}
          <BrandStory />

          {/* Press and Verified Testimonials */}
          <PressAndReviews />

          {/* 11. Newsletter subscription (The Glowora Society) */}
          <Newsletter />
        </main>

        {/* 12. Premium footer with useful links and social icons */}
        <Footer />

        {/* Interactive Drawers, Modals & Toast */}
        <CartDrawer />
        <SearchModal />
        <WishlistDrawer />
        <QuickViewModal />
        <AccountModal />
        <Toast />
      </div>
    </ShopProvider>
  );
}
