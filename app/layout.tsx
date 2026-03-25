import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MovingBay | Pet Moving & Transport",
  description:
    "Safe, reliable pet relocation services across India and internationally.",

  keywords: [
    "pet relocation India",
    "pet transport",
    "international pet moving",
    "pet shipping India",
  ],

  metadataBase: new URL("https://movingbay.com"),

  openGraph: {
    title: "MovingBay | Pet Moving",
    description: "Safe and hassle-free pet relocation services",
    url: "https://movingbay.com",
    siteName: "MovingBay",
    images: [
      {
        url: "/images/movers-banner.png", // place inside /public/images
        width: 1200,
        height: 630,
        alt: "MovingBay Pet Relocation",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "MovingBay",
    description: "Pet relocation made easy",
    images: ["/images/movers-banner.png"],
  },

  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "MovingBay",
    url: "https://movingbay.com",
    logo: "https://movingbay.com/images/logo.png",
    telephone: "+918618173141",
    email: "info@movingbay.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    sameAs: [
      "https://wa.me/918618173141"
    ],
  };

  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        
        {/* ✅ Structured Data (SEO Boost) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {children}
      </body>
    </html>
  );
}