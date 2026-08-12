import PropTypes from "prop-types";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Badge from "../common/Badge.jsx";
import TagList from "../common/TagList.jsx";

/**
 * Reusable project card. Purely presentational — accepts a single
 * `project` object (see data/projects.js for the exact shape) and
 * renders it. No project content lives here.
 *
 * Kept as one component (not split further) because thumbnail/badges/
 * tags/actions always render together and never independently — the
 * only thing that varies is the data mapped in from projects.js.
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
    <article className="group flex flex-col rounded-lg border border-border bg-surface overflow-hidden">
      <div className="relative aspect-video bg-background">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-muted text-sm">
            Thumbnail
          </div>
        )}

        {(featured || research) && (
          <div className="absolute top-3 left-3 flex gap-2">
            {featured && <Badge>Featured</Badge>}
            {research && <Badge variant="outline">Research</Badge>}
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="font-display text-lg text-primary">{title}</h3>

        {description && (
          <p className="text-sm text-secondary leading-relaxed">
            {description}
          </p>
        )}

        <TagList tags={tags} />

        <div className="mt-auto flex gap-4 pt-3">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-secondary hover:text-primary transition-colors"
            >
              <FiGithub aria-hidden="true" /> Code
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-secondary hover:text-primary transition-colors"
            >
              <FiExternalLink aria-hidden="true" /> Live Demo
            </a>
          )}
        </div>
      </div>
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
