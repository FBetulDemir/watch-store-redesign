import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cx } from "./utilities";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  showArrow?: boolean;
  variant?: "default" | "button" | "subtle";
}

export function Link({
  children,
  className,
  showArrow = false,
  variant = "default",
  ...props
}: LinkProps) {
  return (
    <a {...props} className={cx("wc-link", className)} data-variant={variant}>
      <span>{children}</span>
      {showArrow && (
        <span aria-hidden="true" className="wc-link__arrow">
          →
        </span>
      )}
    </a>
  );
}

