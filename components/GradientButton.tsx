import { ComponentPropsWithoutRef } from "react";

type GradientButtonProps = ComponentPropsWithoutRef<"a"> & {
  variant?: "primary" | "secondary";
};

export function GradientButton({
  className = "",
  variant = "primary",
  ...props
}: GradientButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-mango via-ember to-crimson text-matte shadow-glow"
      : "border border-white/15 bg-white/[0.06] text-orange-50 hover:bg-white/[0.1]";

  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-extrabold uppercase tracking-[0.16em] transition duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mango ${styles} ${className}`}
      {...props}
    />
  );
}
