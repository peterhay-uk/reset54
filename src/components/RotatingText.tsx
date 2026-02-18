import { useState, useEffect } from "react";

interface RotatingTextProps {
  captions: string[];
  interval?: number;
  fadeDuration?: number;
  className?: string;
  showUnderline?: boolean;
}

const RotatingText = ({
  captions,
  interval = 3500,
  fadeDuration = 500,
  className = "",
  showUnderline = false,
}: RotatingTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % captions.length);
        setIsVisible(true);
      }, fadeDuration);
    }, interval);

    return () => clearInterval(timer);
  }, [captions.length, interval, fadeDuration]);

  return (
    <span className={`relative inline-block ${className}`}>
      <span
        className="transition-opacity duration-500"
        style={{
          opacity: isVisible ? 1 : 0,
          transitionDuration: `${fadeDuration}ms`,
        }}
      >
        {captions[currentIndex]}
      </span>
      {showUnderline && (
        <span
          className="absolute bottom-0 left-0 h-[2px] bg-accent animate-[underline-draw_0.8s_ease-out_0.5s_forwards]"
          style={{ width: "0%" }}
        />
      )}
    </span>
  );
};

export default RotatingText;
