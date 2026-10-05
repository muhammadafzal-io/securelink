import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  /** Rendered height in px. Width follows the chosen variant's aspect ratio. */
  height?: number;
  /**
   * "full" shows the complete lockup (icon + wordmark + tagline), for places
   * with room for the tagline to stay legible, e.g. the footer.
   * "compact" drops the tagline so the wordmark stays readable at small
   * sizes, e.g. the navbar.
   */
  variant?: "full" | "compact";
  /**
   * "auto" swaps to a white-lettered version in dark mode. "light" always
   * uses the original navy lettering, for use on white backgrounds.
   */
  tone?: "auto" | "light";
};

// Intrinsic sizes of the cropped logo artwork.
const SIZES = {
  full: { width: 1159, height: 323 },
  compact: { width: 1159, height: 271 },
} as const;

const ALT = "SecureLink: Integrating Technology with Security";

export function BrandLogo({
  className,
  height = 38,
  variant = "compact",
  tone = "auto",
}: BrandLogoProps) {
  const { width: w, height: h } = SIZES[variant];
  const width = Math.round((height * w) / h);
  const src = (t: "light" | "dark") => `/assets/brand/securelink-${variant}-${t}.png`;

  return (
    <span
      className={cn("brand-logo inline-flex items-center", className)}
      style={{ width, height }}
    >
      <Image
        src={src("light")}
        alt={ALT}
        width={width}
        height={height}
        priority
        className={cn("h-full w-full object-contain", tone === "auto" && "dark:hidden")}
      />
      {tone === "auto" && (
        <Image
          src={src("dark")}
          alt={ALT}
          width={width}
          height={height}
          className="hidden h-full w-full object-contain dark:block"
        />
      )}
    </span>
  );
}
