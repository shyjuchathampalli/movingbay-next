import Icon, { type IconName } from "./Icon";
import styles from "./gm.module.css";
import { cx } from "./cx";

type Props = { label: string; icon?: IconName; className?: string };

/**
 * Dummy image block. Replace with next/image (or a background image)
 * once real photography is available.
 */
export default function Placeholder({ label, icon = "image", className }: Props) {
  return (
    <div className={cx(styles.ph, className)} role="img" aria-label={`Placeholder: ${label}`}>
      <Icon name={icon} />
      <span>{label}</span>
    </div>
  );
}
