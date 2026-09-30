"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="size-9 shrink-0 rounded-full"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="outline"
      size="icon"
      className={cn(
        "size-9 shrink-0 rounded-full border-border bg-background/80 backdrop-blur-sm",
        "hover:bg-muted"
      )}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle color theme"
    >
      {isDark ? (
        <Sun className="size-4 text-foreground" />
      ) : (
        <Moon className="size-4 text-foreground" />
      )}
    </Button>
  );
}
