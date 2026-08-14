import Container from "../common/Container.jsx";
import SectionHeading from "../common/SectionHeading.jsx";

export default function About() {
  return (
    <section id="about" className="py-24">
      <Container className="flex flex-col">
        <SectionHeading eyebrow="About" title="Who I am" align="left" />

        {/* Asymmetric Editorial Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-10">

          {/* Hero Statement Block (8 cols) */}
          <div className="lg:col-span-8 bg-[#18181b] border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl flex flex-col justify-between relative overflow-hidden group">
            
            {/* Top Status & Location Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for Opportunities</span>
              </div>
              <span className="text-xs font-mono font-medium text-slate-400 tracking-wide uppercase">
                Pune, MH — India
              </span>
            </div>

            {/* Oversized Lead Text */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug font-display">
                Computer Science Engineer driving research & system design in <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400">Deep Learning</span>, <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">Bayesian Inference</span>, and <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">Geospatial AI</span>.
              </h3>

              <p className="text-slate-300 text-base md:text-lg leading-relaxed font-normal pt-2">
                I specialize in building end-to-end Machine Learning systems, satellite-imagery workflows, and production multimodal pipelines. My experience includes work as a Geospatial Data Scientist Intern at Agtmap.com, along with independent research on Virtual Brain Inference along with SDE experience with Thyssenkrupp ABS.
              </p>
            </div>

            {/* Bottom Key Metric Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-10 mt-10 border-t border-white/10">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-1">Education</p>
                <p className="text-sm md:text-base font-bold text-white">B.E. Computer Science</p>
                <p className="text-xs text-slate-400 font-mono">JSPM Pune (2026)</p>
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-1">Academic Rank</p>
                <p className="text-sm md:text-base font-bold text-white">8.7 / 10.0 CGPA</p>
                <p className="text-xs text-slate-400 font-mono">Top Tier</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-1">Focus</p>
                <p className="text-sm md:text-base font-bold text-white">Production AI</p>
                <p className="text-xs text-slate-400 font-mono">Systems & Pipelines</p>
              </div>
            </div>
          </div>

          {/* Side Monochromatic Focus Cards Stack (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">

            {/* Disciplines Card */}
            <div className="bg-[#18181b] border border-white/10 rounded-[2.5rem] p-8 md:p-9 shadow-2xl flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3.5 py-1 rounded-full">
                    Core Specializations
                  </span>
                  <span className="text-xs font-mono text-slate-400">01</span>
                </div>

                <ul className="space-y-4 text-slate-200 text-sm md:text-base font-medium">
                  <li className="flex items-start justify-between border-b border-white/5 pb-3">
                    <span>Production ML & LLM Workflows</span>
                    <span className="text-slate-400 font-mono text-xs">AI</span>
                  </li>
                  <li className="flex items-start justify-between border-b border-white/5 pb-3">
                    <span>Geospatial Data Architecture</span>
                    <span className="text-slate-400 font-mono text-xs">GIS</span>
                  </li>
                  <li className="flex items-start justify-between border-b border-white/5 pb-3">
                    <span>Computer Vision & Speech (ASR)</span>
                    <span className="text-slate-400 font-mono text-xs">CV</span>
                  </li>
                  <li className="flex items-start justify-between pb-1">
                    <span>Bayesian Uncertainty Analysis</span>
                    <span className="text-slate-400 font-mono text-xs">Math</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Fact / Philosophy Card */}
            <div className="bg-gradient-to-br from-[#1d4ed8] via-[#1e40af] to-[#0f172a] border border-blue-400/30 text-white rounded-[2.5rem] p-8 md:p-9 shadow-2xl flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-200">
                  Engineering Mindset
                </span>
                <span className="text-xs font-mono text-sky-200">02</span>
              </div>
              <p className="text-lg md:text-xl font-bold tracking-tight leading-snug">
                &ldquo;Bridging complex statistical theory with performant production software.&rdquo;
              </p>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}