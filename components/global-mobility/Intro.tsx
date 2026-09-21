import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  PawPrint,
  Building2,
} from "lucide-react";

import styles from "@/app/global-mobility/global-mobility.module.css";

export default function Intro() {
  return (
    <section className={styles.introSection}>

      <div className={styles.container}>

        <div className={styles.introGrid}>

          <div className={styles.imageCard}>
            <div className={styles.imageOverlay}>
              <span>MORE THAN</span>
              <strong>Moving.</strong>
              <strong>Mobility.</strong>
            </div>
          </div>

          <div className={styles.introContent}>

            <div className={styles.sectionEyebrow}>
              ABOUT MOVINGBAY
            </div>

            <h2 className={styles.sectionTitle}>
              Relocation Is a Journey.
              <br />
              We Help You Navigate It.
            </h2>

            <p>
              Moving to a new city or country involves much more
              than transporting belongings.
            </p>

            <p>
              It can mean immigration and documentation, finding a
              home, arranging transportation, supporting family
              members, moving household goods, relocating pets and
              adapting to a new destination.
            </p>

            <p>
              MovingBay brings these requirements together through
              coordinated global mobility and relocation solutions.
            </p>

            <Link
              href="#services"
              className={styles.textButton}
            >
              Discover MovingBay
              <ArrowRight size={16} />
            </Link>

          </div>

          <div className={styles.statColumn}>

            <div className={styles.stat}>
              <Building2 />
              <strong>500+</strong>
              <span>Relocations & Pet Moves</span>
            </div>

            <div className={styles.stat}>
              <MapPin />
              <strong>20+</strong>
              <span>Cities Covered</span>
            </div>

            <div className={styles.stat}>
              <PawPrint />
              <strong>5+</strong>
              <span>Years Experience</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}