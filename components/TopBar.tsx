"use client";

import { Phone, Mail } from "lucide-react";

export default function TopBar() {
  return (
    <div className="w-full text-xs text-gray-300 px-6 md:px-12 py-2 flex justify-between items-center bg-transparent">
      
      <div className="flex items-center gap-2">
        <Phone size={14} className="text-green-400" />
        <span className="hover:text-white transition">
          +91 8618173141
        </span>
      </div>

      <div className="flex items-center gap-2">
        <Mail size={14} className="text-green-400" />
        <span className="hover:text-white transition">
          info@movingbay.com
        </span>
      </div>

    </div>
  );
}