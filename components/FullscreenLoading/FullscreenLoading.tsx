"use client";

import { useEffect, useState } from "react";
import { AnimatedLoading } from "../AnimatedLoading";
import classNames from "classnames";

type Props = {
  isVisible?: boolean;
};
export const FullscreenLoading = ({ isVisible = true }: Props) => {
  const [visible, setVisible] = useState(isVisible);

  useEffect(() => {
    if (document.readyState !== "complete") {
      const handler = () => {
        setVisible(false);
      };
      window.addEventListener("load", handler);

      return () => window.removeEventListener("load", handler);
    } else {
      const timeout = window.setTimeout(() => {
        setVisible(false);
      }, 500);
      return () => window.clearTimeout(timeout);
    }
  }, []);

  useEffect(() => {
    if (visible) document.body.classList.add("no-scroll");
    else document.body.classList.remove("no-scroll");

    return () => document.body.classList.remove("no-scroll");
  }, [visible]);

  const className = classNames(
    "flex fixed top-0 left-0 w-screen h-screen justify-center items-center bg-black z-50 transition-all duration-1000 text-white",
    {
      "pointer-events-none scale-125 opacity-0": !visible,
    }
  );

  return (
    <div className={className}>
      {/* <AnimatedLoading /> */}
      <img
        alt="Disk Distrikt"
        className="w-24 opacity-20 blink-opacity"
        src="/images/diskdistrikt.png"
      />
    </div>
  );
};
