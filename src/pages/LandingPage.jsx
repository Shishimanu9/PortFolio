import Hero from "../components/Hero/Hero.jsx";
import About from "../components/About/About.jsx";
import Services from "../components/Services/Services.jsx";
import FeaturedProjects from "../components/FeaturedProjects/FeaturedProjects.jsx";
import Experience from "../components/Experience/Experience.jsx";
import Skills from "../components/Skills/Skills.jsx";
import Resume from "../components/Resume/Resume.jsx";
import Contact from "../components/Contact/Contact.jsx";

// Landing page is pure composition — each section owns its own
// data mapping internally, so this file stays a table of contents.
// Reorder sections by reordering this list.
export default function LandingPage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <FeaturedProjects />
      <Experience />
      <Skills />
      <Resume />
      <Contact />
    </>
  );
}
