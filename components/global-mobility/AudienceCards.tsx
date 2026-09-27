import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import styles from "@/app/global-mobility/global-mobility.module.css";

const audiences = [
  {
    image: "/images/global-mobility/mb-business-relocation.png",
    imageAlt: "Corporate employee relocation and global mobility services",
    title: "For Businesses",
    headline: "Move Your People Without Slowing Down.",
    text:
      "Support for HR, Global Mobility and People teams managing employee relocations.",
    link: "Explore Corporate Mobility",
    href: "/relocation-guidelines",
  },
  {
    image: "/images/global-mobility/mb-employee-relocation.png",
    imageAlt: "Employee arriving at a new destination through relocation services",
    title: "For Employees",
    headline: "A Smoother Transition to Your New Destination.",
    text:
      "Guidance and coordination throughout the relocation journey.",
    link: "Plan My Relocation",
    href: "/relocation-guidelines",
  },
  {
    image: "/images/global-mobility/mb-family-relocation.png",
    imageAlt: "Family relocating to a new home and destination",
    title: "For Families",
    headline: "Because Relocating Means Moving an Entire Life.",
    text:
      "Housing, schooling, transportation and destination support.",
    link: "Explore Family Relocation",
    href: "/relocation-guidelines",
  },
  {
    image: "/images/global-mobility/mb-pet-relocation.png",
    imageAlt: "Pet relocation services for families moving internationally",
    title: "For Pet Parents",
    headline: "Because Families Don't Leave Anyone Behind.",
    text:
      "Specialist domestic and international pet relocation support.",
    link: "Explore Pet Relocation",
    href: "/pet-moving",
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
          {audiences.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={styles.audienceCard}
            >

              {/* CARD HEADER IMAGE */}
              <div className={styles.cardImage}>
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  width={800}
                  height={500}
                  className={styles.cardImageElement}
                />
              </div>

              {/* CARD CONTENT */}
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
          ))}
        </div>

      </div>
    </section>
  );
}