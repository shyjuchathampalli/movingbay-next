import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Script from "next/script";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Pet Travel India | Pet Taxi & Pet Transport Services | MovingBay",
  description:
    "Looking for pet travel services in India? MovingBay offers safe pet taxi, pet transport and relocation services for dogs and cats across India.",
  keywords: [
    "pet travel India",
    "pet taxi India",
    "dog transport India",
    "pet relocation India",
    "pet transport service India",
  ],
};

export default function PetTravelIndia() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="px-6 md:px-20 py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* LEFT */}
          <div>
            <p className="text-green-600 font-semibold mb-2">
              Pet Travel Services Across India
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Pet’s Travel Companion Anywhere in India
            </h1>

            <p className="text-gray-700 mb-4 text-lg">
              MovingBay provides safe, reliable and professional pet travel
              services across India, ensuring your pet’s comfort and safety.
            </p>

            <p className="text-gray-600 mb-6">
              Whether you need a pet taxi within the city or intercity pet
              transport, our expert team ensures a stress-free journey.
            </p>

            <div className="flex gap-4">
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold">
                Get Free Quote
              </button>
              <button className="border border-green-600 text-green-600 px-6 py-3 rounded-lg">
                Talk to Expert
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <Image
            src="/images/pet-travel.jpg"
            alt="Pet travel services India"
            width={600}
            height={400}
            className="rounded-2xl shadow"
          />
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="px-6 md:px-20 py-8 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          
          {[
            {
              value: "1000+",
              label: "Pets Transported Across India",
            },
            {
              value: "50+",
              label: "Cities Covered Nationwide",
            },
            {
              value: "24/7",
              label: "Customer Support Available",
            },
            {
              value: "100%",
              label: "Safe & Secure Pet Travel",
            },
          ].map((item, i) => (
            
            <div
              key={i}
              className="py-6 px-4 text-center flex flex-col items-center justify-center"
            >
              
              {/* VALUE */}
              <h3 className="text-2xl md:text-3xl font-bold text-green-600 mb-1">
                {item.value}
              </h3>

              {/* LABEL */}
              <p className="text-gray-600 text-xs md:text-sm max-w-[160px] leading-snug">
                {item.label}
              </p>

            </div>
          ))}
          
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 md:px-20 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          Our Pet Travel Services in India
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Pet Taxi Service",
              desc: "Book safe and comfortable pet taxi services for vet visits, airport transfers and local travel.",
            },
            {
              title: "Intercity Pet Transport",
              desc: "Reliable pet transport between cities across India with complete safety.",
            },
            {
              title: "Long Distance Relocation",
              desc: "Secure long-distance pet relocation with professional handling.",
            },
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white rounded-xl border shadow-sm">
              <h3 className="font-semibold text-xl mb-2 text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="px-6 md:px-20 py-20 bg-white">
  
        {/* HEADER */}
        <div className="max-w-4xl mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Reliable Pet Travel Services in India
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed text-lg">
            Pet travel in India requires careful planning, professional handling and
            safe transport solutions. MovingBay provides end-to-end pet travel
            services including pet taxi, intercity relocation and long-distance pet
            transport across India.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Our expert team ensures your pet travels safely using secure carriers,
            trained handlers and stress-free travel methods. Whether you need pet taxi
            services for short distances or full relocation across cities, we deliver
            reliable and comfortable travel experiences.
          </p>

          <p className="text-gray-700 leading-relaxed">
            MovingBay is trusted by pet owners across India for safe dog transport,
            cat relocation and pet travel services with real-time updates and complete
            care.
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          
          {[
            {
              title: "Door-to-Door Pickup",
              desc: "Convenient pet pickup and drop service across cities.",
              icon: "🚚",
            },
            {
              title: "Safe Travel Crates",
              desc: "IATA-approved crates ensuring safety and comfort.",
              icon: "📦",
            },
            {
              title: "Experienced Handlers",
              desc: "Professionals trained in pet care and transport.",
              icon: "🐾",
            },
            {
              title: "Live Travel Updates",
              desc: "Stay informed with real-time updates during travel.",
              icon: "📍",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-gray-50 rounded-xl border hover:shadow-md transition text-left"
            >
              <div className="text-3xl mb-4">{item.icon}</div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* FAQ */}
      <FAQSection />

      {/* CTA */}
      <CTASection />

      <Footer />

      {/* SCHEMA */}
      <Script
        id="pet-travel-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Pet Travel Services",
            areaServed: "India",
          }),
        }}
      />
    </>
  );
}