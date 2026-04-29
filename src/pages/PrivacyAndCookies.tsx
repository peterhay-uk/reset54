import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PrivacyAndCookies = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Helmet>
        <title>Privacy and Cookies | Peter Hay | Reset54</title>
        <meta name="description" content="Privacy policy and cookie information for Reset54 website and services." />
        <link rel="canonical" href="https://www.reset54.co.uk/privacy-and-cookies" />
        <meta property="og:title" content="Privacy and Cookies | Peter Hay | Reset54" />
        <meta property="og:description" content="Privacy policy and cookie information for Reset54 website and services." />
        <meta property="og:url" content="https://www.reset54.co.uk/privacy-and-cookies" />
      </Helmet>
      <Header />
      <main>
        <section className="px-6 pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="content-width max-w-4xl">
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-8">
              Privacy and Cookies
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground mb-6">
                We collect information you provide directly to us, such as when you contact us through our website or use our services. This may include name, email address, and company information relevant to our consulting services.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-6">
                We use your information to provide strategic advisory services, respond to inquiries, and improve our services. We do not sell or share your personal information with third parties without your consent.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Cookies</h2>
              <p className="text-muted-foreground mb-6">
                Our website uses cookies to enhance your experience. Cookies are small text files stored on your device that help us analyze website traffic and improve functionality.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Your Rights</h2>
              <p className="text-muted-foreground mb-6">
                You have the right to access, update, or delete your personal information. You may also opt out of non-essential cookies through your browser settings.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Security</h2>
              <p className="text-muted-foreground mb-6">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Contact Us</h2>
              <p className="text-muted-foreground mb-6">
                If you have questions about this Privacy Policy or how we handle your information, please contact us through the information provided on our website.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Policy Updates</h2>
              <p className="text-muted-foreground mb-6">
                We may update this Privacy Policy from time to time. Changes will be effective immediately upon posting to the website.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyAndCookies;
