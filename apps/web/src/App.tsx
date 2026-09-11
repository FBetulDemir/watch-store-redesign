import {
  Container,
  Heading,
  SiteFooter,
  SiteHeader,
  Text,
  type NavigationItem,
  type SocialLink,
} from "@watch-company/ui";

const navigation: readonly NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "About us", href: "#about", isCurrent: true },
  { label: "Our brands", href: "#brands" },
  { label: "Jobs", href: "#jobs" },
  { label: "Contact us", href: "#contact" },
];

const socialLinks: readonly SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: "in" },
  { label: "Instagram", href: "https://www.instagram.com", icon: "ig" },
  { label: "YouTube", href: "https://www.youtube.com", icon: "yt" },
];

export function App() {
  return (
    <div className="site-shell">
      <SiteHeader
        brandDescriptor="Technology"
        brandName="Festina Group"
        navigation={navigation}
        tagline="People. Technology. A brighter tomorrow."
      />

      <main id="main-content">
        <Container className="placeholder" size="wide">
          <Text className="eyebrow" size="sm">
            About us
          </Text>
          <Heading as="h1" size="display">
            More than time. A connected tomorrow.
          </Heading>
          <Text className="intro" size="lg" tone="muted">
            The global layout is ready. The editorial About page hero comes next.
          </Text>
        </Container>
      </main>

      <SiteFooter
        brandDescriptor="Technology"
        brandName="Festina Group"
        copyright="© 2026 Festina Group Technology. All rights reserved."
        navigation={navigation}
        socialLinks={socialLinks}
        tagline="People. Technology. A brighter tomorrow."
      />
    </div>
  );
}
