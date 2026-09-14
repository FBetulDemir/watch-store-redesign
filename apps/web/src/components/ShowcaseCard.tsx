import { Heading, Image, Link, Text } from "@watch-company/ui";

import "./ShowcaseCard.css";

export interface ShowcaseCardProps {
  cta: {
    href: string;
    label: string;
  };
  description: string;
  eyebrow: string;
  id?: string;
  image: {
    alt: string;
    position?: string;
    src: string;
  };
  title: string;
}

export function ShowcaseCard({
  cta,
  description,
  eyebrow,
  id,
  image,
  title,
}: ShowcaseCardProps) {
  return (
    <article className="showcase-card" id={id}>
      <figure className="showcase-card__media">
        <Image
          alt={image.alt}
          className="showcase-card__image"
          src={image.src}
          style={{ objectPosition: image.position }}
        />
      </figure>
      <div className="showcase-card__content">
        <Text className="showcase-card__eyebrow" size="sm">
          {eyebrow}
        </Text>
        <Heading as="h3" className="showcase-card__title" size="md">
          {title}
        </Heading>
        <Text className="showcase-card__description" size="md" tone="muted">
          {description}
        </Text>
        <Link
          className="showcase-card__link"
          href={cta.href}
          showArrow
          variant="button"
        >
          {cta.label}
        </Link>
      </div>
    </article>
  );
}

