import { SERVICES } from "./data";
import { ICONS } from "./iconMap";

export default function SolutionsHero() {
  return (
    <section className="relative overflow-hidden bg-[#091a28] px-6 py-20 text-white md:px-12 md:py-28">

      {/* Subtle background glow */}
      <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-[420px] w-[420px] rounded-full bg-[#6fa8c8]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-5xl text-center">

        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.22em] text-[#f0a12b]">
          SOLUTIONS
        </span>

        <h1
          className="mt-5 font-[family-name:var(--font-exo-2)] text-4xl font-bold leading-[1.05] tracking-tight text-[#edf5f8] md:text-6xl"
        >
          Everything your relocation needs,
          <br />
          <span className="text-[#8fc63f]">
            in one place
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#91b3cf] md:text-lg">
          From packing up a household to registering with the FRRO, finding a
          school or getting the right visa, MovingBay coordinates the details
          so your move stays on track.
        </p>
      </div>

      {/* Quick navigation */}
      <nav
        aria-label="Jump to a solution"
        className="relative mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4"
      >
        {SERVICES.map((s) => {
          const Icon = ICONS[s.icon];

          return (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="
                group
                flex flex-col
                items-center
                gap-3
                rounded-2xl
                border border-[#244054]
                bg-[#102538]
                px-4 py-6
                text-center
                transition
                duration-300
                hover:-translate-y-1
                hover:border-[#3d667d]
                hover:bg-[#132b40]
              "
            >
              <span
                className="
                  flex h-12 w-12
                  items-center justify-center
                  rounded-xl
                  bg-[#103f4a]
                  text-[#57c7ce]
                  transition
                  group-hover:scale-105
                "
              >
                <Icon size={22} />
              </span>

              <span className="text-sm font-semibold text-[#e8f1f5]">
                {s.navLabel}
              </span>
            </a>
          );
        })}
      </nav>
    </section>
  );
}