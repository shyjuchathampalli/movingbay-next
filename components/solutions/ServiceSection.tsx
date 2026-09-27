import Image from "next/image";
import { Check } from "lucide-react";
import type { Service } from "./data";
import { ICONS } from "./iconMap";

type Props = {
  service: Service;
  index: number;
};

export default function ServiceSection({ service, index }: Props) {
  const Icon = ICONS[service.icon];
  const reversed = index % 2 === 1;

  return (
    <section
      id={service.slug}
      className="scroll-mt-24 bg-[#091a28] px-6 py-20 text-white md:px-12 md:py-24"
    >
      <div
        className={`
          mx-auto grid max-w-6xl
          items-center gap-12
          md:grid-cols-2
          ${reversed ? "md:[&>*:first-child]:order-2" : ""}
        `}
      >

        {/* =====================================================
            IMAGE
        ===================================================== */}
        <div
          className="
            relative
            aspect-[16/9]
            w-full
            overflow-hidden
            rounded-3xl
            border
            border-[#213b4e]
            bg-[#102b3d]
          "
        >
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>


        {/* =====================================================
            CONTENT
        ===================================================== */}
        <div>

          {/* ICON */}
          <span
            className="
              inline-flex
              h-12
              w-12
              items-center
              justify-center
              rounded-xl
              bg-[#103f4a]
              text-[#57c7ce]
            "
          >
            <Icon size={24} />
          </span>


          {/* TITLE */}
          <h2
            className="
              mt-5
              font-[family-name:var(--font-exo-2)]
              text-3xl
              font-bold
              leading-tight
              tracking-tight
              text-[#edf5f8]
              md:text-4xl
            "
          >
            {service.title}
          </h2>


          {/* INTRO */}
          <p
            className="
              mt-4
              text-base
              leading-7
              text-[#91b3cf]
            "
          >
            {service.intro}
          </p>


          {/* WHAT'S INCLUDED */}
          <h3
            className="
              mt-8
              text-xs
              font-bold
              uppercase
              tracking-[0.16em]
              text-[#8fc63f]
            "
          >
            What&apos;s included
          </h3>

          <ul className="mt-4 space-y-3">
            {service.includes.map((item) => (
              <li
                key={item}
                className="
                  flex
                  items-start
                  gap-3
                  text-sm
                  leading-6
                  text-[#c2d4df]
                "
              >
                <Check
                  size={17}
                  className="
                    mt-0.5
                    flex-none
                    text-[#57c7ce]
                  "
                />

                {item}
              </li>
            ))}
          </ul>


          {/* GOOD FOR */}
          <h3
            className="
              mt-7
              text-xs
              font-bold
              uppercase
              tracking-[0.16em]
              text-[#8fc63f]
            "
          >
            Good for
          </h3>

          <ul className="mt-4 flex flex-wrap gap-2">
            {service.goodFor.map((item) => (
              <li
                key={item}
                className="
                  rounded-full
                  border
                  border-[#294457]
                  bg-[#102538]
                  px-3
                  py-1.5
                  text-xs
                  text-[#a9c1d0]
                "
              >
                {item}
              </li>
            ))}
          </ul>


          {/* CTA */}
          <a
            href={`https://wa.me/918618173141?text=${encodeURIComponent(
              `Hi MovingBay, I'd like to know more about ${service.title}.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-8
              inline-block
              rounded-full
              bg-[#8fc63f]
              px-6
              py-3
              text-sm
              font-bold
              text-[#092033]
              shadow-lg
              transition
              hover:bg-[#a1d64c]
            "
          >
            Ask about {service.title}
          </a>

        </div>
      </div>
    </section>
  );
}