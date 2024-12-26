import Link from "next/link";
import { ProjectCardProps } from "../ProjectCard";
import { Scramble } from "../Scramble";
import { useEffect, useState } from "react";
import classNames from "classnames";

export type ProjectRowProps = ProjectCardProps & {
  releaseDate?: number;
  isOngoing?: boolean;
  links?: any[];
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
    "absolute left-0 top-0 h-full bg-center opacity-0 -z-[1]",
    {
      // "opacity-0": !isExpanded,
      // "opacity-75": isExpanded,
    }
  );

  const titleClass = classNames("overflow-hidden w-3/4", {
    // "text-center": isExpanded,
  });

  const {
    title,
    img,
    href,
    type,
    releaseDate,
    isOngoing,
    id,
    links: linksDef,
  } = props;

  const hrefTarget = id ? `works/${id}` : href;
  const target = id ? "" : "_blank";

  return (
    <>
      <Link
        className="hover:underline"
        href={hrefTarget ?? "#"}
        target={target}
      >
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
            {/* {title.toUpperCase()} */}
            <Scramble
              className="text-ellipsis overflow-hidden whitespace-pre font-bold"
              delay={2000 + Math.random() * 5000}
              text={title.toUpperCase()}
            />
          </div>
          <div>{releaseDate}</div>
          <div>{type}</div>
          <div>{isOngoing ? "ONGOING" : "DONE"}</div>
          <button className="hover:underline max-w-fit bg-black text-white px-2">
            {"VIEW \\>"}
          </button>
        </div>
      </Link>
      {img && <RowFloatingImage visible={isExpanded} url={img} />}
    </>
  );
};

const RowFloatingImage = ({
  url,
  visible,
}: {
  url: string;
  visible: boolean;
}) => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const onMouseEvent = (e) => {
      setPosition({
        x: e.clientX + 16,
        y: e.clientY + 16,
      });
    };
    window.addEventListener("mousemove", onMouseEvent);
    return () => {
      window.removeEventListener("mousemove", onMouseEvent);
    };
  });

  return (
    <div
      style={{
        top: position.y,
        left: position.x,
        opacity: visible ? 1 : 0,
      }}
      className="fixed top-0 left-0 z-10 pointer-events-none transition-opacity"
    >
      <img className="w-64" src={url} />
    </div>
  );
};
