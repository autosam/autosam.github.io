import Link from "next/link";
import { Scramble } from "../Scramble";
import { useState } from "react";

export type ProjectCardProps = {
  title: string;
  img: string;
  href?: string;
  type?: string;
  key?: string;
  releaseDate?: number;
  id?: string;
};
export const ProjectCard = (props: ProjectCardProps) => {
  const [isHovering, serIsHovering] = useState(false);

  const { title, img, href, releaseDate, id } = props;

  const hrefTarget = id ? `works/${id}` : href;
  const target = id ? "" : "_blank";

  return (
    <Link href={hrefTarget ?? "#"} target={target}>
      <div
        className="flex flex-col w-fit h-fit hover:underline"
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
          <img className="w-64 aspect-square object-cover" src={img} />
        </div>
      </div>
    </Link>
  );
};
