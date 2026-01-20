const AboutSection = () => {
  return (
    <section id="about" className="section-padding px-6 bg-card">
      <div className="content-width">
        <span className="inline-block text-sm tracking-widest uppercase text-muted-foreground mb-4">
          About
        </span>
        
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-10 text-balance">
          Twenty years of working with leaders facing complex problems.
        </h2>
        
        <div className="prose-editorial space-y-6">
          <p>
            I've spent two decades helping senior leaders in established organisations navigate the messiness that comes with trying to do something meaningful. Product launches that stalled. Teams that lost their way. Strategies that looked right on paper but felt wrong in practice.
          </p>
          
          <p>
            The work I do sits somewhere between consulting and coaching, but isn't quite either. It's more like having a thinking partner who can move between the detail and the big picture—someone who's been close enough to real work to understand the texture of decisions, not just the frameworks.
          </p>
          
          <p>
            I work best with people who are already good at what they do but feel stuck. Not for lack of effort, but because more effort isn't the answer.
          </p>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Previously: Strategy roles at Barclays, Sainsbury's, and the BBC. Advisory work with public sector bodies and scale-ups. Based in London.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
