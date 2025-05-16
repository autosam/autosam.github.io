import Link from "next/link";
import { Scramble } from "../Scramble";
import { useAtom } from "jotai";
import { headerVisibilityAtom } from "@/store";
import classNames from "classnames";
import { PROJECTS } from "@/constants/projects";
import { useEffect } from "react";

type Types = {
  ref: React.RefObject<HTMLDivElement>;
};
export const BigHero = ({ ref }: Types) => {
  const [isVisible] = useAtom(headerVisibilityAtom);

  const className = classNames(
    "w-full h-svh bg-black text-white relative overflow-hidden transition-all duration-500",
    {
      "scale-[0.95] invert rounded-3xl": isVisible,
    }
  );

  return (
    <div ref={ref} className={className}>
      <label className="absolute flex flex-col text-[300px] leading-[260px] font-extrabold select-none opacity-15 pointer-events-none">
        <Scramble text="SMN" />
        <Scramble text="MHMDY" />
      </label>

      <div className="absolute flex flex-col select-none pointer-events-none right-0 p-4">
        {new Array(30).fill(0).map((_, i) => (
          <div>
            <label style={{ opacity: Math.abs(i - 30) * 0.005 }}>
              SMN MHMDY • SMN MHMDY • SMN MHMDY
            </label>
          </div>
        ))}
      </div>

      <div className="w-full h-full flex flex-col justify-end items-center text-center text-xl">
        <div className="flex justify-between w-full px-4 py-4">
          <div className="flex flex-col justify-start items-start">
            <span>SMN MHMDY ™</span>
          </div>
          <div className="flex flex-col justify-start items-start">
            <span className="opacity-25">[ DIRECTORY ]</span>
            <Link href="/works" className="hover:underline">
              PROJECTS
            </Link>
            <div className="text-xs">
              <Projects />
            </div>
            <Link
              href="https://smnmhmdy.itch.io"
              target="_blank"
              className="hover:underline"
            >
              ITCH
            </Link>
            <Link
              href="https://smnmhmdy.itch.io"
              target="_blank"
              className="hover:underline"
            >
              GAMEJOLT
            </Link>
            <Link
              href="https://smnmhmdy.itch.io"
              target="_blank"
              className="hover:underline"
            >
              SAMEGAMESIO
            </Link>

            <Link
              href="https://smnmhmdy.itch.io"
              target="_blank"
              className="hover:underline"
            >
              SAMANDEV
            </Link>
          </div>
          <div className="-my-4 inline-flex justify-center items-end">
            <img className="w-40" src="drawing_image_01.png"></img>
          </div>
          <div className="flex flex-col justify-start items-start">
            <span>WEB DEVELOPER</span>
            <span>GAME DEVELOPER</span>
            <span>PRODUCER</span>
            <br />
            <span>24 YEARS OLD</span>
            <i className="opacity-25 text-xs">FOREVER PERSIAN GULF</i>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <>
      {PROJECTS.map((project) => (
        <Link
          href={`works/${project.id}`}
          key={project.id}
          className="hover:underline"
        >
          <div className="flex">
            <span className="ml-8">{project.title.toUpperCase()}</span>
          </div>
        </Link>
      ))}
    </>
  );
};
