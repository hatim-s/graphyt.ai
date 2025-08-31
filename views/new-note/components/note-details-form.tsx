import { useCallback } from "react";
import { StepComponentProps } from "../types";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Typography } from "@/components/ui/typography";
import { Box } from "@/components/ui/box";
import { Stack } from "@/components/ui/stack";

export function NoteDetailsForm({ formData, setFormData }: StepComponentProps) {
  const { title, link, type } = formData;
  const shouldRenderLink = type === "book";

  const onChangeTitle = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({
        ...prev,
        title: event.target.value,
      }));
    },
    [setFormData]
  );

  const onChangeLink = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({
        ...prev,
        link: event.target.value,
      }));
    },
    [setFormData]
  );

  return (
    <Stack className="space-y-4">
      <Label
        className="flex flex-col items-start overflow-visible"
        htmlFor="title"
      >
        <Box>
          <Typography className="leading-none text-sm" variant="p">
            Title
          </Typography>
          <Typography className="text-xs" variant="muted">
            The title of your note.
          </Typography>
        </Box>
        <Input
          name="title"
          id="title"
          onChange={onChangeTitle}
          value={title ?? ""}
        />
      </Label>
      {shouldRenderLink && (
        <Label className="flex flex-col items-start" htmlFor="link">
          <Box>
            <Typography className="leading-none" variant="p">
              Link
            </Typography>
            <Typography className="text-xs" variant="muted">
              The link to your note.
            </Typography>
          </Box>
          <Input
            name="link"
            id="link"
            onChange={onChangeLink}
            value={link ?? ""}
          />
        </Label>
        // todo: add dropdown to pick tags
      )}
    </Stack>
  );
}
