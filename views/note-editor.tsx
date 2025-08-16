"use client";

import { useState } from "react";
import { CodeEditor } from "../components/code-editor";
import {
  NodeEditorProvider,
  useNoteEditorContext,
} from "@/contexts/NodeEditorContext";
import { Box } from "@/components/ui/box";
import { MarkdownPreview } from "@/components/markdown-preview";

export function NoteMarkdownEditor() {
  const { markdown, setMarkdown } = useNoteEditorContext();

  const [height, setHeight] = useState(0);

  return (
    <div
      className="border rounded-lg overflow-hidden flex-1"
      ref={(ref) => {
        ref?.clientHeight && setHeight(ref.clientHeight);
      }}
    >
      <CodeEditor
        value={markdown}
        onChange={setMarkdown}
        height={`${height}px`}
      />
    </div>
  );
}

export function NoteMarkdownViewer() {
  const { markdown } = useNoteEditorContext();
  return (
    <div className="border rounded-lg overflow-auto flex-1">
      <MarkdownPreview markdown={markdown} />
    </div>
  );
}

export function NodeEditor() {
  return (
    <NodeEditorProvider>
      <Box className="flex flex-row gap-4 p-4 size-full">
        <NoteMarkdownEditor />
        <NoteMarkdownViewer />
      </Box>
    </NodeEditorProvider>
  );
}
