import Container from "../common/Container.jsx";
import SectionHeading from "../common/SectionHeading.jsx";

const services = [
  {
    title: "Machine Learning & Deep Learning",
    description:
      "Model design, training, and evaluation with TensorFlow and PyTorch — from classical ML baselines to deep learning systems.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    badge: "ML Systems",
    // Color Mix: Deep Emerald Teal to Dark Slate
    cardGradient: "bg-gradient-to-br from-[#0f766e] via-[#115e59] to-[#0f172a]",
    accentText: "text-emerald-200",
  },
  {
    title: "Geospatial AI & Remote Sensing",
    description:
      "End-to-end pipelines for satellite imagery, raster/vector data, and geo-referencing, with PostGIS-backed storage and analysis.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    badge: "Spatial AI",
    // Color Mix: Terracotta / Burnt Orange to Dark Brown
    cardGradient: "bg-gradient-to-br from-[#9a3412] via-[#7c2d12] to-[#1c1917]",
    accentText: "text-orange-200",
  },
  {
    title: "LLM & Speech Applications",
    description:
      "Fine-tuning and applying LLMs, LVMs/VLMs, and ASR models (e.g. Whisper) for domain-specific language and speech tasks.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    badge: "GenAI & ASR",
    // Color Mix: Royal Indigo to Violet Slate
    cardGradient: "bg-gradient-to-br from-[#4338ca] via-[#3730a3] to-[#0f172a]",
    accentText: "text-indigo-200",
  },
  {
    title: "Data Engineering & Pipelines",
    description:
      "Building reliable data pipelines — preprocessing, transformation, and storage — using Pandas, NumPy, PostgreSQL, and MongoDB.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    badge: "Pipelines",
    // Color Mix: Deep Cobalt Blue to Dark Cyan
    cardGradient: "bg-gradient-to-br from-[#1d4ed8] via-[#1e40af] to-[#0284c7]",
    accentText: "text-sky-200",
  },
  {
    title: "Computer Vision",
    description:
      "Segmentation and detection workflows (e.g. SAMGeo, R-CNN) applied to imagery and multimodal geospatial data.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    badge: "CV",
    // Color Mix: Dark Plum / Wine to Purple Gray
    cardGradient: "bg-gradient-to-br from-[#7e22ce] via-[#6b21a8] to-[#18181b]",
    accentText: "text-purple-200",
  },
  {
    title: "Bayesian Modeling & Research Consulting",
    description:
      "Bayesian inference and uncertainty quantification for research-grade modeling problems, from parameter estimation to simulation.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    badge: "Research",
    // Color Mix: Warm Golden Amber to Charcoal
    cardGradient: "bg-gradient-to-br from-[#b45309] via-[#92400e] to-[#172554]",
    accentText: "text-amber-200",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <Container className="flex flex-col">
        <SectionHeading eyebrow="Services" title="What I can help with" align="left" />

        {/* 2-Column Grid with Distinct Dual-Tone Mixed Gradient Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative rounded-[2.5rem] p-[2.5px] overflow-hidden transition-all duration-300 hover:scale-[1.02] shadow-xl hover:shadow-2xl"
            >
              {/* Rainbow Color-Changing Border Effect (Fades in strong on hover) */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-amber-500 via-emerald-500 via-sky-500 to-purple-600 bg-[length:300%_300%] animate-color-change opacity-30 group-hover:opacity-100 transition-opacity duration-300 rounded-[2.5rem]" />

              {/* Inner Mixed-Color Gradient Body */}
              <div
                className={`relative ${service.cardGradient} rounded-[2.4rem] p-8 md:p-9 h-full flex flex-col justify-between z-10 border border-white/10`}
              >
                <div>
                  {/* Top Header: Glass Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 bg-black/30 text-white rounded-2xl backdrop-blur-md border border-white/20 shadow-inner group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <span
                      className={`text-xs font-mono font-extrabold uppercase tracking-widest ${service.accentText} bg-black/40 border border-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-sm`}
                    >
                      {service.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-tight mb-3 uppercase font-display">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/80 text-sm md:text-base leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}