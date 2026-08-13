/**
 * Skills — data source. Grouped to match the resume categories so
 * Skills.jsx renders one labeled column per group.
 */

export const skills = [
  { category: "Languages", items: ["Python", "Java", "C++", "SQL"] },
  {
    category: "ML & AI",
    items: [
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
    category: "Geospatial & Data",
    items: [
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
    category: "Web & Backend",
    items: ["React", "Redux", "Flask", "FastAPI", "REST APIs", "Postman", "HTML/CSS"],
  },
  {
    category: "Cloud & DevOps",
    items: ["Microsoft Azure", "Virtual Machines", "Docker", "Git", "PaaS", "AIaaS"],
  },
];
