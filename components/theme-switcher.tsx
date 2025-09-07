"use client";

import * as React from "react";
import { LaptopMinimal, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEventCallback } from "@/hooks/use-event-callback";

const THEMES = ["light", "dark", "system"];

const THEME_VS_ICONS = {
  light: Sun,
  dark: Moon,
  system: LaptopMinimal,
};

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const ThemeIcon = THEME_VS_ICONS[theme as keyof typeof THEME_VS_ICONS];

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
      <ThemeIcon className="size-4" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
