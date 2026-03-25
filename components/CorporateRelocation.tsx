"use client";

import { Stethoscope, IdCard, FileText, Car } from "lucide-react";
import Image from "next/image";

export default function CorporateRelocation() {
  const services = [
    {
      icon: <Stethoscope size={26} />,
      title: "Veterinary Examination",
      desc: "Complete health checks to ensure your pet is travel-ready and stress-free.",
    },
    {
      icon: <IdCard size={26} />,
      title: "Microchip Identification",
      desc: "Secure identification for safe and trackable pet relocation.",
    },
    {
      icon: <FileText size={26} />,
      title: "Licensing & Permits",
      desc: "We handle all travel documentation and approvals seamlessly.",
    },
    {
      icon: <Car size={26} />,
      title: "Doorstep Assistance",
      desc: "Paperwork and preparation handled right at your home.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-white py-24 px-6 md:px-12">
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Comprehensive Pet Relocation Services
          </h2>

          <p className="text-gray-600 mt-4 mb-10 text-lg">
            Designed for safety, comfort, and complete peace of mind.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >
                <div className="mb-4 text-green-500">
                  {service.icon}
                </div>

                <h3 className="text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>

                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          
          <Image
            src="/images/contact-us.jpg"
            alt="Pet relocation"
            width={600}
            height={500}
            className="rounded-2xl object-cover shadow-lg"
          />

          {/* Soft Gradient Overlay */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-black/60 via-black/40 to-transparent flex items-center">
            
            <div className="p-8 text-white max-w-md">
              <h3 className="text-xl md:text-2xl font-semibold leading-snug">
                Contact MovingBay today to create a safe, stress-free relocation tailored to your needs.
              </h3>

              <p className="mt-4 text-gray-200">
                Have a question?
              </p>

              <a
                href="https://wa.me/918618173141"
                target="_blank"
                className="inline-block mt-6 bg-green-500 hover:bg-green-400 text-black font-semibold px-6 py-3 rounded-full shadow-lg transition"
              >
                Ask our moving expert
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}