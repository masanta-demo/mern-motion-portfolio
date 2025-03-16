
import React, { useEffect, useState } from "react";
import { useMousePosition } from "@/utils/animations";

interface CustomCursorProps {
  size?: number;
  color?: string;
  ringSize?: number;
  ringColor?: string;
}

const CustomCursor: React.FC<CustomCursorProps> = ({
  size = 8,
  color = "#1EAEDB",
  ringSize = 40,
  ringColor = "rgba(30, 174, 219, 0.2)",
}) => {
  const { x, y } = useMousePosition();
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const cursorStyles: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: "50%",
    backgroundColor: color,
    transform: `translate(${x - size / 2}px, ${y - size / 2}px)`,
    pointerEvents: "none",
    zIndex: 9999,
    opacity: isVisible ? 1 : 0,
    transition: "opacity 0.3s ease, width 0.2s ease, height 0.2s ease",
    mixBlendMode: "difference",
  };

  const ringStyles: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: `${isClicking ? ringSize * 0.8 : ringSize}px`,
    height: `${isClicking ? ringSize * 0.8 : ringSize}px`,
    borderRadius: "50%",
    border: `2px solid ${ringColor}`,
    transform: `translate(${x - (isClicking ? ringSize * 0.8 : ringSize) / 2}px, ${
      y - (isClicking ? ringSize * 0.8 : ringSize) / 2
    }px)`,
    pointerEvents: "none",
    zIndex: 9998,
    opacity: isVisible ? 1 : 0,
    transition: "opacity 0.3s ease, width 0.2s ease, height 0.2s ease, transform 0.15s ease",
  };

  return (
    <>
      <div style={cursorStyles} />
      <div style={ringStyles} />
    </>
  );
};

export default CustomCursor;
