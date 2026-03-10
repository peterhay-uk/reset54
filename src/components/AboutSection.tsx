const AboutSection = () => {
  const clients = [
    { name: "Lloyds Bank", logo: "/src/assets/logos/logo-white-lloyds-bank.svg" },
    { name: "Mastercard", logo: "/src/assets/logos/mastercard.svg" },
    { name: "PepsiCo", logo: "/src/assets/logos/pepsico.svg" },
    { name: "Mars", logo: "/src/assets/logos/mars.svg" },
    { name: "Ordnance Survey", logo: "/src/assets/logos/ordnance-survey.svg" },
    { name: "Virgin Atlantic", logo: "/src/assets/logos/virgin-atlantic.svg" }
  ];

  return (
    <section id="about" className="pt-16 px-6 bg-card">
      <div className="content-width scroll-mt-56">
        <span className="inline-block text-sm tracking-widest uppercase text-muted-foreground mb-4">
          About
        </span>
        
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-10 text-balance">
          Twenty years of working with leaders facing complex problems.
        </h2>
        
        <div className="prose-editorial space-y-6">
          <p>I've spent two decades helping senior leaders in established organisations navigate the messiness that comes with trying to do something impactful. Product launches that stalled. Teams that lost their way. Strategies that looked right on paper but felt wrong in practice.

          </p>
          
          <p>
            The work I do sits somewhere between consulting and coaching, but isn't quite either. It's more like having a thinking partner who can move between the detail and the big picture—someone who's been close enough to real work to understand the texture of decisions, not just the frameworks.
          </p>
          
          <p>
            I work best with people who are already good at what they do but feel stuck. Not for lack of effort, but because more effort isn't the answer.
          </p>
        </div>
        
        <div className="mt-16 pt-16 border-t border-border bg-primary text-primary-foreground px-6" id="clients">
          <div className="mb-6 scroll-mt-56">
            <span className="inline-block text-sm tracking-widest uppercase text-primary-foreground/60 mb-4 text-center">PREVIOUS CLIENTS</span>
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
        </div>
      </div>
    </section>);

};

export default AboutSection;