import Link from "next/link";

type CTASectionProps = {
  title?: string;
  subtitle?: string;
  buttonText?: string;
};

export default function CTASection({
  title = "Not sure which solution you need?",
  subtitle = "Tell us about your move and we'll put together the right combination for you.",
  buttonText = "Talk to our team",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#0d2030] px-6 py-20 text-center md:px-12 md:py-24">

      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[420px]
          w-[420px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#57c7ce]/8
          blur-[130px]
        "
      />

      {/* Content */}
      <div className="relative mx-auto max-w-3xl">

        {/* Eyebrow */}
        <span
          className="
            inline-block
            text-[11px]
            font-bold
            uppercase
            tracking-[0.22em]
            text-[#f0a12b]
          "
        >
          LET'S PLAN YOUR MOVE
        </span>

        {/* Heading */}
        <h2
          className="
            mt-5
            font-[family-name:var(--font-exo-2)]
            text-3xl
            font-bold
            leading-tight
            tracking-tight
            text-[#edf5f8]
            md:text-5xl
          "
        >
          {title}
        </h2>

        {/* Subtitle */}
        <p
          className="
            mx-auto
            mt-5
            max-w-2xl
            text-base
            leading-7
            text-[#91b3cf]
            md:text-lg
          "
        >
          {subtitle}
        </p>

        {/* CTA */}
        <div className="mt-8">
          <Link
            href="/request-quote"
            className="
              inline-flex
              items-center
              justify-center
              rounded-full
              bg-[#8fc63f]
              px-7
              py-3.5
              text-sm
              font-bold
              text-[#092033]
              shadow-[0_8px_30px_rgba(143,198,63,0.18)]
              transition
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#a1d64c]
              hover:shadow-[0_10px_35px_rgba(143,198,63,0.25)]
            "
          >
            {buttonText}
          </Link>
        </div>

      </div>
    </section>
  );
}