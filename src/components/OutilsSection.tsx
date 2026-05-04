import projectionsImg from "@/assets/tool-projections.png";
import budgetImg from "@/assets/tool-budget.png";
import objectifsImg from "@/assets/tool-objectifs.png";
import { ArrowRight, TrendingUp, Calendar, Target } from "lucide-react";

const tools = [
  {
    icon: TrendingUp,
    label: "Projections",
    image: projectionsImg,
    accent: "Croissance long terme",
  },
  {
    icon: Calendar,
    label: "Budget",
    image: budgetImg,
    accent: "Suivi mensuel",
  },
  {
    icon: Target,
    label: "Objectifs",
    image: objectifsImg,
    accent: "Atteindre vos cibles",
  },
];

export function OutilsSection() {
  return (
    <section className="relative w-full px-4 py-20 md:py-28">
      <div
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] px-6 py-16 md:px-12 md:py-20"
        style={{
          background: "var(--gradient-section)",
          boxShadow: "var(--shadow-glow), inset 0 1px 0 oklch(1 0 0 / 0.06)",
          border: "1px solid oklch(1 0 0 / 0.08)",
        }}
      >
        {/* subtle grid backdrop */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(1 0 0 / 0.6) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />

        <div className="relative flex flex-col items-center text-center">
          <span
            className="mb-6 inline-flex items-center rounded-full border px-5 py-1.5 text-xs font-medium tracking-wide text-foreground/80"
            style={{
              borderColor: "oklch(1 0 0 / 0.18)",
              background: "oklch(1 0 0 / 0.04)",
              backdropFilter: "blur(8px)",
            }}
          >
            Outils gratuits
          </span>

          <h2 className="max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
            Prenez le contrôle de vos finances
          </h2>
          <p className="mt-5 max-w-2xl text-base text-foreground/65 md:text-lg">
            Budget, projections, planification — des outils concrets pour prendre des décisions éclairées.
          </p>
        </div>

        {/* Tool cards */}
        <div className="relative mt-14 grid gap-6 md:grid-cols-3">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <a
                key={tool.label}
                href="/compas.html"
                className="group relative flex flex-col overflow-hidden rounded-3xl p-6 transition-all duration-500 ease-out hover:-translate-y-3 hover:[box-shadow:0_30px_60px_-20px_oklch(0_0_0/0.55),0_0_0_1px_oklch(1_0_0/0.08),0_0_40px_oklch(0.55_0.08_185/0.35)]"
                style={{
                  background: "var(--gradient-card)",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                {/* radial shine backdrop */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-1/3 left-1/2 h-[120%] w-[120%] -translate-x-1/2 opacity-60 transition-opacity duration-700 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 30%, oklch(0.55 0.08 185 / 0.35) 0%, transparent 55%)",
                  }}
                />
                {/* diagonal sheen sweep */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl"
                >
                  <div
                    className="absolute -inset-y-10 -left-1/2 w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/50 to-transparent blur-md opacity-0 transition-all duration-1000 ease-out group-hover:left-[120%] group-hover:opacity-70"
                  />
                </div>

                {/* header row */}
                <div className="relative z-10 flex items-center justify-between">
                  <div
                    className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1.5 text-xs font-semibold text-teal-900 backdrop-blur-sm"
                    style={{ color: "oklch(0.28 0.05 190)" }}
                  >
                    <Icon className="h-3.5 w-3.5" strokeWidth={2.5} />
                    {tool.label}
                  </div>
                  <ArrowRight
                    className="h-4 w-4 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                    style={{ color: "oklch(0.28 0.05 190)" }}
                  />
                </div>

                {/* 3D image */}
                <div className="relative mt-2 flex h-56 items-center justify-center">
                  <div
                    aria-hidden
                    className="absolute inset-x-6 bottom-4 h-8 rounded-full blur-2xl transition-opacity duration-500 group-hover:opacity-80"
                    style={{ background: "oklch(0.55 0.08 185 / 0.35)" }}
                  />
                  <img
                    src={tool.image}
                    alt={tool.label}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="relative h-full w-auto object-contain drop-shadow-xl transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3"
                  />
                </div>

                {/* footer accent */}
                <div
                  className="mt-2 text-xs font-medium uppercase tracking-wider"
                  style={{ color: "oklch(0.45 0.04 195)" }}
                >
                  {tool.accent}
                </div>
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <div className="relative mt-12 flex flex-col items-center gap-4">
          <a
            href="/compas.html"
            className="group inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-wider text-foreground transition-all duration-300 hover:gap-4"
            style={{
              background: "oklch(1 0 0 / 0.06)",
              border: "1px solid oklch(1 0 0 / 0.18)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 8px 24px -8px oklch(0 0 0 / 0.4)",
            }}
          >
            Explorer les outils
            <span
              className="flex h-7 w-7 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-[-45deg]"
              style={{ background: "oklch(0.55 0.08 185)" }}
            >
              <ArrowRight className="h-3.5 w-3.5 text-teal-950" strokeWidth={3} />
            </span>
          </a>
          <p className="text-xs italic text-foreground/45">
            * Tous les outils sont sécurisés par cryptage de niveau bancaire. *
          </p>
        </div>
      </div>
    </section>
  );
}
