/**
 * Services — data source, derived from skills/experience on the resume.
 * `icon` is a react-icons/fi key resolved in ServiceCard.jsx.
 */

export const services = [
  {
    id: "ml-deep-learning",
    icon: "FiCpu",
    title: "Machine Learning & Deep Learning",
    description:
      "Model design, training, and evaluation with TensorFlow and PyTorch — from classical ML baselines to deep learning systems.",
  },
  {
    id: "geospatial-ai",
    icon: "FiMap",
    title: "Geospatial AI & Remote Sensing",
    description:
      "End-to-end pipelines for satellite imagery, raster/vector data, and geo-referencing, with PostGIS-backed storage and analysis.",
  },
  {
    id: "llm-speech-applications",
    icon: "FiMic",
    title: "LLM & Speech Applications",
    description:
      "Fine-tuning and applying LLMs, LVMs/VLMs, and ASR models (e.g. Whisper) for domain-specific language and speech tasks.",
  },
  {
    id: "data-engineering",
    icon: "FiDatabase",
    title: "Data Engineering & Pipelines",
    description:
      "Building reliable data pipelines — preprocessing, transformation, and storage — using Pandas, NumPy, PostgreSQL, and MongoDB.",
  },
  {
    id: "computer-vision",
    icon: "FiLayers",
    title: "Computer Vision",
    description:
      "Segmentation and detection workflows (e.g. SAMGeo, R-CNN) applied to imagery and multimodal geospatial data.",
  },
  {
    id: "bayesian-research",
    icon: "FiActivity",
    title: "Bayesian Modeling & Research Consulting",
    description:
      "Bayesian inference and uncertainty quantification for research-grade modeling problems, from parameter estimation to simulation.",
  },
];
