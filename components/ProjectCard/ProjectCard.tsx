import Link from "next/link";
import { Scramble } from "../Scramble";
import { useState } from "react";
import { ProjectProps } from "@/constants/project.consts";

export const ProjectCard = (props: ProjectProps) => {
  const [isHovering, serIsHovering] = useState(false);

  const { title, img, href, releaseDate, id } = props;

  const hrefTarget = id ? `works/${id}` : href;
  const target = id ? "" : "_blank";

  return (
    <Link className="flex-grow w-1/5" href={hrefTarget ?? "#"} target={target}>
      <div
        className="flex flex-col w-full h-fit hover:underline"
        onMouseLeave={() => serIsHovering(false)}
        onMouseEnter={() => serIsHovering(true)}
      >
        <div className="text-sm flex justify-between">
          <Scramble
            delay={2000 + Math.random() * 5000}
            text={title.toUpperCase()}
          />
          {isHovering && <small className="opacity-50">{releaseDate}</small>}
        </div>
        <div>
          <img className="w-full aspect-video object-cover" src={img} />
        </div>
      </div>
    </Link>
  );
};
