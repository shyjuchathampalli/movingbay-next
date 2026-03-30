import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Script from "next/script";

export const metadata = {
  title:
    "Dog Transport Bangalore | Safe Dog Relocation Services | MovingBay",
  description:
    "Looking for dog transport services in Bangalore? MovingBay offers safe, affordable and stress-free dog relocation locally and across India.",
  keywords: [
    "dog transport Bangalore",
    "dog relocation Bangalore",
    "pet transport Bangalore",
    "dog shifting Bangalore",
  ],
};

export default function DogTransportBangalore() {
  return (
    <>
      <Navbar />

      {/* HERO WITH GRADIENT */}
      <section className="grid md:grid-cols-2 min-h-[85vh] bg-gradient-to-br from-green-50 via-white to-green-100">
        <div className="flex flex-col justify-center px-6 md:px-20 text-gray-900">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Dog Transport Services in Bangalore
          </h1>

          <p className="text-gray-700 mb-4 text-lg">
            MovingBay offers professional dog transport services in Bangalore,
            ensuring safe, comfortable and stress-free relocation for your pets.
          </p>

          <p className="text-gray-600 mb-4">
            Whether you need local dog transport, intercity relocation or
            long-distance shifting across India, our expert handlers ensure a
            smooth and secure journey.
          </p>

          <p className="text-gray-600 mb-6">
            Trusted by pet owners across Bangalore, we specialize in safe dog
            relocation with proper planning, real-time tracking and complete
            care throughout the journey.
          </p>

          <ul className="text-green-600 space-y-2 mb-6">
            <li>✔ Local & intercity dog transport</li>
            <li>✔ Safe crate & travel handling</li>
            <li>✔ Real-time updates</li>
            <li>✔ Affordable pricing</li>
          </ul>

          <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold w-fit hover:bg-green-700 transition">
            Get Free Quote
          </button>
        </div>

        <div className="relative">
          <Image
            src="/images/dog-transport.jpg"
            alt="Dog transport services in Bangalore"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 md:px-20 py-12 bg-white">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Why Choose MovingBay for Dog Transport in Bangalore?
        </h2>

        <p className="text-gray-700 mb-4 leading-relaxed">
          Choosing the right dog transport service in Bangalore is crucial for
          your pet’s safety and comfort. MovingBay ensures a stress-free
          relocation experience with trained handlers, secure travel methods and
          continuous monitoring.
        </p>

        <p className="text-gray-600 mb-4 leading-relaxed">
          Our services include crate training, travel preparation, food and
          hydration management, and real-time updates for pet owners.
        </p>

        <p className="text-gray-600 leading-relaxed">
          Whether moving locally or across India, we ensure your dog travels
          safely and comfortably.
        </p>
      </section>

      {/* TRUST STATS */}
      <section className="px-6 md:px-20 py-12 bg-white text-center">
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { value: "1000+", label: "Dogs Relocated" },
            { value: "50+", label: "Cities Covered" },
            { value: "24/7", label: "Support" },
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

      {/* SERVICES */}
      <section className="px-6 md:px-20 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          Our Dog Transport Services in Bangalore
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Local Dog Transport",
              desc: "Safe and reliable dog transport within Bangalore for vet visits and relocation.",
            },
            {
              title: "Intercity Dog Relocation",
              desc: "Transport your dog safely across cities in India with expert care and planning.",
            },
            {
              title: "Long Distance Transport",
              desc: "Comfortable long-distance dog relocation with proper safety and monitoring.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition"
            >
              <h3 className="font-semibold text-xl text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      

      {/* PROCESS */}
      <section className="px-6 md:px-20 py-20 bg-gradient-to-br from-grey-600 to-gray-700 text-white">
        <h2 className="text-3xl font-bold mb-12 text-center">
            Our Dog Transport Process
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
            {[
            {
                title: "Consultation",
                desc: "We understand your dog’s needs, destination and plan the safest route.",
            },
            {
                title: "Pickup & Preparation",
                desc: "Safe pickup, crate setup and preparation for a comfortable journey.",
            },
            {
                title: "Safe Transport",
                desc: "Secure travel with trained handlers and continuous monitoring.",
            },
            {
                title: "Delivery",
                desc: "Timely delivery with proper handover and pet well-being check.",
            },
            ].map((step, i) => (
            <div
                key={i}
                className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:scale-105 transition"
            >
                <div className="text-4xl font-bold mb-3 opacity-70">
                0{i + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-green-100">{step.desc}</p>
            </div>
            ))}
        </div>
        </section>

      {/* FAQ */}
      <section className="px-6 md:px-20 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-900">
              How much does dog transport cost in Bangalore?
            </h3>
            <p className="text-gray-600">
              Cost depends on distance, dog size and transport type. Contact us
              for an exact quote.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">
              Is dog transport safe?
            </h3>
            <p className="text-gray-600">
              Yes, we ensure safe handling, proper crates and expert staff for
              stress-free travel.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-20 py-16 bg-gray-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Book Safe Dog Transport in Bangalore Today
        </h2>

        <button className="bg-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition">
          Talk to an Expert
        </button>
      </section>

      <Footer />

      {/* SCHEMA */}
      <Script
        id="dog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Dog Transport Services",
            areaServed: "Bangalore",
          }),
        }}
      />
    </>
  );
}