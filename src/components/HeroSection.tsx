const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16">
      <div className="content-width text-center">
        <div className="animate-fade-up">
          <span className="inline-block text-sm tracking-widest uppercase text-muted-foreground mb-6">
            Strategic Advisory
          </span>
        </div>
        
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground text-balance leading-[1.1] animate-fade-up-delay">
          I help leaders reset direction and pace when pushing harder has stopped working.
        </h1>
        
        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto animate-fade-up-delay-2">
          Sense-making across complexity. Clarity over noise. Progress over theatre.
        </p>
        
        <div className="mt-12 flex items-center justify-center gap-4 animate-fade-up-delay-2">
          <div className="accent-line" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
