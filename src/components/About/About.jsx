import Container from "../common/Container.jsx";
import SectionHeading from "../common/SectionHeading.jsx";

/**
 * About section. Single block of narrative copy — no data file
 * needed since there is nothing to map over (unlike Skills/Experience).
 */
export default function About() {
  return (
    <section id="about" className="py-24">
      <Container>
        <SectionHeading eyebrow="About" title="" />
        {/* TODO: bio content — 2-3 paragraphs */}
        <div className="prose prose-invert max-w-2xl text-secondary" />
      </Container>
    </section>
  );
}
