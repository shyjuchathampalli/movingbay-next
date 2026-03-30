import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Image from "next/image";
import Script from "next/script";

export const metadata = {
  title: "About MovingBay | Pet Relocation Experts in Bangalore",
  description:
    "Learn about MovingBay, a trusted pet relocation company in Bangalore offering safe pet transport services across India and internationally.",
  keywords: [
    "about MovingBay",
    "pet relocation company Bangalore",
    "pet transport company India",
  ],
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="px-6 md:px-20 py-20 bg-gradient-to-br from-green-50 via-white to-green-100">
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          
          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About MovingBay
          </h1>

          {/* SEO SUBTITLE */}
          <p className="text-green-700 font-medium mb-6">
            Trusted Pet Relocation Company in Bangalore for Safe Pet Transport Across India & International Destinations
          </p>

          {/* MAIN CONTENT */}
          <p className="text-gray-700 mb-4 text-lg leading-relaxed">
            MovingBay is a leading pet relocation service provider in Bangalore,
            offering safe, reliable and stress-free pet transport services across
            India and internationally. We specialize in dog transport, cat relocation
            and complete pet travel solutions.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Our experienced team ensures every pet journey is carefully planned with
            secure handling, proper documentation and real-time updates for pet
            parents.
          </p>

          {/* BULLET POINTS */}
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✔</span>
              Door-to-door pet relocation services across cities
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✔</span>
              Domestic & international pet transport solutions
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✔</span>
              Safe travel with trained pet handlers and secure crates
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✔</span>
              Complete documentation and travel support
            </li>
          </ul>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <Image
            src="/images/about-pets.jpg"
            alt="Pet relocation company Bangalore offering dog and cat transport services"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg"
          />

          {/* OPTIONAL SUBTLE BADGE */}
          <div className="absolute -bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow text-sm font-medium text-gray-700">
            Trusted by 1000+ Pet Parents
          </div>
        </div>

      </div>
    </section>

      {/* STATS */}
      <section className="px-6 md:px-20 py-16 bg-white text-center">
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { value: "1000+", label: "Pets Relocated" },
            { value: "50+", label: "Cities Covered" },
            { value: "10+", label: "Countries Served" },
            { value: "100%", label: "Safe Handling" },
          ].map((item, i) => (
            <div key={i}>
              <h3 className="text-3xl font-bold text-green-600">
                {item.value}
              </h3>
              <p className="text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className="px-6 md:px-20 py-20 bg-white">

        {/* ================= STORY + SIDE PANEL ================= */}
        <div className="grid md:grid-cols-3 gap-12 items-start">

          {/* LEFT - OUR STORY */}
          <div className="md:col-span-2 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>

            <p className="text-gray-700 mb-4 leading-relaxed text-lg">
              MovingBay is a Bangalore-based pet relocation company with over 30 years
              of combined experience in pet travel, transport logistics and animal
              handling. We were founded with a simple mission — to make pet relocation
              across India and internationally safe, stress-free and reliable for pet
              parents.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Over the years, we have successfully managed pet transport across the
              length and breadth of India, helping families relocate their dogs and cats
              with complete care. From local pet taxi services in Bangalore to intercity
              and long-distance relocation, our expertise ensures every journey is
              handled with precision and safety.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              We also specialize in international pet relocation, handling complex
              documentation, airline coordination and travel compliance for countries
              like UAE, UK, Canada and Australia. Our professional team ensures that
              every requirement is met, making global pet travel smooth and hassle-free.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">We don’t just transport pets — we ensure their journey is safe, comfortable
              and cared for at every step.</p>

          </div>

          {/* RIGHT - WHY CHOOSE PANEL */}
          <div className="border border-green-200 rounded-2xl p-6 md:p-8 bg-green-50/40">
            
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Why Choose MovingBay
            </h3>

            <ul className="space-y-4">
              {[
                "Experienced Pet Transport Team",
                "Safe & Secure Travel Process",
                "Transparent Pricing & No Hidden Costs",
                "24/7 Customer Support",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  
                  {/* GREEN DOT */}
                  <span className="w-2 h-2 mt-2 rounded-full bg-green-600"></span>

                  <span className="text-gray-700 text-sm md:text-base">
                    {item}
                  </span>

                </li>
              ))}

              <span className="text-gray-700 text-sm md:text-base">
                    With trained handlers, structured processes and transparent communication,
              MovingBay has become a trusted name for pet relocation services in India.
                  </span>
            </ul>

          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-200 my-16"></div>

        {/* ================= CORE VALUES ================= */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            
            <div>
              <h3 className="font-semibold text-xl text-gray-900 mb-2">
                Care
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every pet is treated like family with attention, compassion and
                personalized care throughout the journey.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl text-gray-900 mb-2">
                Safety
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We follow strict safety protocols, secure travel arrangements and
                proper handling techniques to ensure stress-free transport.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl text-gray-900 mb-2">
                Trust
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We build long-term relationships with pet parents through reliable
                service, transparency and consistent communication.
              </p>
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
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "MovingBay",
            url: "https://movingbay.com",
          }),
        }}
      />
    </>
  );
}