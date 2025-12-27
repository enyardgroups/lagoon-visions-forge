import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add class to body to indicate custom cursor is active
    document.body.classList.add("custom-cursor-active");

    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Check for interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        target.closest('[role="button"]') !== null ||
        target.closest('[class*="cursor-pointer"]') !== null ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsHovering(isInteractive);
    };

    window.addEventListener("mousemove", updateCursor);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", updateCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot - green with black center */}
      <div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          transition: "transform 0.05s ease-out",
        }}
      >
        <div
          className={`rounded-full bg-primary border-2 border-black transition-all duration-200 ${
            isHovering ? "w-4 h-4" : "w-3 h-3"
          }`}
        >
          <div className="w-full h-full rounded-full bg-black opacity-30" />
        </div>
      </div>
      
      {/* Outer ring - animated */}
      <div
        className="fixed pointer-events-none z-[9998]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          transition: "all 0.2s ease-out",
        }}
      >
        <div
          className={`rounded-full border border-primary/40 transition-all duration-300 ${
            isHovering ? "w-10 h-10 opacity-60" : "w-8 h-8 opacity-30"
          }`}
        />
      </div>
      
      {/* Glow effect */}
      <div
        className="fixed pointer-events-none z-[9997]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          transition: "all 0.2s ease-out",
        }}
      >
        <div
          className={`rounded-full bg-primary transition-all duration-300 blur-sm ${
            isHovering ? "w-6 h-6 opacity-40" : "w-4 h-4 opacity-20"
          }`}
        />
      </div>
    </>
  );
};

export default CustomCursor;

