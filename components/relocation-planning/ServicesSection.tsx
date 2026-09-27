import Icon, { type IconName } from "./Icon";
import styles from "./gm.module.css";
import { SERVICE_PHASES } from "./data";

export default function ServicesSection() {
  return (
    <section className={styles.sec} id="services">
      <div className={styles.wrap}>
        <div className={styles.secH}>
          <h2>Support at every stage of the move</h2>
          <p>
            From the first planning call to the first week in a new home, MovingBay coordinates
            the services your people and their pets need.
          </p>
        </div>
        <div className={styles.phases}>
          {SERVICE_PHASES.map((phase) => (
            <div className={styles.phase} key={phase.phase}>
              <h3>{phase.phase}</h3>
              <p>{phase.blurb}</p>
              <div className={styles.svc}>
                {phase.items.map((item) => (
                  <a href={item.href} key={item.title}>
                    <Icon name={item.icon as IconName} />
                    <div>
                      <strong>{item.title}</strong>
                      <span>{item.desc}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
