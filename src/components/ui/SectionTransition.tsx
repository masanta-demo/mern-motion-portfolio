
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
  immediate?: boolean;
  resetOnLeave?: boolean; // New prop to control whether element resets when leaving viewport
}

const SectionTransition: React.FC<SectionTransitionProps> = ({
  children,
  className = "",
  threshold = 0.1,
  rootMargin = "0px",
  animation = "fade-in-up",
  delay = 0,
  immediate = false,
  resetOnLeave = true, // Default to true to match previous behavior
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver(ref, {
    threshold,
    rootMargin,
  });

  useEffect(() => {
    if (!ref.current) return;
    
    // If immediate is true, make the element visible without animation right away
    if (immediate) {
      ref.current.style.opacity = "1";
      ref.current.style.transform = "translateY(0) translateX(0)";
      return;
    }
    
    if (isInView) {
      ref.current.style.opacity = "1";
      ref.current.style.transform = "translateY(0) translateX(0)";
    } else if (resetOnLeave) {
      // Only reset if resetOnLeave is true
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
  }, [isInView, animation, immediate, resetOnLeave]);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out`}
      style={{
        opacity: immediate ? 1 : 0,
        transform: !immediate ? (animation.includes("up")
          ? "translateY(20px)"
          : animation.includes("down")
            ? "translateY(-20px)"
            : animation.includes("left")
              ? "translateX(-20px)"
              : animation.includes("right")
                ? "translateX(20px)"
                : "") : "translateY(0) translateX(0)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default SectionTransition;
