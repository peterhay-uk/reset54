import { Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding px-6 bg-primary text-primary-foreground">
      <div className="content-width text-center scroll-mt-56">
        <span className="inline-block text-sm tracking-widest uppercase text-primary-foreground/60 mb-4">
          Get in Touch
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-6 text-balance">
          If this resonates, let's talk.
        </h2>

        <p className="text-lg text-primary-foreground/80 max-w-lg mx-auto mb-10">
          A first conversation is just that, a chance to understand each other and see if there's a fit. No pressure, no sales pitch. The work I do is usually most useful for experienced leaders responsible for complex organisations who want a trusted thinking partner when progress has stalled.
        </p>

        <a

          className="inline-flex items-center gap-3 px-8 py-4 bg-primary-foreground text-primary rounded-md font-medium hover:bg-accent hover:text-accent-foreground transition-colors duration-300" href="mailto:peter.hay@reset54.co.uk">

          <Mail className="w-5 h-5" />
          peter.hay@reset54.co.uk
        </a>

        <p className="mt-8 text-sm text-primary-foreground/50">
          I will respond within 24 hours.
        </p>
      </div>
    </section>);

};

export default ContactSection;