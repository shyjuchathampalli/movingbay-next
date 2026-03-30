import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 px-6 md:px-12 pt-20 pb-10 border-t border-gray-200">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        
        {/* BRAND */}
        <div>
          <Image
            src="/logo.png"
            alt="MovingBay Logo"
            width={140}
            height={40}
          />

          <p className="mt-4 text-sm text-gray-600 leading-relaxed">
            Trusted pet relocation services across India and globally. Safe,
            reliable and stress-free transport for your pets.
          </p>

          <p className="mt-3 text-xs text-gray-400">
            Bangalore Based • Serving Nationwide & Internationally
          </p>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="font-semibold mb-4 text-gray-900">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-green-600">Home</Link></li>
            <li><Link href="/about" className="hover:text-green-600">About</Link></li>
            <li><Link href="/why-movingbay" className="hover:text-green-600">Why MovingBay</Link></li>
            <li><Link href="/become-a-partner" className="hover:text-green-600">Become a Partner</Link></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="font-semibold mb-4 text-gray-900">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/pet-relocation-bangalore" className="hover:text-green-600">Pet Relocation Bangalore</Link></li>
            <li><Link href="/dog-transport-bangalore" className="hover:text-green-600">Dog Transport Bangalore</Link></li>
            <li><Link href="/pet-travel-india" className="hover:text-green-600">Pet Travel India</Link></li>
            <li><Link href="/international-pet-transport" className="hover:text-green-600">International Pet Transport</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-semibold mb-4 text-gray-900">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-green-600 transition">
              +91 8618173141
            </li>
            <li className="hover:text-green-600 transition">
              info@movingbay.com
            </li>
            <li className="text-gray-500">
              Bangalore, India
            </li>
          </ul>

          {/* CTA */}
          <a
            href="https://wa.me/918618173141"
            target="_blank"
            className="inline-block mt-5 bg-green-600 hover:bg-green-500 text-white font-semibold px-5 py-2 rounded-full text-sm shadow transition"
          >
            Chat on WhatsApp
          </a>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="max-w-7xl mx-auto border-t border-gray-200 mt-12 pt-6 text-sm flex flex-col md:flex-row justify-between items-center text-gray-500">
        
        <p>
          © {new Date().getFullYear()} MovingBay. All rights reserved.
        </p>

        <div className="flex gap-6 mt-3 md:mt-0">
          <span className="hover:text-green-600 cursor-pointer">Privacy Policy</span>
          <span className="hover:text-green-600 cursor-pointer">Terms</span>
        </div>

      </div>
    </footer>
  );
}