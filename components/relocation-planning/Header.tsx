"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

import styles from "./gm.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.wrap}>

        {/* LOGO */}
        <Link
          href="/"
          className={styles.logo}
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="MovingBay Logo"
            width={140}
            height={40}
            priority
          />
        </Link>


        {/* =========================
            DESKTOP NAVIGATION
        ========================== */}

        <nav className={styles.desktopNav} aria-label="Main navigation">

          <Link href="/" className={styles.navLink}>
            Home
          </Link>


          {/* FOR BUSINESS */}
          <div className={styles.dropdown}>

            <button className={styles.dropdownTrigger}>
              For Business
              <ChevronDown size={14} />
            </button>

            <div className={styles.dropdownMenu}>

              <Link href="/relocation-guidelines">
                Relocation Guidelines
              </Link>

              <Link href="/relocation-planning">
                Relocation Planning
              </Link>

            </div>

          </div>


          {/* SOLUTIONS */}
          <div className={styles.dropdown}>

            <button className={styles.dropdownTrigger}>
              Solutions
              <ChevronDown size={14} />
            </button>

            <div className={styles.dropdownMenu}>

              <Link href="/solutions#household-goods-moving">
                Household Goods Moving
              </Link>

              <Link href="/solutions#frro-registration">
                FRRO Registration
              </Link>

              <Link href="/solutions#home-school-search">
                Home &amp; School Search
              </Link>

              <Link href="/solutions#immigration">
                Immigration
              </Link>

              <Link href="/pet-moving">
                Pet Moving
              </Link>

            </div>

          </div>


          {/* ABOUT */}
          <Link href="/about" className={styles.navLink}>
            About
          </Link>


          {/* WHY MOVINGBAY */}
          <Link
            href="/why-movingbay"
            className={styles.navLink}
          >
            Why MovingBay
          </Link>


          {/* PARTNER */}
          <Link
            href="/become-a-partner"
            className={styles.navLink}
          >
            Become a Partner
          </Link>

        </nav>


        {/* =========================
            RIGHT SIDE
        ========================== */}

        <div className={styles.rightSide}>

          {/* DESKTOP CTA */}
          <a
            href="https://wa.me/918618173141?text=Hi%20MovingBay,%20I%20need%20assistance%20with%20relocation%20services."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.desktopCta}
          >
            Talk to a Mobility Expert
          </a>


          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            className={styles.menuButton}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <X size={25} />
            ) : (
              <Menu size={25} />
            )}
          </button>

        </div>


        {/* =========================
            MOBILE NAVIGATION
        ========================== */}

        <div
          className={`${styles.mobileNav} ${
            open ? styles.mobileNavOpen : ""
          }`}
        >

          <Link
            href="/"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>


          {/* MOBILE FOR BUSINESS */}
          <div className={styles.mobileSection}>

            <div className={styles.mobileSectionTitle}>
              For Business
            </div>

            <Link
              href="/relocation-guidelines"
              onClick={() => setOpen(false)}
            >
              Relocation Guidelines
            </Link>

            <Link
              href="/relocation-planning"
              onClick={() => setOpen(false)}
            >
              Relocation Planning
            </Link>

          </div>


          {/* MOBILE SOLUTIONS */}
          <div className={styles.mobileSection}>

            <div className={styles.mobileSectionTitle}>
              Solutions
            </div>

            <Link
              href="/solutions#household-goods-moving"
              onClick={() => setOpen(false)}
            >
              Household Goods Moving
            </Link>

            <Link
              href="/solutions#frro-registration"
              onClick={() => setOpen(false)}
            >
              FRRO Registration
            </Link>

            <Link
              href="/solutions#home-school-search"
              onClick={() => setOpen(false)}
            >
              Home &amp; School Search
            </Link>

            <Link
              href="/solutions#immigration"
              onClick={() => setOpen(false)}
            >
              Immigration
            </Link>

            <Link
              href="/pet-moving"
              onClick={() => setOpen(false)}
            >
              Pet Moving
            </Link>

          </div>


          {/* MOBILE COMPANY LINKS */}

          <Link
            href="/about"
            onClick={() => setOpen(false)}
          >
            About
          </Link>

          <Link
            href="/why-movingbay"
            onClick={() => setOpen(false)}
          >
            Why MovingBay
          </Link>

          <Link
            href="/become-a-partner"
            onClick={() => setOpen(false)}
          >
            Become a Partner
          </Link>


          {/* MOBILE CTA */}
          <a
            href="https://wa.me/918618173141?text=Hi%20MovingBay,%20I%20need%20assistance%20with%20relocation%20services."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileCta}
          >
            Talk to a Mobility Expert
          </a>

        </div>

      </div>
    </header>
  );
}