"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import QuoteForm from "@/components/QuoteForm";

const captions = [
  "Reliable Moving Services at Your Fingertips",
  "Safe and Hassle-Free Relocation",
  "Affordable Prices with Professional Touch",
];

export default function Banner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % captions.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#0f172a] text-white">
      
      {/* Glow effect */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-green-500 opacity-20 blur-[120px]"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 md:px-12 py-20 items-center">
        
        {/* LEFT */}
        <div>
          <Image
            src="/images/movers-banner.png"
            alt="Pet relocation"
            width={500}
            height={400}
            className="mb-6"
            priority
          />

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Moving Pets with{" "}
          <span className="text-green-400">Care, Comfort & Confidence</span>
        </h1>

        <h2 className="text-lg md:text-xl text-gray-300 mt-4">
          From pet taxi services to international relocation — we handle everything with care.
        </h2>
        </div>

        {/* RIGHT */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 md:p-8 shadow-2xl">
          <QuoteForm />
        </div>

      </div>
    </section>
  );
}