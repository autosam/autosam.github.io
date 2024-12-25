import Link from "next/link";
import { ProjectCardProps } from "../ProjectCard";
import { Scramble } from "../Scramble";
import { useState } from "react";
import classNames from "classnames";
import { uid } from "uid";

export type ProjectRowProps = ProjectCardProps & {
  releaseDate?: number;
  isOngoing?: boolean;
};
export const ProjectRow = (props: ProjectRowProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const rowClass = classNames(
    "py-2 border-b border-black flex project-row h-8 cursor-pointer items-center relative [&>*]:w-1/2 overflow-hidden",
    {
      "h-32 max-h-40": isExpanded,
    }
  );

  const imgContainerClass = classNames(
    "absolute left-0 top-0 h-full bg-center -z-[1]",
    {
      "opacity-0": !isExpanded,
      "opacity-75": isExpanded,
    }
  );

  const titleClass = classNames({
    "text-center": isExpanded,
  });

  const { title, img, href, type, releaseDate, isOngoing } = props;
  return (
    <Link className="hover:underline" href={href ?? "#"} target="_blank">
      <div
        className={rowClass}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <div className={imgContainerClass}>
          {img && (
            <img
              className="h-full"
              style={{
                maskImage: "linear-gradient(90deg, black, transparent)",
              }}
              src={img}
            />
          )}
        </div>
        <div className={titleClass}>
          <Scramble
            delay={2000 + Math.random() * 5000}
            text={title.toUpperCase()}
          />
        </div>
        <div>{releaseDate}</div>
        <div>{type}</div>
        <div>{isOngoing ? "ONGOING" : "DONE"}</div>
        <button className="hover:underline max-w-fit bg-black text-white px-2">
          VISIT \{">"}
        </button>
      </div>
    </Link>
  );
};
