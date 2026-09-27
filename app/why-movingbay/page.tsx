import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Image from "next/image";
import Script from "next/script";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Why MovingBay | Relocation & Mobility Support",
  description:
    "Discover how MovingBay coordinates relocation, mobility and settling-in services with structured processes, clear communication and accountable support.",
  keywords: [
    "Why MovingBay",
    "relocation company Bangalore",
    "global mobility services India",
    "employee relocation India",
    "relocation support Bangalore",
  ],
};

const TRUST_POINTS = [
  {
    number: "01",
    title: "Expert Handling",
    desc: "Experienced professionals coordinate the practical details of your move and ensure each stage is handled with care.",
  },
  {
    number: "02",
    title: "Safe & Secure Transport",
    desc: "We coordinate appropriate transport, handling and documentation requirements to keep your move on track.",
  },
  {
    number: "03",
    title: "Complete Documentation",
    desc: "From relocation paperwork to travel requirements, we help organize the documentation needed for your move.",
  },
  {
    number: "04",
    title: "Door-to-Door Coordination",
    desc: "From the initial pickup to the final destination, we coordinate the journey rather than leaving you to manage disconnected services.",
  },
  {
    number: "05",
    title: "Clear Updates",
    desc: "You stay informed about important milestones, requirements and progress throughout the relocation.",
  },
  {
    number: "06",
    title: "Transparent Pricing",
    desc: "We aim to keep the scope, service requirements and associated costs clear before the work begins.",
  },
];

const DIFFERENTIATORS = [
  "A single point of contact for the relocation",
  "Structured coordination across multiple services",
  "Clear communication and progress updates",
  "Professional handling and travel coordination",
  "Support for employees, families and businesses",
  "Domestic and international relocation capabilities",
];

export default function WhyMovingBay() {
  return (
    <main className="min-h-screen bg-[#091a28] text-[#edf5f8]">

      <Navbar />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-[#1d3445] bg-[#091a28]">

        <div className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#57c7ce]/5 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28">

          <div className="max-w-4xl">

            <span
              className="
                inline-flex
                rounded-full
                border border-[#8fc63f]/30
                bg-[#8fc63f]/10
                px-4 py-1.5
                text-xs font-bold uppercase
                tracking-[0.16em]
                text-[#8fc63f]
              "
            >
              Why MovingBay
            </span>

            <h1
              className="
                mt-6
                max-w-4xl
                font-[family-name:var(--font-exo-2)]
                text-4xl font-bold
                leading-[1.05]
                tracking-tight
                text-[#edf5f8]
                md:text-6xl
              "
            >
              Relocation support built around
              <span className="text-[#8fc63f]"> people, not paperwork.</span>
            </h1>

            <p
              className="
                mt-6
                max-w-2xl
                text-base
                leading-8
                text-[#91b3cf]
                md:text-lg
              "
            >
              MovingBay goes beyond simply moving belongings. We coordinate
              the people, services, documentation and practical details that
              make a relocation work from beginning to end.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <a
                href="/request-quote"
                className="
                  rounded-full
                  bg-[#8fc63f]
                  px-6 py-3
                  text-sm font-bold
                  text-[#092033]
                  transition
                  hover:bg-[#a1d64c]
                "
              >
                Talk to our team
              </a>

              <a
                href="/solutions"
                className="
                  rounded-full
                  border border-[#294457]
                  bg-[#102538]
                  px-6 py-3
                  text-sm font-semibold
                  text-[#edf5f8]
                  transition
                  hover:border-[#57c7ce]
                "
              >
                Explore solutions
              </a>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          TRUST POINTS
      ========================================================= */}
      <section className="bg-[#0d2030] px-6 py-20 md:px-12 md:py-24">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <span
              className="
                text-xs font-bold uppercase
                tracking-[0.16em]
                text-[#8fc63f]
              "
            >
              Our approach
            </span>

            <h2
              className="
                mt-4
                font-[family-name:var(--font-exo-2)]
                text-3xl font-bold
                tracking-tight
                text-[#edf5f8]
                md:text-5xl
              "
            >
              What you can expect from MovingBay.
            </h2>

            <p className="mt-5 text-base leading-7 text-[#91b3cf]">
              Every relocation has different requirements. Our role is to
              understand those requirements and coordinate the right support
              around them.
            </p>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {TRUST_POINTS.map((item) => (
              <article
                key={item.number}
                className="
                  rounded-[22px]
                  border border-[#294457]
                  bg-[#102538]
                  p-7
                  transition
                  hover:-translate-y-1
                  hover:border-[#3b6177]
                "
              >

                <span
                  className="
                    font-[family-name:var(--font-exo-2)]
                    text-sm font-bold
                    text-[#57c7ce]
                  "
                >
                  {item.number}
                </span>

                <h3
                  className="
                    mt-5
                    font-[family-name:var(--font-exo-2)]
                    text-xl font-bold
                    text-[#edf5f8]
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-7
                    text-[#91b3cf]
                  "
                >
                  {item.desc}
                </p>

              </article>
            ))}

          </div>
        </div>
      </section>

      {/* =========================================================
          IMAGE + TRUST STORY
      ========================================================= */}
      <section className="bg-[#091a28] px-6 py-20 md:px-12 md:py-24">

        <div
          className="
            mx-auto
            grid
            max-w-7xl
            items-center
            gap-12
            md:grid-cols-2
          "
        >

          {/* IMAGE */}
          <div
            className="
              relative
              min-h-[380px]
              overflow-hidden
              rounded-[24px]
              border border-[#294457]
              bg-[#102538]
            "
          >

            <Image
              src="/images/why-movingbay.jpg"
              alt="MovingBay relocation support"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#091a28]/50 via-transparent to-transparent" />

            <div
              className="
                absolute
                bottom-5
                left-5
                rounded-full
                border border-[#294457]
                bg-[#091a28]/90
                px-4 py-2
                text-xs font-semibold
                text-[#edf5f8]
                backdrop-blur-sm
              "
            >
              Relocation support, coordinated
            </div>

          </div>

          {/* CONTENT */}
          <div>

            <span
              className="
                text-xs font-bold uppercase
                tracking-[0.16em]
                text-[#8fc63f]
              "
            >
              Why MovingBay
            </span>

            <h2
              className="
                mt-4
                font-[family-name:var(--font-exo-2)]
                text-3xl font-bold
                tracking-tight
                text-[#edf5f8]
                md:text-5xl
              "
            >
              One move.
              <br />
              One coordinated plan.
            </h2>

            <p className="mt-6 text-base leading-8 text-[#91b3cf]">
              Relocation becomes complicated when every requirement is handled
              separately. Transport, documentation, accommodation, schools,
              immigration and other services can quickly turn into multiple
              conversations and disconnected timelines.
            </p>

            <p className="mt-5 text-base leading-8 text-[#91b3cf]">
              MovingBay brings those requirements into a coordinated process,
              giving employees, families and businesses a clearer view of what
              needs to happen and when.
            </p>

            <div className="mt-8 space-y-4">

              {DIFFERENTIATORS.slice(0, 4).map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <CheckCircle
                    size={19}
                    className="mt-1 flex-none text-[#57c7ce]"
                  />

                  <span className="text-sm leading-6 text-[#c2d4df]">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          WHAT MAKES US DIFFERENT
      ========================================================= */}
      <section className="border-y border-[#1d3445] bg-[#0d2030] px-6 py-20 md:px-12 md:py-24">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <span
              className="
                text-xs font-bold uppercase
                tracking-[0.16em]
                text-[#8fc63f]
              "
            >
              The MovingBay difference
            </span>

            <h2
              className="
                mt-4
                font-[family-name:var(--font-exo-2)]
                text-3xl font-bold
                text-[#edf5f8]
                md:text-5xl
              "
            >
              A more coordinated way to move.
            </h2>

            <p
              className="
                mx-auto mt-5
                max-w-2xl
                text-sm leading-7
                text-[#91b3cf]
              "
            >
              Our focus is not simply on completing individual services. It is
              on making the entire relocation easier to understand and manage.
            </p>

          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">

            {DIFFERENTIATORS.map((item, index) => (
              <div
                key={item}
                className="
                  flex items-center gap-4
                  rounded-[18px]
                  border border-[#294457]
                  bg-[#102538]
                  px-6 py-5
                  transition
                  hover:border-[#3b6177]
                "
              >

                <span
                  className="
                    flex h-9 w-9
                    flex-none
                    items-center justify-center
                    rounded-full
                    bg-[#103f4a]
                    text-xs font-bold
                    text-[#57c7ce]
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-sm font-semibold text-[#c2d4df]">
                  {item}
                </span>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICE MODEL
      ========================================================= */}
      <section className="bg-[#091a28] px-6 py-20 md:px-12 md:py-24">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <span
              className="
                text-xs font-bold uppercase
                tracking-[0.16em]
                text-[#8fc63f]
              "
            >
              Built for real moves
            </span>

            <h2
              className="
                mt-4
                font-[family-name:var(--font-exo-2)]
                text-3xl font-bold
                text-[#edf5f8]
                md:text-5xl
              "
            >
              Support that follows the journey.
            </h2>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">

            {[
              {
                step: "01",
                title: "Understand",
                text: "We start by understanding your destination, timeline, people and specific relocation requirements.",
              },
              {
                step: "02",
                title: "Coordinate",
                text: "We identify the services and partners required and bring the moving parts into one coordinated plan.",
              },
              {
                step: "03",
                title: "Deliver",
                text: "We keep the process moving with communication, updates and support through the important stages of the journey.",
              },
            ].map((item) => (
              <article
                key={item.step}
                className="
                  rounded-[22px]
                  border border-[#294457]
                  bg-[#102538]
                  p-7
                "
              >

                <span
                  className="
                    font-[family-name:var(--font-exo-2)]
                    text-sm font-bold
                    text-[#8fc63f]
                  "
                >
                  {item.step}
                </span>

                <h3
                  className="
                    mt-5
                    font-[family-name:var(--font-exo-2)]
                    text-2xl font-bold
                    text-[#edf5f8]
                  "
                >
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#91b3cf]">
                  {item.text}
                </p>

              </article>
            ))}

          </div>
        </div>
      </section>



      {/* =========================================================
          CTA
      ========================================================= */}
      <CTASection />

      <Footer />

      {/* =========================================================
          SCHEMA
      ========================================================= */}
      <Script
        id="why-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "MovingBay",
            description:
              "Relocation and mobility support provider serving employees, families and businesses.",
          }),
        }}
      />

    </main>
  );
}