/**
 * Featured Projects — data source.
 *
 * FeaturedProjects.jsx maps over this array and renders a <ProjectCard />
 * per entry. Add/remove/reorder projects by editing this array only —
 * never touch the component to add a project.
 *
 * Shape consumed by ProjectCard (see components/ProjectCard/ProjectCard.jsx):
 *
 * {
 *   id: string,              // stable unique key, e.g. "geo-crop-yield"
 *   title: string,
 *   description: string,     // short, 1-2 sentences
 *   thumbnail: string,       // import from ../assets/images or a URL
 *   tags: string[],          // tech stack, e.g. ["Python", "PyTorch", "GIS"]
 *   githubUrl: string | null,
 *   liveUrl: string | null,
 *   featured: boolean,       // shows a "Featured" badge
 *   research: boolean,       // shows a "Research" badge
 * }
 */

export const projects = [
  // {
  //   id: "",
  //   title: "",
  //   description: "",
  //   thumbnail: "",
  //   tags: [],
  //   githubUrl: "",
  //   liveUrl: "",
  //   featured: false,
  //   research: false,
  // },
];
