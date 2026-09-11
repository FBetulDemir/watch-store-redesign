import { useEffect, useId, useState } from "react";

import { BrandMark } from "./BrandMark";
import { Container } from "./Container";

export interface NavigationItem {
  href: string;
  isCurrent?: boolean;
  label: string;
}

export interface SiteHeaderProps {
  brandDescriptor?: string;
  brandName: string;
  navigation: readonly NavigationItem[];
  tagline?: string;
}

export function SiteHeader({
  brandDescriptor,
  brandName,
  navigation,
  tagline,
}: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigationId = useId();

  useEffect(() => {
    if (!isMenuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  return (
    <header className="wc-site-header">
      <a className="wc-skip-link" href="#main-content">
        Skip to content
      </a>
      <Container className="wc-site-header__inner">
        <a className="wc-site-header__brand" href="/" aria-label={`${brandName} home`}>
          <BrandMark descriptor={brandDescriptor} name={brandName} />
        </a>
        <nav aria-label="Primary" className="wc-site-header__desktop-nav">
          <Navigation items={navigation} />
        </nav>
        {tagline && <p className="wc-site-header__tagline">{tagline}</p>}
        <button
          aria-controls={navigationId}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          className="wc-site-header__menu-button"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          type="button"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </Container>
      <nav
        aria-label="Mobile primary"
        className="wc-site-header__mobile-nav"
        data-open={isMenuOpen || undefined}
        id={navigationId}
      >
        <Navigation items={navigation} onNavigate={() => setIsMenuOpen(false)} />
      </nav>
    </header>
  );
}

interface NavigationProps {
  items: readonly NavigationItem[];
  onNavigate?: () => void;
}

function Navigation({ items, onNavigate }: NavigationProps) {
  return (
    <ul className="wc-navigation" role="list">
      {items.map((item) => (
        <li key={item.href}>
          <a
            aria-current={item.isCurrent ? "page" : undefined}
            href={item.href}
            onClick={onNavigate}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
