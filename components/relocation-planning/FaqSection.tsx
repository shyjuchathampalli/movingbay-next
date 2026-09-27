import styles from "./gm.module.css";
import { FAQ_GENERAL, FAQ_PETS } from "./data";

export default function FaqSection() {
  return (
    <section className={`${styles.sec} ${styles.alt}`} id="faq">
      <div className={styles.wrap}>
        <div className={styles.secH}>
          <h2>Questions we hear most</h2>
          <p>Cannot find what you need? Talk to our team.</p>
        </div>
        <div className={styles.faqs}>
          <div>
            <h3>General and corporate</h3>
            {FAQ_GENERAL.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
          <div>
            <h3>Pet relocation</h3>
            {FAQ_PETS.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
