import type { Metadata } from "next";
import Script from "next/script";

import { Exo_2 } from "next/font/google";


import Header from "@/components/relocation-planning/Header";
import RouteBar from "@/components/relocation-planning/RouteBar";
import AudienceSelector from "@/components/relocation-planning/AudienceSelector";
import CaseStudies from "@/components/relocation-planning/CaseStudies";
import Testimonials from "@/components/relocation-planning/Testimonials";
import PartnersSection from "@/components/relocation-planning/PartnersSection";
import FaqSection from "@/components/relocation-planning/FaqSection";
import ContactSection from "@/components/relocation-planning/ContactSection";
import SiteFooter from "@/components/relocation-planning/SiteFooter";
import WhatsAppFloat from "@/components/relocation-planning/WhatsAppFloat";
import styles from "@/components/relocation-planning/gm.module.css";

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo-2",
  display: "swap",
});

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
    <div className={`${styles.root} ${exo2.variable}`}>
      <a className={styles.skip} href="#main">
        Skip to content
      </a>

      <Header />

      <main id="main">
        <ContactSection />
        <CaseStudies />
        <Testimonials />
        <PartnersSection />
        
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
