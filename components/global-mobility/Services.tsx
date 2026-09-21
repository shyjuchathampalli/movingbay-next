import {
  ClipboardList,
  UserRound,
  Globe2,
  MapPinned,
  FileCheck2,
  House,
  Truck,
  GraduationCap,
  PawPrint,
  Home,
} from "lucide-react";

import styles from "@/app/global-mobility/global-mobility.module.css";

const services = [
  ["Relocation Planning", ClipboardList],
  ["Employee Relocation", UserRound],
  ["International Relocation", Globe2],
  ["Destination Services", MapPinned],
  ["Immigration & Documentation", FileCheck2],
  ["Home & Accommodation", House],
  ["Moving & Transportation", Truck],
  ["Family & School Support", GraduationCap],
  ["Pet Relocation", PawPrint],
  ["Settling-In Services", Home],
];

export default function Services() {
  return (
    <section
      id="services"
      className={styles.servicesSection}
    >

      <div className={styles.container}>

        <div className={styles.darkHeading}>

          <div className={styles.sectionEyebrowLight}>
            OUR SERVICES
          </div>

          <h2 className={styles.darkTitle}>
            One Move. Multiple Needs.
            <br />
            One Coordinated Partner.
          </h2>

          <p>
            From the first relocation consultation to settling into
            your new destination, MovingBay helps coordinate the
            services required for a successful move.
          </p>

        </div>

        <div className={styles.serviceGrid}>

          {services.map(([name, Icon]) => {
            const ServiceIcon = Icon as typeof ClipboardList;

            return (
              <div
                key={name as string}
                className={styles.serviceItem}
              >
                <div className={styles.serviceIcon}>
                  <ServiceIcon size={21} />
                </div>

                <span>{name as string}</span>
              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}