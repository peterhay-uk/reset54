const PreviousClientsSection = () => {
  const clients = [
    { name: "Lloyds Bank", logo: "/src/assets/logos/logo-white-lloyds-bank.svg" },
    { name: "Mastercard", logo: "/src/assets/logos/mastercard.svg" },
    { name: "PepsiCo", logo: "/src/assets/logos/pepsico.svg" },
    { name: "Mars", logo: "/src/assets/logos/mars.svg" },
    { name: "Ordnance Survey", logo: "/src/assets/logos/ordnance-survey.svg" },
    { name: "Virgin Atlantic", logo: "/src/assets/logos/virgin-atlantic.svg" }
  ];

  return (
    <section id="clients" className="section-padding px-6 bg-primary text-primary-foreground">
      <div className="content-width text-center scroll-mt-56">
        <span className="inline-block text-sm tracking-widest uppercase text-primary-foreground/60 mb-4">PREVIOUS CLIENTS</span>
        <div className="flex overflow-hidden w-full">
          <div className="flex animate-scroll">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 w-48 flex items-center justify-center mx-8"
              >
                <div className="text-center">
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="h-48 w-auto transition-all duration-300"
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
