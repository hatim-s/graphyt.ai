import { Dispatch, SetStateAction, useCallback } from "react";
import { NewNoteFormData, StepComponentProps } from "../types";
import { CardRadio } from "@/components/card-radio";

type Template = {
  id: string;
  title: string;
  description: string;
};

const BookTemplates: Template[] = [
  {
    id: "btemp-1",
    title: "Book Template 1",
    description: "Description 1",
  },
  {
    id: "btemp-2",
    title: "Book Template 2",
    description: "Description 2 Description 2 Description 2",
  },
  {
    id: "btemp-3",
    title: "Book Template 3",
    description: "Description 3 Description 3",
  },
  {
    id: "btemp-4",
    title: "Book Template 4",
    description: "Description 4 Description 4 Description 4",
  },
];

const JournalTemplates: Template[] = [
  {
    id: "jtemp-1",
    title: "Journal Template 1",
    description: "Description 1 Description 1 Description 1",
  },
  {
    id: "jtemp-2",
    title: "Journal Template 2",
    description: "Description 2",
  },
  {
    id: "jtemp-3",
    title: "Journal Template 3",
    description:
      "Description 3 Description 3 Description 3 Description 3 Description 3 Description 3",
  },
  {
    id: "jtemp-4",
    title: "Journal Template 4",
    description: "Description 4",
  },
  {
    id: "jtemp-5",
    title: "Journal Template 5",
    description: "Description 5 Description 5 Description 5",
  },
];

export function NoteTemplateSelector({
  formData,
  setFormData,
}: StepComponentProps) {
  const { type } = formData;
  const templates = type === "book" ? BookTemplates : JournalTemplates;

  const onSelectItem = useCallback(
    (templateId: string) => {
      setFormData((prev) => ({
        ...prev,
        template: templateId,
      }));
    },
    [setFormData]
  );

  return (
    <CardRadio
      items={templates}
      onChange={onSelectItem}
      className="grid grid-cols-2"
    />
  );
}
