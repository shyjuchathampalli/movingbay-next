import Icon from "./Icon";
import styles from "./gm.module.css";
import { PHONE_INTL } from "./data";

export default function WhatsAppFloat() {
  const text = encodeURIComponent("Hi MovingBay, I need assistance with relocation services.");
  return (
    <a className={styles.waFloat} href={`https://wa.me/${PHONE_INTL}?text=${text}`} aria-label="Chat on WhatsApp">
      <Icon name="wa" />
      <span>Chat on WhatsApp</span>
    </a>
  );
}
