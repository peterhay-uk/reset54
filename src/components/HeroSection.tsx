import RotatingText from "./RotatingText";

const HERO_CAPTIONS = [
  "Simplicity over complexity",
  "Clarity over noise",
  "Progress over theatre",
];

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-8 pb-4 md:pt-24 md:pb-16">
      <div className="content-width text-center">
        <div className="animate-fade-up">
          <span className="inline-block text-sm tracking-widest uppercase text-muted-foreground mb-6">
            Independent Strategic Advisory
          </span>
        </div>
        
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground text-balance leading-[1.1] animate-fade-up-delay">
          Helping senior leaders reset direction when pushing harder no longer works
        </h1>
        
        <p className="font-serif text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto mt-6 animate-fade-up-delay">
          Untangling stalled products,<br className="md:hidden" /> teams, and initiatives
        </p>
        
        <div className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto animate-fade-up-delay-2 hero-text-container" style={{textDecoration: 'none'}}>
          <RotatingText
            captions={HERO_CAPTIONS}
            interval={3500}
            fadeDuration={500}
            showUnderline
            className="hero-rotating-text"
          />
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;
