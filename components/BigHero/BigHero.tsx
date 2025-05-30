import Link from "next/link";
import { Scramble } from "../Scramble";
import { useAtom } from "jotai";
import { headerVisibilityAtom } from "@/store";
import classNames from "classnames";
import { PROJECTS } from "@/constants/projects";
import { MusicPlayer } from "../MusicPlayer";

export const BigHero = () => {
  const [isVisible] = useAtom(headerVisibilityAtom);

  const className = classNames(
    "w-full h-screen bg-black text-white relative overflow-hidden transition-all duration-500 bg-[url('/noise_01.png')] bg-center bg-repeat",
    "animate-noise",
    {
      "scale-[0.95] invert rounded-3xl": isVisible,
    }
  );

  return (
    <div className={className}>
      <label className="absolute flex flex-col text-[300px] leading-[260px] font-extrabold select-none opacity-15 pointer-events-none">
        <Scramble text="SMN" />
        <Scramble text="MHMDY" />
      </label>

      <div className="absolute flex flex-col select-none pointer-events-none right-0 p-4 max-md:hidden">
        {new Array(30).fill(0).map((_, i) => (
          <div>
            <label style={{ opacity: Math.abs(i - 30) * 0.005 }}>
              SMN MHMDY • SMN MHMDY • SMN MHMDY
            </label>
          </div>
        ))}
      </div>

      <div className="w-full h-full flex flex-col items-center text-center text-xl justify-between">
        <div className="flex w-full justify-between p-4">
          <div className="md:w-2/4 flex justify-start">
            <label className="flex flex-col gap-16 justify-between">
              <img
                alt="Null icon"
                className="w-10 opacity-50"
                src="images/null_symbol.png"
              />
              <Link
                href="mailto:autosam.sm@gmail.com"
                className="text-xs bg-white text-black hover:underline cursor-pointer px-2"
              >
                {`CONTACT\>`}
              </Link>
            </label>
          </div>
          <div className="md:w-1/4">
            <div className="inline-flex justify-center">
              <span className="text-6xl text-left uppercase opacity-20 max-md:hidden">
                <img
                  alt="Disk Distrikt"
                  className="w-24"
                  src="images/diskdistrikt.png"
                />
              </span>
            </div>
          </div>
          <div className="md:w-1/4 flex justify-end">
            <MusicPlayer />
          </div>
        </div>

        <div className="flex justify-between w-full p-4 max-md:flex-col max-md:gap-8">
          <div className="flex flex-col justify-between items-start max-md:items-start md:w-1/4">
            <label>SMN MHMDY ™</label>
            {!isVisible && (
              <label className="text-4xl opacity-50 max-md:hidden">↓</label>
            )}
          </div>

          <div className="flex flex-col justify-start items-start md:w-1/4">
            <label className="opacity-25">[ DIRECTORY ]</label>
            <Link
              href="/works"
              className="bg-white text-black px-2 hover:underline hover:pl-8 transition-[padding] duration-200"
            >
              {">"}WORKS
            </Link>
            <div className="text-xs">
              <Projects />
            </div>
            <ExternalLink text="ITCH" href="https://smnmhmdy.itch.io" />
            <ExternalLink
              text="GAMEJOLT"
              href="https://gamejolt.com/@SmnMhmdy"
            />
            <ExternalLink
              text="SAMEGAMESIO"
              href="https://samgamesio.itch.io"
            />
            <ExternalLink text="SAMANDEV" href="https://samandev.itch.io" />
          </div>

          <div className="-my-4 inline-flex justify-center items-end md:w-1/4">
            <img
              data-hover
              className="w-40 max-md:w-20"
              src="drawing_image_01.png"
              alt="SMN MHMDY"
            />
          </div>

          <div className="flex flex-col justify-end items-end max-md:items-end md:w-1/4">
            <label>WEB DEVELOPER</label>
            <label>GAME DEVELOPER</label>
            <label>PRODUCER</label>
            <br />
            <label>24YRS</label>
            <label>
              <i className="opacity-25 text-xs">FOREVER PERSIAN GULF</i>
            </label>
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
      <img
        alt="External"
        src="/external_link_01.png"
        className="w-2 inline-block"
      />
    </Link>
  );
};

const Projects = () => {
  return (
    <>
      {PROJECTS.map((project) => (
        <Link
          key={project.id}
          href={`works/${project.id}`}
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
