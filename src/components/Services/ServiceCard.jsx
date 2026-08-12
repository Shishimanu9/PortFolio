import PropTypes from "prop-types";
import * as FiIcons from "react-icons/fi";

/**
 * Reusable service placeholder card. `icon` is a string key into
 * react-icons/fi (e.g. "FiCpu") resolved here, so data/services.js
 * stays plain serializable data rather than importing components.
 */
export default function ServiceCard({ service }) {
  const { icon, title, description } = service;
  const Icon = FiIcons[icon] ?? FiIcons.FiBox;

  return (
    <div className="rounded-lg border border-border bg-surface p-6 flex flex-col gap-3">
      <Icon size={22} className="text-accent" aria-hidden="true" />
      <h3 className="font-display text-lg text-primary">{title}</h3>
      {description && (
        <p className="text-sm text-secondary leading-relaxed">{description}</p>
      )}
    </div>
  );
}

ServiceCard.propTypes = {
  service: PropTypes.shape({
    icon: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
};
