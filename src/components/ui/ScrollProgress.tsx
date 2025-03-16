
import React from "react";
import { useScrollProgress } from "@/utils/animations";

const ScrollProgress: React.FC = () => {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50">
      <div
        className="h-full bg-blue-500"
        style={{ width: `${progress}%`, transition: "width 0.1s" }}
      />
    </div>
  );
};

export default ScrollProgress;
