import PropTypes from "prop-types";

/**
 * Consistent heading block for every section with optional alignment (left or right).
 */
export default function SectionHeading({ eyebrow, title, subtitle, align = "left" }) {
  const isRight = align === "right";

  return (
    <div
      className={`mb-12 max-w-3xl ${
        isRight ? "ml-auto text-right" : "mr-auto text-left"
      }`}
    >
      {eyebrow && (
        <p className="text-base md:text-lg font-semibold uppercase tracking-widest text-accent mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-4xl md:text-5xl font-extrabold text-primary tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-secondary text-lg md:text-xl mt-4 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

SectionHeading.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  align: PropTypes.oneOf(["left", "right"]),
};