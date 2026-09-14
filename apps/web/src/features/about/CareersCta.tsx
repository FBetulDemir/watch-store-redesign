import { Container, Heading, Image, Link, Text } from "@watch-company/ui";

import careersWatch from "../../assets/careers-watch.png";
import "./CareersCta.css";

export function CareersCta() {
  return (
    <section aria-labelledby="careers-title" className="careers-cta" id="careers">
      <Image
        alt="Black connected watch dial with polished steel details"
        className="careers-cta__image"
        src={careersWatch}
      />
      <div aria-hidden="true" className="careers-cta__overlay" />
      <Container className="careers-cta__content">
        <Text className="careers-cta__eyebrow" size="sm" tone="inverse">
          Let&apos;s build what&apos;s next
        </Text>
        <Heading as="h2" className="careers-cta__title" id="careers-title" size="lg">
          Be part of a brighter tomorrow.
        </Heading>
        <Link
          className="careers-cta__link"
          href="#jobs"
          showArrow
          variant="button"
        >
          See open positions
        </Link>
      </Container>
    </section>
  );
}

