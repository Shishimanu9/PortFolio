import PropTypes from "prop-types";

/**
 * Tiny reusable label used for "Featured" / "Research" style tags
 * anywhere in the UI, not just ProjectCard.
 */
export default function Badge({ children, variant = "solid" }) {
  const styles =
    variant === "outline"
      ? "border border-border text-secondary"
      : "bg-accent text-white";

  return (
    <span
      className={`text-xs font-medium px-2 py-1 rounded-full ${styles}`}
    >
      {children}
    </span>
  );
}

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["solid", "outline"]),
};
