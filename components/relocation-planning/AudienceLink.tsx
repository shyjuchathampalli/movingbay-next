"use client";

import type { ReactNode } from "react";
import { AUDIENCE_EVENT, type Audience } from "./data";

type Props = {
  audience: Audience;
  className?: string;
  href?: string;
  children: ReactNode;
};

/**
 * A link that scrolls to the contact form and tells it which audience
 * (corporate / family / pet) the visitor belongs to, so the form pre-selects it.
 */
export default function AudienceLink({ audience, className, href = "https://wa.me/918618173141?text=Hi%20MovingBay,%20I%20need%20assistance%20with%20relocation%20services.", children }: Props) {
  return (
    <a
      href={href}
      className={className}
      onClick={() => window.dispatchEvent(new CustomEvent(AUDIENCE_EVENT, { detail: audience }))}
    >
      {children}
    </a>
  );
}
