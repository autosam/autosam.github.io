"use client";

import { scrambleLetters } from "@/utils";
import { useEffect, useState } from "react";

type ScrambleProps = {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
};
export const Scramble = (props: ScrambleProps) => {
  const { text, delay, speed, className } = props;
  const [currentText, setCurrentText] = useState(text);
  const [scrambleIntensity, setScrambleIntensity] = useState(1);

  useEffect(() => {
    setCurrentText(scrambleLetters(text, scrambleIntensity));
  }, [scrambleIntensity]);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrambleIntensity(1);
    }, delay ?? 1500 + Math.random() * 2000);

    const scrambleInterval = setInterval(() => {
      setScrambleIntensity((prev) => {
        if (prev > 0) return prev - (speed ?? 0.1);
        else return 0;
      });
    }, 50);

    return () => {
      clearTimeout(interval);
      clearTimeout(scrambleInterval);
    };
  }, []);

  return <div className={className}>{currentText} </div>;
};
