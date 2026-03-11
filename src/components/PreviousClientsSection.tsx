import logoLloyds from "../assets/logos/logo-lloyds.svg";
import logoMars from "../assets/logos/logo-mars.svg";
import logoMastercard from "../assets/logos/logo-mastercard.svg";
import logoOrdnanceSurvey from "../assets/logos/logo-ordnance-survey.svg";
import logoPepsico from "../assets/logos/logo-pepsico.png";
import logoSouthernWater from "../assets/logos/logo-southern-water.svg";
import logoVirginAtlantic from "../assets/logos/logo-virgin-atlantic.svg";

const PreviousClientsSection = () => {
  const clients = [
  { name: "Lloyds Bank", logo: logoLloyds },
  { name: "Mastercard", logo: logoMastercard },
  { name: "PepsiCo", logo: logoPepsico },
  { name: "Mars", logo: logoMars },
  { name: "Ordnance Survey", logo: logoOrdnanceSurvey },
  { name: "Southern Water", logo: logoSouthernWater },
  { name: "Virgin Atlantic", logo: logoVirginAtlantic }];


  return (
    <section id="clients" className="section-padding px-6 text-primary-foreground bg-primary-foreground">
      <div className="container max-w-5xl mx-auto px-6 text-center scroll-mt-56">
        <span className="inline-block text-sm tracking-widest uppercase mb-10 text-muted-foreground">Selected Clients</span>
        <div className="flex overflow-hidden w-full">
          <div className="flex animate-scroll gap-24">
            {[...clients, ...clients].map((client, index) =>
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center">
              
                <div className="text-center">
                  <img
                  src={client.logo}
                  alt={client.name}
                  className={`w-auto object-contain transition-all duration-300 ${client.name === "PepsiCo" ? "h-28" : "h-16"}`} />
                
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default PreviousClientsSection;