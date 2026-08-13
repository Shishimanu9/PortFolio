import Container from "../common/Container.jsx";
import SectionHeading from "../common/SectionHeading.jsx";

const skillCategories = [
  {
    title: "LANGUAGES",
    accentBg: "bg-[#0f766e]", // Rich Emerald Teal
    accentText: "text-emerald-200",
    skills: ["Python", "Java", "C++", "SQL"],
  },
  {
    title: "ML & AI",
    accentBg: "bg-[#1d4ed8]", // Electric Cobalt Blue (Hero section look)
    accentText: "text-blue-200",
    skills: [
      "TensorFlow",
      "PyTorch",
      "Speech Recognition (ASR)",
      "R-CNN",
      "HuggingFace",
      "Transformers",
      "LLMs",
      "LVMs / VLMs",
      "Deep Learning",
    ],
  },
  {
    title: "GEOSPATIAL & DATA",
    accentBg: "bg-[#9a3412]", // Warm Terracotta / Burnt Orange
    accentText: "text-orange-200",
    skills: [
      "Satellite Imagery",
      "Remote Sensing",
      "Raster & Vector Data",
      "PostGIS",
      "PostgreSQL",
      "MongoDB",
      "Pandas",
      "NumPy",
    ],
  },
  {
    title: "WEB & BACKEND",
    accentBg: "bg-[#27272a]", // Deep Dark Charcoal
    accentText: "text-sky-300",
    skills: ["React", "Redux", "Flask", "FastAPI", "REST APIs", "Postman", "HTML/CSS"],
  },
  {
    title: "CLOUD & DEVOPS",
    accentBg: "bg-[#4338ca]", // Vibrant Deep Indigo
    accentText: "text-indigo-200",
    skills: ["Microsoft Azure", "Virtual Machines", "Docker", "Git", "PaaS", "AIaaS"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <Container className="flex flex-col">
        <SectionHeading eyebrow="Skills" title="Tools & technologies" align="left" />

        {/* Outer Grid Wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {skillCategories.map((category) => {
            // Make ML & AI span full 2 columns on desktop for emphasis
            const isFullWidth = category.title === "ML & AI";

            return (
              <div
                key={category.title}
                className={`${category.accentBg} ${
                  isFullWidth ? "md:col-span-2" : ""
                } rounded-[2.5rem] p-8 md:p-10 shadow-2xl flex flex-col justify-between transition-transform duration-300 hover:scale-[1.01]`}
              >
                {/* Outer Box Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3
                    className={`text-sm md:text-base font-mono font-extrabold tracking-widest uppercase ${category.accentText}`}
                  >
                    {category.title}
                  </h3>
                  <span className="text-xs font-mono bg-black/40 text-white/80 px-3.5 py-1 rounded-full backdrop-blur-sm border border-white/10">
                    {category.skills.length} Tools
                  </span>
                </div>

                {/* Inner Nested Boxes (High contrast readable pills) */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="bg-white/15 hover:bg-white/25 text-white border border-white/20 backdrop-blur-md font-semibold text-sm md:text-base px-5 py-2.5 rounded-2xl transition-all duration-200 shadow-sm hover:-translate-y-0.5 cursor-default"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}