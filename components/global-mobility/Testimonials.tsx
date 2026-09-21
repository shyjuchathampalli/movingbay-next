import { Quote } from "lucide-react";

import styles from "@/app/global-mobility/global-mobility.module.css";

const testimonials = [
  {
    quote:
      "MovingBay made our relocation experience smooth, professional and structured. Their attention to detail made the difference.",
    name: "HR / Mobility Director",
    company: "Global Technology Company",
  },
  {
    quote:
      "From the planning stage through arrival, the team helped us understand what needed to happen next.",
    name: "Relocating Employee",
    company: "International Assignment",
  },
  {
    quote:
      "Our pet's journey was carefully coordinated and we always knew what was happening.",
    name: "Pet Parent",
    company: "International Relocation",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.testimonialSection}>

      <div className={styles.container}>

        <div className={styles.centerHeading}>

          <div className={styles.sectionEyebrow}>
            REAL EXPERIENCES
          </div>

          <h2 className={styles.sectionTitle}>
            Every Move Has a Story.
          </h2>

        </div>

        <div className={styles.testimonialGrid}>

          {testimonials.map((item) => (
            <article
              key={item.name}
              className={styles.testimonialCard}
            >

              <Quote size={24} />

              <p>
                “{item.quote}”
              </p>

              <div>
                <strong>{item.name}</strong>
                <span>{item.company}</span>
              </div>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}