import { skills } from "../../data/skills.js";
import Container from "../common/Container.jsx";
import SectionHeading from "../common/SectionHeading.jsx";

/**
 * Maps skills.js (grouped by category) into labeled pill groups.
 * Grouping lives in the data itself, not in component logic, so
 * reordering/renaming categories only touches skills.js.
 */
export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <Container>
        <SectionHeading eyebrow="Skills" title="Tools & technologies" />

        {skills.length > 0 ? (
          <div className="grid sm:grid-cols-2 gap-8">
            {skills.map((group) => (
              <div key={group.category}>
                <h3 className="text-sm font-medium text-primary mb-3">
                  {group.category}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-xs text-secondary border border-border rounded px-2 py-1"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted text-sm">
            Add entries to src/data/skills.js to populate this section.
          </p>
        )}
      </Container>
    </section>
  );
}
