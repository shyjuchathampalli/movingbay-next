import { Home, FileCheck2, School, Globe2, type LucideIcon } from "lucide-react";
import type { ServiceIcon } from "./data";

/** Maps the icon keys used in data.ts to actual lucide-react components. */
export const ICONS: Record<ServiceIcon, LucideIcon> = {
  home: Home,
  fileCheck: FileCheck2,
  school: School,
  globe: Globe2,
};
