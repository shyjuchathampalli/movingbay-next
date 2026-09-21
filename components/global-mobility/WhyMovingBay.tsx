import {
  HeartHandshake,
  Network,
  MapPinned,
  ShieldCheck,
  MessageCircle,
  Globe2,
} from "lucide-react";

import styles from "@/app/global-mobility/global-mobility.module.css";

const reasons = [
  {
    icon: HeartHandshake,
    title: "Human Support",
    text: "Real people helping you navigate practical relocation challenges.",
  },
  {
    icon: Network,
    title: "Coordinated Services",
    text: "Multiple requirements brought together through one connected experience.",
  },
  {
    icon: MapPinned,
    title: "Destination Expertise",
    text: "Local knowledge and specialist support for the places people move to.",
  },
  {
    icon: ShieldCheck,
    title: "Specialist Capabilities",
    text: "Expertise across international relocation, employee mobility and pet relocation.",
  },
  {
    icon: MessageCircle,
    title: "Clear Communication",
    text: "Transparent communication throughout the relocation journey.",
  },
  {
    icon: Globe2,
    title: "Global Network",
    text: "Access to relevant relocation and specialist partners across destinations.",
  },
];

export default function WhyMovingBay() {
  return (
    <section className={styles.whySection}>

      <div className={styles.container}>

        <div className={styles.centerHeading}>

          <div className={styles.sectionEyebrow}>
            THE MOVINGBAY DIFFERENCE
          </div>

          <h2 className={styles.sectionTitle}>
            Mobility Built Around People.
          </h2>

          <p className={styles.sectionLead}>
            Relocation is personal. For businesses, it is also an
            important part of the employee experience.
          </p>

        </div>

        <div className={styles.reasonGrid}>

          {reasons.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={styles.reasonCard}
              >
                <Icon size={22} />

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