"use client";

import { useState } from "react";

const tabs = [
  {
    title: "Consultation",
    content: `
We provide expert consultation for international pet relocation from India. Our team evaluates your pet’s travel requirements and destination regulations.

Whether relocating pets from Bangalore to UAE, UK or Canada, we ensure complete planning.
    `,
  },
  {
    title: "Documentation",
    content: `
We handle health certificates, vaccination records, microchipping and import permits.

Our documentation ensures smooth pet relocation from India to any country without delays.
    `,
  },
  {
    title: "Travel Preparation",
    content: `
We prepare pets using IATA-approved crates, safe feeding schedules and stress-free handling techniques.

Ensuring comfort during long-distance travel is our priority.
    `,
  },
  {
    title: "Safe Delivery",
    content: `
We ensure safe delivery with real-time tracking and expert coordination at every stage.

From airport to final destination, your pet is handled with care.
    `,
  },
];

export default function ProcessTabs() {
  const [active, setActive] = useState(0);

  return (
    <section className="px-6 md:px-20 py-16 bg-white text-gray-900">
      <h2 className="text-3xl font-bold mb-8">
        Our International Pet Relocation Process
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap gap-3 mb-8">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`px-5 py-2 rounded-full border transition ${
              active === i
                ? "bg-black text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="bg-gray-50 p-6 rounded-xl border shadow-sm">
        <p className="text-gray-700 whitespace-pre-line leading-relaxed">
          {tabs[active].content}
        </p>
      </div>
    </section>
  );
}