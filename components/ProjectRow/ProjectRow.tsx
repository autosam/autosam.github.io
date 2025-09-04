import Link from "next/link";
import { Scramble } from "../Scramble";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { ProjectProps, ProjectStatuses } from "@/constants/project.consts";

export const ProjectRow = (props: ProjectProps) => {
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
    status,
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
          <div>
            {releaseDate}
            {status === ProjectStatuses.Ongoing ? <i> - NOW</i> : ""}
          </div>
          <div>{type?.toUpperCase()}</div>
          <div className="max-sm:hidden">{status.toUpperCase()}</div>
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
      let positionX = e.clientX - 128;
      if (positionX < 0) positionX = 0;
      setPosition({
        x: positionX,
        y: e.clientY + 32,
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
      className="fixed top-0 left-0 z-10 pointer-events-none transition-opacity border border-black max-sm:hidden"
    >
      <img className="w-64" src={url} />
    </div>
  );
};
