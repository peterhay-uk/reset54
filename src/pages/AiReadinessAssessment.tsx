import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const AiReadinessAssessment = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== "https://thedigitalemployee.ai") return;
      const data = event.data;
      if (
        data &&
        data.type === "tde-scorecard-height" &&
        typeof data.height === "number" &&
        iframeRef.current
      ) {
        iframeRef.current.style.height = `${data.height}px`;
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Helmet>
        <title>AI readiness assessment | Peter Hay | Reset54</title>
        <meta
          name="description"
          content="Take the Reset54 AI readiness scorecard – a short assessment to see where your organisation stands and where progress could start."
        />
        <link rel="canonical" href="https://www.reset54.co.uk/ai-readiness-assessment" />
        <meta property="og:title" content="AI readiness assessment | Peter Hay | Reset54" />
        <meta
          property="og:description"
          content="Take the Reset54 AI readiness scorecard – a short assessment to see where your organisation stands and where progress could start."
        />
        <meta property="og:url" content="https://www.reset54.co.uk/ai-readiness-assessment" />
      </Helmet>
      <Header />
      <main>
        <section className="px-6 pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="content-width">
            <iframe
              ref={iframeRef}
              id="ai-scorecard"
              src="https://thedigitalemployee.ai/scorecard/reset54"
              title="AI Readiness Scorecard"
              loading="lazy"
              style={{
                width: "100%",
                height: "700px",
                border: 0,
                display: "block",
              }}
            />
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default AiReadinessAssessment;
