import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Script from "next/script";
import ProcessTabs from "@/components/ProcessTabs";

export const metadata = {
  title:
    "International Pet Transport from India | Pet Relocation Abroad | MovingBay",
  description:
    "Move your pets internationally with ease. MovingBay provides expert pet relocation from India to UAE, UK, Canada and more.",
};

export default function InternationalPetTransport() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="px-6 md:px-20 py-16 bg-white text-gray-900">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
  International Pet Transport Services from India
</h1>

<p className="text-gray-600 mb-4 text-lg">
  MovingBay offers safe and reliable international pet relocation services
  from India to UAE, UK, Canada, Australia and more. We specialize in
  stress-free pet transport with expert handling, complete documentation
  support and airline coordination.
</p>

<p className="text-gray-600 mb-4">
  Whether you are relocating your dog, cat or other pets abroad, our team
  ensures a smooth journey with IATA-approved travel standards, health
  certifications and door-to-door delivery services.
</p>

<p className="text-gray-600 mb-6">
  Trusted by pet owners across Bangalore and India, MovingBay ensures your
  pet’s safety, comfort and well-being at every stage of international travel.
</p>

<ul className="text-green-600 space-y-2">
  <li>✔ Pet relocation from India to UAE, UK, Canada & Australia</li>
  <li>✔ Complete documentation & compliance support</li>
  <li>✔ Safe airline-approved pet travel</li>
  <li>✔ Door-to-door pet transport services</li>
</ul>
          </div>

          <Image
            src="/images/international-pet.jpg"
            alt="International pet transport services"
            width={600}
            height={400}
            className="rounded-xl"
          />
        </div>
      </section>

      {/* ✅ TABS COMPONENT */}
      <ProcessTabs />

      <Footer />

      {/* SCHEMA */}
      <Script
        id="international-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "International Pet Transport",
          }),
        }}
      />
    </>
  );
}