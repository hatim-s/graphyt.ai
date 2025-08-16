import { cn } from "@/lib/utils";
import React, { forwardRef, PropsWithChildren } from "react";

type BaseTypographyProps = {
  className?: string;
  children: React.ReactNode;
};

const TypographyH1 = forwardRef<HTMLHeadingElement, BaseTypographyProps>(
  function TypographyH1({ className, children }: BaseTypographyProps) {
    return (
      <h1
        className={cn(
          "scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance",
          className
        )}
      >
        {children}
      </h1>
    );
  }
);

const TypographyH2 = forwardRef<HTMLHeadingElement, BaseTypographyProps>(
  function TypographyH2({ className, children }: BaseTypographyProps) {
    return (
      <h2
        className={cn(
          "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
          className
        )}
      >
        {children}
      </h2>
    );
  }
);

const TypographyH3 = forwardRef<HTMLHeadingElement, BaseTypographyProps>(
  function TypographyH3({ className, children }: BaseTypographyProps) {
    return (
      <h3
        className={cn(
          "scroll-m-20 text-2xl font-semibold tracking-tight",
          className
        )}
      >
        {children}
      </h3>
    );
  }
);

const TypographyH4 = forwardRef<HTMLHeadingElement, BaseTypographyProps>(
  function TypographyH4({ className, children }: BaseTypographyProps) {
    return (
      <h4
        className={cn(
          "scroll-m-20 text-xl font-semibold tracking-tight",
          className
        )}
      >
        {children}
      </h4>
    );
  }
);

const TypographyP = forwardRef<HTMLParagraphElement, BaseTypographyProps>(
  function TypographyP({ className, children }: BaseTypographyProps) {
    return (
      <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>
        {children}
      </p>
    );
  }
);

const TypographyBlockquote = forwardRef<HTMLQuoteElement, BaseTypographyProps>(
  function TypographyBlockquote({ className, children }: BaseTypographyProps) {
    return (
      <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)}>
        {children}
      </blockquote>
    );
  }
);

const TypographyList = forwardRef<HTMLUListElement, BaseTypographyProps>(
  function TypographyList({ className, children }: BaseTypographyProps) {
    const childArr = React.Children.toArray(children);
    return (
      <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}>
        {childArr.map((child, index) => (
          <li key={index}>{child}</li>
        ))}
      </ul>
    );
  }
);

const TypographyInlineCode = forwardRef<HTMLElement, BaseTypographyProps>(
  function TypographyInlineCode({ className, children }: BaseTypographyProps) {
    return (
      <code
        className={cn(
          "bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
          className
        )}
      >
        {children}
      </code>
    );
  }
);

const TypographyLarge = forwardRef<HTMLDivElement, BaseTypographyProps>(
  function TypographyLarge({ className, children }: BaseTypographyProps) {
    return (
      <div className={cn("text-lg font-semibold", className)}>{children}</div>
    );
  }
);

const TypographySmall = forwardRef<HTMLElement, BaseTypographyProps>(
  function TypographySmall({ className, children }: BaseTypographyProps) {
    return (
      <small className={cn("text-sm leading-none font-medium", className)}>
        {children}
      </small>
    );
  }
);

const TypographyMuted = forwardRef<HTMLParagraphElement, BaseTypographyProps>(
  function TypographyMuted({ className, children }: BaseTypographyProps) {
    return (
      <p className={cn("text-muted-foreground text-sm", className)}>
        {children}
      </p>
    );
  }
);

type TypographyProps = {
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "p"
    | "blockquote"
    | "list"
    | "inline-code"
    | "large"
    | "small"
    | "muted";
  className?: string;
};

const typographyVariants = {
  h1: TypographyH1,
  h2: TypographyH2,
  h3: TypographyH3,
  h4: TypographyH4,
  p: TypographyP,
  blockquote: TypographyBlockquote,
  list: TypographyList,
  "inline-code": TypographyInlineCode,
  large: TypographyLarge,
  small: TypographySmall,
  muted: TypographyMuted,
};

const Typography = forwardRef<HTMLElement, PropsWithChildren<TypographyProps>>(
  function Typography({ variant, children, className }, ref) {
    const Component = typographyVariants[variant];

    return (
      // @ts-expect-error: TypeScript can't infer the correct ref type for polymorphic components here
      <Component className={className} ref={ref}>
        {children}
      </Component>
    );
  }
);

Typography.displayName = "Typography";

export { Typography };
