import { CSSProperties, useEffect, useMemo, useRef, useState } from "react";

const logoFiles = import.meta.glob<{ default: string }>(
  ["../assets/logos/logo-*.svg", "../assets/logos/logo-*.png"],
  { eager: true }
);

const clients = Object.entries(logoFiles)
  .map(([path, module]) => {
    const filename = path.split("/").pop()?.replace(/^logo-/, "").replace(/\.(svg|png)$/, "") ?? "";
    const name = filename
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    return { name, logo: module.default, isPng: path.endsWith(".png") };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

const MOBILE_BREAKPOINT = 768;
const MOBILE_PX_PER_SECOND = 45;
const DESKTOP_PX_PER_SECOND = 70;

const PreviousClientsSection = () => {
  const firstTrackRef = useRef<HTMLDivElement>(null);
  const [marqueeDistance, setMarqueeDistance] = useState(0);
  const [marqueeDuration, setMarqueeDuration] = useState(20);

  useEffect(() => {
    const track = firstTrackRef.current;
    if (!track) return;

    const updateMarqueeMetrics = () => {
      const width = track.scrollWidth;
      if (!width) return;

      const pxPerSecond = window.innerWidth < MOBILE_BREAKPOINT ? MOBILE_PX_PER_SECOND : DESKTOP_PX_PER_SECOND;
      const duration = Math.max(width / pxPerSecond, 18);

      setMarqueeDistance(width);
      setMarqueeDuration(Number(duration.toFixed(2)));
    };

    updateMarqueeMetrics();

    const resizeObserver = new ResizeObserver(updateMarqueeMetrics);
    resizeObserver.observe(track);
    window.addEventListener("resize", updateMarqueeMetrics);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateMarqueeMetrics);
    };
  }, []);

  const marqueeStyle = useMemo(
    () =>
      ({
        width: "max-content",
        "--marquee-distance": `${marqueeDistance}px`,
        "--marquee-duration": `${marqueeDuration}s`,
      }) as CSSProperties,
    [marqueeDistance, marqueeDuration]
  );

  return (
    <section id="clients" className="section-padding text-primary-foreground bg-primary-foreground">
      <div className="container max-w-5xl mx-auto px-6 text-center scroll-mt-56 mb-10">
        <span className="inline-block text-sm tracking-widest uppercase text-muted-foreground">Selected Clients</span>
      </div>
      <div className="overflow-hidden w-full">
        <div
          className="flex animate-marquee-variable [transform:translate3d(0,0,0)] [backface-visibility:hidden]"
          style={marqueeStyle}
        >
          {[0, 1].map((loopIndex) => (
            <div
              key={loopIndex}
              ref={loopIndex === 0 ? firstTrackRef : undefined}
              className="flex shrink-0"
              aria-hidden={loopIndex === 1}
            >
              {clients.map((client) => (
                <div
                  key={`${client.name}-${loopIndex}`}
                  className="shrink-0 flex items-center justify-center px-6 md:px-12"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    loading="lazy"
                    decoding="async"
                    className={`w-auto object-contain ${client.isPng ? "h-20 md:h-28" : "h-10 md:h-16"}`}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreviousClientsSection;
