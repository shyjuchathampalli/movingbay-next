import Icon from "./Icon";
import AudienceLink from "./AudienceLink";
import styles from "./gm.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.wrap}>
        <div>
          <h1>Global relocation, handled end to end. Including the family pet.</h1>
          <p className={styles.subH}>
            MovingBay supports companies, employees and families moving to, from and within
            India, with specialist expertise in pet relocation.
          </p>
          <div className={styles.ctaRow}>
            <AudienceLink audience="Corporate or HR team" className={`${styles.btn} ${styles.btnSun}`}>
              Talk to our mobility team <Icon name="arrow" />
            </AudienceLink>
          </div>
          <div className={styles.trustline}>
            <span>
              <Icon name="paw" />
              <b>2000+</b>&nbsp;relocation projects
            </span>
            <span>
              <Icon name="pin" />
              <b>60+</b>&nbsp;Countries covered
            </span>
            <span>
              <Icon name="clock" />
              <b>25+</b>&nbsp;years of experience
            </span>
          </div>
        </div>

        <div
          className={styles.mapcard}
          aria-label="Illustration of MovingBay routes from Bangalore to cities around the world"
        >
          <svg viewBox="0 0 560 440" role="img" aria-label="Route map">
            <defs>
              <pattern id="gmDots" width="16" height="16" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.2" fill="rgba(255,255,255,.14)" />
              </pattern>
            </defs>
            <rect width="560" height="440" rx="16" fill="url(#gmDots)" />
            <path className={styles.arc} pathLength={1} d="M350 270 Q 270 120 210 110" />
            <path className={styles.arc} pathLength={1} d="M350 270 Q 200 40 80 170" />
            <path className={styles.arc} pathLength={1} d="M350 270 Q 320 220 285 232" />
            <path className={styles.arc} pathLength={1} d="M350 270 Q 410 272 440 322" />
            <path className={styles.arc} pathLength={1} d="M350 270 Q 470 300 510 390" />
            <path className={styles.arc} pathLength={1} d="M350 270 Q 300 335 270 365" />
            <g fill="#fff">
              <circle cx="210" cy="110" r="4.5" />
              <circle cx="80" cy="170" r="4.5" />
              <circle cx="285" cy="232" r="4.5" />
              <circle cx="440" cy="322" r="4.5" />
              <circle cx="510" cy="390" r="4.5" />
              <circle cx="270" cy="365" r="4.5" />
            </g>
            <circle cx="350" cy="270" r="16" fill="rgba(245,166,35,.22)" />
            <circle className={styles.hub} cx="350" cy="270" r="8" />
            <text className={styles.mlabel} x="222" y="104">London</text>
            <text className={styles.mlabel} x="52" y="196">New York</text>
            <text className={styles.mlabel} x="226" y="226">Dubai</text>
            <text className={styles.mlabel} x="450" y="318">Singapore</text>
            <text className={styles.mlabel} x="452" y="392">Sydney</text>
            <text className={styles.mlabel} x="196" y="386">Johannesburg</text>
            <text x="366" y="262" fill="#fff" fontFamily="Bricolage Grotesque, sans-serif" fontWeight={700} fontSize={15}>
              Bangalore
            </text>
          </svg>
          <div className={styles.mapTag}>
            <Icon name="route" style={{ width: "1em", height: "1em" }} />
            Bangalore hub. Illustrative routes.
          </div>
        </div>
      </div>
    </section>
  );
}
