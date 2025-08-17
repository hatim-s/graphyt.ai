"use client";

import CodeMirror from "@uiw/react-codemirror";
import { markdown } from "@codemirror/lang-markdown";
import { githubLight, githubDark } from "@uiw/codemirror-theme-github";
import { EditorView } from "@codemirror/view";
import { useTheme } from "next-themes";

interface CodeEditorProps {
  value: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  height?: string;
  className?: string;
}

export function CodeEditor({
  value,
  onChange,
  placeholder = "Start typing markdown...",
  height = "100%",
  className,
}: CodeEditorProps) {
  const { resolvedTheme: theme } = useTheme();
  return (
    <div className={className}>
      <CodeMirror
        value={value}
        height={height}
        theme={theme === "dark" ? githubDark : githubLight}
        extensions={[
          markdown(),
          EditorView.theme({
            "&": {
              fontSize: "14px",
            },
            ".cm-scroller": {
              fontFamily: "var(--font-ibm-plex-mono)",
              fontWeight: "500",
            },
            ".cm-content": {
              padding: "16px",
            },
            ".cm-focused .cm-cursor": {
              borderLeftColor: "#fff",
            },
            ".cm-placeholder": {
              color: "#6b7280",
              fontStyle: "italic",
            },
            ".cm-gutter.cm-foldGutter  span": {
              opacity: "0 !important",
              pointerEvents: "none !important",
            },
          }),
          EditorView.lineWrapping,
        ]}
        onChange={(val) => onChange?.(val)}
        placeholder={placeholder}
        basicSetup={{
          lineNumbers: false,
          foldGutter: false,
          dropCursor: true,
          allowMultipleSelections: true,
          indentOnInput: true,
          bracketMatching: true,
          closeBrackets: true,
          autocompletion: true,
          rectangularSelection: true,
          highlightSelectionMatches: true,
          searchKeymap: true,
          tabSize: 2,
        }}
      />
    </div>
  );
}
