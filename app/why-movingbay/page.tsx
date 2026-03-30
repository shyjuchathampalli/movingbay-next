import Navbar from "@/components/Navbar";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Image from "next/image";
import Script from "next/script";
import { CheckCircle, XCircle } from "lucide-react";

export const metadata = {
  title: "Why Choose MovingBay | Trusted Pet Relocation Experts",
  description:
    "Discover why MovingBay is the preferred choice for pet relocation in Bangalore and across India. Safe, reliable and expert pet transport services.",
  keywords: [
    "why choose MovingBay",
    "pet relocation company Bangalore",
    "best pet transport India",
  ],
};

export default function WhyMovingBay() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="px-6 md:px-20 py-20 bg-gradient-to-br from-green-50 via-white to-green-100 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Why Choose MovingBay?
        </h1>

        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          We go beyond just pet relocation — we ensure safety, comfort and peace
          of mind for pet owners across Bangalore and India.
        </p>
      </section>

      {/* TRUST POINTS */}
      <section className="px-6 md:px-20 py-16 bg-white">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Expert Pet Handling",
              desc: "Our trained professionals ensure your pet is handled with care at every step of the journey.",
            },
            {
              title: "Safe & Secure Transport",
              desc: "We use safe travel methods, proper crates and real-time monitoring for maximum safety.",
            },
            {
              title: "Complete Documentation",
              desc: "We handle all paperwork including health certificates, permits and airline approvals.",
            },
            {
              title: "Door-to-Door Service",
              desc: "From pickup to final delivery, we manage the entire relocation process seamlessly.",
            },
            {
              title: "Real-Time Updates",
              desc: "Stay informed throughout the journey with timely updates and communication.",
            },
            {
              title: "Affordable Pricing",
              desc: "Transparent pricing with no hidden charges for reliable pet transport services.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-gray-50 rounded-xl border hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VISUAL + CONTENT */}
      <section className="px-6 md:px-20 py-20 bg-gray-50">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <Image
            src="/images/why-movingbay.jpg"
            alt="Why choose MovingBay pet relocation"
            width={600}
            height={400}
            className="rounded-2xl shadow"
          />

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Trusted by Pet Owners Across India
            </h2>

            <p className="text-gray-700 mb-4 leading-relaxed">
              MovingBay has earned the trust of hundreds of pet owners by
              delivering safe, reliable and professional pet relocation services.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our commitment to safety, transparency and customer satisfaction
              makes us one of the most trusted pet transport companies in
              Bangalore and across India.
            </p>
          </div>
        </div>
      </section>

      {/* COMPARISON SECTION */}
      

    <section className="px-6 md:px-20 py-20 bg-white">
      
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-14 text-center">
        What Makes Us Different?
      </h2>

      <div className="grid md:grid-cols-2 gap-10">

        {/* OTHERS */}
        <div className="p-8 rounded-2xl border border-gray-200 bg-gray-50">
          
          <h3 className="text-xl font-semibold mb-6 text-red-500">
            Others
          </h3>

          <div className="space-y-4">
            {[
              "Limited safety measures",
              "No real-time updates",
              "Hidden costs",
              "Inexperienced handling",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200"
              >
                <XCircle className="text-red-500 w-5 h-5 mt-1" />
                <p className="text-gray-700 text-sm md:text-base">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* MOVINGBAY */}
        <div className="p-8 rounded-2xl border border-green-200 bg-gradient-to-br from-green-50 to-green-100 shadow-sm">
          
          <h3 className="text-xl font-semibold mb-6 text-green-600">
            MovingBay
          </h3>

          <div className="space-y-4">
            {[
              "High safety standards with professional handling",
              "Real-time tracking & continuous updates",
              "Transparent pricing with no hidden charges",
              "Expert trained handlers & travel coordination",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 bg-white rounded-xl border border-green-200 shadow-sm"
              >
                <CheckCircle className="text-green-600 w-5 h-5 mt-1" />
                <p className="text-gray-800 text-sm md:text-base font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>

      {/* FAQ */}
                  <FAQSection />
            
                  {/* CTA */}
                  <CTASection />

      <Footer />

      {/* SCHEMA */}
      <Script
        id="why-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "MovingBay",
            description: "Trusted pet relocation service provider in India",
          }),
        }}
      />
    </>
  );
}