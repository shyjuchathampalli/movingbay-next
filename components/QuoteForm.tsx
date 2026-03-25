"use client";

import { useState } from "react";

const countries = ["India", "USA", "UK", "UAE", "Australia"];

export default function QuoteForm() {
  const [movingDate, setMovingDate] = useState("");

  return (
    <form className="space-y-4">
      
      {/* Input */}
      <input
        type="text"
        placeholder="Full Name"
        className="w-full bg-white/20 border border-white/30 text-white placeholder-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
      />

      <input
        type="email"
        placeholder="Email Address"
        className="w-full bg-white/20 border border-white/30 text-white placeholder-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
      />

      <input
        type="tel"
        placeholder="Phone Number"
        className="w-full bg-white/20 border border-white/30 text-white placeholder-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
      />

      {/* FROM */}
      <div className="grid grid-cols-2 gap-3">
        <select className="bg-white/20 border border-white/30 text-white p-3 rounded-lg">
          <option className="text-black">Moving From</option>
          {countries.map((c) => (
            <option key={c} className="text-black">{c}</option>
          ))}
        </select>

        <input
          type="text"
          placeholder="City"
          className="bg-white/20 border border-white/30 text-white placeholder-gray-300 p-3 rounded-lg"
        />
      </div>

      {/* TO */}
      <div className="grid grid-cols-2 gap-3">
        <select className="bg-white/20 border border-white/30 text-white p-3 rounded-lg">
          <option className="text-black">Moving To</option>
          {countries.map((c) => (
            <option key={c} className="text-black">{c}</option>
          ))}
        </select>

        <input
          type="text"
          placeholder="City"
          className="bg-white/20 border border-white/30 text-white placeholder-gray-300 p-3 rounded-lg"
        />
      </div>

      {/* DATE */}
      <input
        type="date"
        value={movingDate}
        onChange={(e) => setMovingDate(e.target.value)}
        className="w-full bg-white/20 border border-white/30 text-white p-3 rounded-lg"
      />

      {/* BUTTON */}
      <button
        type="submit"
        className="w-full bg-green-500 hover:bg-green-400 text-black font-semibold py-3 rounded-lg transition duration-300 shadow-lg"
      >
        Get Free Quote
      </button>
    </form>
  );
}