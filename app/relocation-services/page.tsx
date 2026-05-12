import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title:
    "Relocation Services | International Relocation & Moving Solutions | MovingBay",
  description:
    "Explore MovingBay relocation services including international relocation, employee mobility, household moving, pet relocation, storage solutions and destination support.",
  keywords: [
    "relocation services",
    "international relocation",
    "employee relocation services",
    "global mobility solutions",
    "household moving",
    "pet relocation",
    "moving company India",
    "international movers",
  ],
};

export default function RelocationServicesPage() {
  const services = [
    {
      title: "International Relocation",
      desc: "Complete overseas moving solutions with customs support, documentation handling and destination coordination.",
    },
    {
      title: "Employee Mobility",
      desc: "Tailored corporate relocation programs designed to help businesses relocate employees seamlessly.",
    },
    {
      title: "Pet Relocation",
      desc: "Safe and stress-free domestic & international pet transport with complete travel assistance.",
    },
    {
      title: "Household Goods Moving",
      desc: "Professional packing, transportation and delivery for homes, apartments and villas.",
    },
    {
      title: "Storage Solutions",
      desc: "Short-term and long-term storage facilities with secure inventory management.",
    },
    {
      title: "Destination Support",
      desc: "Area orientation, temporary accommodation and settling-in assistance for families.",
    },
  ];

  const process = [
    {
      title: "Free Consultation",
      desc: "We understand your relocation requirements, destination, timeline and budget.",
    },
    {
      title: "Move Planning",
      desc: "Our specialists create a customized relocation strategy tailored to your needs.",
    },
    {
      title: "Packing & Documentation",
      desc: "We manage packing, inventory, paperwork and all logistics professionally.",
    },
    {
      title: "Transportation & Delivery",
      desc: "Safe transport and timely delivery with real-time coordination and updates.",
    },
  ];

  const benefits = [
    "Dedicated relocation manager",
    "International & domestic relocation expertise",
    "Transparent pricing with no hidden costs",
    "Professional packing & handling",
    "Secure transport network",
    "Storage & warehousing solutions",
    "Corporate & family relocation support",
    "24/7 customer assistance",
  ];

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#071b34] via-[#0d2b4d] to-[#0f3a63]">
        <div className="px-6 md:px-20 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}
            <div>
              <div className="inline-flex items-center bg-green-500/10 border border-green-400/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                Global Relocation Expert
              </div>

              <h1 className="text-[44px] md:text-[54px] font-bold leading-tight text-white mb-6">
                International Relocation Services for Families, Businesses and Pets
                </h1>

              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
                MovingBay delivers seamless international relocation and mobility
                solutions for families, professionals and businesses. From
                household moving and pet relocation to destination support and
                employee mobility, we manage every detail with care,
                professionalism and precision.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="https://wa.me/918618173141?text=Hi%20MovingBay,%20I%20need%20assistance%20with%20relocation%20services."
                  target="_blank"
                  className="bg-green-500 hover:bg-green-600 transition-all text-white px-8 py-4 rounded-xl font-semibold shadow-lg"
                >
                  Request Free Quote
                </Link>

                <Link
                  href="/about"
                  className="border border-white/20 hover:bg-white/10 transition-all text-white px-8 py-4 rounded-xl font-semibold"
                >
                  Learn About Us
                </Link>
              </div>


            </div>

            {/* RIGHT */}
            <div className="relative">
              <div className="absolute inset-0 bg-green-500 blur-3xl opacity-20 rounded-full"></div>

              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl">
                <Image
                  src="/images/relocate.jpg"
                  alt="International relocation services"
                  width={700}
                  height={600}
                  className="w-full h-auto object-contain"
                />

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-white/10 rounded-2xl p-5 text-center">
                    <h3 className="text-3xl font-bold text-green-400">
                      1000+
                    </h3>
                    <p className="text-gray-300 text-sm mt-1">
                      Successful Relocations
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-2xl p-5 text-center">
                    <h3 className="text-3xl font-bold text-green-400">
                      20+
                    </h3>
                    <p className="text-gray-300 text-sm mt-1">
                      Countries Served
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="bg-white px-6 md:px-20 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <Image
              src="/images/moving-service.jpg"
              alt="Relocation support services"
              width={700}
              height={500}
              className="rounded-3xl shadow-xl"
            />
          </div>

          <div>
            <span className="text-green-600 font-semibold uppercase tracking-wider">
              Tailored Relocation Support
            </span>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-4 mb-6 leading-tight">
              Helping Families & Businesses Relocate Globally
            </h2>


            <p className="text-gray-600 leading-relaxed mb-6">
              MovingBay combines relocation expertise, logistics management and
              customer-first support to deliver smooth moving experiences across
              India and international destinations. Whether you are relocating
              your family, employees, pets or office setup, our dedicated team
              ensures every move is managed with precision and care.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {benefits.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl"
                >
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>

                  <p className="text-gray-700 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#f7fafc] px-6 md:px-20 py-20">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-green-600 font-semibold uppercase tracking-wider">
            What We Offer
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            Complete Relocation Services Under One Roof
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            From international mobility programs to household transport and
            destination assistance, MovingBay provides end-to-end relocation
            solutions tailored for modern global living.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-2xl mb-6">
                🚚
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CORPORATE RELOCATION */}
      <section className="bg-[#101828] text-white px-6 md:px-20 py-24 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-green-500 opacity-10 blur-3xl rounded-full"></div>

        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <span className="text-green-400 font-semibold uppercase tracking-wider">
              Corporate Mobility
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 leading-tight">
              Relocation Programs Designed For Modern Businesses
            </h2>

            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              A strong relocation strategy helps businesses attract, develop and
              retain top talent. MovingBay supports organizations with
              customized employee relocation programs designed for efficiency,
              compliance and employee satisfaction.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {[
                "Policy & strategy consulting",
                "Immigration coordination",
                "Expense management",
                "Supplier management",
                "Assignment management",
                "Group moves",
                "VIP relocation assistance",
                "Repatriation support",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-4"
                >
                  <span className="text-green-400">✔</span>

                  <span className="text-sm text-gray-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Image
              src="/images/relocation.jpg"
              alt="Corporate relocation services"
              width={700}
              height={600}
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white px-6 md:px-20 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-green-600 font-semibold uppercase tracking-wider">
            Our Process
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            How MovingBay Handles Your Relocation
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            We follow a structured relocation process to ensure every move is
            smooth, transparent and stress-free from start to finish.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((item, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-b from-green-50 to-white border border-green-100 rounded-3xl p-8"
            >
              <div className="w-14 h-14 rounded-2xl bg-green-500 text-white flex items-center justify-center text-xl font-bold mb-6">
                {index + 1}
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>


      {/* CTA */}
      <section className="bg-gradient-to-r from-green-500 to-emerald-600 px-6 md:px-20 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Planning Your Next Relocation?
          </h2>

          <p className="text-white/90 text-lg leading-relaxed max-w-3xl mx-auto mb-10">
            Whether you are moving internationally, relocating employees or
            transporting household belongings and pets, MovingBay is ready to
            deliver a smooth and stress-free relocation experience.
          </p>

          <Link
  href="https://wa.me/918618173141?text=Hi%20MovingBay,%20I%20need%20assistance%20with%20relocation%20services."
  target="_blank"
  className="bg-green-500 hover:bg-green-600 transition-all text-white px-8 py-4 rounded-xl font-semibold shadow-lg"
>
  Request Free Quote
</Link>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* CTA SECTION */}
      <CTASection />

      {/* FOOTER */}
      <Footer />

      {/* SCHEMA */}
      <Script
        id="relocation-services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MovingCompany",
            name: "MovingBay",
            url: "https://movingbay.com",
            description:
              "MovingBay provides international relocation, employee mobility, household moving, pet relocation and storage solutions.",
          }),
        }}
      />
    </>
  );
}