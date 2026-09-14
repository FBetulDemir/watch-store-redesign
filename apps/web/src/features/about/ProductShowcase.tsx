import { Link, Text } from "@watch-company/ui";

import teamImage from "../../assets/showcase-team.png";
import watchmakerImage from "../../assets/showcase-watchmaker.png";
import { ContentSplit } from "../../components/ContentSplit";
import "./ProductShowcase.css";

export function ProductShowcase() {
  return (
    <div className="product-showcase">
      <div className="product-showcase__people">
        <ContentSplit
          eyebrow="Our people"
          id="jobs"
          image={{
            alt: "A product team reviewing watch prototypes around a studio table",
            label: "People ideas impact",
            loading: "eager",
            src: teamImage,
          }}
          imagePosition="right"
          title="Different expertise. A shared purpose."
        >
          <Text size="md" tone="muted">
            We are a diverse team of engineers, designers, data specialists and
            watch enthusiasts. Our people bring different perspectives and
            skills, but we are united by a shared ambition to create smarter,
            more connected experiences that make a difference.
          </Text>
          <Link href="#careers" showArrow variant="button">
            Join our team
          </Link>
        </ContentSplit>
      </div>

      <div className="product-showcase__innovation">
        <ContentSplit
          eyebrow="Innovation in practice"
          id="brands"
          image={{
            alt: "A watchmaker assembling a mechanical movement with precision tweezers",
            loading: "eager",
            src: watchmakerImage,
          }}
          imagePosition="left"
          title="From insight to impact."
        >
          <Text size="md" tone="muted">
            Our work is driven by a deep understanding of people&apos;s lives. We
            use technology, data and user insight to develop connected watch
            solutions that are intuitive, reliable and inspiring.
          </Text>
          <Text size="md" tone="muted">
            By combining engineering and design, we create products and services
            that help people live healthier, more connected and more balanced
            lives.
          </Text>
          <Link href="#brands" showArrow variant="button">
            Our brands
          </Link>
        </ContentSplit>
      </div>
    </div>
  );
}
