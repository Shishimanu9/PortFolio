import React from "react";

export default function TimelineItem({ entry }) {
  return (
    <li className="relative pl-6 md:pl-8 pb-12 last:pb-0 group">
      {/* Glowing Animated Node / Dot */}
      <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-amber-400 group-hover:scale-125 group-hover:bg-amber-400 transition-all duration-300 shadow-[0_0_12px_rgba(251,191,36,0.6)] z-10" />

      {/* Glass Card Container */}
      <div className="bg-slate-900/60 border border-slate-800 hover:border-slate-700 rounded-xl p-6 md:p-7 backdrop-blur-md transition-all duration-300 shadow-xl hover:shadow-amber-500/10">
        
        {/* Header: Date Badge & Location */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
            {entry.startDate} — {entry.endDate}
          </span>
          <span className="text-xs text-slate-400 font-mono">
            {entry.location}
          </span>
        </div>

        {/* Role & Organization */}
        <h3 className="text-xl md:text-2xl font-bold text-slate-100">
          {entry.role}{" "}
          <span className="text-slate-400 font-normal">
            · <span className="text-amber-300">{entry.organization}</span>
          </span>
        </h3>

        {/* Summary Tagline */}
        {entry.summary && (
          <p className="text-slate-300 text-sm font-medium mt-2 leading-relaxed">
            {entry.summary}
          </p>
        )}

        {/* Highlights List */}
        <ul className="mt-4 space-y-2.5 text-slate-400 text-sm leading-relaxed">
          {entry.highlights.map((point, index) => (
            <li key={index} className="flex items-start gap-2.5">
              <span className="text-amber-400 font-bold shrink-0">▹</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* Tech Stack Pills */}
        {entry.skills && entry.skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-slate-800/80">
            {entry.skills.map((skill) => (
              <span
                key={skill}
                className="text-xs bg-slate-800/80 text-slate-300 font-mono px-2.5 py-1 rounded-md border border-slate-700/60 hover:text-amber-300 hover:border-amber-400/40 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </li>
  );
}