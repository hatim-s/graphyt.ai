import { createContext, useContext, useMemo, useState } from "react";

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
}: {
  children: React.ReactNode;
}) {
  const [markdown, setMarkdown] = useState(INITIAL_MARKDOWN);

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
