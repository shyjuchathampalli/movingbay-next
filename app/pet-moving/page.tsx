import type { Metadata } from "next";
import Script from "next/script";


import Header from "@/components/relocation-planning/Header";
import Hero from "@/components/relocation-planning/Hero";
import RouteBar from "@/components/relocation-planning/RouteBar";
import AudienceSelector from "@/components/relocation-planning/AudienceSelector";
import AboutSection from "@/components/relocation-planning/AboutSection";
import ServicesSection from "@/components/relocation-planning/ServicesSection";
import PetRelocation from "@/components/relocation-planning/PetRelocation";
import ProcessSection from "@/components/relocation-planning/ProcessSection";
import WhySection from "@/components/relocation-planning/WhySection";
import CoverageSection from "@/components/relocation-planning/CoverageSection";
import NumbersSection from "@/components/relocation-planning/NumbersSection";
import CaseStudies from "@/components/relocation-planning/CaseStudies";
import Testimonials from "@/components/relocation-planning/Testimonials";
import InsightsSection from "@/components/relocation-planning/InsightsSection";
import PartnersSection from "@/components/relocation-planning/PartnersSection";
import FaqSection from "@/components/relocation-planning/FaqSection";
import ContactSection from "@/components/relocation-planning/ContactSection";
import SiteFooter from "@/components/relocation-planning/SiteFooter";
import WhatsAppFloat from "@/components/relocation-planning/WhatsAppFloat";
import styles from "@/components/relocation-planning/gm.module.css";

// ---------------------------------------------------------------------------
// Route metadata. This page is self-contained: it does not use the site's
// existing TopBar / Navbar / Banner / Footer components, so it can sit at
// /relocation-planning without affecting the current homepage at "/".
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  title: "MovingBay | Global Mobility and Pet Relocation Services in India",
  description:
    "Relocation support for companies, employees and families moving to, from and within India, with specialist pet relocation. Talk to our team.",
};

export default function RelocationPlanningPage() {
  return (
    <div className={styles.root}>
      <a className={styles.skip} href="#main">
        Skip to content
      </a>

      <Header />

      <main id="main">
        <PetRelocation />
        <ProcessSection />
        <WhySection />
        <Testimonials />
        <FaqSection />
      </main>

      <SiteFooter />
      <WhatsAppFloat />

      <Script
        id="movingbay-relocation-planning-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "MovingBay",
            url: "https://www.movingbay.com/relocation-planning",
            email: "info@movingbay.com",
            telephone: "+91 8618173141",
            description:
              "Global mobility partner for people, pets and possessions, with specialist expertise in pet relocation.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Bangalore",
              addressCountry: "IN",
            },
          }),
        }}
      />
    </div>
  );
}
