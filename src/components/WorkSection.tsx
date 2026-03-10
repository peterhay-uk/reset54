import { ArrowRight } from "lucide-react";

const WorkSection = () => {
  const approaches = [
  {
    title: "Making sense of what's happening",
    description:
    "When the diagnosis isn't clear, I help leaders understand what they're really dealing with—beyond the surface symptoms."
  },
  {
    title: "Resetting direction",
    description:
    "Not a new strategy deck. A clearer sense of what actually matters and what can be let go."
  },
  {
    title: "Building momentum differently",
    description:
    "Finding ways to make progress that don't rely on pushing harder or hiring more people."
  },
  {
    title: "Thinking through complexity",
    description:
    "Some problems don't have clean solutions. I help leaders hold ambiguity without getting paralysed."
  }];


  return (
    <section id="work" className="section-padding px-6">
      <div className="content-width scroll-mt-56">
        <span className="inline-block text-sm tracking-widest uppercase text-muted-foreground mb-4">
          How I Help
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 text-balance">
          Support that starts with understanding, not selling.
        </h2>

        <p className="prose-editorial mb-12">I don't offer fixed packages or methodologies. Instead, I work with you to understand what's actually going on then figure out together what kind of support would help.

        </p>

        <div className="space-y-8">
          {approaches.map((approach, index) =>
          <div
            key={index}
            className="group p-6 -mx-6 rounded-lg hover:bg-card transition-colors duration-300">

              <div className="flex items-center gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center text-sm font-medium">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2 group-hover:text-accent transition-colors">
                    {approach.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {approach.description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-16 p-8 bg-card rounded-lg border border-border">
          <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4">
            The shape of work
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Most engagements start with a short, focused burst—a few conversations to understand the situation. From there, we decide together whether ongoing support makes sense. This might look like retained advisory, fractional involvement, or something more bespoke.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-foreground transition-colors group">

            Start a conversation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>);

};

export default WorkSection;