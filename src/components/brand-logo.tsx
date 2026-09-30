import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  /** Rendered height in px. Width follows the chosen variant's aspect ratio. */
  height?: number;
  /**
   * "full" shows the complete lockup (icon + wordmark + tagline) — use where
   * there's room for the tagline to stay legible, e.g. the footer.
   * "compact" crops to just the icon + wordmark via object-fit, so nothing
   * shrinks to illegible mush at small sizes, e.g. the navbar.
   */
  variant?: "full" | "compact";
};

export function BrandLogo({
  className,
  height = 44,
  variant = "compact",
}: BrandLogoProps) {
  // Source artwork is 400x200, transparent background. The icon + wordmark
  // occupy roughly the top 72.5% of that canvas; the tagline sits below.
  // Cropping via a taller container + object-fit: cover + object-position:
  // top keeps the source file untouched while hiding the tagline at
  // compact sizes.
  const aspect = variant === "full" ? 2 : 400 / 145;
  const width = Math.round(height * aspect);

  return (
    <span
      className={cn("brand-logo inline-flex items-center overflow-hidden", className)}
      style={{ width, height }}
    >
      <Image
        src="/assets/brand/secure-link-logo.svg"
        alt="Secure Link — Integrating Technology with Security"
        width={400}
        height={200}
        priority
        className={cn(
          "h-full w-full",
          variant === "full" ? "object-contain" : "object-cover object-top"
        )}
      />
    </span>
  );
}
