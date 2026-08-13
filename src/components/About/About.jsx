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
        {/* Card Container for About Content */}
        <div className="mt-8 p-8 md:p-10 bg-white text-gray-900 rounded-lg shadow-lg aspect-square max-w-lg flex flex-col justify-center">
          <div className="space-y-6 text-gray-800 text-lg md:text-xl leading-relaxed font-medium">
            <p>
              I am a Machine Learning Engineer dedicated to building end-to-end data pipelines, predictive models, and scalable AI solutions.
            </p>
            <p>
              My expertise spans modern ML framework architectures, statistical analysis, and full-stack software development to turn complex data into actionable insights.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
