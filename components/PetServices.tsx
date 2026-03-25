"use client";

import { Car, Plane, Globe, PawPrint } from "lucide-react";

export default function PetServices() {
  const services = [
    {
      icon: <Car size={26} />,
      title: "Pet Taxi Services",
      desc: "Safe and comfortable pet transport across cities with trained handlers.",
    },
    {
      icon: <Plane size={26} />,
      title: "Domestic Relocation",
      desc: "Seamless pet relocation across India via air, road and rail.",
    },
    {
      icon: <Globe size={26} />,
      title: "International Travel",
      desc: "End-to-end international pet relocation with documentation support.",
    },
  ];

  return (
    <section className="relative py-24 px-6 md:px-12 overflow-hidden bg-gradient-to-br from-[#f8fafc] via-white to-[#ecfdf5]">
      
      {/* 🐾 Background Paw Elements */}
      <div className="absolute top-10 left-10 opacity-10 rotate-12">
        <PawPrint size={120} />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10 -rotate-12">
        <PawPrint size={140} />
      </div>

      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          Pet Travel Solutions for{" "}
          <span className="text-green-500">Every Journey</span>
        </h2>

        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          From local pet taxi rides to global relocation — we ensure comfort, safety and care.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 relative z-10">
        {services.map((service, i) => (
          <div
            key={i}
            className="group relative p-[1px] rounded-3xl bg-gradient-to-br from-green-400/30 via-transparent to-green-200/30 hover:from-green-400/60 transition"
          >
            {/* Glass Card */}
            <div className="bg-white/70 backdrop-blur-xl border border-white/40 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 h-full">
              
              {/* Icon Bubble */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-100 text-green-600 mb-5 group-hover:scale-110 transition">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900">
                {service.title}
              </h3>

              {/* Desc */}
              <p className="text-gray-600 mt-3 leading-relaxed text-sm">
                {service.desc}
              </p>

              {/* Hover Line Accent */}
              <div className="mt-6 h-[2px] w-0 bg-green-500 group-hover:w-full transition-all duration-300"></div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}