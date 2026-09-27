import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About MovingBay | Global Mobility & Relocation Services",
  description:
    "Learn about MovingBay, our approach to relocation, and how we help employees, families and businesses manage moves across India and internationally.",
};

const VALUES = [
  {
    title: "Care",
    text: "Every move is planned around the people, families and belongings involved. We focus on clear communication, careful handling and practical support throughout the journey.",
  },
  {
    title: "Safety",
    text: "We follow structured processes, coordinate the right partners and keep important details visible so every move can progress with fewer surprises.",
  },
  {
    title: "Trust",
    text: "We build long-term relationships through reliable coordination, transparent communication and accountability from the first conversation to completion.",
  },
];

const FAQS = [
  {
    question: "What kind of relocation services does MovingBay provide?",
    answer:
      "MovingBay supports household relocation, employee mobility, pet relocation, immigration, FRRO registration, home and school search and related settling-in requirements.",
  },
  {
    question: "Do you support international relocations?",
    answer:
      "Yes. MovingBay can coordinate relocation requirements across India and international destinations depending on the move and the services required.",
  },
  {
    question: "Can companies use MovingBay for employee relocation?",
    answer:
      "Yes. We work with companies and HR teams that need coordinated relocation support for employees and their families.",
  },
  {
    question: "Can MovingBay coordinate multiple services together?",
    answer:
      "Yes. A relocation often involves several connected requirements. MovingBay can coordinate multiple services through a single point of contact.",
  },
  {
    question: "Do you provide pet relocation support?",
    answer:
      "Yes. Pet relocation can be coordinated alongside household and employee moves, including documentation, travel arrangements and other requirements.",
  },
  {
    question: "How do I start a relocation request?",
    answer:
      "Tell us about your move, destination, timeline and requirements. Our team can then identify the services and coordination required.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#091a28] text-[#edf5f8]">
      <Navbar />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-[#1d3445] bg-[#091a28]">
        {/* subtle ambient glow */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#57c7ce]/5 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 md:grid-cols-2 md:px-12 md:py-28">
          
          {/* LEFT */}
          <div>
            <span
              className="
                inline-flex rounded-full
                border border-[#8fc63f]/30
                bg-[#8fc63f]/10
                px-4 py-1.5
                text-xs font-bold uppercase
                tracking-[0.16em]
                text-[#8fc63f]
              "
            >
              About MovingBay
            </span>

            <h1
              className="
                mt-6
                font-[family-name:var(--font-exo-2)]
                text-4xl font-bold
                leading-[1.05]
                tracking-tight
                text-[#edf5f8]
                md:text-6xl
              "
            >
              Moving people,
              <br />
              <span className="text-[#8fc63f]">not just belongings.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#91b3cf] md:text-lg">
              MovingBay helps employees, families and businesses manage
              relocation with practical coordination across moving,
              mobility, documentation and settling-in services.
            </p>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#7598b2]">
              From the first conversation to settling into a new destination,
              our approach is built around one accountable point of contact,
              clear communication and coordinated execution.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="https://wa.me/918618173141?text=Hi%20MovingBay,%20I%20need%20assistance%20with%20relocation%20services."
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
              </Link>

              <Link
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
                Explore our solutions
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div
              className="
                relative
                min-h-[360px]
                overflow-hidden
                rounded-[24px]
                border border-[#294457]
                bg-[#102538]
              "
            >
              <Image
                src="/images/about-pets.jpg"
                alt="MovingBay relocation support"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* subtle image overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#091a28]/40 via-transparent to-transparent" />

              <div
                className="
                  absolute bottom-5 left-5
                  rounded-full
                  border border-[#294457]
                  bg-[#091a28]/90
                  px-4 py-2
                  text-xs font-semibold
                  text-[#edf5f8]
                  backdrop-blur-sm
                "
              >
                Relocation, coordinated properly
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STATS
      ========================================================= */}
      <section className="border-b border-[#1d3445] bg-[#0d2030]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 py-12 md:grid-cols-4 md:px-12 md:py-14">
          
          {[
            ["2000+", "Relocations & Pet Moves"],
            ["60+", "Countries covered"],
            ["25+", "Years Experience"],
            ["1", "Accountable coordinator"],
          ].map(([number, label]) => (
            <div
              key={label}
              className="
                border-[#294457]
                px-5 py-5
                text-center
                md:border-r
                last:border-r-0
              "
            >
              <div
                className="
                  font-[family-name:var(--font-exo-2)]
                  text-3xl font-bold
                  text-[#8fc63f]
                  md:text-4xl
                "
              >
                {number}
              </div>

              <div className="mt-2 text-sm text-[#91b3cf]">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          OUR STORY
      ========================================================= */}
      <section className="bg-[#091a28] px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.6fr_0.8fr]">
          
          <div>
            <span
              className="
                text-xs font-bold uppercase
                tracking-[0.16em]
                text-[#8fc63f]
              "
            >
              Our story
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
              Relocation is more than moving.
            </h2>

            <p className="mt-6 max-w-4xl text-base leading-8 text-[#91b3cf]">
              A successful relocation involves much more than transporting
              belongings from one address to another. People may need a home,
              a school, immigration documentation, pet travel, household
              transport and help understanding a new city.
            </p>

            <p className="mt-5 max-w-4xl text-base leading-8 text-[#91b3cf]">
              MovingBay brings these requirements together so that individuals,
              families and businesses do not have to manage every part of the
              move through separate conversations and disconnected service
              providers.
            </p>

            <p className="mt-5 max-w-4xl text-base leading-8 text-[#91b3cf]">
              Our role is to simplify the coordination. We understand the
              requirements, connect the right services and keep the move
              progressing with clear communication at every stage.
            </p>
          </div>

          {/* SIDE CARD */}
          <div
            className="
              h-fit
              rounded-[22px]
              border border-[#294457]
              bg-[#102538]
              p-7
            "
          >
            <h3
              className="
                font-[family-name:var(--font-exo-2)]
                text-xl font-bold
                text-[#edf5f8]
              "
            >
              Why MovingBay?
            </h3>

            <ul className="mt-6 space-y-4">
              {[
                "One accountable point of contact",
                "Coordinated relocation services",
                "Clear communication and updates",
                "Support across India and international moves",
                "Practical support for employees and families",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-6 text-[#c2d4df]"
                >
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#8fc63f]" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/why-movingbay"
              className="
                mt-7 inline-flex
                text-sm font-bold
                text-[#57c7ce]
                transition
                hover:text-[#8fc63f]
              "
            >
              Why MovingBay →
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          CORE VALUES
      ========================================================= */}
      <section className="border-y border-[#1d3445] bg-[#0d2030] px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          
          <div className="max-w-2xl">
            <span
              className="
                text-xs font-bold uppercase
                tracking-[0.16em]
                text-[#8fc63f]
              "
            >
              How we work
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
              The principles behind every move.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {VALUES.map((value, index) => (
              <article
                key={value.title}
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
                <div
                  className="
                    flex h-11 w-11
                    items-center justify-center
                    rounded-xl
                    bg-[#103f4a]
                    font-[family-name:var(--font-exo-2)]
                    text-sm font-bold
                    text-[#57c7ce]
                  "
                >
                  0{index + 1}
                </div>

                <h3
                  className="
                    mt-6
                    font-[family-name:var(--font-exo-2)]
                    text-2xl font-bold
                    text-[#edf5f8]
                  "
                >
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#91b3cf]">
                  {value.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT WE DO
      ========================================================= */}
      <section className="bg-[#091a28] px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span
                className="
                  text-xs font-bold uppercase
                  tracking-[0.16em]
                  text-[#8fc63f]
                "
              >
                What we support
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
                Built around the reality of moving.
              </h2>
            </div>

            <Link
              href="/solutions"
              className="
                text-sm font-bold
                text-[#57c7ce]
                hover:text-[#8fc63f]
              "
            >
              View all solutions →
            </Link>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            
            {[
              {
                number: "01",
                title: "Household Moving",
                text: "Packing, transportation and delivery of household belongings across cities and countries.",
              },
              {
                number: "02",
                title: "Employee Mobility",
                text: "Coordinated relocation support for employees, families and corporate mobility teams.",
              },
              {
                number: "03",
                title: "Settling In",
                text: "Home search, school search, immigration, FRRO and other requirements that help people settle.",
              },
            ].map((item) => (
              <article
                key={item.number}
                className="
                  rounded-[22px]
                  border border-[#294457]
                  bg-[#102538]
                  p-7
                "
              >
                <span className="text-sm font-bold text-[#57c7ce]">
                  {item.number}
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
          FAQ
      ========================================================= */}
      <section className="border-t border-[#1d3445] bg-[#0d2030] px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-5xl">
          
          <div className="text-center">
            <span
              className="
                text-xs font-bold uppercase
                tracking-[0.16em]
                text-[#8fc63f]
              "
            >
              FAQ
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
              Frequently asked questions
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#91b3cf]">
              A few common questions about MovingBay and our relocation
              support.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {FAQS.map((faq) => (
              <details
                key={faq.question}
                className="
                  group
                  rounded-[18px]
                  border border-[#294457]
                  bg-[#102538]
                  transition
                  open:border-[#3b6177]
                "
              >
                <summary
                  className="
                    flex cursor-pointer
                    list-none
                    items-center
                    justify-between
                    gap-5
                    px-6 py-5
                    text-sm font-bold
                    text-[#edf5f8]
                  "
                >
                  {faq.question}

                  <span
                    className="
                      text-xl font-normal
                      text-[#57c7ce]
                      transition
                      group-open:rotate-45
                    "
                  >
                    +
                  </span>
                </summary>

                <div className="border-t border-[#294457] px-6 py-5">
                  <p className="text-sm leading-7 text-[#91b3cf]">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="bg-[#091a28] px-6 py-20 md:px-12 md:py-24">
        <div
          className="
            mx-auto max-w-6xl
            overflow-hidden
            rounded-[28px]
            border border-[#294457]
            bg-[#102538]
            px-7 py-12
            text-center
            md:px-16 md:py-16
          "
        >
          <span
            className="
              text-xs font-bold uppercase
              tracking-[0.16em]
              text-[#8fc63f]
            "
          >
            Planning a move?
          </span>

          <h2
            className="
              mx-auto mt-4 max-w-3xl
              font-[family-name:var(--font-exo-2)]
              text-3xl font-bold
              text-[#edf5f8]
              md:text-5xl
            "
          >
            Tell us where you're going.
            <br />
            We'll help plan the journey.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#91b3cf]">
            Tell us about your destination, timeline and requirements and
            we'll help identify the right relocation support.
          </p>

          <Link
            href="/request-quote"
            className="
              mt-8 inline-flex
              rounded-full
              bg-[#8fc63f]
              px-7 py-3.5
              text-sm font-bold
              text-[#092033]
              transition
              hover:bg-[#a1d64c]
            "
          >
            Talk to our team
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}