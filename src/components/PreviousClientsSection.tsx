import logoWhite from "../assets/logos/reset54-logo-white.svg";

const PreviousClientsSection = () => {
  const clients = [
    { name: "Lloyds Bank", logo: logoWhite },
    { name: "Mastercard", logo: logoWhite },
    { name: "PepsiCo", logo: logoWhite },
    { name: "Mars", logo: logoWhite },
    { name: "Ordnance Survey", logo: logoWhite },
    { name: "Virgin Atlantic", logo: logoWhite }
  ];

  return (
    <section id="clients" className="section-padding px-6 bg-primary text-primary-foreground">
      <div className="container max-w-5xl mx-auto px-6 text-center scroll-mt-56">
        <span className="inline-block text-sm tracking-widest uppercase text-primary-foreground/60 mb-10">Selected Clients</span>
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
