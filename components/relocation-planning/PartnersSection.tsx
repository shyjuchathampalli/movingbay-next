import Icon from "./Icon";
import styles from "./gm.module.css";
import { PARTNER_TYPES } from "./data";

export default function PartnersSection() {
  return (
    <section className={styles.sec} id="partners">
      <div className={`${styles.wrap} ${styles.partners}`}>
        <div>
          <div className={styles.secH} style={{ marginBottom: 22 }}>
            <h2>A network built on standards</h2>
            <p>
              We work with carefully selected partners so that every move meets the same
              standard, wherever it happens. If you provide services to relocating people or
              pets, we would like to hear from you.
            </p>
          </div>
          <a className={`${styles.btn} ${styles.btnLine}`} href="/become-a-partner">
            Become a partner
          </a>
        </div>
        <div className={styles.pgrid}>
          {PARTNER_TYPES.map((p) => (
            <div key={p.label}>
              <Icon name={p.icon} />
              {p.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
