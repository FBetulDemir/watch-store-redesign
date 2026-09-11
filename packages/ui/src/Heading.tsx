import type { HTMLAttributes, ReactNode } from "react";

import { cx } from "./utilities";

type HeadingElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingElement;
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "display";
}

export function Heading({
  as: Component = "h2",
  children,
  className,
  size = "lg",
  ...props
}: HeadingProps) {
  return (
    <Component {...props} className={cx("wc-heading", className)} data-size={size}>
      {children}
    </Component>
  );
}

