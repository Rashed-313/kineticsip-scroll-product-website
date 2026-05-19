"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { flavors } from "@/data/flavors";
import { Container } from "./Container";
import { GradientButton } from "./GradientButton";
import { ProductVisual } from "./ProductVisual";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const [mangoFlavor, cocoaFlavor, berryFlavor] = flavors;

function StaticFlavorLineup({ reduced = false }: { reduced?: boolean }) {
  return (
    <div className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 grid-texture opacity-20" />
      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-mango">
            {reduced ? "Flavor lineup / Reduced motion" : "Flavor lineup"}
          </p>
          <h2 className="mt-4 text-4xl font-extrabold leading-[1.04] md:text-6xl">
            Three bottles. Three controlled finishes.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {flavors.map((flavor) => (
            <div key={flavor.id} className="glass-panel relative overflow-hidden rounded-lg p-5 text-center">
              <div
                className="absolute inset-x-8 top-8 h-32 rounded-full blur-3xl"
                style={{ backgroundColor: flavor.glow }}
              />
              <ProductVisual
                compact
                decorative
                glowColor={flavor.glow}
                imageFilter={flavor.filter}
                priority={false}
                sizes="180px"
                className="relative z-10 w-[min(48vw,180px)] min-w-0"
              />
              <div className="relative z-10 mt-5">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-mango">
                  {flavor.flavorLabel}
                </p>
                <h3 className="mt-2 text-2xl font-extrabold text-white">{flavor.name}</h3>
                <p className="mt-3 text-sm leading-7 text-orange-50/68">
                  {flavor.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <GradientButton className="w-full sm:w-auto" href="#cta">
            Reserve the Lineup
          </GradientButton>
          <GradientButton className="w-full sm:w-auto" href="#top" variant="secondary">
            Replay Story
          </GradientButton>
        </div>
      </Container>
    </div>
  );
}

export function FlavorRevealSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const mangoRef = useRef<HTMLDivElement>(null);
  const cocoaRef = useRef<HTMLDivElement>(null);
  const berryRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const smallScreen = window.matchMedia("(max-width: 767px)").matches;

    if (
      reduceMotion ||
      smallScreen ||
      !sectionRef.current ||
      !pinRef.current ||
      !mangoRef.current ||
      !cocoaRef.current ||
      !berryRef.current
    ) {
      return;
    }

    let removeRefreshListener = () => {};

    const context = gsap.context(() => {
      gsap.set(mangoRef.current, { autoAlpha: 1, scale: 1, x: 0, y: 8, rotate: 0 });
      gsap.set(cocoaRef.current, { autoAlpha: 0, scale: 0.78, x: -150, y: 34, rotate: -8 });
      gsap.set(berryRef.current, { autoAlpha: 0, scale: 0.78, x: 150, y: 34, rotate: 8 });
      gsap.set([headingRef.current, ctaRef.current], { autoAlpha: 0, y: 26 });

      gsap
        .timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            id: "kineticsip-flavor-reveal",
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            pin: pinRef.current,
            pinSpacing: false,
            scrub: 0.75,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })
        .to(mangoRef.current, { scale: 1.04, y: -10, duration: 0.55, ease: "power2.out" })
        .to(cocoaRef.current, { autoAlpha: 1, scale: 0.92, x: 0, y: 16, rotate: -2.5, duration: 0.85, ease: "power3.out" }, 0.5)
        .to(berryRef.current, { autoAlpha: 1, scale: 0.92, x: 0, y: 16, rotate: 2.5, duration: 0.85, ease: "power3.out" }, 1.2)
        .to(mangoRef.current, { scale: 0.96, y: 8, duration: 0.72 }, 1.75)
        .to([cocoaRef.current, berryRef.current], { scale: 0.9, y: 20, duration: 0.72 }, 1.75)
        .to(headingRef.current, { autoAlpha: 1, y: 0, duration: 0.55, ease: "power2.out" }, 2.05)
        .to(ctaRef.current, { autoAlpha: 1, y: 0, duration: 0.45, ease: "power2.out" }, 2.35);

      const refresh = () => ScrollTrigger.refresh();
      requestAnimationFrame(() => {
        requestAnimationFrame(refresh);
      });
      window.addEventListener("load", refresh, { once: true });
      removeRefreshListener = () => {
        window.removeEventListener("load", refresh);
      };
    }, sectionRef);

    return () => {
      removeRefreshListener();
      context.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-matte md:h-[420svh] md:min-h-0 motion-reduce:h-auto"
    >
      <div className="block md:hidden motion-reduce:hidden">
        <StaticFlavorLineup />
      </div>
      <div className="hidden motion-reduce:block">
        <StaticFlavorLineup reduced />
      </div>

      <div
        ref={pinRef}
        className="noise-texture relative hidden h-svh min-h-[700px] items-center overflow-hidden md:flex motion-reduce:hidden"
      >
        <div className="absolute inset-0 grid-texture opacity-20" />
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-matte to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-matte to-transparent" />

        <Container className="relative z-10 h-full">
          <div className="relative flex h-full items-center justify-center">
            <div className="absolute left-[18%] top-1/2 h-80 w-80 -translate-y-1/2 rounded-full blur-3xl" style={{ backgroundColor: cocoaFlavor.glow }} />
            <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" style={{ backgroundColor: mangoFlavor.glow }} />
            <div className="absolute right-[18%] top-1/2 h-80 w-80 -translate-y-1/2 rounded-full blur-3xl" style={{ backgroundColor: berryFlavor.glow }} />

            <div
              ref={cocoaRef}
              className="absolute left-[12%] top-[21%] w-[min(25vw,250px)]"
            >
              <ProductVisual
                compact
                decorative
                glowColor={cocoaFlavor.glow}
                imageFilter={cocoaFlavor.filter}
                priority={false}
                sizes="250px"
                className="w-full min-w-0"
              />
              <FlavorCaption flavor={cocoaFlavor} />
            </div>

            <div
              ref={mangoRef}
              className="absolute left-1/2 top-[15%] w-[min(30vw,310px)] -translate-x-1/2"
            >
              <ProductVisual
                compact
                decorative
                glowColor={mangoFlavor.glow}
                imageFilter={mangoFlavor.filter}
                sizes="310px"
                className="w-full min-w-0"
              />
              <FlavorCaption flavor={mangoFlavor} featured />
            </div>

            <div
              ref={berryRef}
              className="absolute right-[12%] top-[21%] w-[min(25vw,250px)]"
            >
              <ProductVisual
                compact
                decorative
                glowColor={berryFlavor.glow}
                imageFilter={berryFlavor.filter}
                priority={false}
                sizes="250px"
                className="w-full min-w-0"
              />
              <FlavorCaption flavor={berryFlavor} />
            </div>

            <div
              ref={headingRef}
              className="absolute bottom-[15%] left-1/2 w-[min(90vw,720px)] -translate-x-1/2 text-center"
            >
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-mango">
                Flavor lineup reveal
              </p>
              <h2 className="mt-3 text-5xl font-extrabold leading-[1.02] text-white lg:text-6xl">
                Mango stays centered. The collection moves in.
              </h2>
            </div>

            <div
              ref={ctaRef}
              className="absolute bottom-[6%] left-1/2 flex w-[min(90vw,520px)] -translate-x-1/2 flex-col gap-3 sm:flex-row sm:justify-center"
            >
              <GradientButton className="w-full sm:w-auto" href="#cta">
                Reserve the Lineup
              </GradientButton>
              <GradientButton className="w-full sm:w-auto" href="#top" variant="secondary">
                Replay Mango Story
              </GradientButton>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

function FlavorCaption({
  featured = false,
  flavor,
}: {
  featured?: boolean;
  flavor: typeof flavors[number];
}) {
  return (
    <div className={`mx-auto mt-4 max-w-[230px] text-center ${featured ? "text-white" : "text-orange-50/76"}`}>
      <p className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-mango">
        {flavor.flavorLabel}
      </p>
      <h3 className="mt-1 text-xl font-extrabold text-white">{flavor.name}</h3>
      <p className="mt-2 text-xs leading-5 text-orange-50/62">{flavor.description}</p>
    </div>
  );
}
