"use client";

import React, { useState } from "react";
import { SparklesIcon, CheckIcon, ArrowRight } from "./Icons";
import { useShop } from "../context/ShopContext";

interface DeliveryConfirmation {
  emailId: string;
  recipient: string;
  discountCode: string;
}

export default function Newsletter() {
  const { showToast } = useShop();
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [deliveryInfo, setDeliveryInfo] = useState<DeliveryConfirmation | null>(null);
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>(["Dehydration & Dryness"]);

  const concerns = [
    "Dehydration & Dryness",
    "Uneven Tone & Spots",
    "Fine Lines & Firmness",
    "Barrier Sensitivity",
  ];

  const toggleConcern = (c: string) => {
    setSelectedConcerns((prev) =>
      prev.includes(c) ? prev.filter((item) => item !== c) : [...prev, c]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const trimmedEmail = email.trim();
    if (!trimmedEmail || !trimmedEmail.includes("@") || !trimmedEmail.includes(".")) {
      setError("Please provide a valid email address to join.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: trimmedEmail,
          concerns: selectedConcerns,
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data?.success) {
        const errorMsg =
          data?.error ||
          `Email delivery failed with status ${response.status}. Please verify your Resend configuration.`;
        setError(errorMsg);
        setIsLoading(false);
        return;
      }

      // Verified delivery confirmed by Resend API
      setDeliveryInfo({
        emailId: data.emailId,
        recipient: data.recipient,
        discountCode: data.discountCode || "GLOW15",
      });
      setIsSubscribed(true);
      showToast("Welcome to The Glowora Society! Your email has been delivered.");
    } catch (err: unknown) {
      const errorMsg =
        err instanceof Error ? err.message : "A network error occurred while connecting to the server.";
      setError(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#1F2421] text-[#FAF8F5] relative overflow-hidden">
      {/* Ambient background decoration */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#536F5A]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#C5A880]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.3em] font-semibold text-[#DFD3C3] mb-4">
          <SparklesIcon className="w-4 h-4 text-[#C5A880]" />
          The Glowora Society
        </span>

        <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-light text-[#FAF8F5] tracking-tight max-w-2xl mx-auto">
          Awaken Your Daily Ritual
        </h2>

        <div className="w-12 h-px bg-[#C5A880] mx-auto my-6" />

        <p className="text-sm sm:text-base text-[#CBDACC] font-light max-w-xl mx-auto leading-relaxed mb-8">
          Join our inner circle. Receive 15% off your inaugural ritual, confidential invitations to seasonal micro-harvests, and clinical skincare consultations.
        </p>

        {isSubscribed && deliveryInfo ? (
          <div className="p-8 bg-[#374B3C]/80 border border-[#536F5A] rounded-2xl max-w-lg mx-auto animate-in zoom-in-95 duration-300">
            <div className="w-12 h-12 rounded-full bg-[#FAF8F5] text-[#536F5A] flex items-center justify-center mx-auto mb-4">
              <CheckIcon className="w-6 h-6" />
            </div>
            <h4 className="font-editorial text-2xl text-[#FAF8F5] mb-2">
              Welcome to The Society
            </h4>
            <p className="text-xs text-[#CBDACC] mb-2">
              Your welcome email and ritual guide have been sent to{" "}
              <strong className="text-white">{deliveryInfo.recipient}</strong>.
            </p>
            <p className="text-[11px] text-[#A6C0AB] font-mono mb-4">
              Resend Delivery ID: {deliveryInfo.emailId}
            </p>

            <div className="p-3 bg-[#1F2421] border border-[#536F5A] rounded-lg inline-flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest text-[#DFD3C3]">
                Your Code:
              </span>
              <span className="font-mono text-sm font-bold text-white tracking-widest">
                {deliveryInfo.discountCode}
              </span>
            </div>
            <p className="text-[11px] text-[#CBDACC] mt-3">
              Check your inbox (or spam/promotions folder) for your full botanical guide and member privileges.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
            {/* Skin focus pills */}
            <div className="text-left">
              <span className="text-[11px] uppercase tracking-wider text-[#9EA6A0] block mb-2 font-medium">
                Select your primary skin focus:
              </span>
              <div className="flex flex-wrap gap-2">
                {concerns.map((c) => {
                  const active = selectedConcerns.includes(c);
                  return (
                    <button
                      type="button"
                      key={c}
                      onClick={() => toggleConcern(c)}
                      className={`px-3 py-1.5 rounded-full text-xs transition-colors border ${
                        active
                          ? "bg-[#536F5A] border-[#536F5A] text-white"
                          : "bg-transparent border-[#3D4440] text-[#CBDACC] hover:border-[#6E7570]"
                      }`}
                    >
                      {c}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Email input field & action */}
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address..."
                value={email}
                disabled={isLoading}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError("");
                }}
                className="flex-1 bg-[#2C332E] border border-[#3D4440] text-white px-5 py-4 rounded text-sm placeholder-[#6E7570] focus:outline-none focus:border-[#DFD3C3] transition-colors disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="px-8 py-4 bg-[#FAF8F5] text-[#1F2421] text-xs uppercase tracking-[0.25em] font-semibold hover:bg-[#DFD3C3] transition-colors rounded flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-60"
              >
                {isLoading ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Unlock 15% Off</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            {error && (
              <div className="p-3 bg-[#42211C]/80 border border-[#8C3A32] rounded text-xs text-[#F2ADA6] text-left">
                <strong>Delivery Notice:</strong> {error}
              </div>
            )}

            <p className="text-[11px] text-[#9EA6A0] font-light">
              By subscribing, you accept our Privacy Policy. Real email delivery powered by Resend.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
