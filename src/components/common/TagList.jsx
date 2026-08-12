import PropTypes from "prop-types";

/** Renders a list of tech-stack tags. Used by ProjectCard and can be
 * reused anywhere a small pill list is needed. */
export default function TagList({ tags }) {
  if (!tags?.length) return null;

  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className="text-xs text-secondary border border-border rounded px-2 py-0.5"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
};
