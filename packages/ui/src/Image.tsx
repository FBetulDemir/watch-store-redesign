import type { CSSProperties, ImgHTMLAttributes } from "react";

import { cx } from "./utilities";

export interface ImageProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, "alt"> {
  alt: string;
  aspectRatio?: CSSProperties["aspectRatio"];
  fit?: "cover" | "contain";
}

export function Image({
  alt,
  aspectRatio,
  className,
  decoding = "async",
  fit = "cover",
  loading = "lazy",
  style,
  ...props
}: ImageProps) {
  return (
    <img
      {...props}
      alt={alt}
      className={cx("wc-image", className)}
      decoding={decoding}
      loading={loading}
      style={{ aspectRatio, objectFit: fit, ...style }}
    />
  );
}

