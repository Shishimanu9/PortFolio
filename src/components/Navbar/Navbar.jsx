import { useState, useEffect } from "react";
import Container from "../common/Container.jsx";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-5 transition-all duration-300">
      <Container>
        <nav
          className={`flex items-center justify-between px-8 py-4 rounded-full border transition-all duration-300 ${
            scrolled
              ? "bg-[#18181b]/90 backdrop-blur-xl border-white/15 shadow-2xl"
              : "bg-[#18181b]/60 backdrop-blur-md border-white/10"
          }`}
        >
          {/* Big Name on Left Side */}
          <a
            href="#"
            className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white tracking-tight hover:opacity-80 transition-opacity font-display"
          >
            Yashika Basapure
          </a>

          {/* Nav Links on Right Side */}
          <div className="flex items-center">
            <div className="hidden lg:flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-full border border-white/10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-300 hover:text-white px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}