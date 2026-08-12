import { socials } from "../../data/socials.js";
import Container from "../common/Container.jsx";

/**
 * Footer reuses the same socials.js data source as the Contact
 * section so links never drift out of sync between the two.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted">
          © {year} {/* TODO: your name */}Your Name. All rights reserved.
        </p>

        <div className="flex gap-5">
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-secondary hover:text-primary transition-colors"
            >
              {social.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
