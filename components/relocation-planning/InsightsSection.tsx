import Icon, { type IconName } from "./Icon";
import Placeholder from "./Placeholder";
import AudienceLink from "./AudienceLink";
import styles from "./gm.module.css";
import { INSIGHTS } from "./data";

export default function InsightsSection() {
  return (
    <section className={`${styles.sec} ${styles.alt}`} id="insights">
      <div className={styles.wrap}>
        <div className={styles.secH}>
          <h2>Practical guidance for mobility teams and relocating families</h2>
          <p>Country-by-country rules, planning checklists and policy advice from the MovingBay team.</p>
        </div>
        <div className={styles.cards}>
          {INSIGHTS.map((i) => (
            <article className={styles.card} key={i.title}>
              <Placeholder label="Image placeholder" icon={i.icon as IconName} />
              <div className={styles.cardBody}>
                <span className={styles.label}>{i.label}</span>
                <h3>{i.title}</h3>
                <a className={styles.more} href={i.href}>
                  Read the guide <Icon name="arrow" />
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className={styles.leadMagnet}>
          <div>
            <h3>Pet relocation guide for mobility teams</h3>
            <p>Planning steps, timelines and policy points in one short guide.</p>
          </div>
          <AudienceLink audience="Corporate or HR team" className={`${styles.btn} ${styles.btnSun}`}>
            Request the guide
          </AudienceLink>
        </div>
      </div>
    </section>
  );
}
