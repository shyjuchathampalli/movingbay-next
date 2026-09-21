import Link from "next/link";
import {
  House,
  GraduationCap,
  MapPin,
  Users,
} from "lucide-react";

import styles from "@/app/global-mobility/global-mobility.module.css";

const items = [
  {
    icon: House,
    title: "Home",
    text: "Accommodation and home-finding support.",
  },
  {
    icon: GraduationCap,
    title: "School",
    text: "Education and school-search assistance.",
  },
  {
    icon: MapPin,
    title: "Destination",
    text: "Local orientation and practical guidance.",
  },
  {
    icon: Users,
    title: "Family",
    text: "Support built around the whole household.",
  },
];

export default function FamilyRelocation() {
  return (
    <section
      id="individuals"
      className={styles.familySection}
    >

      <div className={styles.container}>

        <div className={styles.familyGrid}>

          <div className={styles.familyVisual}>
            <div className={styles.familyVisualText}>
              <span>NEW CITY</span>
              <strong>NEW BEGINNING</strong>
            </div>
          </div>

          <div>

            <div className={styles.sectionEyebrow}>
              MOVING FOR WORK OR LIFE
            </div>

            <h2 className={styles.sectionTitle}>
              A New Job.
              <br />
              A New City.
              <br />
              A New Beginning.
            </h2>

            <p className={styles.sectionLead}>
              Relocating can involve hundreds of decisions.
              MovingBay helps simplify the practical transition
              through coordinated relocation and destination
              services.
            </p>

            <div className={styles.familyItems}>
              {items.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className={styles.familyItem}
                  >
                    <Icon size={19} />
                    <div>
                      <strong>{item.title}</strong>
                      <span>{item.text}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link
              href="#contact"
              className={styles.textButton}
            >
              Start Planning Your Relocation
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}