import Icon from "./Icon";
import styles from "./gm.module.css";
import { WHY_ITEMS } from "./data";

export default function WhySection() {
  return (
    <section className={styles.sec} id="why">
      <div className={styles.wrap}>
        <div className={styles.secH}>
          <h2>Why organizations and families choose MovingBay</h2>
          <p>
            We combine specialist pet expertise with the discipline of a mobility provider: one
            owner for every move, careful compliance and honest updates.
          </p>
        </div>
        <div className={styles.why}>
          {WHY_ITEMS.map((w) => (
            <article key={w.title}>
              <Icon name={w.icon} />
              <h3>{w.title}</h3>
              <p>{w.desc}</p>
              <em>{w.proof}</em>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
