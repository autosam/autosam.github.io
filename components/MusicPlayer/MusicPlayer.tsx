import { MUSIC } from "@/constants/music";
import Link from "next/link";
import { useEffect, useState } from "react";

const BARS_AMOUNT = 40,
  BARS_STRENGTH = 30;
export const MusicPlayer = () => {
  const [barHeights, setBarHeights] = useState(new Array(BARS_AMOUNT).fill(0));
  const [barStrength, setBarStrength] = useState(BARS_STRENGTH);

  const adjustBarHeights = () => {
    setBarHeights((heights) => heights.map(() => Math.random() * barStrength));
  };
  const onMouseEnter = () => setBarStrength(100);
  const onMouseLeave = () => setBarStrength(BARS_STRENGTH);

  useEffect(adjustBarHeights, [barStrength]);

  useEffect(() => {
    const interval = setInterval(adjustBarHeights, 150);
    return () => clearInterval(interval);
  }, [barStrength]);

  return (
    <Link className="h-fit" target="_blank" href={MUSIC.href}>
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="relative inline-flex text-xs border-t border-white p-3 bg-black bg-opacity-50 gap-3 z-10 items-center overflow-hidden justify-end transition-all hover:px-4 hover:underline"
      >
        <img
          alt="Album cover"
          className="w-14 rounded mask-[url(images/play_mask.png)] mask-cover mask-size-[100%]"
          src="images/album_cover_01.jpg"
        />
        <div className="flex flex-col items-start uppercase">
          <img
            alt="Headphones icon"
            className="w-4 invert opacity-50"
            src="images/headphones_icon_02.png"
          />
          <span>{MUSIC.artist}</span>
          <b>{MUSIC.title}</b>
        </div>

        <div className="absolute w-full top-0 left-0 flex justify-end items-start">
          {barHeights.map((height, i) => (
            <div
              key={i}
              style={{
                height: `${height + 1}px`,
                // opacity: height / BARS_STRENGTH,
              }}
              className="w-2 bg-gradient-to-b from-white border border-black flex-grow transition-all ease-linear duration-100 mix-blend-difference"
            />
          ))}
        </div>
      </div>
    </Link>
  );
};
