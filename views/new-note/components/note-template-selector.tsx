import { useCallback } from "react";
import { StepComponentProps } from "../types";
import { CardRadio } from "@/components/card-radio";
import { useGetBookTemplates, useGetJournalTemplates } from "@/data/templates";

export function NoteTemplateSelector({
  formData,
  setFormData,
}: StepComponentProps) {
  const { type } = formData;

  const BookTemplates = useGetBookTemplates();
  const JournalTemplates = useGetJournalTemplates();

  const templates = type === "journal" ? JournalTemplates : BookTemplates;

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
