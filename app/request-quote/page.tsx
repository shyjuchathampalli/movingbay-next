import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";

export const metadata = {
  title: "Request a Pet Relocation Quote | MovingBay India",
  description:
    "Get a free quote for pet relocation services in India and internationally. Safe, reliable and stress-free pet transport by MovingBay.",
};

export default function RequestQuotePage() {
  return (
    <>
      <Navbar />

      {/* =========================================================
          HERO / QUOTE SECTION
      ========================================================= */}

      {/* HERO SECTION */}
<section className="bg-[#091a28] px-6 py-16 text-white md:px-12 md:py-20">
  <div className="mx-auto grid max-w-6xl items-start gap-12 md:grid-cols-2 md:gap-16">

    {/* LEFT CONTENT */}
    <div className="pt-1">

      {/* EYEBROW */}
      <div
        className="
          inline-flex
          rounded-full
          border border-[#285768]
          bg-[#103f4a]
          px-4
          py-2
          text-xs
          font-bold
          uppercase
          tracking-[0.18em]
          text-[#57c7ce]
        "
      >
        Request a Quote
      </div>

      {/* TITLE */}
      <h1
        className="
          mt-7
          max-w-[650px]
          font-[family-name:var(--font-exo-2)]
          text-4xl
          font-bold
          leading-[1.05]
          tracking-tight
          text-[#edf5f8]
          md:text-5xl
          lg:text-[58px]
        "
      >
        Get a Free Quote
        <br />
        for{" "}
        <span className="text-[#57c7ce]">
          Pet Relocation
        </span>
        <br />
        <span className="text-[#57c7ce]">
          Services
        </span>
      </h1>

      {/* INTRO */}
      <p
        className="
          mt-8
          max-w-xl
          text-base
          leading-7
          text-[#91b3cf]
          md:text-lg
        "
      >
        Planning to relocate your pet within India or abroad?
        MovingBay provides safe, reliable and stress-free pet
        transport services tailored to your needs.
      </p>

      <p
        className="
          mt-5
          max-w-xl
          text-sm
          leading-7
          text-[#7195ae]
          md:text-base
        "
      >
        Our experts handle everything — from consultation and
        documentation to travel coordination and delivery.
        Get a personalized quote today and ensure a smooth
        journey for your pet.
      </p>

      {/* BENEFITS */}
      <ul className="mt-8 space-y-4">

        <li className="flex items-center gap-3 text-sm text-[#c2d4df]">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#103f4a] text-xs text-[#57c7ce]">
            ✓
          </span>
          Domestic & International Pet Relocation
        </li>

        <li className="flex items-center gap-3 text-sm text-[#c2d4df]">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#103f4a] text-xs text-[#57c7ce]">
            ✓
          </span>
          IATA Approved Travel Crates
        </li>

        <li className="flex items-center gap-3 text-sm text-[#c2d4df]">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#103f4a] text-xs text-[#57c7ce]">
            ✓
          </span>
          Documentation & Compliance Support
        </li>

        <li className="flex items-center gap-3 text-sm text-[#c2d4df]">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#103f4a] text-xs text-[#57c7ce]">
            ✓
          </span>
          Door-to-Door Pickup & Delivery
        </li>

      </ul>
    </div>

    {/* RIGHT FORM */}
    <div
      className="
        rounded-3xl
        border border-[#213b4e]
        bg-[#102a3d]
        p-6
        shadow-[0_25px_70px_rgba(0,0,0,0.22)]
        md:p-8
      "
    >

      <div className="mb-7">

        <p
          className="
            mb-2
            text-xs
            font-bold
            uppercase
            tracking-[0.18em]
            text-[#8fc63f]
          "
        >
          MovingBay
        </p>

        <h2
          className="
            font-[family-name:var(--font-exo-2)]
            text-2xl
            font-bold
            tracking-tight
            text-[#edf5f8]
            md:text-3xl
          "
        >
          Request Your Quote
        </h2>

        <p className="mt-2 text-sm leading-6 text-[#91b3cf]">
          Tell us about your pet and relocation requirements.
        </p>

      </div>

      <QuoteForm />

    </div>

  </div>
</section>


      {/* =========================================================
          TRUST / SEO SECTION
      ========================================================= */}

      <section className="bg-[#0d2233] px-6 py-20 text-white md:px-12 md:py-24">

        <div className="mx-auto max-w-6xl">

          {/* SECTION HEADER */}
          <div className="max-w-3xl">

            <span
              className="
                text-xs
                font-bold
                uppercase
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
                text-3xl
                font-bold
                leading-tight
                text-[#edf5f8]
                md:text-4xl
              "
            >
              Trusted Pet Relocation Experts in India
            </h2>

          </div>


          {/* CONTENT */}
          <div className="mt-8 grid gap-6 md:grid-cols-3">

            <div
              className="
                rounded-2xl
                border
                border-[#213b4e]
                bg-[#102538]
                p-6
              "
            >
              <p className="leading-7 text-[#91b3cf]">
                MovingBay is a Bangalore-based pet relocation company offering
                professional pet transport services across India and worldwide.
                Whether you are moving within the city, relocating across states or
                planning international pet travel, we ensure your pet’s journey is
                safe and comfortable.
              </p>
            </div>


            <div
              className="
                rounded-2xl
                border
                border-[#213b4e]
                bg-[#102538]
                p-6
              "
            >
              <p className="leading-7 text-[#91b3cf]">
                Our team specializes in handling documentation, airline approvals,
                crate training and safe transit arrangements. We work with trusted
                partners and follow strict safety standards to ensure stress-free
                travel for your pets.
              </p>
            </div>


            <div
              className="
                rounded-2xl
                border
                border-[#213b4e]
                bg-[#102538]
                p-6
              "
            >
              <p className="leading-7 text-[#91b3cf]">
                Get in touch with us today and receive a customized pet relocation
                quote based on your requirements.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          FOOTER
      ========================================================= */}

      <Footer />
    </>
  );
}

