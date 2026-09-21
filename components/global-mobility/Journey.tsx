import Link from "next/link";
import {
  CalendarCheck,
  FileCheck,
  Truck,
  Plane,
  House,
  Headphones,
  ArrowRight,
} from "lucide-react";

import styles from "@/app/global-mobility/global-mobility.module.css";

const journey = [
  {
    number: "01",
    title: "Plan",
    text: "Understand your relocation requirements, destination and timeline.",
    icon: CalendarCheck,
  },
  {
    number: "02",
    title: "Prepare",
    text: "Coordinate documentation, immigration, housing and logistics.",
    icon: FileCheck,
  },
  {
    number: "03",
    title: "Move",
    text: "Manage people, belongings, transportation and pets.",
    icon: Truck,
  },
  {
    number: "04",
    title: "Arrive",
    text: "Coordinate transfers, accommodation and destination support.",
    icon: Plane,
  },
  {
    number: "05",
    title: "Settle",
    text: "Support housing, schooling and everyday transition.",
    icon: House,
  },
  {
    number: "06",
    title: "Support",
    text: "Continue assistance as you adapt to your new destination.",
    icon: Headphones,
  },
];

export default function Journey() {
  return (
    <section className={styles.journeySection}>

      <div className={styles.container}>

        <div className={styles.sectionEyebrow}>
          THE RELOCATION JOURNEY
        </div>

        <div className={styles.journeyHeader}>

          <div>
            <h2 className={styles.sectionTitle}>
              A Better Way to Move.
            </h2>

            <p className={styles.sectionLead}>
              Relocation doesn't begin on moving day — and it
              doesn't end when you arrive.
            </p>
          </div>

          <Link
            href="#contact"
            className={styles.outlineButton}
          >
            Plan Your Move
            <ArrowRight size={16} />
          </Link>

        </div>

        <div className={styles.journeyGrid}>

          {journey.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className={styles.journeyItem}
              >

                <div className={styles.journeyNumber}>
                  {item.number}
                </div>

                <div className={styles.journeyIcon}>
                  <Icon size={19} />
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}