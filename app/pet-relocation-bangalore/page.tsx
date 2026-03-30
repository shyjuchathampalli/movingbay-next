import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Script from "next/script";
import ProcessTabs from "@/components/ProcessTabs";
import FAQSection from "@/components/FAQSection";

export const metadata = {
  title: "Pet Relocation Bangalore | MovingBay",
  description:
    "Safe and reliable pet relocation services in Bangalore with expert handling.",
};

export default function PetRelocationBangalore() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="px-6 md:px-20 py-20 bg-gradient-to-br from-green-50 via-white to-green-100">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pet Relocation Services in Bangalore
            </h1>

            <p className="text-gray-700 mb-4 text-lg">
              MovingBay provides professional pet relocation services in
              Bangalore, ensuring safe, stress-free transport for your pets.
            </p>

            <p className="text-gray-600 mb-4">
              From local pet shifting to intercity and international relocation,
              we handle everything including documentation, transport and care.
            </p>

            <p className="text-gray-600 mb-6">
              Trusted by pet owners across Bangalore, we ensure your pet’s
              comfort, safety and timely delivery.
            </p>

            <ul className="text-green-600 space-y-2 mb-6">
              <li>✔ Door-to-door pet relocation</li>
              <li>✔ Domestic & international services</li>
              <li>✔ Expert pet handling</li>
              <li>✔ Real-time updates</li>
            </ul>

            <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
              Get Free Quote
            </button>
          </div>

          <Image
            src="/images/pet-relocation.jpg"
            alt="Pet relocation services in Bangalore"
            width={600}
            height={400}
            className="rounded-2xl shadow"
          />
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 md:px-20 py-16 bg-white">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          Our Pet Transport Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Dog Relocation",
              desc: "Safe and reliable dog transport across Bangalore and India.",
            },
            {
              title: "Cat Relocation",
              desc: "Stress-free cat transport with special care and handling.",
            },
            {
              title: "International Relocation",
              desc: "Complete assistance for pet travel abroad.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-gray-50 rounded-xl border hover:shadow-md transition"
            >
              <h3 className="font-semibold text-xl text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS (REUSE TABS) */}
      <ProcessTabs />

      {/* CONTENT (SEO HEAVY) */}
      <section className="px-6 md:px-20 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Best Pet Relocation Services in Bangalore
        </h2>

        <p className="text-gray-700 mb-4 leading-relaxed">
          Finding reliable pet relocation services in Bangalore is essential for
          ensuring your pet’s safety. MovingBay specializes in transporting pets
          with care, offering customized solutions based on your pet’s needs.
        </p>

        <p className="text-gray-600 mb-4 leading-relaxed">
          Our services include secure travel arrangements, documentation support,
          crate preparation and real-time tracking, ensuring a seamless
          relocation experience.
        </p>

        <p className="text-gray-600 leading-relaxed">
          Whether relocating within Bangalore or moving to another city or
          country, we ensure your pet reaches safely and comfortably.
        </p>
      </section>

      {/* BENEFITS */}
      <section className="px-6 md:px-20 py-16 bg-white">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          Why Choose MovingBay?
        </h2>

        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            "Experienced Team",
            "Safe Handling",
            "Affordable Pricing",
            "24/7 Support",
          ].map((item, i) => (
            <div key={i} className="p-6 border rounded-xl">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* CTA */}
      <section className="px-6 md:px-20 py-16 bg-green-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Book Pet Relocation in Bangalore Today
        </h2>

        <button className="bg-black px-6 py-3 rounded-lg font-semibold">
          Talk to an Expert
        </button>
      </section>

      <Footer />

      {/* SCHEMA */}
      <Script
        id="pet-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Pet Relocation Services",
            areaServed: "Bangalore",
          }),
        }}
      />
    </>
  );
}