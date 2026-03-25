import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 text-gray-700 px-6 md:px-12 pt-20 pb-10 border-t border-gray-100">
      
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
            Safe, reliable, and stress-free pet relocation services across India
            and worldwide.
          </p>

          {/* Optional Trust Line */}
          <p className="mt-3 text-xs text-gray-400">
            Trusted by pet owners across multiple countries 🌍
          </p>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="font-semibold mb-4 text-gray-900">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-green-500 transition">Home</Link></li>
            <li><Link href="/" className="hover:text-green-500 transition">About</Link></li>
            <li><Link href="/" className="hover:text-green-500 transition">Services</Link></li>
            <li><Link href="/" className="hover:text-green-500 transition">Contact</Link></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="font-semibold mb-4 text-gray-900">Services</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-green-500 transition cursor-pointer">Domestic Pet Relocation</li>
            <li className="hover:text-green-500 transition cursor-pointer">International Moving</li>
            <li className="hover:text-green-500 transition cursor-pointer">Documentation Support</li>
            <li className="hover:text-green-500 transition cursor-pointer">Pet Travel Assistance</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-semibold mb-4 text-gray-900">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-green-500 transition">📞 +91 8618173141</li>
            <li className="hover:text-green-500 transition">✉️ info@movingbay.com</li>
            <li className="text-gray-500">India</li>
          </ul>

          {/* CTA */}
          <a
            href="https://wa.me/918618173141"
            target="_blank"
            className="inline-block mt-5 bg-green-500 hover:bg-green-400 text-black font-semibold px-5 py-2 rounded-full text-sm shadow-md transition"
          >
            Chat on WhatsApp
          </a>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto border-t border-gray-200 mt-12 pt-6 text-sm flex flex-col md:flex-row justify-between items-center text-gray-500">
        
        <p>
          © {new Date().getFullYear()} MovingBay. All rights reserved.
        </p>

        <div className="flex gap-6 mt-3 md:mt-0">
          <span className="hover:text-green-500 cursor-pointer transition">Privacy Policy</span>
          <span className="hover:text-green-500 cursor-pointer transition">Terms</span>
        </div>

      </div>
    </footer>
  );
}