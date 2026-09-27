"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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

  const [submitting, setSubmitting] = useState(false);

  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setSubmitting(true);

    try {
      const res = await fetch("/api/send-quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        router.push("/thank-you");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Unable to submit your request. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = `
    w-full
    rounded-xl
    border border-[#294457]
    bg-[#0d2435]
    px-4
    py-3.5
    text-sm
    text-[#edf5f8]
    placeholder:text-[#6f91a8]
    outline-none
    transition-all
    duration-200
    focus:border-[#57c7ce]
    focus:ring-2
    focus:ring-[#57c7ce]/10
    hover:border-[#3b5c70]
  `;

  const selectClass = `
    w-full
    rounded-xl
    border border-[#294457]
    bg-[#0d2435]
    px-4
    py-3.5
    text-sm
    text-[#edf5f8]
    outline-none
    transition-all
    duration-200
    focus:border-[#57c7ce]
    focus:ring-2
    focus:ring-[#57c7ce]/10
    hover:border-[#3b5c70]
  `;

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      {/* NAME */}
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[#8faabd]"
        >
          Full Name
        </label>

        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter your full name"
          value={form.name}
          onChange={handleChange}
          required
          className={inputClass}
        />
      </div>

      {/* EMAIL */}
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[#8faabd]"
        >
          Email Address
        </label>

        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange}
          required
          className={inputClass}
        />
      </div>

      {/* PHONE */}
      <div>
        <label
          htmlFor="phone"
          className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[#8faabd]"
        >
          Phone Number
        </label>

        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+91 XXXXX XXXXX"
          value={form.phone}
          onChange={handleChange}
          required
          className={inputClass}
        />
      </div>

      {/* FROM */}
      <div>
        <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[#8faabd]">
          Moving From
        </label>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <select
            name="fromCountry"
            value={form.fromCountry}
            onChange={handleChange}
            required
            className={selectClass}
          >
            <option value="" disabled>
              Select country
            </option>

            {countries.map((country) => (
              <option
                key={country}
                value={country}
                className="bg-[#0d2435] text-white"
              >
                {country}
              </option>
            ))}
          </select>

          <input
            name="fromCity"
            type="text"
            placeholder="City"
            value={form.fromCity}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>
      </div>

      {/* TO */}
      <div>
        <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[#8faabd]">
          Moving To
        </label>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <select
            name="toCountry"
            value={form.toCountry}
            onChange={handleChange}
            required
            className={selectClass}
          >
            <option value="" disabled>
              Select country
            </option>

            {countries.map((country) => (
              <option
                key={country}
                value={country}
                className="bg-[#0d2435] text-white"
              >
                {country}
              </option>
            ))}
          </select>

          <input
            name="toCity"
            type="text"
            placeholder="City"
            value={form.toCity}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>
      </div>

      {/* DATE */}
      <div>
        <label
          htmlFor="date"
          className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[#8faabd]"
        >
          Preferred Travel Date
        </label>

        <input
          id="date"
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
          required
          className={inputClass}
        />
      </div>

      {/* BUTTON */}
      <button
        type="submit"
        disabled={submitting}
        className="
          mt-2
          w-full
          rounded-full
          bg-[#8fc63f]
          px-6
          py-3.5
          text-sm
          font-bold
          text-[#092033]
          shadow-[0_10px_30px_rgba(143,198,63,0.16)]
          transition-all
          duration-200
          hover:bg-[#a1d64c]
          hover:shadow-[0_12px_35px_rgba(143,198,63,0.24)]
          disabled:cursor-not-allowed
          disabled:opacity-60
        "
      >
        {submitting ? "Sending Request..." : "Get Free Quote"}
      </button>

      {/* PRIVACY NOTE */}
      <p className="pt-1 text-center text-xs leading-5 text-[#68869b]">
        Your information is used only to prepare and respond to your
        relocation enquiry.
      </p>
    </form>
  );
}