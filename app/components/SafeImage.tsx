"use client";

import React, { useState } from "react";

interface SafeImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src"> {
  src?: string;
  fallbackSrc?: string;
}

// Built-in luxury editorial SVG fallback (100% offline-proof, never fails)
const DEFAULT_LUXURY_FALLBACK = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="750" viewBox="0 0 600 750" fill="none"><rect width="600" height="750" fill="%23FAF8F5"/><rect x="20" y="20" width="560" height="710" stroke="%23E8E2D8" stroke-width="1"/><circle cx="300" cy="330" r="80" fill="%23EBF2EC"/><path d="M300 270c-25 35-40 60-40 85a40 40 0 0080 0c0-25-15-50-40-85z" fill="%23536F5A" opacity="0.85"/><text x="300" y="450" font-family="Georgia,serif" font-size="22" letter-spacing="0.25em" fill="%231F2421" text-anchor="middle">GLOWORA</text><text x="300" y="480" font-family="sans-serif" font-size="10" letter-spacing="0.3em" fill="%236E7570" text-anchor="middle">BOTANICAL SCIENCE &bull; PARIS</text><text x="300" y="510" font-family="sans-serif" font-size="11" letter-spacing="0.15em" fill="%23C5A880" text-anchor="middle">&bull; LUXURY SKINCARE RITUAL &bull;</text></svg>`;

export default function SafeImage({
  src,
  alt = "GLOWORA Skincare",
  className = "",
  fallbackSrc = DEFAULT_LUXURY_FALLBACK,
  ...props
}: SafeImageProps) {
  const [failedUrls, setFailedUrls] = useState<Record<string, boolean>>({});
  const [isLoaded, setIsLoaded] = useState(false);

  const isFailed = src ? !!failedUrls[src] : true;
  const activeSrc = !isFailed && src ? src : fallbackSrc;

  return (
    <img
      src={activeSrc}
      alt={alt}
      loading="lazy"
      onError={() => {
        if (src) {
          setFailedUrls((prev) => ({ ...prev, [src]: true }));
        }
      }}
      onLoad={() => setIsLoaded(true)}
      className={`${className} ${
        !isLoaded && !isFailed ? "opacity-90 blur-[0.5px]" : "opacity-100 blur-0"
      } transition-all duration-500`}
      {...props}
    />
  );
}
