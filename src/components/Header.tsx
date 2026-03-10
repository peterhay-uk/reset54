import { useState, useEffect } from "react";
import logo from "../assets/reset54-logo.svg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
          <img 
            src={logo} 
            alt="Reset54" 
            className="h-16 w-auto"
          />
        </a>
        <nav className="flex items-center gap-8">
          <button
            onClick={() => scrollToSection("clients")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
          >
            Previously worked with
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("work")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
          >
            Where I Can Be Most Useful
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
          >
            Get in Touch
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
