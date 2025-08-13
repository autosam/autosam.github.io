"use client";

import { useEffect, useState } from "react";
import { AnimatedLoading } from "../AnimatedLoading";
import classNames from "classnames";

export const FullscreenLoading = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => setVisible(false), 2000);
  }, []);

  useEffect(() => {
    if (visible) document.body.classList.add("no-scroll");
    else document.body.classList.remove("no-scroll");

    return () => document.body.classList.remove("no-scroll");
  }, [visible]);

  const className = classNames(
    "flex fixed top-0 left-0 w-screen h-screen justify-center items-center bg-black z-50 transition-all duration-500 text-white",
    {
      "pointer-events-none -translate-y-full": !visible,
    }
  );

  return (
    <div className={className}>
      {/* <AnimatedLoading /> */}
      <img
        alt="Disk Distrikt"
        className="w-24 opacity-20 blink-opacity"
        src="images/diskdistrikt.png"
      />
    </div>
  );
};
