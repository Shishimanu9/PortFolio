/**
 * Navbar links — data source. Each id must match the section id
 * rendered by the corresponding component (see the components folder)
 * so the anchor-scroll / active-link logic in useActiveSection works.
 */

export const navLinks = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
