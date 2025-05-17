"use client";

import classNames from "classnames";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export const AnimatedCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [targetPosition, setTargetPosition] = useState({ x: 200, y: -200 });
  const pathname = usePathname();

  useEffect(() => {
    const cursor = cursorRef.current;
    const links = document.querySelectorAll("a, [data-hover]");

    if (!cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      setTargetPosition({
        x: e.clientX - cursor.clientWidth / 2,
        y: e.clientY - cursor.clientHeight / 2,
      });
    };

    const handleLinkHover = () => {
      setIsHovering(true);
    };

    const handleLinkLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    links.forEach((link) => {
      link.addEventListener("mouseover", handleLinkHover);
      link.addEventListener("mouseleave", handleLinkLeave);
    });

    return () => {
      setIsHovering(false);
      window.removeEventListener("mousemove", handleMouseMove);
      links.forEach((link) => {
        link.removeEventListener("mouseover", handleLinkHover);
        link.removeEventListener("mouseleave", handleLinkLeave);
      });
    };
  }, [pathname]);

  const className = classNames(
    "fixed w-9 h-9 bg-white rounded-full pointer-events-none z-50 mix-blend-difference max-sm:hidden",
    {
      "!bg-transparent border": isHovering,
    }
  );

  return (
    <div
      style={{
        transform: `translate3d(${targetPosition.x}px, ${
          targetPosition.y
        }px, 0)  scale(${isHovering ? 5 : 1})`,
        transition: "all 0.2s linear",
      }}
      className={className}
      ref={cursorRef}
    />
  );
};
