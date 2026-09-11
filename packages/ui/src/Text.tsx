import type { HTMLAttributes, ReactNode } from "react";

import { cx } from "./utilities";

type TextElement = "p" | "span" | "div";

export interface TextProps extends HTMLAttributes<HTMLElement> {
  as?: TextElement;
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  tone?: "default" | "muted" | "inverse";
}

export function Text({
  as: Component = "p",
  children,
  className,
  size = "md",
  tone = "default",
  ...props
}: TextProps) {
  return (
    <Component
      {...props}
      className={cx("wc-text", className)}
      data-size={size}
      data-tone={tone}
    >
      {children}
    </Component>
  );
}

