import type { Metadata } from "next";

import { Exo_2 } from "next/font/google";

import GlobalMobilityNavbar from "@/components/global-mobility/GlobalMobilityNavbar";
import Hero from "@/components/global-mobility/Hero";
import Intro from "@/components/global-mobility/Intro";
import AudienceCards from "@/components/global-mobility/AudienceCards";
import Services from "@/components/global-mobility/Services";
import Journey from "@/components/global-mobility/Journey";
import CorporateMobility from "@/components/global-mobility/CorporateMobility";
import FamilyRelocation from "@/components/global-mobility/FamilyRelocation";
import PetRelocation from "@/components/global-mobility/PetRelocation";
import GlobalNetwork from "@/components/global-mobility/GlobalNetwork";
import WhyMovingBay from "@/components/global-mobility/WhyMovingBay";
import Testimonials from "@/components/global-mobility/Testimonials";
import Insights from "@/components/global-mobility/Insights";
import FAQ from "@/components/global-mobility/FAQ";
import FinalCTA from "@/components/global-mobility/FinalCTA";
import Footer from "@/components/global-mobility/Footer";

import styles from "./global-mobility.module.css";

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo-2",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Global Mobility & Relocation Services | MovingBay",
  description:
    "MovingBay provides global mobility, employee relocation, international relocation, destination services and pet relocation solutions for businesses, employees, individuals and families.",
  keywords: [
    "global mobility services",
    "employee relocation",
    "corporate relocation services",
    "international relocation services",
    "destination services",
    "relocation management",
    "employee mobility",
    "global relocation",
    "pet relocation",
    "international pet relocation",
    "relocation services India",
    "relocation to India",
    "relocation from India",
  ],
  alternates: {
    canonical: "https://www.movingbay.com/global-mobility",
  },
  openGraph: {
    title:
      "Global Mobility & Relocation Services | MovingBay",
    description:
      "Wherever people move, we help them arrive.",
    url: "https://www.movingbay.com/global-mobility",
    siteName: "MovingBay",
    type: "website",
  },
};

export default function GlobalMobilityPage() {
  return (
    <main className={`${styles.page} ${exo2.className}`}>
      <GlobalMobilityNavbar />

      <Hero />

      <Intro />

      <AudienceCards />

      <Services />

      <Journey />

      <CorporateMobility />

      <FamilyRelocation />

      <PetRelocation />

      <GlobalNetwork />

      <WhyMovingBay />

      <Testimonials />

      <Insights />

      <FAQ />

      <FinalCTA />

      <Footer />
    </main>
  );
}