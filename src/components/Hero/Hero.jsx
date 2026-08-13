import Container from "../common/Container.jsx";

export default function Hero() {
  return (
    <section className="pt-36 pb-20 md:pt-44 md:pb-28 relative overflow-hidden">
      <Container className="flex flex-col items-center text-center max-w-4xl mx-auto">
        
        {/* Profile Image Squircle Container */}
<div className="relative mb-8 group">
  <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-[2.5rem] bg-[#18181b] p-1.5 border border-white/20 shadow-2xl transition-transform duration-300 group-hover:scale-105">
    <img
      src="/images/Y_image.jpeg" // or .jpg / .jpeg depending on your file
      alt="Yashika Basapure"
      className="w-full h-full object-cover rounded-[2rem] transition-all duration-300"
    />
  </div>
  {/* Subtle Monochrome Glow Behind Image */}
  <div className="absolute inset-0 bg-white/5 rounded-[2.5rem] blur-xl -z-10 group-hover:bg-white/10 transition-all" />
</div>

        {/* Status Pill Badge */}
        <div className="inline-flex items-center gap-2.5 bg-[#18181b] border border-white/10 px-5 py-2 rounded-full mb-6 shadow-md">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="text-xs md:text-sm font-mono text-slate-300 tracking-wide">
            Seeking ML &amp; Data Science Opportunities
          </span>
        </div>

        {/* Big Monochrome Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.08] font-display uppercase">
          Yashika Basapure
        </h1>

        {/* Subtitle Pitch */}
        <p className="mt-6 text-slate-300 text-lg sm:text-xl md:text-2xl max-w-2xl leading-relaxed font-normal">
          ML Engineer &amp; Data Scientist specializing in Machine Learning, Deep Learning, and Geospatial AI systems.
        </p>

        {/* Monochrome Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <a
            href="#projects"
            className="bg-white hover:bg-slate-200 text-black font-extrabold text-base md:text-lg px-8 py-4 rounded-full transition-all duration-200 shadow-xl hover:scale-105"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="bg-[#18181b] hover:bg-white/10 text-white border border-white/20 font-bold text-base md:text-lg px-8 py-4 rounded-full transition-all duration-200 hover:scale-105"
          >
            Get in Touch
          </a>
        </div>

      </Container>
    </section>
  );
}