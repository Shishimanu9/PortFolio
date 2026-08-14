/**
 * Experience — data source for the Experience timeline.
 * Sourced from resume: internship + independent research project.
 */

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
      "Worked on Virtual Systems as well to collaborate to remote working and storage managment huge size data",
    ],
    skills: ["PostGIS", "PostgreSQL", "SAMGeo", "Azure", "LLMs/LVMs", "Geospatial AI"],
  },
  {
    id: "thyssenkrupp-abs",
    role: "Software Development Engineer (SDE) Intern",
    organization: "Thyssenkrupp Automotive Body Solutions",
    location: "Pune, India [ONSITE]",
    startDate: "April 2026",
    endDate: "July 2026",
    summary:
      "Collaborated on BIW Site Manager CRM platform development and diagnosed critical production data-synchronization issues.",
    highlights: [
      "Collaborated with internal teams to translate business requirements into technical designs for BIW Site Manager, a 20+ module CRM-style platform using Node.js, Express, and SQL Server (RDBMS).",
      "Diagnosed a critical production data-synchronization bug by conducting systematic log analysis, network inspection, and database forensics across SQL foreign-key constraints and transaction deadlocks; traced root cause to a destructive delete-then-reinsert pattern.",
    ],
    skills: ["Node.js", "Express", "SQL Server", "REST APIs", "Database Forensics", "Agile"],
  },
];