import PropTypes from "prop-types";

/**
 * Consistent heading block for every section (eyebrow + title +
 * optional subtitle). Keeps heading typography/spacing in one place
 * instead of re-declared per section.
 *
 * `align` drives the alternating left/right layout used down the
 * landing page: "left" keeps the block flush left (mr-auto),
 * "right" flushes it right (ml-auto) so it sits above the
 * right-aligned card in that section.
 */
export default function SectionHeading({ eyebrow, title, subtitle, align = "left" }) {
  const alignClasses =
    align === "right" ? "ml-auto text-right items-end" : "mr-auto text-left items-start";

  return (
    <div className={`mb-10 max-w-2xl flex flex-col ${alignClasses}`}>
      {eyebrow && (
        <p className="text-base md:text-lg font-semibold uppercase tracking-widest text-accent mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-4xl md:text-5xl font-extrabold text-primary">
        {title}
      </h2>
      {subtitle && (
        <p className="text-secondary mt-3 leading-relaxed">{subtitle}</p>
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
