import { Dispatch, SetStateAction } from "react";

export type NewNoteFormData = {
  // todo: we need to fix these type options
  type: "journal" | "book";
  title: string;
  link?: string;
  // currently user should always have a template
  // todo: fix this when we have "start from scratch" option
  template: string;
};

export type StepComponentProps = {
  formData: Partial<NewNoteFormData>;
  setFormData: Dispatch<SetStateAction<Partial<NewNoteFormData>>>;
};
