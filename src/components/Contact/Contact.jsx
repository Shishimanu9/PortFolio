import Container from "../common/Container.jsx";
import SectionHeading from "../common/SectionHeading.jsx";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <Container className="flex flex-col">
        <SectionHeading eyebrow="Contact" title="Let us work together" align="right" />

        {/* Editorial Squircle Contact Card */}
        <div className="bg-[#18181b] border border-white/10 rounded-[3rem] p-8 md:p-14 mt-8 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Ambient Background Accent Glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl">
            {/* Tagline Statement */}
            <p className="text-xl md:text-2xl text-slate-200 font-medium leading-relaxed mb-8">
              Open to <span className="text-sky-400 font-bold">ML/Data Science roles</span> and freelance projects in AI, geospatial data, and applied research.
            </p>

            {/* Quick Action Email Highlight */}
            <div className="mb-10">
              <a
                href="mailto:yashikab601@gmail.com"
                className="inline-flex items-center gap-3 bg-white text-gray-950 hover:bg-sky-400 hover:text-black font-extrabold text-lg md:text-xl px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:scale-105"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                yashikab601@gmail.com
              </a>
            </div>

            {/* Interactive Grid of Contact Pills */}
            <div className="flex flex-wrap gap-4 pt-6 border-t border-white/10">
              {/* Phone */}
              <a
                href="tel:7385044945"
                className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 px-5 py-2.5 rounded-full text-sm font-mono font-medium transition-all"
              >
                <span></span>
                <span>+91 7385044945</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/yashika-basapure-06039b24y/" // Replace with your actual LinkedIn link
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 px-5 py-2.5 rounded-full text-sm font-mono font-medium transition-all"
              >
                <span></span>
                <span>LinkedIn</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Shishimanu9" // Replace with your actual GitHub link
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 px-5 py-2.5 rounded-full text-sm font-mono font-medium transition-all"
              >
                <span></span>
                <span>GitHub</span>
              </a>

              {/* Location */}
              <div className="flex items-center gap-2 bg-white/5 text-slate-400 border border-white/10 px-5 py-2.5 rounded-full text-sm font-mono font-medium">
                <span></span>
                <span>Pune, India</span>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}