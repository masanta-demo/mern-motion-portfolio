
import React, { useRef, useEffect, ReactNode } from "react";
import { useIntersectionObserver } from "@/utils/animations";

interface SectionTransitionProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  animation?: 
    | "fade-in"
    | "fade-in-up"
    | "fade-in-down"
    | "slide-in-left"
    | "slide-in-right";
  delay?: number;
}

const SectionTransition: React.FC<SectionTransitionProps> = ({
  children,
  className = "",
  threshold = 0.1,
  rootMargin = "0px",
  animation = "fade-in-up",
  delay = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver(ref, {
    threshold,
    rootMargin,
  });

  useEffect(() => {
    if (!ref.current) return;
    
    if (isInView) {
      ref.current.style.opacity = "1";
      ref.current.style.transform = "translateY(0) translateX(0)";
    } else {
      // Reset if not in view (for scroll back up)
      switch (animation) {
        case "fade-in-up":
          ref.current.style.opacity = "0";
          ref.current.style.transform = "translateY(20px)";
          break;
        case "fade-in-down":
          ref.current.style.opacity = "0";
          ref.current.style.transform = "translateY(-20px)";
          break;
        case "slide-in-left":
          ref.current.style.opacity = "0";
          ref.current.style.transform = "translateX(-20px)";
          break;
        case "slide-in-right":
          ref.current.style.opacity = "0";
          ref.current.style.transform = "translateX(20px)";
          break;
        default:
          ref.current.style.opacity = "0";
      }
    }
  }, [isInView, animation]);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out`}
      style={{
        opacity: 0,
        transform: animation.includes("up")
          ? "translateY(20px)"
          : animation.includes("down")
            ? "translateY(-20px)"
            : animation.includes("left")
              ? "translateX(-20px)"
              : animation.includes("right")
                ? "translateX(20px)"
                : "",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default SectionTransition;
