import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container max-w-5xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="flex items-center hover:opacity-80 transition-opacity"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img src={logo} alt="Reset54" className="h-16 w-auto" />
        </a>

        {/* Hamburger button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 p-2 text-foreground hover:text-muted-foreground transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Fullscreen overlay menu */}
      <div
        className={`fixed inset-0 z-40 bg-background/98 backdrop-blur-md flex items-center justify-center transition-all duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-3xl font-light text-foreground hover:text-muted-foreground transition-colors tracking-wide"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
