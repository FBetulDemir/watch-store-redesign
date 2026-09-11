import type { HTMLAttributes, ReactNode } from "react";

import { cx } from "./utilities";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  spacing?: "sm" | "md" | "lg";
  surface?: "paper" | "white" | "dark" | "transparent";
}

export function Section({
  children,
  className,
  spacing = "lg",
  surface = "transparent",
  ...props
}: SectionProps) {
  return (
    <section
      {...props}
      className={cx("wc-section", className)}
      data-spacing={spacing}
      data-surface={surface}
    >
      {children}
    </section>
  );
}

