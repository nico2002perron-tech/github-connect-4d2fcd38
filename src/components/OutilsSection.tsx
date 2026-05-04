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
                className="group relative flex flex-col overflow-hidden rounded-3xl bg-white p-6 transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-3 hover:scale-[1.02] hover:[box-shadow:0_40px_80px_-20px_oklch(0.6_0.18_230/0.45),0_0_0_1px_oklch(0.6_0.18_230/0.25),0_0_60px_-10px_oklch(0.7_0.15_220/0.4)]"
                style={{
                  boxShadow:
                    "0 10px 30px -15px oklch(0.4 0.1 230 / 0.18), 0 0 0 1px oklch(0.9 0.02 225)",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* animated gradient border on hover */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.7 0.18 220 / 0.15), transparent 40%, oklch(0.65 0.2 235 / 0.15))",
                  }}
                />
                {/* radial shine on hover */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-1/3 left-1/2 h-[140%] w-[140%] -translate-x-1/2 scale-75 opacity-0 transition-all duration-700 group-hover:scale-100 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 30%, oklch(0.85 0.14 225 / 0.55) 0%, transparent 60%)",
                  }}
                />
                {/* diagonal sheen sweep */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl"
                >
                  <div className="absolute -inset-y-10 -left-1/2 w-2/3 rotate-12 bg-gradient-to-r from-transparent via-white to-transparent blur-md opacity-0 transition-all duration-[1100ms] ease-out group-hover:left-[130%] group-hover:opacity-90" />
                </div>
                {/* floating particles */}
                <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
                  <span className="absolute left-[15%] top-[70%] h-1.5 w-1.5 rounded-full opacity-0 transition-all duration-[1200ms] ease-out group-hover:-translate-y-16 group-hover:opacity-100" style={{ background: "oklch(0.7 0.18 225 / 0.7)" }} />
                  <span className="absolute left-[40%] top-[80%] h-1 w-1 rounded-full opacity-0 transition-all delay-100 duration-[1400ms] ease-out group-hover:-translate-y-24 group-hover:opacity-100" style={{ background: "oklch(0.75 0.15 220 / 0.6)" }} />
                  <span className="absolute left-[75%] top-[75%] h-2 w-2 rounded-full opacity-0 transition-all delay-200 duration-[1300ms] ease-out group-hover:-translate-y-20 group-hover:opacity-100" style={{ background: "oklch(0.65 0.2 235 / 0.6)" }} />
                  <span className="absolute left-[60%] top-[85%] h-1 w-1 rounded-full opacity-0 transition-all delay-150 duration-[1500ms] ease-out group-hover:-translate-y-28 group-hover:opacity-100" style={{ background: "oklch(0.8 0.12 220 / 0.7)" }} />
                </div>

                {/* header row */}
                <div className="relative z-10 flex items-center justify-between">
                  <div
                    className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-500 group-hover:px-4 group-hover:shadow-[0_6px_20px_-4px_oklch(0.6_0.18_230/0.45)]"
                    style={{
                      background: "oklch(0.95 0.03 225)",
                      color: "oklch(0.45 0.15 230)",
                    }}
                  >
                    <Icon className="h-3.5 w-3.5 transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110" strokeWidth={2.5} />
                    {tool.label}
                  </div>
                  <ArrowRight
                    className="h-4 w-4 -translate-x-3 opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100"
                    style={{ color: "oklch(0.6 0.18 230)" }}
                  />
                </div>

                {/* 3D image */}
                <div className="relative mt-2 flex h-56 items-center justify-center [perspective:1000px]">
                  <div
                    aria-hidden
                    className="absolute inset-x-6 bottom-4 h-8 rounded-full blur-2xl transition-all duration-700 group-hover:h-12 group-hover:scale-110 group-hover:opacity-100"
                    style={{ background: "oklch(0.6 0.18 230 / 0.4)" }}
                  />
                  <img
                    src={tool.image}
                    alt={tool.label}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="relative h-full w-auto object-contain drop-shadow-xl transition-all duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-3 group-hover:scale-[1.12] group-hover:[transform:translateY(-12px)_scale(1.12)_rotateX(8deg)_rotateY(-6deg)] group-hover:drop-shadow-[0_25px_35px_oklch(0.5_0.15_230/0.45)]"
                  />
                </div>

                {/* footer accent */}
                <div
                  className="mt-2 text-xs font-semibold uppercase tracking-wider transition-all duration-500 group-hover:translate-x-1"
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
