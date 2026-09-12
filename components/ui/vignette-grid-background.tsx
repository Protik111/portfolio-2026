import type { ComponentProps } from "react";

import { cn } from "../../lib/utils";

interface GridVignetteBackgroundProps extends ComponentProps<"div"> {
  size?: number;
  x?: number;
  y?: number;
  horizontalVignetteSize?: number;
  verticalVignetteSize?: number;
  intensity?: number;
}

/**
 * A fixed, full-viewport line-grid background masked by a radial vignette
 * so it fades toward the edges instead of cutting off hard. `x`/`y` place
 * the vignette's center (in % of the viewport), `horizontalVignetteSize`/
 * `verticalVignetteSize` set its ellipse radii (in %), and `intensity`
 * (0–100) controls how much of that ellipse fades out vs. stays solid.
 */
export function GridVignetteBackground({
  className,
  size = 48,
  x = 50,
  y = 50,
  horizontalVignetteSize = 100,
  verticalVignetteSize = 100,
  intensity = 0,
  style,
  ...props
}: GridVignetteBackgroundProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-[-1] opacity-50 bg-[image:linear-gradient(to_right,var(--border),transparent_1px),linear-gradient(to_bottom,var(--border),transparent_1px)]",
        className,
      )}
      style={{
        ...style,
        backgroundSize: `${size}px ${size}px`,
        maskImage: `radial-gradient(ellipse ${horizontalVignetteSize}% ${verticalVignetteSize}% at ${x}% ${y}%, black ${
          100 - intensity
        }%, transparent 100%)`,
      }}
      {...props}
    />
  );
}
