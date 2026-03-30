import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Partner with MovingBay | Pet Relocation & Transport Partnerships",
  description:
    "Join hands with MovingBay as a partner for pet relocation, pet transport and international pet travel services. Collaborate with us across India and globally.",
};

export default function PartnerPage() {
  return (
    <>
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="px-6 md:px-20 py-20 bg-gradient-to-br from-green-50 via-white to-green-100">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Become a Partner with MovingBay
          </h1>

          <p className="text-lg text-gray-700 mb-4">
            Collaborate with one of India’s trusted pet relocation companies and
            grow your business with reliable domestic and international pet
            transport solutions.
          </p>

          <p className="text-gray-600">
            We welcome partnerships with pet professionals, logistics providers,
            relocation agencies and global stakeholders to build a strong and
            seamless pet travel network.
          </p>
        </div>
      </section>

      {/* ================= WHO CAN PARTNER ================= */}
      <section className="px-6 md:px-20 py-16 bg-white">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          Who Can Partner With Us
        </h2>

        <div className="grid md:grid-cols-2 gap-6 text-gray-700">
          {[
            "Pet relocation companies (Domestic & International)",
            "Pet taxi service providers & transporters",
            "Veterinary clinics & pet hospitals",
            "Pet boarding & grooming centers",
            "Logistics & cargo service providers",
            "Freelance pet handlers & relocation consultants",
          ].map((item, i) => (
            <div key={i}>• {item}</div>
          ))}
        </div>
      </section>

      {/* ================= PARTNERSHIP TYPES ================= */}
      <section className="px-6 md:px-20 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          Partnership Opportunities
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Domestic Transport Partnerships",
              desc: "Work with us for intercity and local pet relocation services across India.",
            },
            {
              title: "International Relocation Network",
              desc: "Collaborate on global pet travel including documentation, airline handling and delivery.",
            },
            {
              title: "Referral & Lead Partnerships",
              desc: "Earn by referring clients and connecting pet parents to our relocation services.",
            },
          ].map((item, i) => (
            <div key={i}>
              <h3 className="font-semibold text-xl text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="px-6 md:px-20 py-16 bg-white">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          Benefits of Partnering with MovingBay
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <ul className="space-y-3 text-gray-700">
            <li>✔ Access to a growing pet relocation network</li>
            <li>✔ Consistent business opportunities & leads</li>
            <li>✔ Transparent and fair revenue sharing</li>
            <li>✔ Support in documentation and coordination</li>
          </ul>

          <ul className="space-y-3 text-gray-700">
            <li>✔ Expand your reach across India & globally</li>
            <li>✔ Work with a professional and experienced team</li>
            <li>✔ Long-term collaboration and scalability</li>
            <li>✔ Brand association with a trusted company</li>
          </ul>
        </div>
      </section>

      {/* ================= FORM ================= */}
      <section
        id="partner-form"
        className="px-6 md:px-20 py-20 bg-green-600"
        >
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-2xl shadow-lg border">

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Partner With Us
            </h2>

            <form className="space-y-5">
            
            {/* INPUT */}
            <input
                type="text"
                placeholder="Full Name / Company Name"
                className="w-full border border-gray-300 p-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 p-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-300 p-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            {/* SELECT */}
            <select className="w-full border border-gray-300 p-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500">
                <option>Type of Partnership</option>
                <option>Domestic Transport</option>
                <option>International Relocation</option>
                <option>Referral Partner</option>
                <option>Other</option>
            </select>

            {/* TEXTAREA */}
            <textarea
                placeholder="Tell us about your business / partnership idea"
                className="w-full border border-gray-300 p-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                rows={4}
            />

            {/* BUTTON */}
            <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition">
                Submit Partnership Request
            </button>

            </form>
        </div>
        </section>

      <Footer />
    </>
  );
}