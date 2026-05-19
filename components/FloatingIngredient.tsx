import Image from "next/image";
import { forwardRef } from "react";

type FloatingIngredientProps = {
  alt: string;
  className?: string;
  staticVisible?: boolean;
  src: string;
  size?: number;
};

export const FloatingIngredient = forwardRef<
  HTMLDivElement,
  FloatingIngredientProps
>(function FloatingIngredient(
  { alt, className = "", size = 78, src, staticVisible = false },
  ref,
) {
  return (
    <div
      ref={ref}
      className={`pointer-events-none will-change-transform ${
        staticVisible ? "relative opacity-100" : "absolute opacity-0"
      } ${className}`}
      style={{ height: size, width: size }}
    >
      <Image src={src} alt={alt} fill sizes={`${size}px`} className="object-contain" />
    </div>
  );
});
