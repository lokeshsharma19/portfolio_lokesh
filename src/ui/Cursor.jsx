import { useState, useEffect } from "react";

const CursorDot = ({ isHovering }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveDot = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveDot);
    return () => window.removeEventListener("mousemove", moveDot);
  }, []);

  return (
    <div
      className={`pointer-events-none fixed top-0 left-0 z-[99999] flex items-center justify-center transition-transform ${
        isHovering.isProjectCard ? "duration-150" : "duration-700"
      } ease-out opacity-30`}
      style={{
        transform: isHovering.isProjectCard
          ? `translate(${position.x - 70}px, ${position.y - 70}px)`
          : `translate(${position.x - 12}px, ${position.y - 12}px)`,
        mixBlendMode: "difference",
        width: isHovering.isProjectCard ? "100px" : "24px",
        height: isHovering.isProjectCard ? "100px" : "24px",
        border: isHovering.isProjectCard ? "2px solid gray" : "0px",
        backgroundColor: isHovering.isProjectCard
          ? "rgba(255, 255, 255, 0.1)"
          : "gray",
        borderRadius: "50%",
        backdropFilter: isHovering.isProjectCard ? "blur(4px)" : "none",
        color: "white",
        fontSize: "12px",
        textAlign: "center",
        lineHeight: "100px",
        fontWeight: "bold",
      }}>
      {isHovering.isProjectCard && "See this website"}
    </div>
  );
};

export default CursorDot;
