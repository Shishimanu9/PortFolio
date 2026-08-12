import PropTypes from "prop-types";

/** Single anchor-scroll nav link with active-state styling. */
export default function NavLinkItem({ link, isActive, onClick }) {
  return (
    <a
      href={`#${link.id}`}
      onClick={onClick}
      className={`text-lg transition-colors ${
        isActive ? "text-primary" : "text-secondary hover:text-primary"
      }`}
    >
      {link.label}
    </a>
  );
}

NavLinkItem.propTypes = {
  link: PropTypes.shape({ id: PropTypes.string, label: PropTypes.string }).isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};
