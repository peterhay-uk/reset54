import { Helmet } from "react-helmet-async";
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
import fulhamPierLogo from "../assets/logos/logo-fulham-pier.svg";
import bigIssueLogo from "../assets/logos/logo-big-issue.svg";

const HERO_CAPTIONS = [
  "Clarity over noise",
  "Simplicity over complexity",
  "Momentum over motion",
  "Progress over theatre",
  "Outcomes over activity",
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Helmet>
        <title>Project highlights | Peter Hay | Reset54</title>
        <meta name="description" content="Case studies from PepsiCo, Mastercard, Lloyds, Southern Water and more – how Peter Hay untangles complex problems and restores progress when it has stalled." />
        <link rel="canonical" href="https://www.reset54.co.uk/case-studies" />
        <meta property="og:title" content="Project highlights | Peter Hay | Reset54" />
        <meta property="og:description" content="Case studies from PepsiCo, Mastercard, Lloyds, Southern Water and more – how Peter Hay untangles complex problems and restores progress when it has stalled." />
        <meta property="og:url" content="https://www.reset54.co.uk/case-studies" />
      </Helmet>
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

        {/* Turning complexity into momentum Section */}
        <section className="section-padding px-6 bg-primary text-primary-foreground">
          <div className="content-width text-center">
            <span className="inline-block text-sm tracking-widest uppercase text-primary-foreground/60 mb-12">
              Turning complexity into momentum
            </span>

            <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto mb-10">
              Each engagement starts in a different place: a delayed launch, a misaligned team, a strategy losing traction, or a service under pressure. What connects them is the need to step back, simplify what matters, and restore progress where complexity has started to slow decisions and delivery.
            </p>
          </div>
        </section>
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
                  <strong>My Role:</strong> Accountable client executive, managing the delivery of £1.5m of projects across multiple workstreams.
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
                      Aligned 12 global product groups, defined Materiality, Velocity, Quality metrics, created practical decision tools, and removed friction from governance processes.
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
                  <strong>My Role:</strong> Led programme to optimise the product development governance process for 12 global business units.
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
                      A 6 month onboarding process for new commercial customers was underpinned by fragmented systems and poor customer experience created significant operational inefficiency and frustration.
                    </p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="font-semibold text-foreground mb-3">Approach</h3>
                    <p className="text-muted-foreground">
                      Introduced agile and lean experimentation methodologies to test solutions with real customers. Then scaled these within the newly formed embedded innovation lab, further streamlining core banking processes.
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
                  <strong>My Role:</strong> Re-engineered B2B legacy processes into agile, digital-first workflows within 100+ person internal innovation Lab.
                </p>
                
                <p className="text-muted-foreground italic">
                  The breakthrough came from redesigning the system, not optimising the steps.
                </p>
              </div>
            </div>

            {/* Fulham Pier */}
            <div className="mb-20 pb-20 border-b border-border">
              <img src={fulhamPierLogo} alt="Fulham Pier" className="h-10 md:h-16 w-auto mb-4 opacity-70 mx-auto" />
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
                What if you're designing an experience before the space exists?
              </h2>
              <p className="italic text-muted-foreground mb-6">
                A complex physical transformation requiring unified digital and operational journeys.
              </p>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="font-semibold text-foreground mb-3">Challenge</h3>
                    <p className="text-muted-foreground">
                      A major destination had to be designed with construction still underway. With multiple stakeholders shaping the wider vision in parallel, there was significant ambiguity around customer journeys, operational workflows and supplier priorities.
                    </p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="font-semibold text-foreground mb-3">Approach</h3>
                    <p className="text-muted-foreground">
                      Translated the destination vision into a connected end-to-end digital placemaking experience, spanning customer research, journey design, service blueprinting, platform evaluation, workflow design and product ownership.
                    </p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="font-semibold text-foreground mb-3">Impact</h3>
                    <p className="text-muted-foreground">
                      Critical day-one journeys were prioritised and third-party suppliers aligned around a shared delivery blueprint. We set the right digital foundations and created a phased roadmap to allow the destination to evolve beyond opening.
                    </p>
                  </div>
                </div>  
                <p className="text-muted-foreground">
                  <strong>My Role:</strong> Programme management and product ownership of multi-channel digital experience across the unique venue.
                </p>
                
                <p className="text-muted-foreground italic">
                  From vision and construction complexity to a live, connected riverside destination.
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
                      No internal innovation capability, slow delivery processes, and rising pressure from ageing infrastructure created significant business risk and operational constraints as well as threat of regulatory fines.
                    </p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="font-semibold text-foreground mb-3">Approach</h3>
                    <p className="text-muted-foreground">
                      Co-designed and ran innovation capability with a team of 12. Designed a prioritisation model focused on high-impact problems, fostered new ways of working and launched live experiments within first 3 months.
                    </p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="font-semibold text-foreground mb-3">Impact</h3>
                    <p className="text-muted-foreground">
                      Achieved <strong>£25m savings</strong>, improved organisational resilience, and successfully adopted new ways of working across the business. Upskilled internal team to continue innovation activity independently.
                    </p>
                  </div>
                </div>  
                <p className="text-muted-foreground">
                  <strong>My Role:</strong> Founding member of team that bootstrapped client innovation capability and then migrated it in-house.
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
                  <strong>My Role:</strong> Led customer-centric research and ideation to reimagine this legacy process from the ground up.
                </p>
                
                <p className="text-muted-foreground italic">
                  The issue wasn't the process. It was who it was designed for.
                </p>
              </div>
            </div>

            {/* The Big Issue */}
            <div className="mb-20 pb-20 border-b border-border">
              <img src={bigIssueLogo} alt="The Big Issue" className="h-10 md:h-16 w-auto mb-4 opacity-70 mx-auto" />
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
                What if cashless meant excluding the people who rely on it most?
              </h2>
              <p className="italic text-muted-foreground mb-6">
                Turning digital and financial barriers into a scalable vendor empowerment service
              </p>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="font-semibold text-foreground mb-3">Challenge</h3>
                    <p className="text-muted-foreground">
                      As society became increasingly digital and cashless there was a growing risk vendors could be excluded from the financial systems needed to sell, manage earnings and build greater independence.
                    </p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="font-semibold text-foreground mb-3">Approach</h3>
                    <p className="text-muted-foreground">
                      Sensitively conducted ethnographic research created a clearer picture of the real barriers around confidence, online banking and digital capability. This helped translate needs into a viable service model that could scale across the vendor network.
                    </p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="font-semibold text-foreground mb-3">Impact</h3>
                    <p className="text-muted-foreground">
                      The work created a clear, evidence-led route from social challenge to live service validation with a beta product designed and live pilot shipped to vendors in 10 weeks, enabling the most critical features to be tested in real-world scenarios.
                    </p>
                  </div>
                </div>  
                <p className="text-muted-foreground">
                  <strong>My Role:</strong> Led project research team, concept design and vendor evaluation and selection.
                </p>
                
                <p className="text-muted-foreground italic">
                  From exclusion risk to a scalable pathway for vendor independence.
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

        {/* Start a conversation Section */}
        <section id="contact" className="section-padding px-6 bg-primary text-primary-foreground">
          <div className="content-width text-center">
            <span className="inline-block text-sm tracking-widest uppercase text-primary-foreground/60 mb-4">
              START A CONVERSATION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-6 text-balance">
              If this resonates, let's talk
            </h2>

            <p className="text-lg text-primary-foreground/80 max-w-lg mx-auto mb-10">
              A focused discussion to understand the challenge, desired outcomes and explore whether I can help.
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
