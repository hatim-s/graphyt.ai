"use client";

import { useState } from "react";
import { CodeEditor } from "../components/code-editor";
import {
  NodeEditorProvider,
  useNoteEditorContext,
} from "@/contexts/NodeEditorContext";
import { Box } from "@/components/ui/box";
import { MarkdownPreview } from "@/components/markdown-preview";
import { Button } from "@/components/ui/button";
import { Plus, Loader2 } from "lucide-react";
import { createTemplate } from "@/actions/ai/createTemplate";

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
    <div className="border rounded-lg overflow-auto flex-1 font-mono">
      <MarkdownPreview markdown={markdown} />
    </div>
  );
}

export function NodeEditor() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [streamedMarkdown, setStreamedMarkdown] = useState<string | undefined>(
    undefined
  );

  const handleCreateTemplate = async () => {
    setIsGenerating(true);
    setStreamedMarkdown(""); // Clear and start fresh

    try {
      // You can customize this prompt or make it dynamic
      const userPrompt =
        "Create a daily journal template with sections for gratitude, goals, and reflections";

      const stream = await createTemplate(userPrompt);

      // Process the stream
      let accumulatedContent = "";

      for await (const chunk of stream) {
        const content = chunk.choices[0]?.delta?.content || "";
        accumulatedContent += content;

        // Update the markdown in real-time
        setStreamedMarkdown(accumulatedContent);
      }
    } catch (error) {
      console.error("Error generating template:", error);
    } finally {
      setIsGenerating(false);
      // Reset streamedMarkdown after generation is complete
      setTimeout(() => setStreamedMarkdown(undefined), 100);
    }
  };

  return (
    <NodeEditorProvider externalMarkdown={streamedMarkdown}>
      <Button
        className="absolute rounded-full top-1 right-12"
        size="icon"
        variant="ghost"
        onClick={handleCreateTemplate}
        disabled={isGenerating}
      >
        {isGenerating ? <Loader2 className="h-4 w-4 animate-spin" /> : <Plus />}
      </Button>
      <Box className="flex flex-row gap-4 p-4 size-full">
        <NoteMarkdownEditor />
        <NoteMarkdownViewer />
      </Box>
    </NodeEditorProvider>
  );
}
