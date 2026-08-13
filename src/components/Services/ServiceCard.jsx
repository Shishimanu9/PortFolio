import PropTypes from "prop-types";
import * as FiIcons from "react-icons/fi";

/**
 * Reusable service row. Sized to sit inside the light square
 * SectionCard (see Services.jsx), so it uses light-theme classes
 * (gray-900/gray-600) rather than the dark page tokens — this is the
 * one component that intentionally does not use the bg-background /
 * text-primary tokens, because it always renders inside the white
 * card, never directly on the dark page background.
 */
export default function ServiceCard({ service }) {
  const { icon, title, description } = service;
  const Icon = FiIcons[icon] ?? FiIcons.FiBox;

  return (
    <div className="flex gap-3 items-start py-3 border-b border-gray-100 last:border-none">
      <Icon size={18} className="text-emerald-500 mt-0.5 shrink-0" aria-hidden="true" />
      <div>
        <h3 className="font-semibold text-sm text-gray-900">{title}</h3>
        {description && (
          <p className="text-xs text-gray-600 leading-relaxed mt-0.5">{description}</p>
        )}
      </div>
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
