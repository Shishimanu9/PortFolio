import PropTypes from "prop-types";
import * as FiIcons from "react-icons/fi";

/**
 * Single contact row, styled for the light SectionCard it renders
 * inside (see Contact.jsx). Renders a plain (non-clickable) row when
 * `href` is empty — e.g. "Location" has a value but nothing to link to.
 */
export default function ContactLink({ social }) {
  const { icon, label, value, href } = social;
  const Icon = FiIcons[icon] ?? FiIcons.FiLink;

  const content = (
    <>
      <Icon className="text-cyan-500" aria-hidden="true" />
      <span className="text-sm text-gray-700">
        <span className="text-gray-400 mr-1">{label}:</span>
        {value}
      </span>
    </>
  );

  if (!href) {
    return <span className="flex items-center gap-3">{content}</span>;
  }

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="flex items-center gap-3 hover:opacity-70 transition-opacity"
    >
      {content}
    </a>
  );
}

ContactLink.propTypes = {
  social: PropTypes.shape({
    icon: PropTypes.string,
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    href: PropTypes.string,
  }).isRequired,
};
