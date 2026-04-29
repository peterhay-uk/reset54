import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/Footer";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Helmet>
        <title>Terms of Use | Peter Hay | Reset54</title>
        <meta name="description" content="Terms of Use for Reset54 website and services." />
        <link rel="canonical" href="https://www.reset54.co.uk/terms-of-use" />
        <meta property="og:title" content="Terms of Use | Peter Hay | Reset54" />
        <meta property="og:description" content="Terms of Use for Reset54 website and services." />
        <meta property="og:url" content="https://www.reset54.co.uk/terms-of-use" />
      </Helmet>
      <Header />
      <main>
        <section className="px-6 pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="content-width max-w-4xl">
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-8">
              Terms of Use
            </h1>
            <p className="text-sm text-muted-foreground italic mb-8">
                Last updated: April 2026
              </p>
            
            <div className="prose prose-lg max-w-none text-left">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. About this website</h2>
              <p className="text-muted-foreground mb-6">
                This website is operated by Reset54 Ltd, a strategic advisory business run by Peter Hay. By using this website, you agree to these terms of use.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Intellectual property</h2>
              <p className="text-muted-foreground mb-6">
                All content on this website including text, design, graphics and logos is the property of Reset54 Ltd unless otherwise stated. You may not reproduce, distribute or use any content without prior written permission.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-4">3. External links</h2>
              <p className="text-muted-foreground mb-6">
                This website may contain links to third-party websites. We are not responsible for the content, privacy practices or availability of external sites.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Limitation of liability</h2>
              <p className="text-muted-foreground mb-6">
                The information on this website is provided for general guidance only. While we strive for accuracy, we make no guarantees about the completeness or reliability of any content. Reset54 Ltd accepts no liability for any loss arising from the use of this website or its tools.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Governing law</h2>
              <p className="text-muted-foreground mb-6">
                These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Changes to these terms</h2>
              <p className="text-muted-foreground mb-6">
                We may update these terms from time to time. Continued use of the website constitutes acceptance of any changes.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfUse;
