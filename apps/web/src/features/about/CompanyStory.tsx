import { Text } from "@watch-company/ui";

import coastImage from "../../assets/company-story-coast.png";
import { ContentSplit } from "../../components/ContentSplit";
import "./CompanyStory.css";

export function CompanyStory() {
  return (
    <ContentSplit
      eyebrow="Our story"
      id="story"
      image={{
        alt: "Sunrise over a quiet Nordic archipelago with granite rocks and pine trees",
        label: "Tradition meets tomorrow",
        src: coastImage,
      }}
      imagePosition="left"
      title="A proud heritage. A forward-looking mindset."
    >
      <Text size="md" tone="muted">
        Festina Group has been part of the watch industry for over a century,
        building iconic brands and a deep understanding of what makes a watch
        meaningful. Today, through <strong>Festina Group Technology</strong>, we
        are taking the next step—combining this heritage with innovation,
        connectivity and data to shape the future of time.
      </Text>
      <Text size="md" tone="muted">
        We believe that watches are more than instruments. They are personal
        companions, connecting people to what matters most in their lives.
      </Text>
    </ContentSplit>
  );
}
