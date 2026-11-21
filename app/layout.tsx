import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "GLOWORA | Your Skincare. Your Glow. - Premium Botanical Science",
  description: "Experience luxurious, clinical-grade botanical skincare. Hand-crafted elixirs, active serums, and restorative rituals designed for lasting radiance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${plusJakarta.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#FAF8F5] text-[#212523] selection:bg-[#E8EFEA] selection:text-[#212523] font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
