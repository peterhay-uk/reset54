import { ArrowRight } from "lucide-react";

const WorkSection = () => {
  const approaches = [
  {
    title: "When the problem is not yet clear",
    description:
    "Clarity on what is really happening beneath the surface"
  },
  {
    title: "When direction feels uncertain",
    description:
    "A clearer sense of what matters and where to focus next"
  },
  {
    title: <>When teams are working hard<br className="md:hidden" /> but progress is slow</>,
    description:
    "Momentum restored without increasing pressure"
  },
  {
    title: "When the situation is genuinely complex",
    description:
    "Thoughtful decisions made with greater confidence"
  }];


  return (
    <section id="work" className="section-padding px-6">
      <div className="content-width scroll-mt-56">
        <span className="inline-block text-sm tracking-widest uppercase text-muted-foreground mb-4">
          Where I Can Be Most Useful
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 text-balance">
          Support that starts with understanding, not selling
        </h2>

        <p className="prose-editorial mb-12">I do not offer fixed packages or predefined methodologies. Every situation is different.

Instead, I work with leaders to understand what is actually happening beneath the surface and then decide together what kind of support would be most useful.</p>

        <div className="space-y-8">
          {approaches.map((approach, index) =>
          <div
            key={index}
            className="p-6 -mx-6 rounded-lg bg-card">

              <div className="flex items-start gap-4 justify-center text-center">
                <div>
                  <h3 className="font-serif text-xl md:text-2xl text-accent mb-2">
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
            The shape of the work
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Most engagements start with a short, focused burst. A few conversations to understand the situation. From there, we decide together whether ongoing support makes sense. This might look like retained advisory, fractional involvement, or something more bespoke.
          </p>
        </div>
      </div>
    </section>);

};

export default WorkSection;