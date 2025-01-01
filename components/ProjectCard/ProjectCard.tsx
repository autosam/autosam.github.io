import Link from "next/link";
import { Scramble } from "../Scramble";
import { useState } from "react";
import { ProjectProps } from "@/constants/project.consts";

export const ProjectCard = (props: ProjectProps) => {
  const [isHovering, serIsHovering] = useState(false);

  const {
    title,
    img,
    href,
    releaseDate,
    status,
    engine,
    platforms,
    type,
    id,
    genre,
  } = props;

  const hrefTarget = id ? `works/${id}` : href;
  const target = id ? "" : "_blank";

  return (
    <Link className="flex-grow w-1/5" href={hrefTarget ?? "#"} target={target}>
      <div
        // className="flex flex-col w-full h-fit relative hover:underline"
        className="project__container-item"
        onMouseLeave={() => serIsHovering(false)}
        onMouseEnter={() => serIsHovering(true)}
      >
        {/* <div className="text-sm flex justify-between">
          <Scramble
            delay={2000 + Math.random() * 5000}
            text={title.toUpperCase()}
          />
          {isHovering && <small className="opacity-50">{releaseDate}</small>}
        </div> */}

        {isHovering && (
          <div className="left-0 top-0 absolute justify-between w-full h-full flex flex-col uppercase p-4 bg-[#0000008a] text-white">
            <div>
              <Scramble
                className="text-xl font-bold"
                delay={2000 + Math.random() * 5000}
                text={title}
              />
              <span>{[genre, type].filter((e) => e).join(" ")}</span>
            </div>
            <div className="uppercase flex flex-col text-right">
              {[releaseDate, engine, platforms?.join(", "), status]
                .filter((t) => t)
                .map((t) => (
                  <span>{t}</span>
                ))}
            </div>
          </div>
        )}
        <div>
          <img className="w-full object-cover" src={img} />
        </div>
      </div>
    </Link>
  );
};
