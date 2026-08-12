import PropTypes from "prop-types";

/** Single timeline entry — role, org, dates, and bullet highlights. */
export default function TimelineItem({ entry }) {
  const { role, organization, location, startDate, endDate, summary, highlights = [] } =
    entry;

  return (
    <li className="relative pl-8 pb-10 border-l border-border last:pb-0 last:border-transparent">
      <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />

      <p className="text-xs text-muted uppercase tracking-wide">
        {startDate} — {endDate}
      </p>
      <h3 className="font-display text-lg text-primary mt-1">
        {role} {organization && <span className="text-secondary">· {organization}</span>}
      </h3>
      {location && <p className="text-xs text-muted mt-0.5">{location}</p>}

      {summary && <p className="text-sm text-secondary mt-3">{summary}</p>}

      {highlights.length > 0 && (
        <ul className="list-disc list-inside text-sm text-secondary mt-3 space-y-1">
          {highlights.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      )}
    </li>
  );
}

TimelineItem.propTypes = {
  entry: PropTypes.shape({
    role: PropTypes.string.isRequired,
    organization: PropTypes.string,
    location: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    summary: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
