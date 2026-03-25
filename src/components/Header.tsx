import { useState, useEffect } from "react";
import { Menu, X, Linkedin } from "lucide-react";
import logo from "../assets/reset54-logo.svg";

const navItems = [
  { label: "Work", id: "clients" },
  { label: "About", id: "about" },
  { label: "Value", id: "work" },
  { label: "Contact", id: "contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (item: { id: string }) => {
    // Handle internal anchor scrolling
    if (item.id) {
      const element = document.getElementById(item.id);
      if (element) {
        const headerHeight = 80;
        const top = element.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-sm border-b border-border py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container max-w-5xl mx-auto px-6 flex items-center justify-center relative">
          {/* Hamburger button - left */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute left-6 z-[60] p-2 text-foreground hover:text-muted-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <a
            href="/"
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <img src={logo} alt="Reset54" className="h-16 w-auto" />
          </a>

          {/* LinkedIn icon - right */}
          <a
            href="https://www.linkedin.com/in/peterhay/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-6 p-2 text-foreground hover:text-muted-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </header>

      {/* Fullscreen overlay menu - outside header to avoid clipping */}
      <div
        className={`fixed inset-0 z-[55] bg-background/90 backdrop-blur-md flex items-center justify-center transition-all duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <nav className="flex flex-col items-center gap-10" onClick={(e) => e.stopPropagation()}>
          {navItems.map((item) => (
            <button
              key={item.id || item.href}
              onClick={() => scrollToSection(item)}
              className="text-3xl font-light text-foreground hover:text-muted-foreground transition-colors tracking-wide"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
