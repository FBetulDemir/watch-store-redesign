import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cx } from "./utilities";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isLoading?: boolean;
  size?: "sm" | "md";
  variant?: "primary" | "outline" | "text";
}

export function Button({
  children,
  className,
  disabled,
  isLoading = false,
  size = "md",
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      aria-busy={isLoading || undefined}
      className={cx("wc-button", className)}
      data-size={size}
      data-variant={variant}
      disabled={disabled || isLoading}
      type={type}
    >
      {isLoading && <span aria-hidden="true" className="wc-button__spinner" />}
      <span>{children}</span>
    </button>
  );
}

