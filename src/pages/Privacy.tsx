import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Helmet>
        <title>Privacy Policy | Peter Hay | Reset54</title>
        <meta name="description" content="Privacy policy for Reset54 website and services. Learn how we collect, use, and protect your personal information." />
        <link rel="canonical" href="https://www.reset54.co.uk/privacy" />
        <meta property="og:title" content="Privacy Policy | Peter Hay | Reset54" />
        <meta property="og:description" content="Privacy policy for Reset54 website and services. Learn how we collect, use, and protect your personal information." />
        <meta property="og:url" content="https://www.reset54.co.uk/privacy" />
      </Helmet>
      <Header />
      <main>
        <section className="px-6 pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="content-width max-w-4xl">
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-8">
              Privacy Policy
            </h1>
            <p className="text-sm text-muted-foreground italic mb-8">
                Last updated: April 2026
              </p>
            
            <div className="prose prose-lg max-w-none text-left">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Who we are</h2>
              <p className="text-muted-foreground mb-6">
                Reset54 Ltd provides independent strategic advisory services including consulting, fractional advisory, and organisational transformation support. Our website address is www.reset54.co.uk. When we refer to "we", "us" or "our" in this policy, we mean Reset54 Ltd.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-4">2. What data we collect</h2>
              <p className="text-muted-foreground mb-6">
                We may collect the following personal data:
              </p>
              <ul className="text-muted-foreground mb-6 list-disc pl-6">
                <li>Name, email address and contact details when you book a conversation or contact us</li>
                <li>Information you provide during meetings and/or coaching sessions (kept strictly confidential)</li>
                <li>Technical data such as IP address, browser type and pages visited via cookies and analytics</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mb-4">3. How we use your data</h2>
              <p className="text-muted-foreground mb-6">
                We use your personal data to:
              </p>
              <ul className="text-muted-foreground mb-6 list-disc pl-6">
                <li>Respond to enquiries and manage bookings</li>
                <li>Design and deliver consulting services</li>
                <li>Send relevant updates if you have opted in</li>
                <li>Improve our website and services</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Legal basis for processing</h2>
              <p className="text-muted-foreground mb-6">
                Under UK GDPR, we process your data based on:
              </p>
              <ul className="text-muted-foreground mb-6 list-disc pl-6">
                <li>Consent - when you voluntarily submit information or opt in to communications</li>
                <li>Contractual necessity - when processing is needed to deliver our services</li>
                <li>Legitimate interest - to improve our services and website experience</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data sharing</h2>
              <p className="text-muted-foreground mb-6">
                We do not sell your personal data. We may share data with trusted third-party service providers (such as Google Calendar for bookings and Google Meet for sessions) only where necessary to deliver our services. All providers are required to protect your data in accordance with UK GDPR.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Data retention</h2>
              <p className="text-muted-foreground mb-6">
                We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by law.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Your rights</h2>
              <p className="text-muted-foreground mb-6">
                Under UK GDPR, you have the right to:
              </p>
              <ul className="text-muted-foreground mb-6 list-disc pl-6">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Withdraw consent at any time</li>
                <li>Object to processing based on legitimate interest</li>
                <li>Lodge a complaint with the Information Commissioner's Office (ICO)</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Contact</h2>
              <p className="text-muted-foreground mb-6">
                If you have any questions about this privacy policy or wish to exercise your rights, please contact us via the booking link on our website or email us directly.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
