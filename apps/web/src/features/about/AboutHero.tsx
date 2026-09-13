import { Heading, Image, Link, Text } from "@watch-company/ui";

import heroWatch from "../../assets/about-hero-watch.png";
import "./AboutHero.css";

export function AboutHero() {
  return (
    <section
      aria-labelledby="about-hero-title"
      className="about-hero"
      id="about"
    >
      <div className="about-hero__content">
        <Text className="about-hero__eyebrow" size="sm">
          About us
        </Text>
        <Heading
          as="h1"
          className="about-hero__title"
          id="about-hero-title"
          size="lg"
        >
          More than time. A connected tomorrow.
        </Heading>
        <Text className="about-hero__description" size="lg" tone="muted">
          At Festina Group Technology, we combine a proud watchmaking heritage
          with modern technology and human insight to create connected solutions
          that enrich people&apos;s lives.
        </Text>
        <Link
          className="about-hero__link"
          href="#story"
          showArrow
          variant="button"
        >
          Our story
        </Link>
      </div>

      <figure className="about-hero__media">
        <Image
          alt="Brushed steel case back of a precision wristwatch"
          className="about-hero__image"
          fetchPriority="high"
          loading="eager"
          src={heroWatch}
        />
      </figure>
    </section>
  );
}

