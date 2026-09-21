"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";

import styles from "@/app/global-mobility/global-mobility.module.css";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "For Businesses", href: "#corporate" },
  { label: "For Individuals", href: "#individuals" },
  { label: "Destinations", href: "#network" },
  { label: "Resources", href: "#insights" },
];

export default function GlobalMobilityNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.navInner}>

        <Link href="/">
          <Image
            src="/logo.png"
            alt="MovingBay Logo"
            width={140}
            height={40}
            priority
          />
        </Link>

        <nav className={styles.desktopNav}>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={styles.navLink}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.navActions}>
          <Link
            href="#contact"
            className={styles.navCta}
          >
            Talk to an Expert
            <ArrowUpRight size={15} />
          </Link>

          <button
            className={styles.mobileMenuButton}
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className={styles.mobileMenu}>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className={styles.mobileNavLink}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="#contact"
            className={styles.mobileMenuCta}
            onClick={() => setOpen(false)}
          >
            Talk to a Mobility Expert
          </Link>
        </div>
      )}
    </header>
  );
}