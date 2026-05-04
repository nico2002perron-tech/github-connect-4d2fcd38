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
    animClass: "anim-calc",
  },
  {
    icon: Calendar,
    label: "Budget",
    image: budgetImg,
    accent: "Suivi mensuel",
    animClass: "anim-calendar",
  },
  {
    icon: Target,
    label: "Objectifs",
    image: objectifsImg,
    accent: "Atteindre vos cibles",
    animClass: "anim-target",
  },
];


export function OutilsSection() {
  return (
    <section className="relative w-full px-4 py-20 md:py-28">
      <div
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] px-6 py-16 md:px-12 md:py-20"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.99 0.005 230) 0%, oklch(0.96 0.025 225) 100%)",
          boxShadow:
            "0 30px 80px -40px oklch(0.55 0.18 230 / 0.25), inset 0 1px 0 oklch(1 0 0 / 0.8)",
          border: "1px solid oklch(0.9 0.02 225)",
        }}
      >
        {/* soft glow blobs */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full opacity-50 blur-3xl"
          style={{ background: "oklch(0.85 0.12 225 / 0.5)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full opacity-40 blur-3xl"
          style={{ background: "oklch(0.88 0.08 220 / 0.5)" }}
        />

        <div className="relative flex flex-col items-center text-center">
          <span
            className="mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em]"
            style={{ color: "oklch(0.6 0.18 230)" }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: "oklch(0.6 0.18 230)" }}
            />
            Outils gratuits
          </span>

          <h2
            className="max-w-3xl text-balance text-3xl font-bold leading-[1.1] tracking-tight md:text-5xl"
            style={{ color: "oklch(0.18 0.04 250)" }}
          >
            Prenez le contrôle de{" "}
            <span style={{ color: "oklch(0.6 0.18 230)" }}>vos finances</span>
          </h2>
          <p
            className="mt-5 max-w-2xl text-base md:text-lg"
            style={{ color: "oklch(0.45 0.03 250)" }}
          >
            Budget, projections, planification — des outils concrets pour prendre des
            décisions éclairées.
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
                className="group relative flex flex-col overflow-hidden rounded-3xl bg-white p-6 transition-all duration-500 ease-out hover:-translate-y-2 hover:[box-shadow:0_30px_60px_-20px_oklch(0.6_0.18_230/0.35),0_0_0_1px_oklch(0.6_0.18_230/0.2)]"
                style={{
                  boxShadow:
                    "0 10px 30px -15px oklch(0.4 0.1 230 / 0.18), 0 0 0 1px oklch(0.9 0.02 225)",
                }}
              >
                {/* subtle radial shine on hover */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-1/3 left-1/2 h-[120%] w-[120%] -translate-x-1/2 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 30%, oklch(0.85 0.12 225 / 0.4) 0%, transparent 60%)",
                  }}
                />
                {/* diagonal sheen sweep */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl"
                >
                  <div className="absolute -inset-y-10 -left-1/2 w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/80 to-transparent blur-md opacity-0 transition-all duration-1000 ease-out group-hover:left-[120%] group-hover:opacity-100" />
                </div>

                {/* header row */}
                <div className="relative z-10 flex items-center justify-between">
                  <div
                    className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold"
                    style={{
                      background: "oklch(0.95 0.03 225)",
                      color: "oklch(0.45 0.15 230)",
                    }}
                  >
                    <Icon className="h-3.5 w-3.5" strokeWidth={2.5} />
                    {tool.label}
                  </div>
                  <ArrowRight
                    className="h-4 w-4 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                    style={{ color: "oklch(0.6 0.18 230)" }}
                  />
                </div>

                {/* 3D image */}
                <div className="relative mt-2 flex h-56 items-center justify-center [perspective:1000px]">
                  <div
                    aria-hidden
                    className="absolute inset-x-6 bottom-4 h-8 rounded-full blur-2xl transition-all duration-500 group-hover:h-10 group-hover:opacity-90"
                    style={{ background: "oklch(0.6 0.18 230 / 0.3)" }}
                  />
                  <img
                    src={tool.image}
                    alt={tool.label}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className={`relative h-full w-auto object-contain drop-shadow-xl float-idle ${tool.animClass}`}
                  />
                  {tool.label === "Objectifs" && (
                    <>
                      <svg
                        aria-hidden
                        viewBox="0 0 100 12"
                        className="arrow-fly absolute left-1/2 top-1/2 h-3 w-24 -translate-x-1/2 -translate-y-1/2"
                      >
                        <line x1="5" y1="6" x2="85" y2="6" stroke="white" strokeWidth="3" strokeLinecap="round" />
                        <polygon points="85,2 95,6 85,10" fill="oklch(0.6 0.18 230)" />
                        <line x1="2" y1="2" x2="8" y2="6" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        <line x1="2" y1="10" x2="8" y2="6" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      <svg
                        aria-hidden
                        viewBox="0 0 100 12"
                        className="arrow-fly arrow-fly-2 absolute left-1/2 top-1/2 h-3 w-20 -translate-x-1/2 -translate-y-[40%]"
                      >
                        <line x1="5" y1="6" x2="85" y2="6" stroke="white" strokeWidth="3" strokeLinecap="round" />
                        <polygon points="85,2 95,6 85,10" fill="oklch(0.6 0.18 230)" />
                        <line x1="2" y1="2" x2="8" y2="6" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        <line x1="2" y1="10" x2="8" y2="6" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </>
                  )}
                </div>


                {/* footer accent */}
                <div
                  className="mt-2 text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "oklch(0.55 0.05 240)" }}
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
            className="group inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:gap-4 hover:shadow-[0_20px_40px_-10px_oklch(0.6_0.18_230/0.5)]"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.65 0.18 225) 0%, oklch(0.55 0.2 235) 100%)",
              boxShadow: "0 10px 30px -10px oklch(0.6 0.18 230 / 0.45)",
            }}
          >
            Explorer les outils
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/25 transition-transform duration-300 group-hover:rotate-[-45deg]">
              <ArrowRight className="h-3.5 w-3.5 text-white" strokeWidth={3} />
            </span>
          </a>
          <p
            className="text-xs italic"
            style={{ color: "oklch(0.55 0.03 250)" }}
          >
            * Tous les outils sont sécurisés par cryptage de niveau bancaire. *
          </p>
        </div>
      </div>
    </section>
  );
}
