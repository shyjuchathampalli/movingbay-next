import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Building2,
  Truck,
  Stethoscope,
  Home,
  Globe2,
  Users,
  ArrowRight,
  Check,
  Handshake,
  Network,
  TrendingUp,
  FileCheck2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Become a Partner | MovingBay",
  description:
    "Partner with MovingBay to build a reliable domestic and international pet relocation network across India and globally.",
};

const partnerTypes = [
  {
    title: "Pet Relocation Companies",
    description:
      "Collaborate on domestic and international pet relocation assignments and extend your service coverage.",
    icon: Globe2,
  },
  {
    title: "Pet Taxi & Transporters",
    description:
      "Support local and intercity pet movements with dependable transport and handling services.",
    icon: Truck,
  },
  {
    title: "Veterinary Clinics",
    description:
      "Work together on health checks, documentation, travel preparation and pre-travel requirements.",
    icon: Stethoscope,
  },
  {
    title: "Boarding & Grooming",
    description:
      "Connect your services with pet parents who need temporary care and preparation before travel.",
    icon: Home,
  },
  {
    title: "Logistics & Cargo",
    description:
      "Become part of the wider logistics network supporting complex domestic and international journeys.",
    icon: Building2,
  },
  {
    title: "Pet Handlers & Consultants",
    description:
      "Join our network as a local handler, relocation consultant or specialist service provider.",
    icon: Users,
  },
];

const opportunities = [
  {
    title: "Domestic Transport",
    description:
      "Work with MovingBay on local and intercity pet relocation assignments across India.",
    icon: Truck,
  },
  {
    title: "International Relocation",
    description:
      "Collaborate on international journeys involving documentation, airline coordination and destination delivery.",
    icon: Globe2,
  },
  {
    title: "Referral Partnerships",
    description:
      "Refer pet parents who need relocation services and build a long-term business relationship with MovingBay.",
    icon: Network,
  },
];

const benefits = [
  "Access to a growing pet relocation network",
  "Consistent business opportunities and qualified leads",
  "Transparent and fair commercial arrangements",
  "Support with documentation and coordination",
  "Expand your reach across India and international destinations",
  "Work with a structured and professional relocation team",
  "Long-term collaboration opportunities",
  "Build your service presence within the wider MovingBay network",
];

export default function PartnerPage() {
  return (
    <>
      <Navbar />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#091a28] px-6 py-20 text-white md:px-12 md:py-28">
        {/* subtle background glow */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#57c7ce]/10 blur-[130px]" />
        <div className="pointer-events-none absolute -bottom-40 left-1/3 h-[360px] w-[360px] rounded-full bg-[#8fc63f]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <span
              className="
                inline-flex items-center gap-2
                rounded-full
                border border-[#8fc63f]/30
                bg-[#8fc63f]/10
                px-4 py-1.5
                text-xs
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#a1d64c]
              "
            >
              <Handshake size={14} />
              Become a Partner
            </span>

            <h1
              className="
                mt-6
                font-[family-name:var(--font-exo-2)]
                text-4xl
                font-bold
                leading-[1.05]
                tracking-tight
                text-[#edf5f8]
                md:text-6xl
              "
            >
              Build the future of
              <span className="text-[#8fc63f]"> pet relocation </span>
              with us.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#91b3cf] md:text-lg">
              MovingBay is building a reliable network of relocation,
              transport, veterinary and logistics partners to make pet travel
              simpler across India and around the world.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#partner-form"
                className="
                  inline-flex items-center gap-2
                  rounded-full
                  bg-[#8fc63f]
                  px-6 py-3
                  text-sm
                  font-bold
                  text-[#092033]
                  shadow-lg
                  transition
                  hover:bg-[#a1d64c]
                "
              >
                Start a partnership
                <ArrowRight size={17} />
              </a>

              <a
                href="#opportunities"
                className="
                  inline-flex items-center
                  rounded-full
                  border border-[#294457]
                  bg-[#102538]
                  px-6 py-3
                  text-sm
                  font-semibold
                  text-[#c2d4df]
                  transition
                  hover:border-[#57c7ce]/50
                  hover:text-white
                "
              >
                Explore opportunities
              </a>
            </div>
          </div>

          {/* Hero stats */}
          <div className="mt-16 grid gap-4 sm:grid-cols-3">
            {[
              ["Domestic", "India-wide network"],
              ["International", "Global relocation"],
              ["Long-term", "Partner relationships"],
            ].map(([value, label]) => (
              <div
                key={value}
                className="
                  rounded-2xl
                  border border-[#213b4e]
                  bg-[#102538]/80
                  px-5 py-5
                "
              >
                <div
                  className="
                    font-[family-name:var(--font-exo-2)]
                    text-xl
                    font-bold
                    text-[#8fc63f]
                  "
                >
                  {value}
                </div>

                <div className="mt-1 text-sm text-[#91b3cf]">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHO CAN PARTNER
      ========================================================= */}
      <section className="bg-[#091a28] px-6 py-20 text-white md:px-12 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#8fc63f]">
              Our Network
            </span>

            <h2
              className="
                mt-3
                font-[family-name:var(--font-exo-2)]
                text-3xl
                font-bold
                tracking-tight
                text-[#edf5f8]
                md:text-4xl
              "
            >
              Who can partner with MovingBay?
            </h2>

            <p className="mt-4 text-base leading-7 text-[#91b3cf]">
              We work with businesses and professionals who contribute to
              different stages of a pet&apos;s relocation journey.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {partnerTypes.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    group
                    rounded-2xl
                    border border-[#213b4e]
                    bg-[#102538]
                    p-6
                    transition
                    hover:-translate-y-1
                    hover:border-[#57c7ce]/40
                  "
                >
                  <div
                    className="
                      flex h-11 w-11
                      items-center justify-center
                      rounded-xl
                      bg-[#103f4a]
                      text-[#57c7ce]
                      transition
                      group-hover:bg-[#134b55]
                    "
                  >
                    <Icon size={22} />
                  </div>

                  <h3
                    className="
                      mt-5
                      font-[family-name:var(--font-exo-2)]
                      text-xl
                      font-semibold
                      text-[#edf5f8]
                    "
                  >
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#91b3cf]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          PARTNERSHIP OPPORTUNITIES
      ========================================================= */}
      <section
        id="opportunities"
        className="border-y border-[#182f40] bg-[#0c2030] px-6 py-20 text-white md:px-12 md:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#8fc63f]">
              Partnership Models
            </span>

            <h2
              className="
                mt-3
                font-[family-name:var(--font-exo-2)]
                text-3xl
                font-bold
                tracking-tight
                text-[#edf5f8]
                md:text-4xl
              "
            >
              Different ways to work together
            </h2>

            <p className="mt-4 text-[#91b3cf]">
              Whether you provide transport, specialist services or customer
              referrals, there is room to build a meaningful partnership.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {opportunities.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    relative
                    overflow-hidden
                    rounded-3xl
                    border border-[#213b4e]
                    bg-[#102538]
                    p-7
                  "
                >
                  <span className="absolute right-6 top-5 font-[family-name:var(--font-exo-2)] text-5xl font-bold text-[#173448]">
                    0{index + 1}
                  </span>

                  <div
                    className="
                      relative
                      flex h-12 w-12
                      items-center justify-center
                      rounded-xl
                      bg-[#103f4a]
                      text-[#57c7ce]
                    "
                  >
                    <Icon size={24} />
                  </div>

                  <h3
                    className="
                      relative
                      mt-6
                      font-[family-name:var(--font-exo-2)]
                      text-xl
                      font-semibold
                      text-[#edf5f8]
                    "
                  >
                    {item.title}
                  </h3>

                  <p className="relative mt-3 text-sm leading-6 text-[#91b3cf]">
                    {item.description}
                  </p>

                  <div className="mt-6 h-px bg-[#213b4e]" />

                  <a
                    href="#partner-form"
                    className="
                      mt-5
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      font-semibold
                      text-[#8fc63f]
                      transition
                      hover:text-[#a1d64c]
                    "
                  >
                    Discuss this model
                    <ArrowRight size={16} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          BENEFITS
      ========================================================= */}
      <section className="bg-[#091a28] px-6 py-20 text-white md:px-12 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#8fc63f]">
              Why Partner
            </span>

            <h2
              className="
                mt-3
                font-[family-name:var(--font-exo-2)]
                text-3xl
                font-bold
                leading-tight
                text-[#edf5f8]
                md:text-4xl
              "
            >
              Build a stronger business network with MovingBay.
            </h2>

            <p className="mt-5 text-base leading-7 text-[#91b3cf]">
              A relocation journey involves many specialists. Our goal is to
              connect those capabilities into a more coordinated experience for
              pet parents.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div
                className="
                  flex h-12 w-12
                  items-center justify-center
                  rounded-xl
                  bg-[#103f4a]
                  text-[#57c7ce]
                "
              >
                <TrendingUp size={24} />
              </div>

              <div>
                <div className="font-semibold text-[#edf5f8]">
                  Long-term relationships
                </div>

                <div className="text-sm text-[#91b3cf]">
                  Built around reliable service and communication.
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="
                  flex
                  items-start
                  gap-3
                  rounded-2xl
                  border border-[#213b4e]
                  bg-[#102538]
                  p-4
                "
              >
                <Check
                  size={17}
                  className="mt-0.5 flex-none text-[#57c7ce]"
                />

                <span className="text-sm leading-6 text-[#c2d4df]">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PARTNER FORM
      ========================================================= */}
      <section
        id="partner-form"
        className="border-t border-[#213b4e] bg-[#0c2030] px-6 py-20 text-white md:px-12 md:py-24"
      >
        <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          {/* FORM INTRO */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#8fc63f]">
              Let&apos;s Work Together
            </span>

            <h2
              className="
                mt-3
                font-[family-name:var(--font-exo-2)]
                text-3xl
                font-bold
                leading-tight
                text-[#edf5f8]
                md:text-4xl
              "
            >
              Tell us about your partnership idea.
            </h2>

            <p className="mt-5 text-base leading-7 text-[#91b3cf]">
              Share a few details about your business and how you would like
              to work with MovingBay. Our team can then explore the right
              partnership model with you.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <FileCheck2
                  size={20}
                  className="mt-0.5 flex-none text-[#57c7ce]"
                />

                <p className="text-sm leading-6 text-[#c2d4df]">
                  Structured partnership discussions
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Network
                  size={20}
                  className="mt-0.5 flex-none text-[#57c7ce]"
                />

                <p className="text-sm leading-6 text-[#c2d4df]">
                  Domestic and international network opportunities
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Handshake
                  size={20}
                  className="mt-0.5 flex-none text-[#57c7ce]"
                />

                <p className="text-sm leading-6 text-[#c2d4df]">
                  Long-term collaboration focused on mutual growth
                </p>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div
            className="
              rounded-3xl
              border border-[#213b4e]
              bg-[#102538]
              p-6
              shadow-2xl
              md:p-8
            "
          >
            <div className="mb-7">
              <h3
                className="
                  font-[family-name:var(--font-exo-2)]
                  text-2xl
                  font-bold
                  text-[#edf5f8]
                "
              >
                Partner with us
              </h3>

              <p className="mt-2 text-sm text-[#91b3cf]">
                Tell us a little about yourself or your organisation.
              </p>
            </div>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name / Company Name"
                className="
                  w-full
                  rounded-xl
                  border border-[#294457]
                  bg-[#0b1d2b]
                  px-4 py-3
                  text-sm
                  text-[#edf5f8]
                  placeholder:text-[#64839a]
                  outline-none
                  transition
                  focus:border-[#57c7ce]
                  focus:ring-1
                  focus:ring-[#57c7ce]
                "
              />

              <div className="grid gap-5 md:grid-cols-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="
                    w-full
                    rounded-xl
                    border border-[#294457]
                    bg-[#0b1d2b]
                    px-4 py-3
                    text-sm
                    text-[#edf5f8]
                    placeholder:text-[#64839a]
                    outline-none
                    transition
                    focus:border-[#57c7ce]
                    focus:ring-1
                    focus:ring-[#57c7ce]
                  "
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="
                    w-full
                    rounded-xl
                    border border-[#294457]
                    bg-[#0b1d2b]
                    px-4 py-3
                    text-sm
                    text-[#edf5f8]
                    placeholder:text-[#64839a]
                    outline-none
                    transition
                    focus:border-[#57c7ce]
                    focus:ring-1
                    focus:ring-[#57c7ce]
                  "
                />
              </div>

              <select
                defaultValue=""
                className="
                  w-full
                  rounded-xl
                  border border-[#294457]
                  bg-[#0b1d2b]
                  px-4 py-3
                  text-sm
                  text-[#c2d4df]
                  outline-none
                  transition
                  focus:border-[#57c7ce]
                  focus:ring-1
                  focus:ring-[#57c7ce]
                "
              >
                <option value="" disabled>
                  Type of Partnership
                </option>

                <option value="domestic">
                  Domestic Transport
                </option>

                <option value="international">
                  International Relocation
                </option>

                <option value="referral">
                  Referral Partner
                </option>

                <option value="veterinary">
                  Veterinary / Pet Care
                </option>

                <option value="logistics">
                  Logistics / Cargo
                </option>

                <option value="other">
                  Other
                </option>
              </select>

              <textarea
                placeholder="Tell us about your business / partnership idea"
                rows={5}
                className="
                  w-full
                  resize-none
                  rounded-xl
                  border border-[#294457]
                  bg-[#0b1d2b]
                  px-4 py-3
                  text-sm
                  text-[#edf5f8]
                  placeholder:text-[#64839a]
                  outline-none
                  transition
                  focus:border-[#57c7ce]
                  focus:ring-1
                  focus:ring-[#57c7ce]
                "
              />

              <button
                type="submit"
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#8fc63f]
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-[#092033]
                  shadow-lg
                  transition
                  hover:bg-[#a1d64c]
                "
              >
                Submit Partnership Request
                <ArrowRight size={17} />
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}