import PropTypes from "prop-types";
import * as FiIcons from "react-icons/fi";

/** Single contact row (icon + label + value), used by Contact.jsx. */
export default function ContactLink({ social }) {
  const { icon, label, value, href } = social;
  const Icon = FiIcons[icon] ?? FiIcons.FiLink;

  return (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="flex items-center gap-3 text-secondary hover:text-primary transition-colors"
    >
      <Icon aria-hidden="true" />
      <span className="text-sm">
        <span className="text-muted mr-1">{label}:</span>
        {value}
      </span>
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
