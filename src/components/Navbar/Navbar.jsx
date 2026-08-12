import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks } from "../../data/nav.js";
import useActiveSection from "../../hooks/useActiveSection.js";
import useScrollPosition from "../../hooks/useScrollPosition.js";
import Container from "../common/Container.jsx";
import NavLinkItem from "./NavLinkItem.jsx";
import MobileMenu from "./MobileMenu.jsx";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrollPosition();
  const activeId = useActiveSection(navLinks.map((link) => link.id));

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors ${
        scrolled ? "bg-background/90 backdrop-blur border-b border-border" : ""
      }`}
    >
      {/* Added px-4 to header container for minimal edge padding */}
      <div className="w-full flex items-center justify-between h-24 px-4 sm:px-6 md:px-8">
        {/* Name styled with text-3xl, font-extrabold, and whitespace-nowrap */}
        <a
          href="#"
          className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-primary whitespace-nowrap"
        >
          Yashika Basapure
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLinkItem key={link.id} link={link} isActive={activeId === link.id} />
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden text-primary"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      <MobileMenu
        open={mobileOpen}
        links={navLinks}
        activeId={activeId}
        onNavigate={() => setMobileOpen(false)}
      />
    </header>
  );
}