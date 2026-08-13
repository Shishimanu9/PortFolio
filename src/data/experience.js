/**
 * Experience — data source for the Experience timeline.
 * Sourced from resume: internship + independent research project.
 */

export const experience = [
  {
    id: "agtmap-data-scientist-jr",
    role: "Data Scientist Jr.",
    organization: "Agtmap.com",
    location: "Remote",
    startDate: "Jan 2026",
    endDate: "Apr 2026",
    summary:
      "Built end-to-end geospatial data pipelines and applied LLMs/LVMs to multimodal satellite imagery tasks.",
    highlights: [
      "Built geospatial pipelines for satellite, raster, and vector data — preprocessing, geo-referencing, transformation at scale.",
      "Applied LLMs and LVMs to multimodal geospatial tasks, incl. SAMGeo segmentation; deployed pipelines on Microsoft Azure.",
      "Managed geospatial/GeoAI data in PostGIS & PostgreSQL; ran experimentation on cloud virtual machines.",
    ],
    skills: ["PostGIS", "PostgreSQL", "SAMGeo", "Azure", "LLMs/LVMs", "Geospatial AI"],
  },
  {
    id: "virtual-brain-inference-research",
    role: "Independent Researcher",
    organization: "Virtual Brain Inference",
    location: "Pune, India",
    startDate: "2025",
    endDate: "2025",
    summary:
      "Engineered a modular virtual-brain-inference pipeline combining connectomics with neural mass models.",
    highlights: [
      "Built a modular VBI pipeline integrating diffusion MRI connectomes with neural mass models (Jansen-Rit, Wong-Wang, Epileptor-lite) for GPU-accelerated brain simulation.",
      "Implemented Bayesian inference for personalized parameter estimation, enabling uncertainty-quantified virtual brain twins for clinical seizure prediction.",
    ],
    skills: ["PyTorch", "Bayesian Inference", "Diffusion MRI", "GPU Acceleration", "Neuroscience"],
  },
];