import { PropsWithChildren } from "react";

type BoxProps = {
  className?: string;
};

export function Box({ children, className }: PropsWithChildren<BoxProps>) {
  return <div className={className}>{children}</div>;
}
