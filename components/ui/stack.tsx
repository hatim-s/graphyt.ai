import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { PropsWithChildren } from "react";

type StackProps = {
  direction?: "row" | "column";
  className?: string;
};

const stackVariants = cva("flex", {
  variants: {
    direction: {
      row: "flex-row",
      column: "flex-col",
    },
  },
  defaultVariants: {
    direction: "column",
  },
});

export function Stack({
  children,
  className,
  direction = "column",
}: PropsWithChildren<StackProps>) {
  return (
    <div className={cn(stackVariants({ direction }), className)}>
      {children}
    </div>
  );
}
