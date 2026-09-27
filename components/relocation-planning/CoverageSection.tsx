import Icon from "./Icon";
import styles from "./gm.module.css";
import { REGIONS } from "./data";

export default function CoverageSection() {
  return (
    <section className={`${styles.sec} ${styles.alt}`} id="coverage">
      <div className={styles.wrap}>
        <div className={styles.secH}>
          <h2>Moving between India and the world</h2>
          <p>
            We support relocations to and from India across five regions, and within India across
            20+ cities. Need a route that is not listed? Ask us.
          </p>
        </div>
        <div className={styles.regions}>
          {REGIONS.map((r) => (
            <div className={styles.region} key={r.title}>
              <h3>
                <Icon name={r.title === "India" ? "pin" : "globe"} />
                {r.title}
              </h3>
              <div className={styles.chips}>
                {r.chips.map((c) => (
                  <span className={styles.chip} key={c}>
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 26 }}>
          <a className={`${styles.btn} ${styles.btnLine} ${styles.btnSm}`} href="#top">
            Check your route
          </a>
        </p>
      </div>
    </section>
  );
}
