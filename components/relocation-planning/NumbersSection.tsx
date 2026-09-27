import styles from "./gm.module.css";
import { NUMBERS } from "./data";

export default function NumbersSection() {
  return (
    <section className={styles.sec}>
      <div className={styles.wrap}>
        <div className={styles.secH}>
          <h2>Experience you can measure</h2>
        </div>
        <div className={styles.nums}>
          {NUMBERS.map((n) => (
            <div className={styles.num} key={n.label}>
              <b>{n.value}</b>
              <span>{n.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
