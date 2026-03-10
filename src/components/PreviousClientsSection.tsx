const PreviousClientsSection = () => {
  const clients = [
    { name: "Lloyds Bank", logo: "/src/assets/logos/reset54-logo-white.svg" },
    { name: "Mastercard", logo: "/src/assets/logos/reset54-logo-white.svg" },
    { name: "PepsiCo", logo: "/src/assets/logos/reset54-logo-white.svg" },
    { name: "Mars", logo: "/src/assets/logos/reset54-logo-white.svg" },
    { name: "Ordnance Survey", logo: "/src/assets/logos/reset54-logo-white.svg" },
    { name: "Virgin Atlantic", logo: "/src/assets/logos/reset54-logo-white.svg" }
  ];

  return (
    <section id="clients" className="section-padding px-6 bg-primary text-primary-foreground">
      <div className="container max-w-5xl mx-auto px-6 text-center scroll-mt-56">
        <span className="inline-block text-sm tracking-widest uppercase text-primary-foreground/60 mb-4">Previously worked with</span>
        <div className="flex overflow-hidden w-full">
          <div className="flex animate-scroll">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 w-64 flex items-center justify-center mx-6"
              >
                <div className="text-center">
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="h-32 w-auto transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviousClientsSection;
