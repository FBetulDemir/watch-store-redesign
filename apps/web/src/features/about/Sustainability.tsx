import { Link, Text } from "@watch-company/ui";

import sustainabilityImage from "../../assets/sustainability-coast.png";
import { ContentSplit } from "../../components/ContentSplit";
import "./Sustainability.css";

export function Sustainability() {
  return (
    <div className="sustainability">
      <ContentSplit
        eyebrow="Sustainability"
        id="sustainability"
        image={{
          alt: "Healthy Nordic pine forest beside a calm rocky coastline",
          label: "Better people. A brighter tomorrow",
          src: sustainabilityImage,
        }}
        imagePosition="right"
        title="A more responsible tomorrow."
      >
        <Text size="md" tone="muted">
          We are committed to creating long-term value for our people, our
          customers and the planet. Through smarter products, responsible
          sourcing and a focus on durability, we aim to reduce our environmental
          impact and inspire more sustainable choices.
        </Text>
        <Link
          className="sustainability__link"
          href="#contact"
          showArrow
          variant="button"
        >
          Our approach
        </Link>
      </ContentSplit>
    </div>
  );
}

