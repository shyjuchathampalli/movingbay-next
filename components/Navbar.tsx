"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200">
      
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12 py-4">
        
        {/* LOGO */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="MovingBay Logo"
            width={140}
            height={40}
            priority
          />
        </Link>

        {/* MENU */}
        <ul className="hidden md:flex gap-10 text-sm font-semibold text-gray-800">
          
          <li>
            <Link href="/" className="hover:text-green-600 transition">
              Home
            </Link>
          </li>

          <li>
            <Link href="/about" className="hover:text-green-600 transition">
              About
            </Link>
          </li>

          <li>
            <Link href="/why-movingbay" className="hover:text-green-600 transition">
              Why MovingBay
            </Link>
          </li>

          <li>
            <Link href="/become-a-partner" className="hover:text-green-600 transition">
              Become a Partner
            </Link>
          </li>

        </ul>

        {/* CTA */}
        <a
          href="/request-quote"
          target="_blank"
          className="bg-green-600 hover:bg-green-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow transition"
        >
          Request Quote
        </a>

      </div>
    </nav>
  );
}