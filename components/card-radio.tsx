import { useEffect } from "react";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

type CardRadioProps = {
  items: {
    title: string;
    description?: string;
    id?: string;
  }[];
  onChange?: (value: string) => void;
  value?: string;
  className?: string;
};

export function CardRadio({
  items,
  onChange,
  value,
  className,
}: CardRadioProps) {
  // only execute on mount if no value is provided
  useEffect(() => {
    if (!value) {
      onChange?.(items[0].id ?? `option-0`);
    }
  }, [value, items, onChange]);

  return (
    <RadioGroup
      className={className}
      defaultValue={items[0].id ?? `option-0`}
      value={value}
      onValueChange={onChange}
    >
      {items.map((item, index) => (
        <Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-primary has-[[aria-checked=true]]:bg-primary/30">
          <RadioGroupItem
            id={item.id ?? `option-${index}`}
            value={item.id ?? `option-${index}`}
            className="mt-0.5 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-white"
          />
          <div className="grid gap-1.5 font-normal">
            <p className="text-sm leading-none font-medium">{item.title}</p>
            <p className="text-muted-foreground text-sm line-clamp-2">
              {item.description}
            </p>
          </div>
        </Label>
      ))}
    </RadioGroup>
  );
}
