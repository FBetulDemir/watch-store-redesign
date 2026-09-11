import { BrandMark } from "./BrandMark";
import { Container } from "./Container";

export interface SocialLink {
  href: string;
  icon: string;
  label: string;
}

export interface SiteFooterProps {
  brandDescriptor?: string;
  brandName: string;
  copyright: string;
  navigation: ReadonlyArray<{ href: string; label: string }>;
  socialLinks?: readonly SocialLink[];
  tagline?: string;
}

export function SiteFooter({
  brandDescriptor,
  brandName,
  copyright,
  navigation,
  socialLinks = [],
  tagline,
}: SiteFooterProps) {
  return (
    <footer className="wc-site-footer">
      <Container className="wc-site-footer__inner">
        <div className="wc-site-footer__topline">
          <a className="wc-site-footer__brand" href="/" aria-label={`${brandName} home`}>
            <BrandMark descriptor={brandDescriptor} inverse name={brandName} />
          </a>
          <nav aria-label="Footer">
            <ul className="wc-site-footer__navigation" role="list">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="wc-site-footer__socials">
            {socialLinks.map((link) => (
              <a
                aria-label={link.label}
                href={link.href}
                key={link.label}
                rel="noreferrer"
                target="_blank"
              >
                <span aria-hidden="true">{link.icon}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="wc-site-footer__baseline">
          <small>{copyright}</small>
          {tagline && <small>{tagline}</small>}
        </div>
      </Container>
    </footer>
  );
}
