const logoFiles = import.meta.glob<{ default: string }>(
  ["../assets/logos/logo-*.svg", "../assets/logos/logo-*.png"],
  { eager: true }
);

const clients = Object.entries(logoFiles)
  .map(([path, module]) => {
    const filename = path.split("/").pop()?.replace(/^logo-/, "").replace(/\.(svg|png)$/, "") ?? "";
    const name = filename
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    return { name, logo: module.default, isPng: path.endsWith(".png") };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

const PreviousClientsSection = () => {
  return (
    <section id="clients" className="section-padding text-primary-foreground bg-primary-foreground">
      <div className="container max-w-5xl mx-auto px-6 text-center scroll-mt-56 mb-10">
        <span className="inline-block text-sm tracking-widest uppercase text-muted-foreground">Selected Clients</span>
      </div>
      <div className="overflow-hidden w-full relative">
        <div className="inline-flex animate-scroll will-change-transform" style={{ whiteSpace: 'nowrap' }}>
          {[0, 1].map((loopIndex) => (
            <div key={loopIndex} className="inline-flex flex-nowrap" aria-hidden={loopIndex === 1}>
              {clients.map((client) => (
                <div
                  key={`${client.name}-${loopIndex}`}
                  className="flex-shrink-0 inline-flex items-center justify-center px-6 md:px-12"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className={`w-auto object-contain ${client.isPng ? "h-20 md:h-28" : "h-10 md:h-16"}`}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreviousClientsSection;
