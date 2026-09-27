import Icon from "./Icon";
import Image from "next/image";
import Link from "next/link";
import styles from "./gm.module.css";
import { EMAIL, PHONE_DISPLAY, PHONE_INTL } from "./data";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <div className={styles.fgrid}>
          <div>
            <Link href="/">
              <Image
                src="/logo.png"
                alt="MovingBay Logo"
                width={140}
                height={40}
                priority
              />
            </Link>
            <p>
              Global Mobility & Relocation Services
            </p>

            <p className={styles.footerDescription}>
              Helping businesses, employees, individuals and
              families navigate relocation across cities,
              countries and borders.
            </p>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              <li><a href="#solutions">Relocation Planning</a></li>
              <li><a href="#solutions">Employee Relocation</a></li>
              <li><a href="#pets">Business relocation</a></li>
              <li><a href="/pet-relocation-bangalore">Pet relocation</a></li>
            </ul>
          </div>

          <div>
            <h4>Solutions</h4>
            <ul>
              <li><a href="#solutions">Household Goods Moving</a></li>
              <li><a href="#solutions">FRRO Registration</a></li>
              <li><a href="#pets">Home & School Search</a></li>
              <li><a href="/pet-relocation-bangalore">Immigration</a></li>
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="/why-movingbay">Why MovingBay</a></li>
              <li><a href="#coverage">Coverage</a></li>
              <li><a href="#insights">Insights</a></li>
              <li><a href="/become-a-partner">Partners</a></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href={`tel:+${PHONE_INTL}`}>{PHONE_DISPLAY}</a></li>
              <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
              <li><a href={`https://wa.me/${PHONE_INTL}`}>Chat on WhatsApp</a></li>
              <li>Bangalore, India</li>
            </ul>
          </div>
        </div>

        <div className={styles.legal}>
          <span>&copy; {year} MovingBay. All rights reserved.</span>
          <span>
            <a href="/privacy-policy">Privacy Policy</a> &nbsp; <a href="/terms">Terms</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
