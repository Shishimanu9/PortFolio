import { projects } from "../../data/projects.js";
import Container from "../common/Container.jsx";
import SectionHeading from "../common/SectionHeading.jsx";
import ProjectCard from "../ProjectCard/ProjectCard.jsx";

/**
 * Maps projects.js -> ProjectCard. This is the primary section per
 * the brief, so it gets its own top-level component (rather than
 * living inside a generic "Projects" folder) to make intent obvious
 * in the folder structure.
 */
export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24">
      <Container>
        <SectionHeading eyebrow="Work" title="Featured Projects" />

        {projects.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className="text-muted text-sm">
            Add entries to src/data/projects.js to populate this section.
          </p>
        )}
      </Container>
    </section>
  );
}
