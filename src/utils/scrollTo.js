/** Smoothly scrolls to a section by id — used by CTA buttons/links
 * that navigate within the single landing page. */
export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}
