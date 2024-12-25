import { PROJECT_TYPES, PROJECTS } from "@/constants/projects";
import { ProjectCard } from "../ProjectCard";
import { useEffect, useState } from "react";
import { uid } from "uid";
import classNames from "classnames";
import { ProjectRow } from "../ProjectRow";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

enum DisplayStyle {
  grid,
  row,
}

const TYPE_QUERY_PARAM_KEY = "type";

export const ProjectsContainer = () => {
  const searchParams = useSearchParams();
  const [activeType, setActiveType] = useState(PROJECT_TYPES.ALL);
  const [displayStyle, setDisplayStyle] = useState(DisplayStyle.row);

  useEffect(() => {
    const queryType =
      searchParams.get(TYPE_QUERY_PARAM_KEY)?.toUpperCase() ?? "";
    setActiveType(PROJECT_TYPES[queryType] ?? PROJECT_TYPES.ALL);
  }, [searchParams]);

  const types = [PROJECT_TYPES.ALL];
  PROJECTS.forEach((p) => {
    const type = p.type || PROJECT_TYPES.OTHER;
    return !types.includes(type) && types.push(type);
  });

  const containerClass = classNames({
    "flex gap-2 flex-wrap items-end": displayStyle === DisplayStyle.grid,
  });

  return (
    <>
      <div className="flex justify-between mb-4 border-b border-black">
        <div className="flex gap-4 w-2/3">
          {/* {types.map((t) => { */}
          {Object.keys(PROJECT_TYPES).map((t) => {
            const isActive = activeType === t;
            const className = classNames({
              "hover:underline": true,
              "bg-black text-white": isActive,
            });
            return (
              <Link
                key={uid()}
                className={className}
                // onClick={() => setActiveType(PROJECT_TYPES[t])}
                href={`?${TYPE_QUERY_PARAM_KEY}=${t.toLowerCase()}`}
              >
                {isActive && ">"}
                {t}
                {/* {isActive &&
                ` (${
                  PROJECTS.filter(
                    (e) => e.type === t || activeType === PROJECT_TYPES.ALL
                  ).length
                })`} */}
              </Link>
            );
          })}
        </div>
        <div className="flex gap-4">
          <button
            className={`hover:underline ${
              displayStyle === DisplayStyle.grid && "bg-black text-white"
            }`}
            onClick={() => setDisplayStyle(DisplayStyle.grid)}
          >
            GRID
          </button>
          <button
            className={`hover:underline ${
              displayStyle === DisplayStyle.row && "bg-black text-white"
            }`}
            onClick={() => setDisplayStyle(DisplayStyle.row)}
          >
            ROW
          </button>
        </div>
      </div>
      <div className={containerClass}>
        {PROJECTS.filter(
          (p) => activeType === PROJECT_TYPES.ALL || p.type === activeType
        ).map((p) =>
          displayStyle === DisplayStyle.grid ? (
            <ProjectCard key={uid()} {...p} />
          ) : (
            <ProjectRow key={uid()} {...p} />
          )
        )}
      </div>
    </>
  );
};
