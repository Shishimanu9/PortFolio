import PropTypes from "prop-types";

/** Renders a list of tech-stack tags. "dark" (default) is for use on
 * the dark page background; "light" is for use inside a white
 * SectionCard. */
export default function TagList({ tags, variant = "dark" }) {
  if (!tags?.length) return null;

  const itemClass =
    variant === "light"
      ? "text-xs text-gray-600 border border-gray-200 rounded px-2 py-0.5"
      : "text-xs text-secondary border border-border rounded px-2 py-0.5";

  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li key={tag} className={itemClass}>
          {tag}
        </li>
      ))}
    </ul>
  );
}

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  variant: PropTypes.oneOf(["dark", "light"]),
};
