"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/10">
      
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12 py-4">
        
        {/* LOGO */}
        <Image
          src="/logo.png"
          alt="MovingBay Logo"
          width={140}
          height={40}
          priority
        />

        {/* MENU */}
        <ul className="hidden md:flex gap-8 text-sm text-gray-300 font-medium">
          <li>
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-white transition">
              About
            </Link>
          </li>
          <li className="hover:text-white transition cursor-pointer">
            Why MovingBay
          </li>
          <li className="hover:text-white transition cursor-pointer">
            International Moving
          </li>
          <li className="hover:text-white transition cursor-pointer">
            Become a Partner
          </li>
        </ul>

        {/* CTA */}
        <a
          href="https://wa.me/918618173141"
          target="_blank"
          className="bg-green-500 hover:bg-green-400 text-black px-5 py-2 rounded-full text-sm font-semibold shadow-lg transition"
        >
          Request Quote
        </a>
      </div>
    </nav>
  );
}