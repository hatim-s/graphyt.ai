import { createContext, useContext, useMemo, useState, useEffect } from "react";

type NodeEditorContextType = {
  markdown: string;
  setMarkdown: (markdown: string) => void;
};

const NoteEditorContext = createContext<NodeEditorContextType>({
  markdown: "",
  setMarkdown: () => {},
});

export function useNoteEditorContext() {
  return useContext(NoteEditorContext);
}

const INITIAL_MARKDOWN = `# Welcome to the Markdown Editor

This is a **markdown** editor with syntax highlighting.

## Features

- Live syntax highlighting
- Line numbers
- Dark theme
- Code folding
- Search functionality

\`\`\`javascript
function hello() {
  console.log("Hello, World!");
}
\`\`\`

> This is a blockquote

1. First item
2. Second item
3. Third item
`;

export function NodeEditorProvider({
  children,
  initialMarkdown,
  externalMarkdown,
  onMarkdownChange,
}: {
  children: React.ReactNode;
  initialMarkdown?: string;
  externalMarkdown?: string;
  onMarkdownChange?: (markdown: string) => void;
}) {
  const [markdown, setMarkdown] = useState(initialMarkdown || INITIAL_MARKDOWN);

  // Update markdown when external markdown changes (for streaming)
  useEffect(() => {
    if (externalMarkdown !== undefined) {
      setMarkdown(externalMarkdown);
    }
  }, [externalMarkdown]);

  // Notify parent of markdown changes
  useEffect(() => {
    if (onMarkdownChange) {
      onMarkdownChange(markdown);
    }
  }, [markdown, onMarkdownChange]);

  const value = useMemo(
    () => ({ markdown, setMarkdown }),
    [markdown, setMarkdown]
  );

  return (
    <NoteEditorContext.Provider value={value}>
      {children}
    </NoteEditorContext.Provider>
  );
}
