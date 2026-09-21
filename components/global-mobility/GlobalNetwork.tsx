import Link from "next/link";
import {
  Globe2,
  MapPin,
  ArrowRight,
} from "lucide-react";

import styles from "@/app/global-mobility/global-mobility.module.css";

const destinations = [
  {
    title: "Relocating Within India",
    text: "Domestic employee and family relocation.",
  },
  {
    title: "Relocating to India",
    text: "Destination and settling-in support.",
  },
  {
    title: "Relocating From India",
    text: "International relocation coordination.",
  },
  {
    title: "International Mobility",
    text: "Cross-border support through specialist partners.",
  },
];

export default function GlobalNetwork() {
  return (
    <section
      id="network"
      className={styles.networkSection}
    >

      <div className={styles.container}>

        <div className={styles.networkHeader}>

          <div>
            <div className={styles.sectionEyebrow}>
              OUR GLOBAL NETWORK
            </div>

            <h2 className={styles.sectionTitle}>
              Wherever Your People Are Going.
            </h2>

            <p className={styles.sectionLead}>
              Domestic and international relocation support
              through our growing network of relocation and
              specialist partners.
            </p>
          </div>

          <Globe2
            size={80}
            strokeWidth={1}
            className={styles.networkGlobe}
          />

        </div>

        <div className={styles.destinationGrid}>

          {destinations.map((item) => (
            <div
              key={item.title}
              className={styles.destinationCard}
            >
              <MapPin size={19} />

              <h3>{item.title}</h3>

              <p>{item.text}</p>

              <Link href="#contact">
                Explore
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}