import { cx } from "./utilities";

export interface BrandMarkProps {
  className?: string;
  descriptor?: string;
  inverse?: boolean;
  name: string;
}

export function BrandMark({
  className,
  descriptor,
  inverse = false,
  name,
}: BrandMarkProps) {
  return (
    <span
      aria-label={descriptor ? `${name} ${descriptor}` : name}
      className={cx("wc-brand-mark", className)}
      data-inverse={inverse || undefined}
      role="img"
    >
      <span className="wc-brand-mark__name">{name}</span>
      {descriptor && (
        <span aria-hidden="true" className="wc-brand-mark__descriptor">
          {descriptor}
        </span>
      )}
    </span>
  );
}
