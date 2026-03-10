const AboutSection = () => {
  return (
    <section id="about" className="section-padding px-6 bg-card">
      <div className="content-width scroll-mt-56">
        <span className="inline-block text-sm tracking-widest uppercase text-muted-foreground mb-4">
          About
        </span>
        
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-10 text-balance">
          Two decades working alongside leaders navigating complex change.
        </h2>
        
        <div className="prose-editorial space-y-6">
          <p>Over the past twenty years I have worked with senior leaders inside established organisations where something important has stalled. A product that should have launched by now but has lost momentum. A team working hard but not moving in the right direction. A strategy that looked convincing on paper but is struggling in practice.</p>
          
          <p>These moments rarely lack effort or intelligence. More often they lack the space to step back and see the situation clearly. My role is to provide that perspective.</p>
          
          <p>The work I do sits somewhere between consulting and coaching, but is not quite either. I work as a thinking partner to leaders who are responsible for making difficult things happen inside complex organisations. Someone who can move between the detail and the wider system around it. Someone close enough to the work to understand the reality of decisions, not just the frameworks used to describe them.</p>
          
          <p>I tend to work best with experienced leaders who are already capable and thoughtful but find themselves dealing with a situation where pushing harder is no longer the answer. In those moments, clearer thinking can unlock progress surprisingly quickly.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;