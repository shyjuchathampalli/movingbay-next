import Link from "next/link";
import {
  BriefcaseBusiness,
  UserRound,
  House,
  PawPrint,
  ArrowUpRight,
} from "lucide-react";

import styles from "@/app/global-mobility/global-mobility.module.css";

const audiences = [
  {
    icon: BriefcaseBusiness,
    title: "For Businesses",
    headline: "Move Your People Without Slowing Down.",
    text:
      "Support for HR, Global Mobility and People teams managing employee relocations.",
    link: "Explore Corporate Mobility",
    href: "#corporate",
  },
  {
    icon: UserRound,
    title: "For Employees",
    headline: "A Smoother Transition to Your New Destination.",
    text:
      "Guidance and coordination throughout the relocation journey.",
    link: "Plan My Relocation",
    href: "#individuals",
  },
  {
    icon: House,
    title: "For Families",
    headline: "Because Relocating Means Moving an Entire Life.",
    text:
      "Housing, schooling, transportation and destination support.",
    link: "Explore Family Relocation",
    href: "#individuals",
  },
  {
    icon: PawPrint,
    title: "For Pet Parents",
    headline: "Because Families Don't Leave Anyone Behind.",
    text:
      "Specialist domestic and international pet relocation support.",
    link: "Explore Pet Relocation",
    href: "#pets",
  },
];

export default function AudienceCards() {
  return (
    <section className={styles.audienceSection}>

      <div className={styles.container}>

        <div className={styles.centerHeading}>
          <div className={styles.sectionEyebrow}>
            SOLUTIONS FOR EVERY MOVE
          </div>

          <h2 className={styles.sectionTitle}>
            Moving People. Supporting Businesses.
            <br />
            Connecting Lives.
          </h2>
        </div>

        <div className={styles.audienceGrid}>
          {audiences.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                className={styles.audienceCard}
              >
                <div className={styles.cardImagePlaceholder}>
                  <Icon size={30} />
                </div>

                <div className={styles.audienceCardBody}>

                  <span className={styles.cardLabel}>
                    {item.title}
                  </span>

                  <h3>{item.headline}</h3>

                  <p>{item.text}</p>

                  <span className={styles.cardLink}>
                    {item.link}
                    <ArrowUpRight size={15} />
                  </span>

                </div>
              </Link>
            );
          })}
        </div>

      </div>

    </section>
  );
}