import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import Image from "next/image";

export const metadata = {
  title: "Request a Pet Relocation Quote | MovingBay India",
  description:
    "Get a free quote for pet relocation services in India and internationally. Safe, reliable and stress-free pet transport by MovingBay.",
};

export default function RequestQuotePage() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="px-6 md:px-20 py-20 bg-gradient-to-br from-blue-900 via-slate-800 to-blue-950 text-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Get a Free Quote for{" "}
              <span className="text-green-400">
                Pet Relocation Services
              </span>
            </h1>

            <p className="text-gray-300 mb-4 text-lg leading-relaxed">
              Planning to relocate your pet within India or abroad? MovingBay
              provides safe, reliable and stress-free pet transport services
              tailored to your needs.
            </p>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Our experts handle everything — from consultation and documentation
              to travel coordination and delivery. Get a personalized quote today
              and ensure a smooth journey for your pet.
            </p>

            {/* BULLETS */}
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>✔ Domestic & International Pet Relocation</li>
              <li>✔ IATA Approved Travel Crates</li>
              <li>✔ Documentation & Compliance Support</li>
              <li>✔ Door-to-Door Pickup & Delivery</li>
            </ul>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 md:p-8 rounded-2xl shadow-2xl">
            <h2 className="text-xl font-semibold mb-4 text-white text-center">
              Request Your Quote
            </h2>

            <QuoteForm />
          </div>
        </div>
      </section>

      {/* TRUST / SEO SECTION */}
      <section className="px-6 md:px-20 py-16 bg-white">
        <div className="max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Trusted Pet Relocation Experts in India
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed">
            MovingBay is a Bangalore-based pet relocation company offering
            professional pet transport services across India and worldwide.
            Whether you are moving within the city, relocating across states or
            planning international pet travel, we ensure your pet’s journey is
            safe and comfortable.
          </p>

          <p className="text-gray-600 mb-4 leading-relaxed">
            Our team specializes in handling documentation, airline approvals,
            crate training and safe transit arrangements. We work with trusted
            partners and follow strict safety standards to ensure stress-free
            travel for your pets.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Get in touch with us today and receive a customized pet relocation
            quote based on your requirements.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}