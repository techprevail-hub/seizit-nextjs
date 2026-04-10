"use client";
import { useState, useEffect } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      
      const hasCursorAttr = target.closest('[data-cursor="active"]');
      const isInNav = target.closest('nav');
      
      setIsPointer(!!hasCursorAttr && !isInNav);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div 
      className={`custom-cursor ${isPointer ? 'active' : ''}`}
      style={{ 
        transform: `translate(${position.x - (isPointer ? 40 : 10)}px, ${position.y - (isPointer ? 40 : 10)}px)`,
        opacity: position.x === 0 && position.y === 0 ? 0 : 1
      }}
    />
  );
};

export default CustomCursor;
