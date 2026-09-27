import Link from "next/link";
import Image from "next/image";
import {
  Instagram,
  Linkedin,
  Facebook,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#071827] text-[#91b3cf]">

      {/* =========================================
          MAIN FOOTER
      ========================================= */}
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-16 md:px-8 md:pt-20">

      <div className="grid gap-8 md:grid-cols-5">

          {/* =====================================
              BRAND
          ===================================== */}
          <div>

            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="MovingBay Logo"
                width={140}
                height={40}
                priority
                className="h-auto w-[140px]"
              />
            </Link>

            <p
              className="
                mt-5
                max-w-sm
                text-[15px]
                leading-6
                text-[#91b3cf]
              "
            >
              Global Mobility & Relocation Services
            </p>

            <p
              className="
                mt-2
                max-w-sm
                text-[15px]
                leading-6
                text-[#91b3cf]
              "
            >
              Helping businesses, employees, individuals and families
              navigate relocation across cities, countries and borders.
            </p>


            {/* SOCIAL LINKS */}
            <div className="mt-6 flex items-center gap-3">

              <Link
                href="#"
                aria-label="LinkedIn"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#294256]
                  text-[#91b3cf]
                  transition
                  duration-300
                  hover:border-[#8fc63f]
                  hover:bg-[#102b3d]
                  hover:text-[#8fc63f]
                "
              >
                <Linkedin size={16} />
              </Link>

              <Link
                href="#"
                aria-label="Instagram"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#294256]
                  text-[#91b3cf]
                  transition
                  duration-300
                  hover:border-[#8fc63f]
                  hover:bg-[#102b3d]
                  hover:text-[#8fc63f]
                "
              >
                <Instagram size={16} />
              </Link>

              <Link
                href="#"
                aria-label="Facebook"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#294256]
                  text-[#91b3cf]
                  transition
                  duration-300
                  hover:border-[#8fc63f]
                  hover:bg-[#102b3d]
                  hover:text-[#8fc63f]
                "
              >
                <Facebook size={16} />
              </Link>

            </div>

          </div>


          {/* =====================================
              FOR BUSINESS
          ===================================== */}
          <div>

            <h4
              className="
                mb-6
                font-[family-name:var(--font-exo-2)]
                text-[17px]
                font-bold
                tracking-wide
                text-[#edf5f8]
              "
            >
              For Business
            </h4>

            <ul className="space-y-4">

              <li>
                <Link
                  href="/relocation-guidelines"
                  className="
                    text-[15px]
                    leading-6
                    text-[#91b3cf]
                    transition-colors
                    duration-300
                    hover:text-[#8fc63f]
                  "
                >
                  Relocation Guidelines
                </Link>
              </li>

              <li>
                <Link
                  href="/relocation-planning"
                  className="
                    text-[15px]
                    leading-6
                    text-[#91b3cf]
                    transition-colors
                    duration-300
                    hover:text-[#8fc63f]
                  "
                >
                  Relocation Planning
                </Link>
              </li>

            </ul>

          </div>


          {/* =====================================
              SOLUTIONS
          ===================================== */}
          <div>

            <h4
              className="
                mb-6
                font-[family-name:var(--font-exo-2)]
                text-[17px]
                font-bold
                tracking-wide
                text-[#edf5f8]
              "
            >
              Solutions
            </h4>

            <ul className="space-y-4">

              <li>
                <Link
                  href="/solutions#household-goods-moving"
                  className="
                    text-[15px]
                    leading-6
                    text-[#91b3cf]
                    transition-colors
                    duration-300
                    hover:text-[#8fc63f]
                  "
                >
                  Household Goods Moving
                </Link>
              </li>

              <li>
                <Link
                  href="/solutions#frro-registration"
                  className="
                    text-[15px]
                    leading-6
                    text-[#91b3cf]
                    transition-colors
                    duration-300
                    hover:text-[#8fc63f]
                  "
                >
                  FRRO Registration
                </Link>
              </li>

              <li>
                <Link
                  href="/solutions#home-school-search"
                  className="
                    text-[15px]
                    leading-6
                    text-[#91b3cf]
                    transition-colors
                    duration-300
                    hover:text-[#8fc63f]
                  "
                >
                  Home & School Search
                </Link>
              </li>

              <li>
                <Link
                  href="/solutions#immigration"
                  className="
                    text-[15px]
                    leading-6
                    text-[#91b3cf]
                    transition-colors
                    duration-300
                    hover:text-[#8fc63f]
                  "
                >
                  Immigration
                </Link>
              </li>

              <li>
                <Link
                  href="/pet-moving"
                  className="
                    text-[15px]
                    leading-6
                    text-[#91b3cf]
                    transition-colors
                    duration-300
                    hover:text-[#8fc63f]
                  "
                >
                  Pet Moving
                </Link>
              </li>

            </ul>

          </div>


          {/* =====================================
              COMPANY
          ===================================== */}
          <div>

            <h4
              className="
                mb-6
                font-[family-name:var(--font-exo-2)]
                text-[17px]
                font-bold
                tracking-wide
                text-[#edf5f8]
              "
            >
              Company
            </h4>

            <ul className="space-y-4">

              <li>
                <Link
                  href="/about"
                  className="
                    text-[15px]
                    leading-6
                    text-[#91b3cf]
                    transition-colors
                    duration-300
                    hover:text-[#8fc63f]
                  "
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/why-movingbay"
                  className="
                    text-[15px]
                    leading-6
                    text-[#91b3cf]
                    transition-colors
                    duration-300
                    hover:text-[#8fc63f]
                  "
                >
                  Why MovingBay
                </Link>
              </li>

              <li>
                <Link
                  href="/become-a-partner"
                  className="
                    text-[15px]
                    leading-6
                    text-[#91b3cf]
                    transition-colors
                    duration-300
                    hover:text-[#8fc63f]
                  "
                >
                  Become a Partner
                </Link>
              </li>

              <li>
                <Link
                  href="/download-guide"
                  className="
                    text-[15px]
                    leading-6
                    text-[#91b3cf]
                    transition-colors
                    duration-300
                    hover:text-[#8fc63f]
                  "
                >
                  Download Guide
                </Link>
              </li>

            </ul>

          </div>


          {/* =====================================
              CONTACT
          ===================================== */}
          <div>

            <h4
              className="
                mb-6
                font-[family-name:var(--font-exo-2)]
                text-[17px]
                font-bold
                tracking-wide
                text-[#edf5f8]
              "
            >
              Contact
            </h4>

            <ul className="space-y-4">

              {/* PHONE */}
              <li>
                <a
                  href="tel:+918618173141"
                  className="
                    flex
                    items-center
                    gap-3
                    text-[15px]
                    text-[#91b3cf]
                    transition-colors
                    duration-300
                    hover:text-[#8fc63f]
                  "
                >
                  <Phone size={17} />
                  <span>+91 8618173141</span>
                </a>
              </li>


              {/* EMAIL */}
              <li>
                <a
                  href="mailto:info@movingbay.com"
                  className="
                    flex
                    items-center
                    gap-3
                    text-[15px]
                    text-[#91b3cf]
                    transition-colors
                    duration-300
                    hover:text-[#8fc63f]
                  "
                >
                  <Mail size={17} />
                  <span>info@movingbay.com</span>
                </a>
              </li>


              {/* ADDRESS */}
              <li className="flex items-start gap-3">

                <MapPin
                  size={18}
                  className="mt-1 shrink-0 text-[#8fc63f]"
                />

                <a
                  href="https://www.google.com/search?q=moving+bay+address"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-[14px]
                    leading-6
                    text-[#91b3cf]
                    transition-colors
                    duration-300
                    hover:text-[#8fc63f]
                  "
                >
                  Second Floor, Gram Panchayath,
                  <br />
                  157/12-9/49, Sarjapur - Marathahalli Rd,
                  <br />
                  near Kodathi, Carmelaram,
                  <br />
                  Hadosiddapura, Kodathi Village,
                  <br />
                  Bengaluru, Karnataka 560035
                </a>

              </li>

            </ul>

          </div>

        </div>


        {/* =========================================
            DIVIDER
        ========================================= */}
        <div className="mt-16 border-t border-[#1c3447]" />


        {/* =========================================
            BOTTOM BAR
        ========================================= */}
        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-4
            pt-7
            text-[13px]
            leading-5
            text-[#607f94]
            md:flex-row
          "
        >

          <p>
            © {new Date().getFullYear()} MovingBay. All rights reserved.
          </p>

          <div className="flex gap-7">

            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-[#8fc63f]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-[#8fc63f]"
            >
              Terms
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}