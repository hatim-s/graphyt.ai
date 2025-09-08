"use client";

import * as React from "react";
import { LaptopMinimal, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { useEventCallback } from "@/hooks/use-event-callback";

const THEMES = ["light", "dark", "system"];

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = useEventCallback(() => {
    const nextTheme =
      THEMES[(THEMES.indexOf(theme || "light") + 1) % THEMES.length];
    setTheme(nextTheme);
  });

  return (
    <Button
      className="rounded-full"
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
    >
      {theme === "light" && <Sun className="size-4" />}
      {theme === "dark" && <Moon className="size-4" />}
      {theme === "system" && <LaptopMinimal className="size-4" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
