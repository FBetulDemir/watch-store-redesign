import { Container, FeatureCard, Section } from "@watch-company/ui";

import { ValueIcon, type ValueIconName } from "./ValueIcon";
import "./ValuesGrid.css";

interface ValueItem {
  description: string;
  icon: ValueIconName;
  title: string;
}

const values: readonly ValueItem[] = [
  {
    description:
      "To create more connected and meaningful tomorrows through people, technology and design.",
    icon: "people",
    title: "Our purpose",
  },
  {
    description:
      "To be a global leader in connected watch solutions, combining timeless design with modern technology.",
    icon: "target",
    title: "Our vision",
  },
  {
    description:
      "People first. Curiosity and innovation. Quality and integrity. A more sustainable future.",
    icon: "leaf",
    title: "Our values",
  },
];

export function ValuesGrid() {
  return (
    <Section
      aria-label="Purpose, vision and values"
      className="values-grid"
      spacing="sm"
      surface="paper"
    >
      <Container className="values-grid__inner">
        {values.map((value) => (
          <FeatureCard
            className="values-grid__card"
            icon={<ValueIcon name={value.icon} />}
            key={value.title}
            title={value.title}
          >
            {value.description}
          </FeatureCard>
        ))}
      </Container>
    </Section>
  );
}

