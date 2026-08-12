import PropTypes from "prop-types";

/**
 * Single button primitive used across CTAs (Resume download, Hero
 * CTA, Contact links). Renders an <a> when `href` is passed, a
 * <button> otherwise — keeps call sites simple.
 */
export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  ...rest
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-colors";
  const styles =
    variant === "primary"
      ? "bg-primary text-background hover:opacity-90"
      : "border border-border text-primary hover:bg-surface";

  const classes = `${base} ${styles} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["primary", "secondary"]),
  className: PropTypes.string,
};
