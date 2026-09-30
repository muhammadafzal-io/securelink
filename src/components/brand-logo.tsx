import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  width?: number;
  height?: number;
};

export function BrandLogo({
  className,
  width = 127,
  height = 30,
}: BrandLogoProps) {
  return (
    <Image
      src="/assets/kalpay-logo.png"
      alt="KalTech"
      width={width}
      height={height}
      className={cn("brand-logo h-auto w-auto", className)}
      priority
    />
  );
}
