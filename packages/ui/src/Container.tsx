import type { HTMLAttributes, ReactNode } from "react";

import { cx } from "./utilities";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: "content" | "wide" | "full";
}

export function Container({
  children,
  className,
  size = "wide",
  ...props
}: ContainerProps) {
  return (
    <div {...props} className={cx("wc-container", className)} data-size={size}>
      {children}
    </div>
  );
}

