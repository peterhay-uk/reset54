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
    <span className={`relative inline-block rotating-text-underline ${className.replace('link-underline', '').trim()}`} style={{textDecoration: 'none', borderBottom: 'none', outline: 'none'}}>
      <span
        className="transition-opacity duration-500 no-underline"
        style={{
          opacity: isVisible ? 1 : 0,
          transitionDuration: `${fadeDuration}ms`,
          textDecoration: 'none',
          borderBottom: 'none',
          outline: 'none'
        }}
      >
        {captions[currentIndex]}
      </span>
      {showUnderline && (
        <span
          className="absolute bottom-0 left-0 h-[2px] bg-accent origin-left"
          style={{
            transform: isVisible ? "scaleX(1)" : "scaleX(0)",
            transition: isVisible
              ? `transform ${fadeDuration * 1.2}ms ease-out ${fadeDuration * 0.8}ms`
              : `transform ${fadeDuration * 0.6}ms ease-in 0ms`,
            width: "100%",
            textDecoration: 'none'
          }}
        />
      )}
    </span>
  );
};

export default RotatingText;
