import profilePicture from "../assets/peter-hay-profile-picture-1.jpeg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding px-6 bg-card">
      <div className="content-width scroll-mt-56">
        <span className="inline-block text-sm tracking-widest uppercase text-muted-foreground mb-4">
          About
        </span>
        
        <div className="flex flex-col items-center mb-4">
          <img 
            src={profilePicture} 
            alt="Peter Hay" 
            className="w-32 h-32 rounded-full object-cover mb-2"
          />
        </div>
        
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-10 text-balance text-center">
          For over 20 years, Peter Hay has worked alongside leaders navigating complex change
        </h2>
        
        <div className="prose-editorial space-y-6">
          <p>Much of that work has taken place inside established organisations where something important has stalled. A product that should have launched by now but has lost momentum. A team working hard but not moving in the right direction. A strategy that looked convincing on paper but is struggling in practice. These moments rarely lack effort or intelligence. More often they lack the space to step back and see the situation clearly. </p>
          
          <p>My role is to provide that external perspective, working as a thinking partner to leaders who are responsible for making difficult things happen inside complex organisations. Someone who can move between the detail and the wider system around it. Close enough to the work to understand the reality of decisions, not just the frameworks used to describe them.</p>
          
          <p>I work best with experienced leaders who are already capable and thoughtful but find themselves dealing with a situation where pushing harder is no longer the answer. In those moments, additional help to clarify thinking can unlock progress surprisingly quickly.</p>
        </div>
      </div>
    </section>);

};

export default AboutSection;