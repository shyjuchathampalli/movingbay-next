import styles from "./gm.module.css";
import { TESTIMONIALS } from "./data";

export default function Testimonials() {
  return (
    <section className={styles.sec} id="testimonials">
      <div className={styles.wrap}>
        <div className={styles.secH}>
          <h2>What our clients say</h2>
        </div>
        <div className={styles.cards}>
          {TESTIMONIALS.map((t) => (
            <article className={`${styles.card} ${styles.quote}`} key={t.name + t.role}>
              <span className={`${styles.label} ${styles.labelSample}`}>Sample testimonial</span>
              <p>{t.quote}</p>
              <div className={styles.who}>
                <div className={styles.av}>{t.initials}</div>
                <div>
                  <b>{t.name}</b>
                  <span>{t.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
