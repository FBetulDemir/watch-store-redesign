import type { ReactNode } from "react";

import { Heading, Image, Text } from "@watch-company/ui";

import "./ContentSplit.css";

export interface ContentSplitProps {
  children: ReactNode;
  eyebrow: string;
  id: string;
  image: {
    alt: string;
    label?: string;
    src: string;
  };
  imagePosition?: "left" | "right";
  title: string;
}

export function ContentSplit({
  children,
  eyebrow,
  id,
  image,
  imagePosition = "right",
  title,
}: ContentSplitProps) {
  const titleId = `${id}-title`;

  return (
    <section
      aria-labelledby={titleId}
      className="content-split"
      data-image-position={imagePosition}
      id={id}
    >
      <div className="content-split__content">
        <Text className="content-split__eyebrow" size="sm">
          {eyebrow}
        </Text>
        <Heading
          as="h2"
          className="content-split__title"
          id={titleId}
          size="md"
        >
          {title}
        </Heading>
        <div className="content-split__body">{children}</div>
      </div>

      <figure className="content-split__media">
        <Image
          alt={image.alt}
          className="content-split__image"
          src={image.src}
        />
        {image.label && (
          <figcaption className="content-split__image-label">
            {image.label}
          </figcaption>
        )}
      </figure>
    </section>
  );
}
