import { projects } from "../../data/projects.js";
import Container from "../common/Container.jsx";
import SectionHeading from "../common/SectionHeading.jsx";

// Editorial Color Palette for unique project cards
const cardStyles = [
  {
    bg: "bg-[#18181b]", // Deep Charcoal
    accentText: "text-amber-400",
    pillBg: "bg-white/10 text-white border-white/15",
    border: "border-amber-400/30",
  },
  {
    bg: "bg-[#0f766e]", // Emerald Teal
    accentText: "text-emerald-200",
    pillBg: "bg-black/20 text-white border-white/20",
    border: "border-teal-300/30",
  },
  {
    bg: "bg-[#4338ca]", // Deep Indigo
    accentText: "text-indigo-200",
    pillBg: "bg-black/20 text-white border-white/20",
    border: "border-indigo-300/30",
  },
  {
    bg: "bg-[#b45309]", // Warm Terracotta / Amber
    accentText: "text-amber-100",
    pillBg: "bg-black/20 text-white border-white/20",
    border: "border-amber-300/30",
  },
];

export default function FeaturedProjects() {
  // Triple array duplicate for continuous seamless left-to-right infinite loop
  const carouselProjects = [...projects, ...projects, ...projects];

  return (
    <section id="projects" className="py-24 w-full overflow-hidden">
      {/* Heading Container */}
      <Container className="flex flex-col">
        <SectionHeading eyebrow="Work" title="Featured Projects" align="left" />
      </Container>

      {/* Edge-to-Edge Marquee Track */}
      {projects.length > 0 ? (
        <div className="w-full overflow-hidden mt-10 group">
          <div
            className="flex w-max space-x-8 animate-marquee group-hover:[animation-play-state:paused]"
            style={{ animationDuration: `${projects.length * 8}s` }}
          >
            {carouselProjects.map((project, index) => {
              // Cycle through distinct editorial color themes for each project card
              const style = cardStyles[index % cardStyles.length];

              return (
                <div
                  key={`${project.id || index}-${index}`}
                  className={`w-[360px] sm:w-[420px] md:w-[460px] min-h-[440px] shrink-0 ${style.bg} border ${style.border} text-white rounded-[3rem] p-8 md:p-10 shadow-2xl transition-transform duration-300 hover:scale-[1.02] flex flex-col justify-between`}
                >
                  {/* Top Header: Category / Featured Badge */}
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-xs font-mono font-bold uppercase tracking-widest bg-black/30 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
                        {project.category || "Featured Work"}
                      </span>
                      {project.isFeatured && (
                        <span className={`text-xs font-mono font-extrabold uppercase tracking-wider ${style.accentText}`}>
                          ★ Featured
                        </span>
                      )}
                    </div>

                    {/* Bold Title */}
                    <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight uppercase leading-snug mb-4">
                      {project.title}
                    </h3>

                    {/* Summary Description */}
                    <p className="text-white/80 text-sm md:text-base leading-relaxed font-medium">
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom Section: Tech Stack Badges */}
                  <div className="mt-8 pt-6 border-t border-white/15">
                    <div className="flex flex-wrap gap-2">
                      {project.tags &&
                        project.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`text-xs font-mono font-medium px-3.5 py-1.5 rounded-full border ${style.pillBg}`}
                          >
                            {tag}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <Container>
          <p className="text-gray-500 text-sm mt-4">
            Add entries to src/data/projects.js to populate this section.
          </p>
        </Container>
      )}
    </section>
  );
}