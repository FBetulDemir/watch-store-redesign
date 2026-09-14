import type { HTMLAttributes, ReactNode } from "react";

import { Heading } from "./Heading";
import { Text } from "./Text";
import { cx } from "./utilities";

export interface FeatureCardProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  icon: ReactNode;
  title: string;
}

export function FeatureCard({
  children,
  className,
  icon,
  title,
  ...props
}: FeatureCardProps) {
  return (
    <article {...props} className={cx("wc-feature-card", className)}>
      <div aria-hidden="true" className="wc-feature-card__icon">
        {icon}
      </div>
      <Heading as="h3" className="wc-feature-card__title" size="sm">
        {title}
      </Heading>
      <Text className="wc-feature-card__content" size="md" tone="muted">
        {children}
      </Text>
    </article>
  );
}

