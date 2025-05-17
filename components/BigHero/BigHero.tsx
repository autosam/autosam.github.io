import Link from "next/link";
import { Scramble } from "../Scramble";
import { useAtom } from "jotai";
import { headerVisibilityAtom } from "@/store";
import classNames from "classnames";
import { PROJECTS } from "@/constants/projects";
import { useEffect } from "react";
import { MusicPlayer } from "../MusicPlayer";

type Types = {
  ref: React.RefObject<HTMLDivElement>;
};
export const BigHero = ({ ref }: Types) => {
  const [isVisible] = useAtom(headerVisibilityAtom);

  const className = classNames(
    "w-full h-screen bg-black text-white relative overflow-hidden transition-all duration-500 bg-[url('/noise_01.png')] bg-center bg-repeat",
    "animate-noise",
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

      <div className="absolute flex flex-col select-none pointer-events-none right-0 p-4 max-sm:hidden">
        {new Array(30).fill(0).map((_, i) => (
          <div>
            <label style={{ opacity: Math.abs(i - 30) * 0.005 }}>
              SMN MHMDY • SMN MHMDY • SMN MHMDY
            </label>
          </div>
        ))}
      </div>

      <div className="w-full h-full flex flex-col items-center text-center text-xl justify-between">
        <div className="flex w-full justify-end p-4">
          <MusicPlayer />
        </div>

        <div className="flex justify-between w-full p-4 max-sm:flex-col max-sm:gap-8">
          <div className="flex flex-col justify-start items-start max-sm:items-end">
            <span>SMN MHMDY ™</span>
          </div>
          <div className="flex flex-col justify-start items-start">
            <span className="opacity-25">[ DIRECTORY ]</span>
            <Link href="/works" className="hover:underline">
              {">"}PROJECTS
            </Link>
            <div className="text-xs">
              <Projects />
            </div>
            <ExternalLink text="ITCH" href="https://smnmhmdy.itch.io" />
            <ExternalLink text="GAMEJOLT" href="https://smnmhmdy.itch.io" />
            <ExternalLink text="SAMEGAMESIO" href="https://smnmhmdy.itch.io" />
            <ExternalLink text="SAMANDEV" href="https://smnmhmdy.itch.io" />
          </div>
          <div className="-my-4 inline-flex justify-center items-end">
            <img
              data-hover
              className="w-40 max-sm:w-20"
              src="drawing_image_01.png"
            ></img>
          </div>
          <div className="flex flex-col justify-start items-start max-sm:items-end">
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

const ExternalLink = ({ text, href }: { text: string; href: string }) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="hover:underline inline-flex gap-2 items-center"
    >
      {text}
      <img src="/external_link_01.png" className="w-2 inline-block" />
    </Link>
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
