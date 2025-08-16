"use client";

import BaseMarkdownPreview from "@uiw/react-markdown-preview";
import { useTheme } from "next-themes";

export function MarkdownPreview({ markdown }: { markdown: string }) {
  const { theme } = useTheme();

  return (
    <BaseMarkdownPreview
      className="px-8 py-4 h-full overflow-auto"
      source={markdown}
      wrapperElement={{
        "data-color-mode": theme === "dark" ? "dark" : "light",
      }}
    />
  );
}
