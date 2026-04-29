import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Cookies = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Helmet>
        <title>Cookies Policy | Peter Hay | Reset54</title>
        <meta name="description" content="Cookies policy for Reset54 website. Learn about the cookies we use and how to manage your preferences." />
        <link rel="canonical" href="https://www.reset54.co.uk/cookies" />
        <meta property="og:title" content="Cookies Policy | Peter Hay | Reset54" />
        <meta property="og:description" content="Cookies policy for Reset54 website. Learn about the cookies we use and how to manage your preferences." />
        <meta property="og:url" content="https://www.reset54.co.uk/cookies" />
      </Helmet>
      <Header />
      <main>
        <section className="px-6 pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="content-width max-w-4xl">
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-8">
              Cookies Policy
            </h1>
            <p className="text-sm text-muted-foreground italic mb-8">
                Last updated: April 2026
              </p>
            
            <div className="prose prose-lg max-w-none text-left">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. What are cookies?</h2>
              <p className="text-muted-foreground mb-6">
                Cookies are small text files placed on your device when you visit a website. They help the website remember your preferences and understand how you use the site.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-4">2. How we use cookies</h2>
              <p className="text-muted-foreground mb-6">
                This website uses minimal cookies. We may use:
              </p>
              <ul className="text-muted-foreground mb-6 list-disc pl-6">
                <li>Essential cookies - required for the website to function properly</li>
                <li>Analytics cookies - to understand how visitors use the site and improve the experience. These are anonymised where possible</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Third-party cookies</h2>
              <p className="text-muted-foreground mb-6">
                Where we embed external services (such as Google Calendar booking links), those services may set their own cookies. We recommend reviewing their respective privacy and cookie policies.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Managing cookies</h2>
              <p className="text-muted-foreground mb-6">
                You can control and delete cookies through your browser settings. Disabling cookies may affect the functionality of some parts of this website.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Contact</h2>
              <p className="text-muted-foreground mb-6">
                If you have questions about our use of cookies, please contact us via email or the booking link on our website.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Cookies;
