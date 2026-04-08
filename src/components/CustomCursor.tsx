import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const targetRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    document.body.classList.add("custom-cursor-active");

    const updateCursor = (e: MouseEvent) => {
      const next = { x: e.clientX, y: e.clientY };
      targetRef.current = next;
      setPosition(next);
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") !== null ||
        target.closest("button") !== null ||
        target.closest('[role="button"]') !== null ||
        target.closest('[class*="cursor-pointer"]') !== null ||
        window.getComputedStyle(target).cursor === "pointer";

      setIsHovering(isInteractive);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const animateRing = () => {
      setRingPosition((prev) => ({
        x: prev.x + (targetRef.current.x - prev.x) * 0.2,
        y: prev.y + (targetRef.current.y - prev.y) * 0.2,
      }));
      rafRef.current = requestAnimationFrame(animateRing);
    };

    window.addEventListener("mousemove", updateCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    rafRef.current = requestAnimationFrame(animateRing);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", updateCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (typeof window !== "undefined" && "ontouchstart" in window) {
    return null;
  }

  if (!isVisible) return null;

  return (
    <>
      <div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          transition: "transform 0.06s ease-out",
        }}
      >
        <div
          className={`rounded-full border-2 border-primary bg-[#0f172a] transition-all duration-200 ${
            isHovering ? "w-4 h-4" : "w-3 h-3"
          }`}
        >
          <div className="w-full h-full rounded-full bg-primary opacity-70" />
        </div>
      </div>

      <div
        className="fixed pointer-events-none z-[9998]"
        style={{
          left: `${ringPosition.x}px`,
          top: `${ringPosition.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={`rounded-full border transition-all duration-300 ${
            isHovering
              ? "w-12 h-12 border-primary/70 bg-primary/10 opacity-80"
              : "w-9 h-9 border-primary/40 bg-primary/5 opacity-50"
          }`}
        />
      </div>

      <div
        className="fixed pointer-events-none z-[9997] mix-blend-normal"
        style={{
          left: `${ringPosition.x}px`,
          top: `${ringPosition.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={`rounded-full transition-all duration-300 blur-md ${
            isClicking
              ? "w-16 h-16 bg-primary/25 opacity-80"
              : isHovering
                ? "w-10 h-10 bg-primary/20 opacity-50"
                : "w-6 h-6 bg-primary/15 opacity-35"
          }`}
        />
      </div>
    </>
  );
};

export default CustomCursor;

