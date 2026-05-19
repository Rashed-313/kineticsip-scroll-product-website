"use client";

import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { Container } from "./Container";
import { FeatureCallout } from "./FeatureCallout";
import { FloatingIngredient } from "./FloatingIngredient";
import { GradientButton } from "./GradientButton";
import { ProductVisual } from "./ProductVisual";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function isDefined<T>(value: T | null | undefined): value is T {
  return value != null;
}

const ingredientData = [
  {
    alt: "Mango wedge",
    className: "left-[4%] top-[35%] md:left-[12%] md:top-[31%]",
    src: "/assets/mango-piece.svg",
    size: 82,
  },
  {
    alt: "Mango cube",
    className: "right-[6%] top-[28%] md:right-[15%] md:top-[24%]",
    src: "/assets/mango-cube.svg",
    size: 68,
  },
  {
    alt: "Fresh leaf",
    className: "left-[8%] bottom-[24%] md:left-[20%] md:bottom-[26%]",
    src: "/assets/leaf.svg",
    size: 76,
  },
  {
    alt: "Juice droplet",
    className: "right-[13%] bottom-[27%] md:right-[24%] md:bottom-[29%]",
    src: "/assets/droplet.svg",
    size: 48,
  },
  {
    alt: "Juice droplet",
    className: "left-[31%] top-[22%] md:left-[34%] md:top-[18%]",
    src: "/assets/droplet.svg",
    size: 38,
  },
];

const sceneCopy = [
  {
    label: "Scene 01 / Hero reveal",
    headline: "A bottle staged in warm mango light.",
    copy: "The product enters cleanly, centered in a quiet cinematic frame.",
    className: "top-[10%]",
  },
  {
    label: "Scene 02 / Mango depth",
    headline: "Real mango, sharpened by cold citrus.",
    copy: "Fruit, leaf, and droplets orbit the bottle as the flavor opens.",
    className: "bottom-[12%]",
  },
  {
    label: "Scene 03 / Energy",
    headline: "Glow rises. The bottle catches momentum.",
    copy: "A restrained scale and turn shifts the scene from smooth to charged.",
    className: "bottom-[12%]",
  },
  {
    label: "Scene 04 / Product cues",
    headline: "Four details lock onto the pour.",
    copy: "Callouts appear only when the product story is ready for specifics.",
    className: "top-[9%]",
  },
];

const finalScene = {
  label: "Scene 05 / Final pour",
  headline: "Ready for the first chilled case?",
  copy: "The bottle settles into its launch composition with the offer in reach.",
};

const mobileSceneCards = [...sceneCopy.slice(1), finalScene];

const featureCallouts = [
  {
    className: "left-[2%] top-[30%]",
    label: "Velvet Mango",
    title: "Pulp-rich body with a polished finish",
  },
  {
    className: "right-[2%] top-[29%]",
    label: "Crimson Lift",
    side: "right" as const,
    title: "A bright edge that cuts through the sweetness",
  },
  {
    className: "bottom-[19%] left-[7%]",
    label: "Cold Spark",
    title: "Chilled clarity for a clean final note",
  },
  {
    className: "bottom-[18%] right-[7%]",
    label: "Matte Pack",
    side: "right" as const,
    title: "Dark shelf presence with warm mango light",
  },
];

type SceneTextProps = {
  copy: (typeof sceneCopy)[number];
  index: number;
  setRef: (index: number, node: HTMLDivElement | null) => void;
};

type StaticProductStoryProps = {
  className?: string;
  reduced?: boolean;
};

function SceneText({ copy, index, setRef }: SceneTextProps) {
  return (
    <div
      ref={(node) => {
        setRef(index, node);
      }}
      className={`pointer-events-none absolute left-1/2 w-[min(92vw,700px)] -translate-x-1/2 text-center opacity-0 will-change-transform ${copy.className}`}
    >
      <p className="text-[0.68rem] font-bold uppercase tracking-[0.3em] text-mango md:text-xs">
        <motion.span
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="inline-block"
        >
          {copy.label}
        </motion.span>
      </p>
      <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-extrabold leading-[1.06] text-white md:text-5xl md:leading-[1.02]">
        {copy.headline}
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-orange-50/68 md:text-base md:leading-8">
        {copy.copy}
      </p>
    </div>
  );
}

function StaticProductStory({ className = "", reduced = false }: StaticProductStoryProps) {
  const storyRef = useRef<HTMLDivElement>(null);
  const mobileProductRef = useRef<HTMLDivElement>(null);
  const mobileAuraRef = useRef<HTMLDivElement>(null);
  const mobileIngredientRefs = useRef<Array<HTMLDivElement | null>>([]);
  const mobileCardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const mobileFeatureRefs = useRef<Array<HTMLDivElement | null>>([]);
  const mobileCtaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    if (reduced || reduceMotion || !isMobile || !storyRef.current) {
      return;
    }

    const context = gsap.context(() => {
      const mobileCards = mobileCardRefs.current.filter(isDefined);
      const mobileFeatures = mobileFeatureRefs.current.filter(isDefined);
      const mobileIngredients = mobileIngredientRefs.current.filter(isDefined);

      gsap.set(mobileProductRef.current, {
        autoAlpha: 0.92,
        rotate: -2,
        scale: 0.94,
        y: 18,
      });
      gsap.set(mobileAuraRef.current, { autoAlpha: 0.45, scale: 0.82 });
      gsap.set(mobileIngredients, { autoAlpha: 0, scale: 0.72, y: 18 });
      gsap.set([...mobileCards, ...mobileFeatures], { autoAlpha: 0, y: 32 });
      gsap.set(mobileCtaRef.current, { autoAlpha: 0, y: 22 });

      gsap
        .timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            id: "kineticsip-mobile-story",
            trigger: storyRef.current,
            start: "top 82%",
            end: "bottom 28%",
            scrub: 0.75,
            invalidateOnRefresh: true,
          },
        })
        .to(mobileProductRef.current, { autoAlpha: 1, scale: 1, rotate: 0, y: 0, duration: 0.7 })
        .to(mobileAuraRef.current, { autoAlpha: 0.8, scale: 1, duration: 0.7 }, "<")
        .to(
          mobileIngredients,
          {
            autoAlpha: 0.9,
            duration: 0.7,
            stagger: 0.06,
            scale: 1,
            y: (index) => [-12, 10, -8][index],
            x: (index) => [-8, 9, 7][index],
            rotate: (index) => [-10, 12, -14][index],
          },
          0.28,
        )
        .to(mobileProductRef.current, { scale: 1.035, rotate: 1.8, y: -10, duration: 0.75 }, 0.95)
        .to(mobileAuraRef.current, { autoAlpha: 1, scale: 1.08, duration: 0.75 }, 0.95)
        .to(mobileProductRef.current, { scale: 0.98, rotate: 0, y: -4, duration: 0.7 }, 1.78)
        .to(mobileIngredients, { autoAlpha: 0.55, scale: 0.86, duration: 0.6 }, 1.85)
        .to(mobileCtaRef.current, { autoAlpha: 1, y: 0, duration: 0.45 }, 2.25);

      mobileCards.forEach((card, index) => {
        gsap.to(card, {
          autoAlpha: 1,
          y: 0,
          duration: 0.65,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 82%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true,
          },
          delay: index * 0.04,
        });
      });

      mobileFeatures.forEach((feature, index) => {
        gsap.to(feature, {
          autoAlpha: 1,
          y: 0,
          duration: 0.55,
          ease: "power2.out",
          scrollTrigger: {
            trigger: feature,
            start: "top 86%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true,
          },
          delay: index * 0.03,
        });
      });
    }, storyRef);

    return () => context.revert();
  }, [reduced]);

  return (
    <div ref={storyRef} className={`relative overflow-hidden py-20 sm:py-24 ${className}`}>
      <div className="absolute inset-0 grid-texture opacity-20" />
      <div
        ref={mobileAuraRef}
        className="absolute left-1/2 top-64 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-radial-mango opacity-45 blur-3xl"
      />
      <Container className="relative z-10">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.3em] text-mango">
            {reduced ? "Reduced motion / Product story" : "Mobile product story"}
          </p>
          <h2 className="mt-3 text-4xl font-extrabold leading-[1.04] text-white sm:text-5xl">
            A cinematic mango pour, simplified for the screen in your hand.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-orange-50/68 sm:text-base sm:leading-8">
            The same premium product story, presented as a clean sequence with
            the bottle, flavor notes, and launch CTA always readable.
          </p>
        </div>

        <div className="sticky top-6 z-10 mx-auto mt-10 flex min-h-[410px] max-w-md items-center justify-center rounded-[28px] border border-white/[0.04] bg-matte/45 py-4 motion-reduce:static motion-reduce:border-0 motion-reduce:bg-transparent">
          <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07]" />
          <div
            ref={(node) => {
              mobileIngredientRefs.current[0] = node;
            }}
            className="absolute left-[8%] top-[16%] opacity-75"
          >
            <FloatingIngredient
              alt="Mango wedge"
              src="/assets/mango-piece.svg"
              size={64}
              staticVisible
            />
          </div>
          <div
            ref={(node) => {
              mobileIngredientRefs.current[1] = node;
            }}
            className="absolute right-[7%] top-[24%] opacity-75"
          >
            <FloatingIngredient
              alt="Juice droplet"
              src="/assets/droplet.svg"
              size={48}
              staticVisible
            />
          </div>
          <div
            ref={(node) => {
              mobileIngredientRefs.current[2] = node;
            }}
            className="absolute bottom-[18%] left-[12%] opacity-70"
          >
            <FloatingIngredient
              alt="Fresh leaf"
              src="/assets/leaf.svg"
              size={56}
              staticVisible
            />
          </div>
          <div ref={mobileProductRef} className="relative z-10">
            <ProductVisual
              priority={false}
              sizes="260px"
              className="w-[min(62vw,260px)] min-w-[190px] sm:w-[260px]"
            />
          </div>
        </div>

        <div className="relative z-20 mt-8 grid gap-3 sm:grid-cols-2">
          {mobileSceneCards.map((scene, index) => (
            <div
              key={scene.label}
              ref={(node) => {
                mobileCardRefs.current[index] = node;
              }}
              className="glass-panel rounded-lg p-5"
            >
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-mango">
                {scene.label}
              </p>
              <h3 className="mt-3 text-xl font-extrabold leading-snug text-white">
                {scene.headline}
              </h3>
              <p className="mt-3 text-sm leading-7 text-orange-50/64">
                {scene.copy}
              </p>
            </div>
          ))}
        </div>

        <div className="relative z-20 mt-5 grid gap-3 sm:grid-cols-2">
          {featureCallouts.map((callout, index) => (
            <div
              key={callout.label}
              ref={(node) => {
                mobileFeatureRefs.current[index] = node;
              }}
              className="rounded-lg border border-white/10 bg-white/[0.045] p-4"
            >
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-mango">
                {callout.label}
              </p>
              <p className="mt-2 text-sm leading-6 text-orange-50/72">
                {callout.title}
              </p>
            </div>
          ))}
        </div>

        <div
          ref={mobileCtaRef}
          className="relative z-20 mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
        >
          <GradientButton className="w-full sm:w-auto" href="#cta">
            Reserve a Case
          </GradientButton>
          <GradientButton className="w-full sm:w-auto" href="#top" variant="secondary">
            Back to Top
          </GradientButton>
        </div>
      </Container>
    </div>
  );
}

export function ScrollProductStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const auraRef = useRef<HTMLDivElement>(null);
  const intensityRef = useRef<HTMLDivElement>(null);
  const finalRef = useRef<HTMLDivElement>(null);
  const sceneTextRefs = useRef<Array<HTMLDivElement | null>>([]);
  const featureRefs = useRef<Array<HTMLDivElement | null>>([]);
  const ingredientRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const smallScreen = window.matchMedia("(max-width: 767px)").matches;
    const sceneTextNodes = sceneTextRefs.current.filter(isDefined);
    const finalButtons = finalRef.current?.querySelectorAll("a") ?? [];

    if (smallScreen || reduceMotion || !sectionRef.current || !pinRef.current || !productRef.current) {
      gsap.set(
        [
          productRef.current,
          auraRef.current,
          finalRef.current,
          ...sceneTextNodes,
          ...ingredientRefs.current,
          ...featureRefs.current,
          ...Array.from(finalButtons),
        ],
        { clearProps: "all" },
      );
      return;
    }

    let removeRefreshListener = () => {};

    const context = gsap.context(() => {
      gsap.set(productRef.current, {
        autoAlpha: 0,
        rotate: -5,
        scale: 0.82,
        y: 64,
      });
      gsap.set(auraRef.current, {
        autoAlpha: 0.4,
        scale: 0.72,
        xPercent: -50,
        yPercent: -50,
      });
      gsap.set(intensityRef.current, { autoAlpha: 0 });
      gsap.set(sceneTextNodes, { autoAlpha: 0, xPercent: -50, y: 22 });
      if (sceneTextNodes[0]) {
        gsap.set(sceneTextNodes[0], { autoAlpha: 1, xPercent: -50, y: 0 });
      }
      gsap.set(finalRef.current, {
        autoAlpha: 0,
        scale: 0.96,
        xPercent: -50,
        y: 28,
      });
      gsap.set(finalButtons, { autoAlpha: 0, y: 14 });
      gsap.set(featureRefs.current, { autoAlpha: 0, y: 18 });
      gsap.set(ingredientRefs.current, { autoAlpha: 0, scale: 0.58 });

      const timeline = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          id: "kineticsip-desktop-story",
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: pinRef.current,
          pinSpacing: false,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      timeline
        .to(productRef.current, {
          autoAlpha: 1,
          rotate: 0,
          scale: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
        })
        .to(auraRef.current, { autoAlpha: 1, scale: 1, duration: 0.9 }, "<")
        .to(sceneTextNodes[0], { autoAlpha: 0, y: -18, duration: 0.45 }, 0.78)
        .to(sceneTextNodes[1], { autoAlpha: 1, y: 0, duration: 0.48, ease: "power2.out" }, 0.98)
        .to(
          ingredientRefs.current,
          {
            autoAlpha: 0.92,
            duration: 0.95,
            stagger: 0.1,
            scale: 1,
            y: (index) => [-34, 24, -20, 34, -26][index],
            x: (index) => [-24, 22, 16, -22, 14][index],
            rotate: (index) => [-14, 12, -18, 10, 20][index],
            ease: "power3.out",
          },
          1.05,
        )
        .to(sceneTextNodes[1], { autoAlpha: 0, y: -18, duration: 0.4 }, 1.62)
        .to(productRef.current, { scale: 1.06, rotate: 2.8, y: -7, duration: 0.95 }, 1.75)
        .to(intensityRef.current, { autoAlpha: 0.9, duration: 0.95 }, 1.75)
        .to(sceneTextNodes[2], { autoAlpha: 1, y: 0, duration: 0.48, ease: "power2.out" }, 1.9)
        .to(sceneTextNodes[2], { autoAlpha: 0, y: -18, duration: 0.38 }, 2.55)
        .to(productRef.current, { rotate: -1.8, scale: 1.015, x: 0, duration: 0.75 }, 2.7)
        .to(sceneTextNodes[3], { autoAlpha: 1, y: 0, duration: 0.48, ease: "power2.out" }, 2.74)
        .to(
          featureRefs.current,
          {
            autoAlpha: 1,
            duration: 0.58,
            stagger: 0.12,
            y: 0,
            ease: "power2.out",
          },
          2.95,
        )
        .to(ingredientRefs.current, { autoAlpha: 0.68, scale: 0.88, duration: 0.65 }, 3.1)
        .to(sceneTextNodes[3], { autoAlpha: 0, y: -18, duration: 0.4 }, 3.62)
        .to(featureRefs.current, { autoAlpha: 0, y: -18, duration: 0.45 }, 3.75)
        .to(ingredientRefs.current, { autoAlpha: 0, y: 74, scale: 0.62, duration: 0.65 }, 3.9)
        .to(productRef.current, { rotate: 0, scale: 0.98, y: -16, duration: 0.8 }, 4)
        .to(finalRef.current, { autoAlpha: 1, y: 0, scale: 1, duration: 0.8 }, 4.1)
        .to(finalButtons, { autoAlpha: 1, y: 0, duration: 0.35, stagger: 0.08, ease: "power2.out" }, 4.28)
        .to(auraRef.current, { scale: 1.08, duration: 0.75 }, 4.15);

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
      id="story"
      ref={sectionRef}
      className="kinetic-story relative bg-matte md:h-[540svh] md:min-h-0 motion-reduce:h-auto motion-reduce:min-h-0"
    >
      <StaticProductStory className="block md:hidden motion-reduce:hidden" />
      <StaticProductStory className="hidden motion-reduce:block" reduced />
      <div
        ref={pinRef}
        className="noise-texture relative hidden h-svh min-h-[700px] items-center overflow-hidden md:flex lg:min-h-[740px] motion-reduce:hidden"
      >
        <div className="absolute inset-0 grid-texture opacity-30" />
        <div
          ref={intensityRef}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,138,31,0.28),rgba(215,25,69,0.24)_34%,transparent_67%)]"
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-matte to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-matte to-transparent" />

        <Container className="relative z-10 h-full">
          <div className="relative flex h-full items-center justify-center">
            {sceneCopy.map((copy, index) => (
              <SceneText
                key={copy.label}
                copy={copy}
                index={index}
                setRef={(sceneIndex, node) => {
                  sceneTextRefs.current[sceneIndex] = node;
                }}
              />
            ))}

            <div
              ref={auraRef}
              className="absolute left-1/2 top-1/2 h-[52vmin] max-h-[540px] w-[52vmin] max-w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial-mango blur-2xl"
            />
            <div className="absolute left-1/2 top-1/2 h-[68vmin] max-h-[680px] w-[68vmin] max-w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" />

            <div className="absolute inset-0" aria-hidden="true">
              {ingredientData.map((ingredient, index) => (
                <FloatingIngredient
                  key={`${ingredient.src}-${ingredient.className}`}
                  ref={(node) => {
                    ingredientRefs.current[index] = node;
                  }}
                  {...ingredient}
                />
              ))}
            </div>

            {featureCallouts.map((callout, index) => (
              <FeatureCallout
                key={callout.label}
                ref={(node) => {
                  featureRefs.current[index] = node;
                }}
                {...callout}
              />
            ))}

            <ProductVisual
              ref={productRef}
              sizes="(max-width: 1024px) 300px, 350px"
              className="w-[min(40vw,350px)] min-w-[250px] lg:min-w-[280px]"
            />

            <div
              ref={finalRef}
              className="absolute bottom-[8%] left-1/2 w-[min(92vw,680px)] -translate-x-1/2 text-center"
            >
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-mango">
                {finalScene.label}
              </p>
              <h2 className="mt-3 text-4xl font-extrabold leading-[1.02] md:text-5xl lg:text-6xl">
                {finalScene.headline}
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-orange-50/68 md:text-base md:leading-8">
                {finalScene.copy}
              </p>
              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <GradientButton className="w-full sm:w-auto" href="#cta">
                  Reserve a Case
                </GradientButton>
                <GradientButton className="w-full sm:w-auto" href="#story" variant="secondary">
                  Explore Flavor
                </GradientButton>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
