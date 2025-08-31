"use client";

import { useCallback, useState } from "react";
import { ArrowRightIcon, PlusIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { NoteTypeSelector } from "./components/note-type-selector";
import { NewNoteFormData } from "./types";
import { NoteDetailsForm } from "./components/note-details-form";
import { NoteTemplateSelector } from "./components/note-template-selector";
import { Stack } from "@/components/ui/stack";

const StepContents = [
  {
    title: "What do you want to create?",
    description:
      "You can create a new note for a book you're reading, or a new journal entry.",
    Component: NoteTypeSelector,
  },
  {
    title: "Add basic note details",
    description:
      "Add basic note details like title for your note and link to the original source material.",
    Component: NoteDetailsForm,
  },
  {
    title: "Select a template",
    description:
      "Select a template to use for your note. You can choose from a variety of templates, or create your own.",
    Component: NoteTemplateSelector,
  },
];

export function NewNote() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState<Partial<NewNoteFormData>>(
    () => ({})
  );

  const totalSteps = StepContents.length;

  const handleContinue = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const StepComponent = StepContents[step - 1].Component;

  let isNextDisabled = false;
  if (step === 2) {
    isNextDisabled = !formData.title;
  }

  const handleCreateNote = useCallback(() => {
    console.log(formData);
  }, [formData]);

  return (
    <Dialog
      onOpenChange={(open) => {
        if (open) {
          // reset the state on every open
          setStep(1);
          setFormData({});
        }
      }}
    >
      <DialogTrigger asChild>
        <Button className="rounded-full" variant="ghost" size="icon">
          <PlusIcon size={16} />
        </Button>
      </DialogTrigger>
      <DialogContent className="gap-0 [&>button:last-child]:text-white sm:max-w-[600px]">
        <Stack direction="column" className="gap-y-6">
          <DialogHeader>
            <DialogTitle>Create a new note</DialogTitle>
            <DialogDescription>
              Input your note details and select a template to get started.
            </DialogDescription>
          </DialogHeader>
          <div className="h-[300px]">
            <StepComponent formData={formData} setFormData={setFormData} />
          </div>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex justify-center space-x-1.5 max-sm:order-1">
              {[...Array(totalSteps)].map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "bg-primary size-1.5 rounded-full",
                    index + 1 === step ? "" : "opacity-20"
                  )}
                />
              ))}
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="ghost">
                  Cancel
                </Button>
              </DialogClose>
              {step < totalSteps ? (
                <Button
                  className="group"
                  type="button"
                  onClick={handleContinue}
                  disabled={isNextDisabled}
                >
                  Next
                  <ArrowRightIcon
                    className="-me-1 opacity-60 transition-transform group-hover:translate-x-0.5"
                    size={16}
                    aria-hidden="true"
                  />
                </Button>
              ) : (
                // <DialogClose asChild>
                <Button type="button" onClick={handleCreateNote}>
                  Create Note
                </Button>
                // </DialogClose>
              )}
            </DialogFooter>
          </div>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
