import { CTASection } from "@/components/CTASection";
import { Container } from "@/components/Container";
import { FlavorCollection } from "@/components/FlavorCollection";
import { FlavorRevealSection } from "@/components/FlavorRevealSection";
import { ProductVisual } from "@/components/ProductVisual";
import { ScrollProductStory } from "@/components/ScrollProductStory";

export default function Home() {
  return (
    <main id="top" className="min-h-screen overflow-hidden bg-matte text-white">
      <section className="relative flex min-h-[88svh] items-center sm:min-h-[92svh]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_18%,rgba(255,138,31,0.22),transparent_34%),radial-gradient(circle_at_18%_72%,rgba(215,25,69,0.15),transparent_30%)]" />
        <div className="absolute inset-0 grid-texture opacity-40" />
        <div className="pointer-events-none absolute left-1/2 top-[56%] h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial-mango opacity-28 blur-3xl sm:h-[360px] sm:w-[360px] md:left-[70%] md:top-1/2 md:h-[460px] md:w-[460px] md:opacity-35" />
        <ProductVisual
          decorative
          priority={false}
          sizes="(max-width: 768px) 170px, 250px"
          className="pointer-events-none absolute bottom-[-9%] right-1/2 block w-[150px] min-w-0 translate-x-1/2 opacity-[0.08] blur-[0.2px] sm:w-[180px] md:bottom-[-8%] md:right-[5%] md:w-[min(22vw,250px)] md:translate-x-0 md:opacity-[0.18]"
        />
        <Container className="relative z-10 py-20 text-center sm:py-24">
          <p className="mx-auto mb-5 w-fit rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-mango">
            Mango drink, reimagined
          </p>
          <h1 className="mx-auto max-w-5xl text-balance text-5xl font-extrabold leading-[0.98] tracking-normal text-white sm:text-6xl md:text-8xl lg:text-[8.75rem]">
            KineticSip
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-8 text-orange-50/72 md:mt-7 md:text-lg md:leading-9">
            A cinematic mango rush with polished depth, bright citrus heat, and
            a product story that moves at the speed of your scroll.
          </p>
        </Container>
      </section>

      <ScrollProductStory />
      <FlavorRevealSection />
      <FlavorCollection />
      <CTASection />
    </main>
  );
}
