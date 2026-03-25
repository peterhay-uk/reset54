import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Mail, Users, Settings, Database, Clock, ArrowRight, RefreshCw, Target, Compass } from "lucide-react";
import RotatingText from "../components/RotatingText";
import pepsiCoLogo from "../assets/logos/logo-pepsico.png";
import mastercardLogo from "../assets/logos/logo-mastercard.svg";
import lloydsLogo from "../assets/logos/logo-lloyds.svg";
import southernWaterLogo from "../assets/logos/logo-southern-water.svg";
import calorGasLogo from "../assets/logos/logo-calor-gas.svg";

const HERO_CAPTIONS = [
  "Simplicity over complexity",
  "Clarity over noise",
  "Progress over theatre",
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        {/* Project Highlights Section */}
        <section className="min-h-[70vh] md:min-h-screen flex items-center justify-center px-6 pt-16 pb-4 md:pt-32 md:pb-16">
          <div className="content-width text-center">
            <div className="animate-fade-up">
              <span className="inline-block text-sm tracking-widest uppercase text-muted-foreground mb-6">
                Project Highlights
              </span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl md:text-[4.2rem] lg:text-[4.2rem] text-foreground text-balance leading-[1.1] animate-fade-up-delay">
              How I untangle complex problems when progress stalls
            </h1>
            
            <div className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto animate-fade-up-delay-2 hero-text-container" style={{textDecoration: 'none'}}>
              <RotatingText
                captions={HERO_CAPTIONS}
                interval={3500}
                fadeDuration={500}
                className="hero-rotating-text"
              />
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="section-padding px-6 bg-white">
          <div className="content-width max-w-4xl">
            
            {/* PepsiCo */}
            <div className="mb-20 pb-20 border-b border-border">
              <img src={pepsiCoLogo} alt="PepsiCo" className="h-20 md:h-28 w-auto mb-4 opacity-70 mx-auto object-contain" />
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
                What if critical data exists but no one trusts or can use it?
              </h2>
              <p className="italic text-muted-foreground mb-6">
                Data was everywhere, but fragmentation, duplication and mistrust made it unusable.
              </p>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="font-semibold text-foreground mb-3">Challenge</h3>
                    <p className="text-muted-foreground">
                      R&D teams relied on disconnected systems to access flavour and seasoning data, leading to significant duplication of work, manual effort to extract and combine data, growing mistrust in reports, and no clear ownership across systems.
                    </p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="font-semibold text-foreground mb-3">Approach</h3>
                    <p className="text-muted-foreground">
                      Mapped the system and focused on where value was being lost by working directly with R&D stakeholders, identifying duplication and trust breakdowns, creating an end-to-end view of data flows, defining practical improvements, and building a grounded business case.
                    </p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="font-semibold text-foreground mb-3">Impact</h3>
                    <p className="text-muted-foreground">
                      Identified <strong>5,000+ hours of efficiency opportunity</strong>, created a clear path towards a connected data ecosystem, improved trust and usability, and built a stronger foundation for future investment.
                    </p>
                  </div>
                </div>  
                <p className="text-muted-foreground">
                  <strong>My Role:</strong> Led discovery, simplified the system and built the commercial case for change.
                </p>
                
                <p className="text-muted-foreground italic">
                  This wasn't a data problem. It was a system problem.
                </p>
              </div>
            </div>

            {/* Mastercard */}
            <div className="mb-20 pb-20 border-b border-border">
              <img src={mastercardLogo} alt="Mastercard" className="h-10 md:h-16 w-auto mb-4 opacity-70 mx-auto" />
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
                What if product decisions slow to a crawl across a global organisation?
              </h2>
              <p className="italic text-muted-foreground mb-6">
                Growth created complexity. Complexity slowed decisions. No one owned the system.
              </p>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="font-semibold text-foreground mb-3">Challenge</h3>
                    <p className="text-muted-foreground">
                      Siloed teams across regions, limited visibility for leaders, no shared definition of success, and increasing delays created barriers to effective product development.
                    </p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="font-semibold text-foreground mb-3">Approach</h3>
                    <p className="text-muted-foreground">
                      Aligned 10 global product groups, defined Materiality, Velocity, Quality metrics, created practical decision tools, and removed friction from governance processes.
                    </p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="font-semibold text-foreground mb-3">Impact</h3>
                    <p className="text-muted-foreground">
                      Saved <strong>3 years</strong> in development timelines, achieved <strong>70% global alignment</strong>, and enabled faster decision-making across the organisation.
                    </p>
                  </div>
                </div>  
                <p className="text-muted-foreground">
                  <strong>My Role:</strong> Led governance design and aligned senior stakeholders.
                </p>
                
                <p className="text-muted-foreground italic">
                  This wasn't about more governance. It was about making better decisions, faster.
                </p>
              </div>
            </div>

            {/* Lloyds Commercial Bank */}
            <div className="mb-20 pb-20 border-b border-border">
              <img src={lloydsLogo} alt="Lloyds Commercial Bank" className="h-10 md:h-16 w-auto mb-4 opacity-70 mx-auto" />
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
                What if complexity means onboarding takes 6 months to complete?
              </h2>
              <p className="italic text-muted-foreground mb-6">
                Compliance, legacy systems and siloed teams created a process no one could fix end-to-end.
              </p>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="font-semibold text-foreground mb-3">Challenge</h3>
                    <p className="text-muted-foreground">
                      A 6 month onboarding process, fragmented systems, and poor customer experience created significant operational inefficiency and frustration.
                    </p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="font-semibold text-foreground mb-3">Approach</h3>
                    <p className="text-muted-foreground">
                      Built an embedded innovation lab, introduced agile and experimentation methodologies, tested solutions with real customers, and enabled digital signatures to streamline processes.
                    </p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="font-semibold text-foreground mb-3">Impact</h3>
                    <p className="text-muted-foreground">
                      Reduced onboarding time from 6 months to <strong>7 days</strong>, created a flagship transformation programme, and embedded new ways of working across the organisation.
                    </p>
                  </div>
                </div>  
                <p className="text-muted-foreground">
                  <strong>My Role:</strong> Co-led the lab and embedded new behaviours.
                </p>
                
                <p className="text-muted-foreground italic">
                  The breakthrough came from redesigning the system, not optimising the steps.
                </p>
              </div>
            </div>

            {/* Southern Water */}
            <div className="mb-20 pb-20 border-b border-border">
              <img src={southernWaterLogo} alt="Southern Water" className="h-10 md:h-16 w-auto mb-4 opacity-70 mx-auto" />
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
                What if legacy systems and slow decisions start costing millions?
              </h2>
              <p className="italic text-muted-foreground mb-6">
                Ageing infrastructure and linear processes created risk and delay.
              </p>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="font-semibold text-foreground mb-3">Challenge</h3>
                    <p className="text-muted-foreground">
                      No innovation capability, slow delivery processes, and rising pressure from ageing infrastructure created significant business risk and operational constraints.
                    </p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="font-semibold text-foreground mb-3">Approach</h3>
                    <p className="text-muted-foreground">
                      Built an innovation lab with a team of 12, designed a prioritisation model focused on high-impact problems, and fostered new ways of working.
                    </p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="font-semibold text-foreground mb-3">Impact</h3>
                    <p className="text-muted-foreground">
                      Achieved <strong>£25m savings</strong>, improved organisational resilience, and successfully adopted new ways of working across the business.
                    </p>
                  </div>
                </div>  
                <p className="text-muted-foreground">
                  <strong>My Role:</strong> Led programme end-to-end and built the capability.
                </p>
                
                <p className="text-muted-foreground italic">
                  This wasn't about generating ideas. It was about making change actually happen.
                </p>
              </div>
            </div>

            {/* Calor Gas */}
            <div className="mb-20 pb-20 border-b border-border">
              <img src={calorGasLogo} alt="Calor Gas" className="h-10 md:h-16 w-auto mb-4 opacity-70 mx-auto" />
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
                What if a core customer process hasn't changed in decades?
              </h2>
              <p className="italic text-muted-foreground mb-6">
                A legacy process persisted because it worked operationally, not for customers.
              </p>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="font-semibold text-foreground mb-3">Challenge</h3>
                    <p className="text-muted-foreground">
                      A core customer process unchanged since 1935, misaligned with modern customer needs, and limited visibility of operational issues created systemic inefficiency.
                    </p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="font-semibold text-foreground mb-3">Approach</h3>
                    <p className="text-muted-foreground">
                      Conducted comprehensive customer and stakeholder research, mapped the complete end-to-end journey, identified key friction points, and created new solution concepts.
                    </p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="font-semibold text-foreground mb-3">Impact</h3>
                    <p className="text-muted-foreground">
                      Gained clear visibility into process failures, achieved stakeholder alignment on required changes, and established a solid foundation for complete process redesign.
                    </p>
                  </div>
                </div>  
                <p className="text-muted-foreground">
                  <strong>My Role:</strong> Led research and translated insight into action.
                </p>
                
                <p className="text-muted-foreground italic">
                  The issue wasn't the process. It was who it was designed for.
                </p>
              </div>
            </div>

            {/* The Big Issue */}
            <div className="mb-20">
              <p className="text-muted-foreground mb-4 opacity-70">The Big Issue</p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
                What if frontline teams lack clarity, consistency and confidence?
              </h2>
              <p className="italic text-muted-foreground mb-6">
                Mission-led organisations drift when frontline experience and strategy fall out of sync.
              </p>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="font-semibold text-foreground mb-3">Challenge</h3>
                    <p className="text-muted-foreground">
                      Inconsistent service delivery, lack of frontline clarity, and disconnect between teams created operational confusion and reduced effectiveness.
                    </p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="font-semibold text-foreground mb-3">Approach</h3>
                    <p className="text-muted-foreground">
                      Embedded within teams to understand context, ran workshops across the UK to gather insights, generated and tested ideas from 249 concepts down to 10 proven solutions, and built a shared journey map.
                    </p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="font-semibold text-foreground mb-3">Impact</h3>
                    <p className="text-muted-foreground">
                      Achieved more consistent service delivery, empowered teams to run their own improvement sprints, and created shared understanding across the entire organisation.
                    </p>
                  </div>
                </div>  
                <p className="text-muted-foreground">
                  <strong>My Role:</strong> Worked inside the organisation to drive and embed change.
                </p>
                
                <p className="text-muted-foreground italic">
                  Real change came from the people closest to the problem.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Section */}
        <section className="py-16 px-6 bg-muted/30">
          <div className="content-width max-w-6xl text-center">
            <span className="inline-block text-sm tracking-widest uppercase text-muted-foreground mb-12">
              THE COMMON THREAD
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-lg border">
                <div className="flex flex-col items-center text-center space-y-4">
                  <Users className="w-8 h-8 text-accent" />
                  <p className="font-serif text-lg text-foreground leading-relaxed">
                    Complex problems that span multiple teams and functions
                  </p>
                </div>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <div className="flex flex-col items-center text-center space-y-4">
                  <Settings className="w-8 h-8 text-accent" />
                  <p className="font-serif text-lg text-foreground leading-relaxed">
                    Legacy systems and processes that no longer serve modern needs
                  </p>
                </div>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <div className="flex flex-col items-center text-center space-y-4">
                  <Database className="w-8 h-8 text-accent" />
                  <p className="font-serif text-lg text-foreground leading-relaxed">
                    Data fragmentation and loss of trust in existing information
                  </p>
                </div>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <div className="flex flex-col items-center text-center space-y-4">
                  <Clock className="w-8 h-8 text-accent" />
                  <p className="font-serif text-lg text-foreground leading-relaxed">
                    Decision-making bottlenecks that slow commercial progress
                  </p>
                </div>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <div className="flex flex-col items-center text-center space-y-4">
                  <Compass className="w-8 h-8 text-accent" />
                  <p className="font-serif text-lg text-foreground leading-relaxed">
                    Frontline teams disconnected from strategic direction
                  </p>
                </div>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <div className="flex flex-col items-center text-center space-y-4">
                  <RefreshCw className="w-8 h-8 text-accent" />
                  <p className="font-serif text-lg text-foreground leading-relaxed">
                    Previous attempts at change that haven't delivered results
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Please Get in Touch Section */}
        <section className="section-padding px-6 bg-primary text-primary-foreground">
          <div className="content-width text-center">
            <span className="inline-block text-sm tracking-widest uppercase text-primary-foreground/60 mb-4">
              Please Get in Touch
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-6 text-balance">
              If this resonates, let's talk
            </h2>

            <p className="text-lg text-primary-foreground/80 max-w-lg mx-auto mb-10">
              A first conversation is just that, a chance to understand each other and see if there's a fit. No pressure, no sales pitch.
            </p>

            <a
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary-foreground text-primary rounded-md font-medium hover:bg-accent hover:text-accent-foreground transition-colors duration-300" 
              href="mailto:peter.hay@reset54.co.uk"
            >
              <Mail className="w-5 h-5" />
              peter.hay@reset54.co.uk
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
