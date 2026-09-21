import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Building2,
} from "lucide-react";

import styles from "@/app/global-mobility/global-mobility.module.css";

const capabilities = [
  "Employee relocation",
  "International assignments",
  "Destination services",
  "Temporary accommodation",
  "Home finding",
  "Family & school support",
  "Transportation",
  "Pet relocation",
];

export default function CorporateMobility() {
  return (
    <section
      id="corporate"
      className={styles.corporateSection}
    >

      <div className={styles.container}>

        <div className={styles.corporateGrid}>

          <div>

            <div className={styles.sectionEyebrow}>
              FOR HR & GLOBAL MOBILITY TEAMS
            </div>

            <h2 className={styles.sectionTitle}>
              Your Employee Moves.
              <br />
              We Help Coordinate the Journey.
            </h2>

            <p className={styles.sectionLead}>
              Employee relocation is a business process involving
              people, families, logistics, documentation and
              destination support.
            </p>

            <p>
              MovingBay helps organisations coordinate the
              relocation experience so employees can focus on
              their new role while the practical details are
              managed through one mobility partner.
            </p>

            <div className={styles.checkList}>
              {capabilities.map((item) => (
                <div
                  key={item}
                  className={styles.checkItem}
                >
                  <CheckCircle2 size={17} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="#contact"
              className={styles.primaryButton}
            >
              Talk to Our Corporate Mobility Team
              <ArrowRight size={16} />
            </Link>

          </div>

          <div className={styles.corporateVisual}>

            <div className={styles.visualBadge}>
              <Building2 size={20} />
              <span>
                Corporate
                <br />
                Mobility
              </span>
            </div>

            <div className={styles.quoteCard}>
              <span className={styles.quoteMark}>“</span>

              <p>
                MovingBay can become the coordination layer
                between employees, families, service providers
                and destinations.
              </p>

              <small>
                GLOBAL MOBILITY EXPERIENCE
              </small>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}