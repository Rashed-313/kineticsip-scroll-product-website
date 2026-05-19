import Image from "next/image";
import type { CSSProperties } from "react";
import { forwardRef } from "react";

type ProductVisualProps = {
  assetSrc?: string;
  className?: string;
  compact?: boolean;
  decorative?: boolean;
  glowColor?: string;
  imageFilter?: string;
  labelPrimary?: string;
  labelSecondary?: string;
  premiumActive?: boolean;
  priority?: boolean;
  sizes?: string;
};

const DEFAULT_PRODUCT_ASSET = "/assets/product-bottle.svg";

export const ProductVisual = forwardRef<HTMLDivElement, ProductVisualProps>(
  function ProductVisual(
    {
      assetSrc = DEFAULT_PRODUCT_ASSET,
      className = "",
      compact = false,
      decorative = false,
      glowColor = "rgba(255, 138, 31, 0.2)",
      imageFilter = "none",
      labelPrimary = "#ffbf47",
      labelSecondary = "#d71945",
      premiumActive = false,
      priority = true,
      sizes = "(max-width: 768px) 230px, 330px",
    },
    ref,
  ) {
    return (
      <div
        ref={ref}
        className={`product-shadow group/product relative mx-auto aspect-[0.54] w-[min(62vw,350px)] max-w-full ${
          compact ? "min-w-0" : "min-w-[190px] sm:min-w-[220px]"
        } ${className}`}
        aria-hidden={decorative}
      >
        <div className="absolute inset-x-6 bottom-0 h-14 rounded-full bg-black/75 blur-2xl" />
        <div
          className="absolute bottom-2 left-1/2 h-7 w-32 -translate-x-1/2 rounded-full blur-2xl"
          style={{ backgroundColor: glowColor }}
        />
        <div
          className={`product-liquid-pulse absolute left-1/2 top-[62%] h-[24%] w-[36%] -translate-x-1/2 rounded-full blur-2xl ${
            premiumActive ? "opacity-45" : "opacity-20"
          }`}
          style={{ backgroundColor: glowColor }}
        />
        <Image
          src={assetSrc}
          alt={decorative ? "" : "KineticSip mango drink bottle"}
          fill
          priority={priority}
          sizes={sizes}
          className="object-contain"
          style={{ filter: imageFilter } as CSSProperties}
        />
        <div
          className="product-label-tint absolute left-[23%] top-[38%] h-[31%] w-[54%] rounded-[32%] opacity-25 mix-blend-screen"
          style={{
            background: `linear-gradient(135deg, ${labelPrimary}, ${labelSecondary})`,
          }}
        />
        <div className={`product-shine-sweep ${premiumActive ? "opacity-100" : "opacity-0 group-hover/product:opacity-100"}`} />
      </div>
    );
  },
);
