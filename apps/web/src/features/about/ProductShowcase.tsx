import { Container, Heading, Section, Text } from "@watch-company/ui";

import teamImage from "../../assets/showcase-team.png";
import watchmakerImage from "../../assets/showcase-watchmaker.png";
import {
  ShowcaseCard,
  type ShowcaseCardProps,
} from "../../components/ShowcaseCard";
import "./ProductShowcase.css";

const showcases: readonly ShowcaseCardProps[] = [
  {
    cta: { href: "#contact", label: "Meet our team" },
    description:
      "Engineers, designers, data specialists and watchmakers bring different perspectives to one shared ambition: creating smarter and more meaningful experiences.",
    eyebrow: "Our people",
    id: "jobs",
    image: {
      alt: "A product team reviewing watch prototypes around a studio table",
      position: "center",
      src: teamImage,
    },
    title: "Different expertise. A shared purpose.",
  },
  {
    cta: { href: "#brands", label: "Explore our approach" },
    description:
      "Deep product insight, careful engineering and human-centered design come together to create connected watch solutions that feel intuitive and enduring.",
    eyebrow: "Innovation in practice",
    id: "brands",
    image: {
      alt: "A watchmaker assembling a mechanical movement with precision tweezers",
      position: "center",
      src: watchmakerImage,
    },
    title: "From insight to impact.",
  },
];

export function ProductShowcase() {
  return (
    <Section className="product-showcase" spacing="lg">
      <Container>
        <header className="product-showcase__heading">
          <Text className="product-showcase__eyebrow" size="sm">
            Ideas in motion
          </Text>
          <Heading as="h2" className="product-showcase__title" size="lg">
            Where people, craft and technology meet.
          </Heading>
        </header>

        <div className="product-showcase__grid">
          {showcases.map((showcase) => (
            <ShowcaseCard key={showcase.title} {...showcase} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
