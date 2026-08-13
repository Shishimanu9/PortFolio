import PropTypes from "prop-types";

/**
 * Tiny reusable label used for "Featured" / "Research" style tags.
 * "solid"/"outline" are the dark-page variants; "light"/"outline-light"
 * are for use inside a white SectionCard (see ProjectCard.jsx).
 */
export default function Badge({ children, variant = "solid" }) {
  const styles = {
    solid: "bg-accent text-white",
    outline: "border border-border text-secondary",
    light: "bg-sky-500 text-white",
    "outline-light": "border border-gray-300 text-gray-600",
  }[variant];

  return (
    <span className={`text-xs font-medium px-2 py-1 rounded-full ${styles}`}>
      {children}
    </span>
  );
}

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["solid", "outline", "light", "outline-light"]),
};
