import { scrambleLetters } from "@/utils";
import { useEffect, useState } from "react";

const PREFIX = "////// ";

type TitleProps = {
  text: string;
  class?: string;
};
export const Title = (props: TitleProps) => {
  const { text } = props;
  const fullText = PREFIX + text;
  const [currentText, setCurrentText] = useState(fullText);
  const [scrambleIntensity, setScrambleIntensity] = useState(1);

  useEffect(() => {
    setCurrentText(scrambleLetters(fullText, scrambleIntensity));
  }, [scrambleIntensity]);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrambleIntensity(1);
    }, 2000);

    const scrambleInterval = setInterval(() => {
      setScrambleIntensity((prev) => {
        if (prev > 0) return prev - 0.1;
        else return 0;
      });
    }, 50);

    return () => {
      clearTimeout(interval);
      clearTimeout(scrambleInterval);
    };
  }, []);

  return <div>{currentText} </div>;
};
