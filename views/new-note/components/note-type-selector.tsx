import { CardRadio } from "@/components/card-radio";
import { useCallback } from "react";
import { StepComponentProps } from "../types";
import { Typography } from "@/components/ui/typography";
import { Stack } from "@/components/ui/stack";
import { Box } from "@/components/ui/box";

const newNoteTypeSelectorItems = [
  {
    title: "Journal",
    description: "A new journal entry.",
    id: "journal",
  },
  {
    title: "Note",
    description: "A new note for a book you're reading.",
    id: "book",
  },
];

export function NoteTypeSelector({
  formData,
  setFormData,
}: StepComponentProps) {
  const onChange = useCallback((value: string) => {
    setFormData((prev) => ({
      ...prev,
      type: value as "book" | "journal",
    }));
  }, []);
  return (
    <Stack direction="column" className="gap-y-4">
      <Box>
        <Typography className="leading-none text-sm font-semibold" variant="p">
          What do you want to create?
        </Typography>
      </Box>
      <CardRadio
        items={newNoteTypeSelectorItems}
        onChange={onChange}
        value={formData.type}
      />
    </Stack>
  );
}
