import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Globe2,
  ClipboardCheck,
  PawPrint,
} from "lucide-react";

import styles from "@/app/global-mobility/global-mobility.module.css";

const insights = [
  {
    icon: Globe2,
    category: "GLOBAL MOBILITY",
    title: "Global Mobility Insights",
    text:
      "Employee relocation, international mobility and emerging relocation trends.",
  },
  {
    icon: MapIcon,
    category: "DESTINATIONS",
    title: "Destination Guides",
    text:
      "Practical information for relocating to cities and countries.",
  },
  {
    icon: ClipboardCheck,
    category: "RELOCATION",
    title: "Relocation Guides",
    text:
      "Checklists and preparation resources to help you plan your move.",
  },
  {
    icon: PawPrint,
    category: "PET TRAVEL",
    title: "Pet Travel Guides",
    text:
      "Pet travel preparation, documentation and international relocation information.",
  },
];

function MapIcon({ size }: { size: number }) {
  return <BookOpen size={size} />;
}

export default function Insights() {
  return (
    <section
      id="insights"
      className={styles.insightsSection}
    >

      <div className={styles.container}>

        <div className={styles.insightsHeader}>

          <div>
            <div className={styles.sectionEyebrow}>
              MOVING INTELLIGENCE
            </div>

            <h2 className={styles.sectionTitle}>
              Know Before You Move.
            </h2>

            <p className={styles.sectionLead}>
              Practical guides, destination information and
              mobility insights for people and businesses planning
              their next move.
            </p>
          </div>

          <Link
            href="#"
            className={styles.outlineButton}
          >
            Explore Resources
            <ArrowUpRight size={16} />
          </Link>

        </div>

        <div className={styles.insightsGrid}>

          {insights.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href="#"
                className={styles.insightCard}
              >

                <div className={styles.insightIcon}>
                  <Icon size={21} />
                </div>

                <span>{item.category}</span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

                <ArrowUpRight
                  size={17}
                  className={styles.insightArrow}
                />

              </Link>
            );
          })}

        </div>

      </div>

    </section>
  );
}