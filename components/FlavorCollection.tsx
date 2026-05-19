"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import { flavors, type Flavor } from "@/data/flavors";
import { Container } from "./Container";
import { ProductVisual } from "./ProductVisual";

export function FlavorCollection() {
  const [selectedFlavorId, setSelectedFlavorId] = useState(flavors[0].id);
  const selectedFlavor =
    flavors.find((flavor) => flavor.id === selectedFlavorId) ?? flavors[0];

  const selectFlavor = (flavor: Flavor) => {
    setSelectedFlavorId((currentFlavorId) =>
      currentFlavorId === flavor.id ? currentFlavorId : flavor.id,
    );
  };

  return (
    <section className="relative overflow-hidden bg-matte py-20 md:py-28">
      <div className="absolute inset-0 grid-texture opacity-20" />
      <div
        className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-colors duration-700"
        style={{ backgroundColor: selectedFlavor.glow, opacity: 0.32 }}
      />
      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-mango">
            Flavor collection
          </p>
          <h2 className="mt-4 text-4xl font-extrabold leading-[1.04] text-white md:text-6xl">
            Three moods. One kinetic chill.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-orange-50/68">
            A compact premium lineup built around dark packaging, bright flavor
            cues, and responsive flavor-led product mood.
          </p>
        </div>

        <div className="mt-12 grid items-center gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="glass-panel relative overflow-hidden rounded-lg px-6 py-10 text-center md:px-10">
            <div
              className="absolute inset-x-0 top-0 h-1 transition duration-700"
              style={{ backgroundImage: selectedFlavor.accent }}
            />
            <div
              className="absolute inset-x-10 top-10 h-44 rounded-full blur-3xl transition-colors duration-700"
              style={{ backgroundColor: selectedFlavor.glow }}
            />
            <div
              className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-colors duration-700"
              style={{ borderColor: selectedFlavor.ring }}
            />
            <FlavorBurst key={selectedFlavor.id} flavor={selectedFlavor} />
            <ProductVisual
              compact
              decorative
              glowColor={selectedFlavor.glow}
              imageFilter={selectedFlavor.filter}
              labelPrimary={selectedFlavor.labelColors.primary}
              labelSecondary={selectedFlavor.labelColors.secondary}
              premiumActive
              priority={false}
              sizes="(max-width: 1024px) 260px, 320px"
              className="relative z-10 w-[min(62vw,320px)] min-w-[220px]"
            />
            <div className="relative z-10 mt-8">
              <p className="text-xs font-bold uppercase tracking-[0.26em] text-orange-50/58">
                Selected flavor
              </p>
              <h3 className="mt-2 text-3xl font-extrabold text-white">
                {selectedFlavor.name}
              </h3>
              <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-orange-50/68">
                {selectedFlavor.notes}
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
            {flavors.map((flavor) => {
              const isSelected = flavor.id === selectedFlavor.id;

              return (
                <button
                  key={flavor.id}
                  type="button"
                  onClick={() => selectFlavor(flavor)}
                  onFocus={() => selectFlavor(flavor)}
                  onMouseEnter={() => selectFlavor(flavor)}
                  className={`group relative overflow-hidden rounded-lg border p-4 text-left transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mango md:p-5 ${
                    isSelected
                      ? "border-white/24 bg-white/[0.1] shadow-glow"
                      : "border-white/10 bg-white/[0.045] hover:border-white/18 hover:bg-white/[0.07]"
                  }`}
                >
                  <div
                    className="absolute inset-x-0 top-0 h-1"
                    style={{
                      backgroundImage: flavor.accent,
                      opacity: isSelected ? 1 : 0.62,
                    }}
                  />
                  <div
                    className="absolute -right-14 -top-16 h-36 w-36 rounded-full blur-3xl transition duration-300 group-hover:opacity-70"
                    style={{
                      backgroundColor: flavor.glow,
                      opacity: isSelected ? 0.72 : 0.26,
                    }}
                  />

                  <div className="relative flex items-center gap-4 md:block lg:flex">
                    <ProductVisual
                      compact
                      decorative
                      glowColor={flavor.glow}
                      imageFilter={flavor.filter}
                      labelPrimary={flavor.labelColors.primary}
                      labelSecondary={flavor.labelColors.secondary}
                      premiumActive={isSelected}
                      priority={false}
                      sizes="96px"
                      className={`m-0 w-20 min-w-0 shrink-0 transition duration-300 sm:w-24 md:mx-auto md:mb-4 lg:m-0 lg:w-20 ${
                        isSelected ? "-translate-y-1 scale-[1.04]" : "group-hover:-translate-y-0.5"
                      }`}
                    />
                    <div className="min-w-0">
                      <p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-mango">
                        KineticSip
                      </p>
                      <h3 className="mt-2 text-xl font-extrabold text-white">
                        {flavor.name}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-orange-50/66">
                        {flavor.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

const burstPoints = [
  ["-112px", "-88px", "-18deg"],
  ["-52px", "-118px", "12deg"],
  ["42px", "-124px", "-10deg"],
  ["112px", "-74px", "20deg"],
  ["128px", "16px", "-22deg"],
  ["60px", "104px", "16deg"],
  ["-62px", "112px", "-16deg"],
  ["-130px", "20px", "24deg"],
];

function FlavorBurst({ flavor }: { flavor: Flavor }) {
  return (
    <div className="pointer-events-none absolute left-1/2 top-[46%] z-10 h-0 w-0">
      {burstPoints.map(([x, y, rotate], index) => (
        <span
          key={`${flavor.id}-${x}-${y}`}
          className="flavor-burst-item absolute left-0 top-0 block"
          style={
            {
              "--burst-x": x,
              "--burst-y": y,
              "--burst-rotate": rotate,
              animationDelay: `${index * 34}ms`,
              background:
                index % 3 === 0
                  ? flavor.accent
                  : flavor.burst[index % flavor.burst.length],
              borderRadius: index % 2 === 0 ? "999px" : "40% 60% 45% 55%",
              height: index % 3 === 0 ? 14 : 10,
              opacity: 0,
              width: index % 3 === 0 ? 30 : 10,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
