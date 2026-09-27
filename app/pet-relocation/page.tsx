import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import PetServices from "@/components/PetServices";
import About from "@/components/About";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import CorporateRelocation from "@/components/CorporateRelocation";
import Footer from "@/components/Footer";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Banner />
      <PetServices />
      <CorporateRelocation />
      <About />
      <FAQSection />
      <CTASection />
      <Footer />

      {/* ✅ STRUCTURED DATA */}
      <Script
        id="movingbay-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "MovingBay",
            url: "https://movingbay.com",
            telephone: "+91-8618173141",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Bangalore",
              addressCountry: "India",
            },
            areaServed: "India",
            serviceType: "Pet Relocation Services",
          }),
        }}
      />

    </>
  );
}