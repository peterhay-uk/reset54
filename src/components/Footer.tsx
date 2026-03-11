const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="content-width text-sm text-muted-foreground">
        <p>© 2026 Reset54 Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
