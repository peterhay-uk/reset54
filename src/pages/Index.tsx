import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import PreviousClientsSection from "../components/PreviousClientsSection";
import AboutSection from "../components/AboutSection";
import WorkSection from "../components/WorkSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Helmet>
        <title>Peter Hay | Independent Strategic Advisor UK | Reset54</title>
        <meta name="description" content="Independent strategic advisor and fractional advisor for senior leaders in the UK. Peter Hay restores clarity, direction and momentum when complexity has stalled progress." />
        <link rel="canonical" href="https://www.reset54.co.uk/" />
        <meta property="og:title" content="Peter Hay | Independent Strategic Advisor UK | Reset54" />
        <meta property="og:description" content="Independent strategic advisor and fractional advisor for senior leaders in the UK. Peter Hay restores clarity, direction and momentum when complexity has stalled progress." />
        <meta property="og:url" content="https://www.reset54.co.uk/" />
      </Helmet>
      <Header />
      <main>
        <HeroSection />
        <PreviousClientsSection />
        <AboutSection />
        <WorkSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
