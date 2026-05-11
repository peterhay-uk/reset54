import { Link } from "react-router-dom";
import reset54Logo from "../assets/reset54-logo.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { label: "Home", id: "", href: "/" },
    { label: "Case Studies", id: "", href: "/case-studies" },
    { label: "AI Assessment", id: "", href: "/ai-readiness-assessment" },
  ];

  const scrollToSection = (item: { id: string }) => {
    if (item.id) {
      const element = document.getElementById(item.id);
      if (element) {
        const headerHeight = 80;
        const top = element.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-8">
          {/* Column 1: Logo and Strapline - 2 columns wide */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col space-y-4 text-left">
            <div className="text-left">
              <img 
                src={reset54Logo} 
                alt="Reset54 Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Helping senior leaders reset complexity into tangible outcomes with clarity and momentum
            </p>
          </div>

          {/* Column 2: Navigation - 1 column wide */}
          <div className="col-span-1 flex flex-col space-y-4 text-left">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Navigate
            </h3>
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                item.id ? (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link 
                    key={item.href}
                    to={item.href} 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </nav>
          </div>

          {/* Column 3: Get In Touch - 1 column wide */}
          <div className="col-span-1 flex flex-col space-y-4 text-left">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              GET IN TOUCH
            </h3>
            <div className="flex flex-col space-y-2">
              <a 
                href="https://calendar.app.google/7psqxnFSwgtFE8K3A" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Book a meeting
              </a>
              <a 
                href="https://www.reset54.co.uk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                www.reset54.co.uk
              </a>
            </div>
          </div>

          {/* Column 4: Legal - 1 column wide */}
          <div className="col-span-1 flex flex-col space-y-4 text-left">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              LEGAL
            </h3>
            <div className="flex flex-col space-y-2">
              <Link 
                to="/terms-of-use" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => window.scrollTo(0, 0)}
              >
                Terms of Use
              </Link>
              <Link 
                to="/privacy" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => window.scrollTo(0, 0)}
              >
                Privacy Policy
              </Link>
              <Link 
                to="/cookies" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => window.scrollTo(0, 0)}
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>
              © {currentYear} Reset54 Ltd. All rights reserved.
            </p>
            <p>
              Registered in England and Wales · Company No. 17001910 · ICO ZC134688
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
