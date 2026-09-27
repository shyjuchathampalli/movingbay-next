import Icon from "./Icon";
import Placeholder from "./Placeholder";
import AudienceLink from "./AudienceLink";
import styles from "./gm.module.css";
import { PHONE_INTL } from "./data";

const JOURNEYS = [
  { icon: "paw", title: "Pet taxi", desc: "Safe and comfortable transport across the city with trained handlers." },
  { icon: "route", title: "Domestic relocation", desc: "Seamless pet relocation across India by air, road and rail." },
  { icon: "plane", title: "International travel", desc: "End-to-end international relocation with full documentation support." },
] as const;

const INCLUDED = [
  { icon: "steth", title: "Veterinary examination", desc: "Complete health check so your pet is travel-ready." },
  { icon: "chip", title: "Microchip identification", desc: "Secure, trackable identification." },
  { icon: "doc", title: "Licensing and permits", desc: "Travel documentation and approvals handled." },
  { icon: "door", title: "Doorstep assistance", desc: "Preparation and paperwork at your home." },
] as const;

const WELFARE = [
  "Carriers suited to your pet's size and breed",
  "Trained handlers at every stage",
  "Airline and regulatory requirements checked before travel",
  "Regular updates so you always know where your pet is",
];

export default function PetRelocation() {
  return (
    <section className={styles.pets} id="pets">
      <div className={styles.wrap}>
        <div className={styles.petsTop}>
          <div>
            <h2>Specialists in moving pets with care, comfort and confidence</h2>
            <p className={styles.lead}>
              Pets are family, and they travel best with people who know the rules, the routes
              and the animals. Our team handles health checks, documentation, permits and
              transport, and keeps you updated at every step.
            </p>
            <p style={{ marginTop: 22, display: "flex", flexWrap: "wrap", gap: 12 }}>
              <AudienceLink audience="Pet parent" className={`${styles.btn} ${styles.btnSun}`}>
                Request a pet relocation quote
              </AudienceLink>
              <a className={`${styles.btn} ${styles.btnGhost}`} href={`https://wa.me/${PHONE_INTL}`}>
                Ask our moving expert
              </a>
            </p>
          </div>
          <Placeholder label="Photo placeholder: a calm dog ready to travel" icon="paw" />
        </div>

        <div className={styles.journeys}>
          {JOURNEYS.map((j) => (
            <div className={styles.journey} key={j.title}>
              <Icon name={j.icon} />
              <h3>{j.title}</h3>
              <p>{j.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.petGrid}>
          <div className={styles.panel}>
            <h3>What is included</h3>
            <div className={styles.inc}>
              {INCLUDED.map((i) => (
                <div key={i.title}>
                  <Icon name={i.icon} />
                  <span>
                    <b>{i.title}</b>
                    <small>{i.desc}</small>
                  </span>
                </div>
              ))}
            </div>
            <h3 style={{ marginTop: 24 }}>Our welfare commitments</h3>
            <ul className={styles.welfare}>
              {WELFARE.map((w) => (
                <li key={w}>
                  <Icon name="check" />
                  {w}
                </li>
              ))}
            </ul>
          </div>

          <div className={`${styles.panel} ${styles.sunbg}`}>
            <Icon name="building" style={{ width: 32, height: 32, marginBottom: 10 }} />
            <h3>For HR and mobility teams</h3>
            <p>
              Add pet relocation to an employee&apos;s relocation package and we manage it end to
              end. One coordinator, one plan and one invoice, so a pet never becomes the reason a
              transfer slips.
            </p>
            <AudienceLink audience="Corporate or HR team" className={`${styles.btn} ${styles.btnSm}`}>
              Talk to our mobility team
            </AudienceLink>
          </div>
        </div>
      </div>
    </section>
  );
}
