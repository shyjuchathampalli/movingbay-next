import Icon from "./Icon";
import Image from "next/image";
import styles from "./gm.module.css";
import { PILLARS } from "./data";

export default function AboutSection() {
  return (
    <section className={`${styles.sec} ${styles.alt}`} id="about">
      <div className={`${styles.wrap} ${styles.about}`}>
        <div className={styles.aboutImage}>
          <Image
            src="/images/relocation-planning/movingbay-team.png"
            alt="MovingBay team providing relocation and mobility services"
            fill
            sizes="(max-width: 899px) 100vw, 50vw"
            className={styles.aboutImageElement}
          />
        </div>
        <div>
          <div className={styles.secH} style={{ marginBottom: 0 }}>
            <h2>Relocation is more than a move. It is a change in how a family lives.</h2>
            <p>
              MovingBay is a Bangalore-based mobility partner that helps organizations and
              families relocate with confidence. We coordinate the people, the pets and the
              possessions, so the move runs to plan and the transition feels calm.
            </p>
          </div>
          <div className={styles.pillars}>
            {PILLARS.map((p) => (
              <div className={styles.pillar} key={p.title}>
                <div className={styles.pillarIc}>
                  <Icon name={p.icon} />
                </div>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 22 }}>
            <a className={`${styles.btn} ${styles.btnLine} ${styles.btnSm}`} href="/about">
              More about MovingBay
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
