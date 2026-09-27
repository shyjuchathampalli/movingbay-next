import type { Metadata } from "next";
import Script from "next/script";
import { Exo_2 } from "next/font/google";

import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

import SolutionsHero from "@/components/solutions/SolutionsHero";
import ServiceSection from "@/components/solutions/ServiceSection";
import { SERVICES } from "@/components/solutions/data";

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo-2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Solutions | MovingBay",
  description:
    "Household goods moving, FRRO registration, home and school search, and immigration support — everything your relocation needs, in one place.",
};

export default function SolutionsPage() {
  return (
    <div className={`${exo2.variable} bg-[#091a28] text-white`}>
      <TopBar />
      <Navbar />

      <main className="bg-[#091a28]">
        <SolutionsHero />

        {SERVICES.map((service, i) => (
          <ServiceSection
            key={service.slug}
            service={service}
            index={i}
          />
        ))}

        <CTASection
          title="Not sure which solution you need?"
          subtitle="Tell us about your move and we'll put together the right combination for you."
          buttonText="Talk to our team"
        />
      </main>

      <Footer />

      <Script
        id="movingbay-solutions-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            provider: {
              "@type": "LocalBusiness",
              name: "MovingBay",
              telephone: "+91-8618173141",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bangalore",
                addressCountry: "India",
              },
            },
            areaServed: "India",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "MovingBay Solutions",
              itemListElement: SERVICES.map((s) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: s.title,
                  description: s.summary,
                },
              })),
            },
          }),
        }}
      />
    </div>
  );
}