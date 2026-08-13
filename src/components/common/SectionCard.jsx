import PropTypes from "prop-types";

/**
 * Compact content card used inside alternating sections.
 * Removed fixed aspect-square and adjusted padding for a cleaner, sleeker look.
 */
export default function SectionCard({
  accentClass,
  glowClass = "hover:shadow-xl",
  align = "left",
  children,
  className = "",
}) {
  const alignClasses = align === "right" ? "ml-auto" : "mr-auto";

  return (
    <div
      className={`max-w-3xl w-full ${alignClasses} bg-white text-gray-900 rounded-xl shadow-lg border-t-4 ${accentClass}
      p-14 md:p-14 transition-all duration-300 ${glowClass} ${className}`}
    >
      {children}
    </div>
  );
}

SectionCard.propTypes = {
  accentClass: PropTypes.string.isRequired,
  glowClass: PropTypes.string,
  align: PropTypes.oneOf(["left", "right"]),
  children: PropTypes.node,
  className: PropTypes.string,
};