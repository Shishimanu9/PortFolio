import { experience } from "../../data/experience.js";
import Container from "../common/Container.jsx";
import SectionHeading from "../common/SectionHeading.jsx";
import TimelineItem from "./TimelineItem.jsx";

/** Maps experience.js -> TimelineItem inside an ordered <ul>. */
export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <Container>
        <SectionHeading eyebrow="Experience" title="Where I have worked" align="right" />

        {experience.length > 0 ? (
          <ul>
            {experience.map((entry) => (
              <TimelineItem key={entry.id} entry={entry} />
            ))}
          </ul>
        ) : (
          <p className="text-secondary text-base md:text-lg text-right">
            Add entries to src/data/experience.js to populate this timeline.
          </p>
        )}
        <div className="mt-8 p-8 md:p-10 bg-white text-gray-900 rounded-lg shadow-lg aspect-square max-w-lg ml-auto flex flex-col justify-center text-right">
                  {/* Place your experience content here */}
               </div>
      </Container>
    </section>
  );
}