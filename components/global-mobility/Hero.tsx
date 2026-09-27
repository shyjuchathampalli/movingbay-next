import Link from "next/link";
import {
  ArrowRight,
  Globe2,
  Building2,
  Plane,
  PawPrint,
} from "lucide-react";

import styles from "@/app/global-mobility/global-mobility.module.css";

const heroCapabilities = [
  {
    icon: Building2,
    title: "Corporate Mobility",
  },
  {
    icon: Globe2,
    title: "International Relocation",
  },
  {
    icon: Plane,
    title: "Destination Services",
  },
  {
    icon: PawPrint,
    title: "Pet Relocation",
  },
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background */}
      <div className={styles.heroBackground} />
      <div className={styles.heroOverlay} />

      {/* Main content container */}
      <div className={styles.container}>

        <div className={styles.heroContent}>

          <div className={styles.eyebrow}>
            GLOBAL MOBILITY & RELOCATION SERVICES
          </div>

          <h1 className={styles.heroTitle}>
            Moving Lives with
            <span> Love and Care.</span>
          </h1>

          <p className={styles.heroDescription}>
            MovingBay provides global mobility and relocation
            services for businesses, employees, individuals and
            families — helping coordinate everything from
            relocation planning and documentation to transportation,
            destination services and settling into a new location.
          </p>

          <div className={styles.heroButtons}>

            <Link
              href="/relocation-guidance"
              className={styles.primaryButton}
            >
              <span>Connect to a Mobility Expert</span>
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/solutions"
              className={styles.secondaryButton}
            >
              Explore Our Services
            </Link>

          </div>

        </div>

        {/* Capability navigation */}
        <div className={styles.heroCapabilityBar}>

          {heroCapabilities.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={styles.heroCapability}
              >
                <div className={styles.capabilityIcon}>
                  <Icon size={18} strokeWidth={1.8} />
                </div>

                <span>{item.title}</span>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}