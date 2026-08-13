import Container from "../common/Container.jsx";

/**
 * Resume CTA — Features an animated color-shifting, high-visibility download button.
 */
export default function Resume() {
  return (
    <section id="resume" className="py-24">
      <Container className="text-center">
        <h2 className="font-display text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          Interested in working together?
        </h2>
        <p className="text-gray-400 mt-4 text-base md:text-lg max-w-xl mx-auto font-medium">
          Check out my complete resume to see my detailed academic background, full research experience, and technical achievements.
        </p>
        
        <div className="mt-10 flex justify-center">
          {/* Animated Color-Changing Super Button */}
          <a
            href="/resume.pdf" // Ensure resume.pdf is placed in your public/ folder
            download="Yashika_Basapure_Resume.pdf"
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 text-lg md:text-xl font-bold text-white rounded-full bg-gradient-to-r from-red-500 via-amber-500 via-emerald-500 via-sky-500 to-purple-600 bg-[length:300%_300%] animate-color-change shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
          >
            {/* Soft background glow */}
            <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-red-500 via-sky-500 to-purple-600 bg-[length:300%_300%] animate-color-change blur-lg opacity-40 group-hover:opacity-80 transition duration-300 -z-10" />

            {/* Download Icon */}
            <svg
              className="w-6 h-6 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>

            <span>Download Resume</span>
          </a>
        </div>
      </Container>
    </section>
  );
}