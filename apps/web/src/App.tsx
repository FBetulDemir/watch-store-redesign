import {
  SiteFooter,
  SiteHeader,
  type NavigationItem,
  type SocialLink,
} from "@watch-company/ui";

import { AboutHero } from "./features/about/AboutHero";
import { CompanyStory } from "./features/about/CompanyStory";
import { ValuesGrid } from "./features/about/ValuesGrid";

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
        <AboutHero />
        <CompanyStory />
        <ValuesGrid />
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
