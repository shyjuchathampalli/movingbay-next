import Link from "next/link";

type CTASectionProps = {
  title?: string;
  subtitle?: string;
  buttonText?: string;
};

export default function CTASection({
  title = "Book Pet Travel Service in India Today",
  subtitle = "Safe, reliable and stress-free travel for your pets.",
  buttonText = "Request a Quote",
}: CTASectionProps) {
  return (
    <section className="px-6 md:px-20 py-16 bg-gray-600 text-white text-center">
      
      <h2 className="text-3xl font-bold mb-4">{title}</h2>

      <p className="mb-6 text-green-400 max-w-xl mx-auto">
        {subtitle}
      </p>

      {/* CTA BUTTON */}
      <Link
        href="/request-quote"
        className="inline-block bg-black px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
      >
        {buttonText}
      </Link>

    </section>
  );
}