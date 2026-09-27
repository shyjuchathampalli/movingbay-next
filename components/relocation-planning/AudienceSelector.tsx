import Icon from "./Icon";
import AudienceLink from "./AudienceLink";
import styles from "./gm.module.css";
import { AUDIENCES } from "./data";

export default function AudienceSelector() {
  return (
    <section className={styles.sec} id="solutions">
      <div className={styles.wrap}>
        <div className={styles.secH}>
          <h2>Relocation support built around who is moving</h2>
          <p>Choose the path that fits. Every move gets one accountable coordinator from the first call to settling in.</p>
        </div>
        <div className={styles.aud}>
          {AUDIENCES.map((a) => (
            <article key={a.title}>
              <div className={styles.audIc}>
                <Icon name={a.icon} />
              </div>
              <h3>{a.title}</h3>
              <p className={styles.promise}>{a.promise}</p>
              <ul className={styles.ticks}>
                {a.points.map((p) => (
                  <li key={p}>
                    <Icon name="check" />
                    {p}
                  </li>
                ))}
              </ul>
              <AudienceLink audience={a.audience} href={a.linkHref} className={styles.more}>
                {a.linkLabel} <Icon name="arrow" />
              </AudienceLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
