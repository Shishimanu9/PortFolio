import PropTypes from "prop-types";
import NavLinkItem from "./NavLinkItem.jsx";

/** Slide-down mobile nav panel. Separated from Navbar so the
 * open/close animation and layout do not clutter the main component. */
export default function MobileMenu({ open, links, activeId, onNavigate }) {
  if (!open) return null;

  return (
    <nav className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-4">
      {links.map((link) => (
        <NavLinkItem
          key={link.id}
          link={link}
          isActive={activeId === link.id}
          onClick={onNavigate}
        />
      ))}
    </nav>
  );
}

MobileMenu.propTypes = {
  open: PropTypes.bool,
  links: PropTypes.array.isRequired,
  activeId: PropTypes.string,
  onNavigate: PropTypes.func,
};
