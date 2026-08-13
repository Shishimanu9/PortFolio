import Container from "../common/Container.jsx";

export default function Resume() {
  return (
    <section id="resume" className="py-16">
      <Container className="flex flex-col items-center text-center">
        <div className="bg-[#18181b] border border-white/10 rounded-[3rem] p-8 md:p-12 w-full max-w-3xl shadow-2xl flex flex-col items-center justify-center gap-6">
          <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight font-display">
            Interested in my complete background?
          </h3>
          <p className="text-slate-300 text-base md:text-lg max-w-xl">
            Download my full resume for a detailed overview of my education, experience, research, and technical projects.
          </p>

          {/* Full Gradient Background Button */}
          <a
            href="/resume.pdf"
            download="Yashika_Basapure_Resume.pdf"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 to-sky-400 bg-[length:200%_200%] animate-color-change text-white font-extrabold text-base md:text-lg px-9 py-4 rounded-full shadow-lg hover:shadow-pink-500/25 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <span>Download Resume</span>
            <svg
              className="w-5 h-5 text-white group-hover:translate-y-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </a>
        </div>
      </Container>
    </section>
  );
}