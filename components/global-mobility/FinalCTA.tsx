import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import styles from "@/app/global-mobility/global-mobility.module.css";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className={styles.finalCta}
    >

      <div className={styles.finalCtaOverlay} />

      <div className={styles.container}>

        <div className={styles.finalCtaContent}>

          <div className={styles.sectionEyebrowLight}>
            READY TO MOVE?
          </div>

          <h2>
            Let's Make Your
            <br />
            Next Move Simpler.
          </h2>

          <p>
            Whether you're relocating an employee, moving your
            family internationally, settling into a new
            destination or travelling with your pet, MovingBay
            helps you navigate the journey.
          </p>

          <div className={styles.finalCtaButtons}>

            <Link
              href="https://wa.me/918618173141"
              className={styles.whiteButton}
            >
              Talk to a Mobility Expert
              <ArrowRight size={16} />
            </Link>

            <Link
              href="mailto:info@movingbay.com"
              className={styles.transparentButton}
            >
              Request a Relocation Assessment
            </Link>

          </div>

          <div className={styles.finalTrustRow}>

            <span>
              <CheckCircle2 size={15} />
              Human support
            </span>

            <span>
              <CheckCircle2 size={15} />
              Coordinated services
            </span>

            <span>
              <CheckCircle2 size={15} />
              Global mobility
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}