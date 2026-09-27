"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [businessOpen, setBusinessOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setBusinessOpen(false);
    setSolutionsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-[#213b4e] bg-[#0f202f]">

      {/* ================= NAVBAR ================= */}

      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 md:px-8 lg:px-10">

        {/* ================= LOGO ================= */}

        <Link
          href="/"
          onClick={closeMobileMenu}
          className="flex-shrink-0"
        >
          <Image
            src="/logo.png"
            alt="MovingBay Logo"
            width={140}
            height={40}
            priority
            className="h-auto w-[125px] sm:w-[135px] md:w-[140px]"
          />
        </Link>


        {/* ================= DESKTOP MENU ================= */}

        <ul className="hidden items-center gap-8 text-sm font-semibold text-white md:flex">

          {/* HOME */}
          <li>
            <Link
              href="/"
              className="transition-colors duration-200 hover:text-[#57c7ce]"
            >
              Home
            </Link>
          </li>


          {/* ================= FOR BUSINESS ================= */}

          <li className="group relative">

            <button
              type="button"
              className="
                flex
                items-center
                gap-1.5
                py-2
                transition-colors
                duration-200
                hover:text-[#57c7ce]
              "
            >
              For Business

              <ChevronDown
                size={15}
                className="
                  transition-transform
                  duration-200
                  group-hover:rotate-180
                "
              />
            </button>


            {/* DROPDOWN */}

            <div
              className="
                invisible
                absolute
                left-1/2
                top-full
                w-60
                -translate-x-1/2
                translate-y-2
                rounded-2xl
                border
                border-[#294457]
                bg-[#102a3d]
                p-2
                opacity-0
                shadow-[0_20px_50px_rgba(0,0,0,0.35)]
                transition-all
                duration-200
                group-hover:visible
                group-hover:translate-y-0
                group-hover:opacity-100
              "
            >

              <Link
                href="/relocation-guidelines"
                className="
                  block
                  rounded-xl
                  px-4
                  py-3
                  text-sm
                  text-[#c2d4df]
                  transition
                  hover:bg-[#16384c]
                  hover:text-[#57c7ce]
                "
              >
                Relocation Guidelines
              </Link>

              <Link
                href="/relocation-planning"
                className="
                  block
                  rounded-xl
                  px-4
                  py-3
                  text-sm
                  text-[#c2d4df]
                  transition
                  hover:bg-[#16384c]
                  hover:text-[#57c7ce]
                "
              >
                Relocation Planning
              </Link>

            </div>

          </li>


          {/* ================= SOLUTIONS ================= */}

          <li className="group relative">

            <button
              type="button"
              className="
                flex
                items-center
                gap-1.5
                py-2
                transition-colors
                duration-200
                hover:text-[#57c7ce]
              "
            >
              Solutions

              <ChevronDown
                size={15}
                className="
                  transition-transform
                  duration-200
                  group-hover:rotate-180
                "
              />
            </button>


            {/* DROPDOWN */}

            <div
              className="
                invisible
                absolute
                left-1/2
                top-full
                w-64
                -translate-x-1/2
                translate-y-2
                rounded-2xl
                border
                border-[#294457]
                bg-[#102a3d]
                p-2
                opacity-0
                shadow-[0_20px_50px_rgba(0,0,0,0.35)]
                transition-all
                duration-200
                group-hover:visible
                group-hover:translate-y-0
                group-hover:opacity-100
              "
            >

              <Link
                href="/solutions#household-goods-moving"
                className="
                  block
                  rounded-xl
                  px-4
                  py-3
                  text-sm
                  text-[#c2d4df]
                  transition
                  hover:bg-[#16384c]
                  hover:text-[#57c7ce]
                "
              >
                Household Goods Moving
              </Link>

              <Link
                href="/solutions#frro-registration"
                className="
                  block
                  rounded-xl
                  px-4
                  py-3
                  text-sm
                  text-[#c2d4df]
                  transition
                  hover:bg-[#16384c]
                  hover:text-[#57c7ce]
                "
              >
                FRRO Registration
              </Link>

              <Link
                href="/solutions#home-school-search"
                className="
                  block
                  rounded-xl
                  px-4
                  py-3
                  text-sm
                  text-[#c2d4df]
                  transition
                  hover:bg-[#16384c]
                  hover:text-[#57c7ce]
                "
              >
                Home &amp; School Search
              </Link>

              <Link
                href="/solutions#immigration"
                className="
                  block
                  rounded-xl
                  px-4
                  py-3
                  text-sm
                  text-[#c2d4df]
                  transition
                  hover:bg-[#16384c]
                  hover:text-[#57c7ce]
                "
              >
                Immigration
              </Link>

            </div>

          </li>


          {/* ABOUT */}

          <li>
            <Link
              href="/about"
              className="transition-colors duration-200 hover:text-[#57c7ce]"
            >
              About
            </Link>
          </li>


          {/* WHY MOVINGBAY */}

          <li>
            <Link
              href="/why-movingbay"
              className="transition-colors duration-200 hover:text-[#57c7ce]"
            >
              Why MovingBay
            </Link>
          </li>


          {/* PARTNER */}

          <li>
            <Link
              href="/become-a-partner"
              className="transition-colors duration-200 hover:text-[#57c7ce]"
            >
              Become a Partner
            </Link>
          </li>

        </ul>


        {/* ================= DESKTOP CTA ================= */}

        <a
          href="https://wa.me/918618173141?text=Hi%20MovingBay,%20I%20need%20assistance%20with%20relocation%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="
            hidden
            rounded-full
            bg-[#ffb800]
            px-5
            py-2.5
            text-sm
            font-semibold
            text-white
            shadow-lg
            transition
            duration-200
            hover:bg-[#ffc42b]
            md:block
          "
        >
          Talk to a Mobility Expert
        </a>


        {/* ================= MOBILE MENU BUTTON ================= */}

        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-lg
            border
            border-[#294457]
            text-white
            transition
            hover:border-[#57c7ce]
            hover:text-[#57c7ce]
            md:hidden
          "
        >
          {mobileMenuOpen ? (
            <X size={23} />
          ) : (
            <Menu size={23} />
          )}
        </button>

      </div>


      {/* ===================================================== */}
      {/* ================= MOBILE NAVIGATION ================== */}
      {/* ===================================================== */}

      <div
        className={`
          overflow-hidden
          border-t
          border-[#213b4e]
          bg-[#0b1b29]
          transition-all
          duration-300
          md:hidden
          ${
            mobileMenuOpen
              ? "max-h-[700px] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >

        <div className="px-5 pb-6 pt-4">

          {/* HOME */}

          <Link
            href="/"
            onClick={closeMobileMenu}
            className="
              block
              border-b
              border-[#213b4e]
              py-4
              text-[15px]
              font-semibold
              text-white
              transition
              hover:text-[#57c7ce]
            "
          >
            Home
          </Link>


          {/* ================= FOR BUSINESS ================= */}

          <div className="border-b border-[#213b4e]">

            <button
              type="button"
              onClick={() => setBusinessOpen(!businessOpen)}
              className="
                flex
                w-full
                items-center
                justify-between
                py-4
                text-left
                text-[15px]
                font-semibold
                text-white
              "
            >
              <span>For Business</span>

              <ChevronDown
                size={18}
                className={`transition-transform duration-200 ${
                  businessOpen ? "rotate-180 text-[#57c7ce]" : ""
                }`}
              />
            </button>


            <div
              className={`overflow-hidden transition-all duration-300 ${
                businessOpen
                  ? "max-h-40 pb-3 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >

              <Link
                href="/relocation-guidelines"
                onClick={closeMobileMenu}
                className="
                  block
                  rounded-lg
                  px-4
                  py-3
                  text-sm
                  text-[#91b3cf]
                  transition
                  hover:bg-[#102a3d]
                  hover:text-[#57c7ce]
                "
              >
                Relocation Guidelines
              </Link>

              <Link
                href="/relocation-planning"
                onClick={closeMobileMenu}
                className="
                  block
                  rounded-lg
                  px-4
                  py-3
                  text-sm
                  text-[#91b3cf]
                  transition
                  hover:bg-[#102a3d]
                  hover:text-[#57c7ce]
                "
              >
                Relocation Planning
              </Link>

            </div>

          </div>


          {/* ================= SOLUTIONS ================= */}

          <div className="border-b border-[#213b4e]">

            <button
              type="button"
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              className="
                flex
                w-full
                items-center
                justify-between
                py-4
                text-left
                text-[15px]
                font-semibold
                text-white
              "
            >
              <span>Solutions</span>

              <ChevronDown
                size={18}
                className={`transition-transform duration-200 ${
                  solutionsOpen ? "rotate-180 text-[#57c7ce]" : ""
                }`}
              />
            </button>


            <div
              className={`overflow-hidden transition-all duration-300 ${
                solutionsOpen
                  ? "max-h-80 pb-3 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >

              <Link
                href="/solutions#household-goods-moving"
                onClick={closeMobileMenu}
                className="
                  block
                  rounded-lg
                  px-4
                  py-3
                  text-sm
                  text-[#91b3cf]
                  transition
                  hover:bg-[#102a3d]
                  hover:text-[#57c7ce]
                "
              >
                Household Goods Moving
              </Link>

              <Link
                href="/solutions#frro-registration"
                onClick={closeMobileMenu}
                className="
                  block
                  rounded-lg
                  px-4
                  py-3
                  text-sm
                  text-[#91b3cf]
                  transition
                  hover:bg-[#102a3d]
                  hover:text-[#57c7ce]
                "
              >
                FRRO Registration
              </Link>

              <Link
                href="/solutions#home-school-search"
                onClick={closeMobileMenu}
                className="
                  block
                  rounded-lg
                  px-4
                  py-3
                  text-sm
                  text-[#91b3cf]
                  transition
                  hover:bg-[#102a3d]
                  hover:text-[#57c7ce]
                "
              >
                Home &amp; School Search
              </Link>

              <Link
                href="/solutions#immigration"
                onClick={closeMobileMenu}
                className="
                  block
                  rounded-lg
                  px-4
                  py-3
                  text-sm
                  text-[#91b3cf]
                  transition
                  hover:bg-[#102a3d]
                  hover:text-[#57c7ce]
                "
              >
                Immigration
              </Link>

            </div>

          </div>


          {/* ABOUT */}

          <Link
            href="/about"
            onClick={closeMobileMenu}
            className="
              block
              border-b
              border-[#213b4e]
              py-4
              text-[15px]
              font-semibold
              text-white
              transition
              hover:text-[#57c7ce]
            "
          >
            About
          </Link>


          {/* WHY MOVINGBAY */}

          <Link
            href="/why-movingbay"
            onClick={closeMobileMenu}
            className="
              block
              border-b
              border-[#213b4e]
              py-4
              text-[15px]
              font-semibold
              text-white
              transition
              hover:text-[#57c7ce]
            "
          >
            Why MovingBay
          </Link>


          {/* PARTNER */}

          <Link
            href="/become-a-partner"
            onClick={closeMobileMenu}
            className="
              block
              border-b
              border-[#213b4e]
              py-4
              text-[15px]
              font-semibold
              text-white
              transition
              hover:text-[#57c7ce]
            "
          >
            Become a Partner
          </Link>


          {/* MOBILE CTA */}

          <a
            href="https://wa.me/918618173141?text=Hi%20MovingBay,%20I%20need%20assistance%20with%20relocation%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-5
              block
              rounded-full
              bg-[#ffb800]
              px-5
              py-3
              text-center
              text-sm
              font-semibold
              text-white
              shadow-lg
              transition
              hover:bg-[#ffc42b]
            "
          >
            Talk to a Mobility Expert
          </a>

        </div>

      </div>

    </nav>
  );
}