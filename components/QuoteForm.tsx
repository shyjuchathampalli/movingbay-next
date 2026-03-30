"use client";

import { useState } from "react";

const countries = [
  "India",
  "United States (USA)",
  "Canada",
  "United Kingdom (UK)",
  "Germany",
  "France",
  "Netherlands",
  "Italy",
  "Spain",
  "Ireland",
  "Switzerland",
  "United Arab Emirates (UAE)",
  "Saudi Arabia",
  "Qatar",
  "Kuwait",
  "Oman",
  "Bahrain",
  "Singapore",
  "Malaysia",
  "Thailand",
  "Indonesia",
  "Vietnam",
  "Australia",
  "New Zealand",
  "South Africa",
];

export default function QuoteForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    fromCountry: "",
    fromCity: "",
    toCountry: "",
    toCity: "",
    date: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch("/api/send-quote", {
      method: "POST",
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      alert("Quote submitted successfully!");
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      {/* NAME */}
      <input
        name="name"
        placeholder="Full Name"
        onChange={handleChange}
        required
        className="w-full bg-white/10 border border-white/30 text-white placeholder-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 backdrop-blur"
      />

      {/* EMAIL */}
      <input
        name="email"
        type="email"
        placeholder="Email Address"
        onChange={handleChange}
        required
        className="w-full bg-white/10 border border-white/30 text-white placeholder-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 backdrop-blur"
      />

      {/* PHONE */}
      <input
        name="phone"
        placeholder="Phone Number"
        onChange={handleChange}
        required
        className="w-full bg-white/10 border border-white/30 text-white placeholder-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 backdrop-blur"
      />

      {/* FROM */}
      <div className="grid grid-cols-2 gap-3">
        <select
          name="fromCountry"
          onChange={handleChange}
          required
          className="bg-white/10 border border-white/30 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 backdrop-blur"
        >
          <option value="" className="text-black">
            Moving From
          </option>
          {countries.map((c) => (
            <option key={c} value={c} className="text-black">
              {c}
            </option>
          ))}
        </select>

        <input
          name="fromCity"
          placeholder="City"
          onChange={handleChange}
          required
          className="bg-white/10 border border-white/30 text-white placeholder-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 backdrop-blur"
        />
      </div>

      {/* TO */}
      <div className="grid grid-cols-2 gap-3">
        <select
          name="toCountry"
          onChange={handleChange}
          required
          className="bg-white/10 border border-white/30 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 backdrop-blur"
        >
          <option value="" className="text-black">
            Moving To
          </option>
          {countries.map((c) => (
            <option key={c} value={c} className="text-black">
              {c}
            </option>
          ))}
        </select>

        <input
          name="toCity"
          placeholder="City"
          onChange={handleChange}
          required
          className="bg-white/10 border border-white/30 text-white placeholder-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 backdrop-blur"
        />
      </div>

      {/* DATE */}
      <input
        name="date"
        type="date"
        onChange={handleChange}
        required
        className="w-full bg-white/10 border border-white/30 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 backdrop-blur"
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