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
          Calm conviction in complex moments
        </h2>
        
        <div className="prose-editorial space-y-6">
          <p>For over 20 years, Peter Hay has worked alongside leaders navigating complex change. Much of that work has taken place inside established organisations where something important has stalled. A product that should have launched but has lost momentum. A team working hard but not moving in the right direction. A strategy that looked convincing on paper yet is struggling in practice. These situations rarely lack effort or intelligence. More often, they lack the space to step back, see the system clearly, and reset with confidence.</p>
          
          <p>Peter works as a thinking partner to leaders responsible for making difficult things happen inside complex organisations. He moves comfortably between the detail and the wider system around it, close enough to understand the reality of decisions and delivery while creating the clarity needed to restore direction and momentum.</p>
          
          <p>He works best with experienced leaders who are already capable and thoughtful but find themselves in situations where pushing harder is no longer the answer. In those moments, the right external perspective can quickly sharpen thinking, unlock progress, and turn complexity into tangible outcomes.</p>
        </div>
      </div>
    </section>);

};

export default AboutSection;