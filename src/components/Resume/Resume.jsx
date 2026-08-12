import Container from "../common/Container.jsx";
import Button from "../common/Button.jsx";

/**
 * Resume CTA. Download logic intentionally not implemented yet —
 * wire `href` to a real PDF path (e.g. /resume.pdf in /public) when
 * ready, or swap to an onClick handler if you need tracking/analytics.
 */
export default function Resume() {
  return (
    <section id="resume" className="py-24">
      <Container className="text-center">
        <h2 className="font-display text-2xl md:text-3xl text-primary">
          {/* TODO: CTA headline */}
        </h2>
        <p className="text-secondary mt-3 max-w-xl mx-auto">
          {/* TODO: supporting line */}
        </p>
        <div className="mt-8">
          <Button href="#" variant="primary">
            Download Resume
          </Button>
        </div>
      </Container>
    </section>
  );
}
