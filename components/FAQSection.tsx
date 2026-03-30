"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How much does pet relocation cost in Bangalore?",
    a: "The cost of pet relocation in Bangalore depends on factors such as distance, type of transport, size of the pet and documentation requirements. Contact MovingBay for a customized quote tailored to your needs.",
  },
  {
    q: "Is pet relocation safe for dogs and cats?",
    a: "Yes, pet relocation is completely safe when handled by professionals. At MovingBay, we ensure proper crates, trained handlers, safe travel conditions and continuous monitoring throughout the journey.",
  },
  {
    q: "Do you provide pet transport within Bangalore?",
    a: "Yes, we offer local pet transport services within Bangalore for vet visits, relocation and daily travel needs with complete safety and comfort.",
  },
  {
    q: "Do you offer intercity pet relocation in India?",
    a: "Yes, MovingBay provides intercity pet transport services across major cities in India with door-to-door pickup and delivery.",
  },
  {
    q: "Can you help with international pet relocation?",
    a: "Yes, we specialize in international pet transport from India to countries like UAE, UK, Canada and Australia including documentation, airline coordination and safe travel arrangements.",
  },
  {
    q: "What documents are required for pet relocation?",
    a: "Required documents include vaccination records, health certificates, microchipping details and country-specific permits. Our team will guide you through the entire documentation process.",
  },
  {
    q: "How do you ensure my pet’s comfort during travel?",
    a: "We use IATA-approved crates, proper feeding schedules, hydration management and trained handlers to ensure your pet travels comfortably and stress-free.",
  },
  {
    q: "How long does pet relocation take?",
    a: "The duration depends on the destination and type of transport. Local moves can be completed within a day, while intercity or international relocations may take a few days.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="px-6 md:px-20 py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
        Frequently Asked Questions
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((item, i) => (
          <div
            key={i}
            className="border rounded-xl bg-white shadow-sm overflow-hidden"
          >
            <button
              onClick={() => setActive(active === i ? null : i)}
              className="w-full text-left px-6 py-4 font-semibold text-gray-900 flex justify-between items-center"
            >
              {item.q}
              <span className="text-xl">
                {active === i ? "−" : "+"}
              </span>
            </button>

            {active === i && (
              <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}