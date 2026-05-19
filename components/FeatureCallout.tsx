import { forwardRef } from "react";

type FeatureCalloutProps = {
  className?: string;
  label: string;
  title: string;
  side?: "left" | "right";
};

export const FeatureCallout = forwardRef<HTMLDivElement, FeatureCalloutProps>(
  function FeatureCallout({ className = "", label, side = "left", title }, ref) {
    return (
      <div
        ref={ref}
        className={`absolute hidden w-64 opacity-0 will-change-transform md:block ${className}`}
      >
        <div className={`flex items-center gap-4 ${side === "right" ? "flex-row-reverse text-right" : ""}`}>
          <span
            className={`h-px flex-1 ${
              side === "right"
                ? "bg-gradient-to-l from-transparent via-mango to-crimson"
                : "bg-gradient-to-r from-transparent via-mango to-crimson"
            }`}
          />
          <span className="size-2.5 rounded-full bg-mango shadow-glow ring-4 ring-mango/10" />
        </div>
        <div className="glass-panel mt-4 rounded-lg p-[1.125rem]">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-mango">
            {label}
          </p>
          <h3 className="mt-2 text-lg font-extrabold leading-snug text-white">
            {title}
          </h3>
        </div>
      </div>
    );
  },
);
