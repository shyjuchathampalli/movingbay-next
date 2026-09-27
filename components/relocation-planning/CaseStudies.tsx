import Image from "next/image";
import Icon from "./Icon";
import styles from "./gm.module.css";
import { CASE_STUDIES } from "./data";

const CASE_STUDY_IMAGES = [
  "/images/relocation-planning/casestudy-1.png",
  "/images/relocation-planning/casestudy-2.png",
  "/images/relocation-planning/casestudy-3.png",
];

const CASE_STUDY_IMAGE_ALTS = [
  "Family relocation from Bangalore to Frankfurt with pet relocation support",
  "Employee relocation between Indian cities with cat relocation support",
  "Corporate group relocation managed through coordinated mobility services",
];

export default function CaseStudies() {
  return (
    <section className={`${styles.sec} ${styles.alt}`} id="cases">
      <div className={styles.wrap}>

        <div className={styles.secH}>
          <h2>Moves we have handled</h2>
          <p>
            A look at the kind of relocations our team plans and delivers.
          </p>
        </div>

        <div className={styles.cards}>

          {CASE_STUDIES.map((c, index) => (
            <article
              className={styles.card}
              key={c.title}
            >

              {/* CASE STUDY IMAGE */}
              <div className={styles.caseStudyImage}>
              <Image
                src={CASE_STUDY_IMAGES[index]}
                alt={CASE_STUDY_IMAGE_ALTS[index]}
                width={1200}
                height={675}
                sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"
                className={styles.caseStudyImageElement}
              />
            </div>

              {/* CASE STUDY CONTENT */}
              <div className={styles.cardBody}>

                <span
                  className={`${styles.label} ${styles.labelSample}`}
                >
                  Sample story
                </span>

                <h3>{c.title}</h3>

                <p className={styles.k}>
                  <b>Challenge:</b> {c.challenge}
                </p>

                <p className={styles.k}>
                  <b>What we did:</b> {c.action}
                </p>

                <p className={styles.k}>
                  <b>Result:</b> {c.result}
                </p>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}