import PropTypes from "prop-types";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Badge from "../common/Badge.jsx";
import TagList from "../common/TagList.jsx";

/**
 * Reusable project row. Accepts a single `project` object (see
 * data/projects.js for the exact shape) and renders it — no project
 * content lives here. Styled for the light SectionCard it renders
 * inside (see FeaturedProjects.jsx), not the dark page background.
 */
export default function ProjectCard({ project }) {
  const {
    title,
    description,
    thumbnail,
    tags = [],
    githubUrl,
    liveUrl,
    featured,
    research,
  } = project;

  return (
    <article className="py-4 border-b border-gray-100 last:border-none">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold text-sm text-gray-900">{title}</h3>
        {(featured || research) && (
          <div className="flex gap-1.5 shrink-0">
            {featured && <Badge variant="light">Featured</Badge>}
            {research && <Badge variant="outline-light">Research</Badge>}
          </div>
        )}
      </div>

      {thumbnail && (
        <img
          src={thumbnail}
          alt={title}
          loading="lazy"
          className="w-full aspect-video object-cover rounded-md mt-2"
        />
      )}

      {description && (
        <p className="text-xs text-gray-600 leading-relaxed mt-2">{description}</p>
      )}

      <div className="mt-2">
        <TagList tags={tags} variant="light" />
      </div>

      {(githubUrl || liveUrl) && (
        <div className="flex gap-4 pt-2">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-900 transition-colors"
            >
              <FiGithub aria-hidden="true" /> Code
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-900 transition-colors"
            >
              <FiExternalLink aria-hidden="true" /> Live Demo
            </a>
          )}
        </div>
      )}
    </article>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    thumbnail: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    githubUrl: PropTypes.string,
    liveUrl: PropTypes.string,
    featured: PropTypes.bool,
    research: PropTypes.bool,
  }).isRequired,
};
