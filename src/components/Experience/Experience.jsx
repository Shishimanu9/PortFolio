import { experience } from "../../data/experience.js";
import Container from "../common/Container.jsx";
import SectionHeading from "../common/SectionHeading.jsx";

/** Experience section — Inspired by bold editorial squircle cards */
export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <Container className="flex flex-col">
        <SectionHeading eyebrow="Experience" title="Where I have worked" align="left" />

        {/* 2 Squircle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {experience.map((item, index) => {
            // Alternating colors like the image (Card 1: Olive/Taupe, Card 2: Crimson Red)
            const isFirst = index % 2 === 0;
            const bgClass = isFirst
              ? "bg-[#6c6152] text-white" 
              : "bg-[#e11d23] text-white";

            return (
              <div
                key={item.id}
                className={`${bgClass} rounded-[3rem] p-8 md:p-10 flex flex-col justify-between transition-transform duration-300 hover:scale-[1.01] shadow-2xl min-h-[420px]`}
              >
                {/* Top Section: Date Badge & Company */}
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="bg-black/30 text-white/90 text-xs font-mono font-semibold px-4 py-1.5 rounded-full backdrop-blur-sm">
                      {item.startDate} — {item.endDate}
                    </span>
                    <span className="text-xs uppercase tracking-widest text-white/80 font-bold">
                      {item.location}
                    </span>
                  </div>

                  {/* Large Bold Headline like the inspiration image */}
                  <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase leading-none mb-2">
                    {item.organization}
                  </h3>
                  <p className="text-xl font-semibold text-white/90 mb-6">
                    {item.role}
                  </p>

                  {/* Experience Description Bullets */}
                  <ul className="space-y-3 text-sm text-white/90 leading-relaxed font-medium">
                    {item.highlights.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-white/60 font-bold">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Badges at Bottom */}
                {item.skills && (
                  <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-white/20">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-black/20 text-white text-xs font-medium px-3 py-1 rounded-full border border-white/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}