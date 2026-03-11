const logoFiles = import.meta.glob<{ default: string }>(
  ["../assets/logos/logo-*.svg", "../assets/logos/logo-*.png"],
  { eager: true }
);

console.log("logoFiles:", logoFiles);

const clients = Object.entries(logoFiles)
  .map(([path, module]) => {
    const filename = path.split("/").pop()?.replace(/^logo-/, "").replace(/\.(svg|png)$/, "") ?? "";
    const name = filename
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    console.log("client:", name, "logo:", module.default, "module:", module);
    return { name, logo: module.default, isPng: path.endsWith(".png") };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

const PreviousClientsSection = () => {
  return (
    <section id="clients" className="section-padding px-6 text-primary-foreground bg-primary-foreground">
      <div className="container max-w-5xl mx-auto px-6 text-center scroll-mt-56">
        <span className="inline-block text-sm tracking-widest uppercase mb-10 text-muted-foreground">Selected Clients</span>
        <div className="flex overflow-hidden w-full">
          <div className="flex animate-scroll">
            {[...clients, ...clients].map((client, index) =>
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center px-12">
                <div className="text-center">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className={`w-auto object-contain transition-all duration-300 ${client.isPng ? "h-28" : "h-16"}`}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviousClientsSection;
