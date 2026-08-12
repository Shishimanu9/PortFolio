import PropTypes from "prop-types";

/** Shared max-width/padding wrapper so every section aligns
 * consistently without repeating the same classes everywhere. */
export default function Container({ as: Tag = "div", className = "", children }) {
  return (
    <Tag className={`max-w-content mx-auto px-6 ${className}`}>
      {children}
    </Tag>
  );
}

Container.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
  children: PropTypes.node,
};
