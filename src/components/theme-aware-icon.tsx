import Image from "next/image";
import { cn } from "@/lib/utils";

type ThemeAwareIconProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
};

/** Inverts white-stroke SVG/PNG icons for light surfaces in light mode. */
export function ThemeAwareIcon({
  src,
  alt,
  width = 28,
  height = 28,
  className,
}: ThemeAwareIconProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn("theme-aware-icon shrink-0", className)}
    />
  );
}
