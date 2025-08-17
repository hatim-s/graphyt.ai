"use client";

import withClientOnlyRender from "@/hoc/withClientOnlyRender";
import BaseMarkdownPreview from "@uiw/react-markdown-preview";
import { useTheme } from "next-themes";

export const MarkdownPreview = withClientOnlyRender(function MarkdownPreview({
  markdown,
}: {
  markdown: string;
}) {
  const { resolvedTheme: theme } = useTheme();

  return (
    <BaseMarkdownPreview
      className="px-8 py-4 h-full overflow-auto"
      source={markdown}
      wrapperElement={{
        "data-color-mode": theme === "dark" ? "dark" : "light",
      }}
    />
  );
});
