import { Container } from "./Container";
import { GradientButton } from "./GradientButton";

const stats = [
  ["01", "cold-pressed mango note"],
  ["03", "layered citrus finish"],
  ["12", "limited launch cans"],
];

export function CTASection() {
  return (
    <section id="cta" className="relative overflow-hidden bg-matte py-20 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_20%,rgba(215,25,69,0.18),transparent_34%),radial-gradient(circle_at_78%_60%,rgba(255,138,31,0.2),transparent_34%)]" />
      <div className="absolute inset-0 grid-texture opacity-20" />
      <Container className="relative z-10">
        <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-mango">
              KineticSip launch batch
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.04] sm:text-5xl md:text-7xl md:leading-[1.02]">
              A darker, smoother mango moment.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-orange-50/72 md:text-lg">
              Premium matte packaging, citrus-lit aroma, and a crisp chilled
              finish wrapped in a cinematic product story.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <GradientButton className="w-full sm:w-auto" href="mailto:launch@kineticsip.test">
                Join the Drop
              </GradientButton>
              <GradientButton className="w-full sm:w-auto" href="#top" variant="secondary">
                Replay Story
              </GradientButton>
            </div>
          </div>

          <div className="glass-panel rounded-lg p-5 md:p-7">
            <div className="mb-6 flex items-center justify-between gap-4 border-b border-white/10 pb-5">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-50/65">
                tasting profile
              </p>
              <span className="h-2 w-16 rounded-full bg-gradient-to-r from-mango to-crimson shadow-glow" />
            </div>
            <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-1">
              {stats.map(([value, label]) => (
                <div
                  key={label}
                  className="flex items-center gap-4 rounded-lg border border-white/10 bg-black/25 p-5 sm:gap-5"
                >
                  <p className="min-w-12 text-3xl font-extrabold text-mango">{value}</p>
                  <p className="text-sm uppercase leading-6 tracking-[0.16em] text-orange-50/62">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
