import Image from "next/image";
import Link from "next/link";
import {
  Instagram,
  Linkedin,
  Facebook,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import styles from "@/app/global-mobility/global-mobility.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.container}>

        <div className={styles.footerTop}>

          <div className={styles.footerBrand}>

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

            <div className={styles.socials}>

              <Link href="#">
                <Linkedin size={17} />
              </Link>

              <Link href="#">
                <Instagram size={17} />
              </Link>

              <Link href="#">
                <Facebook size={17} />
              </Link>

            </div>

          </div>

          <div className={styles.footerColumn}>

            <h4>Services</h4>

            <Link href="#services">
              Relocation Planning
            </Link>

            <Link href="#services">
              Employee Relocation
            </Link>

            <Link href="#services">
              International Relocation
            </Link>

            <Link href="#services">
              Destination Services
            </Link>

            <Link href="#pets">
              Pet Relocation
            </Link>

          </div>

          <div className={styles.footerColumn}>

            <h4>Solutions</h4>

            <Link href="#corporate">
              For Businesses
            </Link>

            <Link href="#corporate">
              For HR Teams
            </Link>

            <Link href="#individuals">
              For Employees
            </Link>

            <Link href="#individuals">
              For Families
            </Link>

            <Link href="#pets">
              For Pet Parents
            </Link>

          </div>

          <div className={styles.footerColumn}>

            <h4>Resources</h4>

            <Link href="#insights">
              Mobility Insights
            </Link>

            <Link href="#insights">
              Destination Guides
            </Link>

            <Link href="#insights">
              Relocation Guides
            </Link>

            <Link href="#insights">
              Pet Travel Guides
            </Link>

            <Link href="#faq">
              FAQs
            </Link>

          </div>

          <div className={styles.footerColumn}>

            <h4>Contact</h4>

            <a href="tel:+918618173141">
              <Phone size={15} />
              +91 8618173141
            </a>

            <a href="mailto:info@movingbay.com">
              <Mail size={15} />
              info@movingbay.com
            </a>

            <span>
              <MapPin size={15} />
              Bangalore, India
            </span>

          </div>

        </div>

        <div className={styles.footerBottom}>

          <span>
            © {new Date().getFullYear()} MovingBay. All rights reserved.
          </span>

          <div>

            <Link href="#">
              Privacy Policy
            </Link>

            <Link href="#">
              Terms of Service
            </Link>

            <Link href="#">
              Sitemap
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}