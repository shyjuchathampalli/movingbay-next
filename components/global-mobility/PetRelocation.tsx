import Link from "next/link";
import {
  PawPrint,
  Plane,
  FileCheck,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

import styles from "@/app/global-mobility/global-mobility.module.css";

const petServices = [
  {
    icon: Plane,
    title: "Pet Travel Planning",
    text: "Plan the journey around destination requirements.",
  },
  {
    icon: FileCheck,
    title: "Documentation",
    text: "Coordinate certificates, permits and travel documents.",
  },
  {
    icon: HeartHandshake,
    title: "Veterinary Preparation",
    text: "Support travel preparation and veterinary requirements.",
  },
  {
    icon: PawPrint,
    title: "Door-to-Door Assistance",
    text: "Coordinate pickup, transportation and arrival.",
  },
];

export default function PetRelocation() {
  return (
    <section
      id="pets"
      className={styles.petSection}
    >

      <div className={styles.container}>

        <div className={styles.petGrid}>

          <div className={styles.petVisual}>
            <div className={styles.petBadge}>
              <PawPrint size={24} />
              <span>
                Happy Pets.
                <br />
                Happier Journeys.
              </span>
            </div>
          </div>

          <div>

            <div className={styles.sectionEyebrow}>
              SPECIALIST PET RELOCATION
            </div>

            <h2 className={styles.sectionTitle}>
              Because Families
              <br />
              Don't Leave Anyone Behind.
            </h2>

            <p className={styles.sectionLead}>
              MovingBay's specialist pet relocation services help
              coordinate domestic and international pet travel
              around safety, preparation, documentation and
              destination requirements.
            </p>

            <div className={styles.petServiceGrid}>
              {petServices.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className={styles.petService}
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
              className={styles.primaryButton}
            >
              Explore Pet Relocation
              <ArrowRight size={16} />
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}