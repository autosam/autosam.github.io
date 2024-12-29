"use client";

import { PROJECTS } from "@/constants/projects";
import { ProjectCard } from "../ProjectCard";
import { useEffect, useMemo, useState } from "react";
import { uid } from "uid";
import classNames from "classnames";
import { ProjectRow } from "../ProjectRow";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ProjectTypes } from "@/constants/project.consts";
import { Scramble } from "../Scramble";

const TYPE_QUERY_PARAM_KEY = "type";
enum DisplayStyle {
  Grid,
  Row,
}

export const ProjectsContainer = () => {
  const searchParams = useSearchParams();

  const queryType = searchParams.get(TYPE_QUERY_PARAM_KEY) ?? "";
  const resolvedType = useMemo(
    () => resolveProjectType(queryType),
    [queryType]
  );

  const [activeType, setActiveType] = useState<ProjectTypes>(resolvedType);
  const [displayStyle, setDisplayStyle] = useState(DisplayStyle.Row);

  useEffect(() => {
    setActiveType(resolvedType);
  }, [searchParams]);

  /* const types = [ProjectTypes.All];
  PROJECTS.forEach((p) => {
    const type = p.type || ProjectTypes.Other;
    return !types.includes(type) && types.push(type);
  }); */

  const containerClass = classNames({
    "flex gap-2 flex-wrap items-end": displayStyle === DisplayStyle.Grid,
  });

  const filteredProjects = useMemo(
    () =>
      PROJECTS.filter(
        (p) => activeType === ProjectTypes.All || p.type === activeType
      ),
    [activeType]
  );

  return (
    <>
      <div className="flex justify-between mb-4 border-b border-black">
        <div className="flex gap-4 w-2/3 overflow-auto">
          {/* {types.map((t) => { */}
          {Object.keys(ProjectTypes).map((t) => {
            const isActive = activeType === t;
            const className = classNames({
              "hover:underline": true,
              "bg-black text-white": isActive,
            });
            return (
              <Link
                key={uid()}
                className={className}
                href={`?${TYPE_QUERY_PARAM_KEY}=${t.toLowerCase()}`}
              >
                {isActive && ">"}
                {t.toUpperCase()}
                {/* {isActive &&
                ` (${
                  PROJECTS.filter(
                    (e) => e.type === t || activeType === ProjectTypes.All
                  ).length
                })`} */}
              </Link>
            );
          })}
        </div>
        <div className="flex gap-4">
          <button
            className={`hover:underline ${
              displayStyle === DisplayStyle.Grid && "bg-black text-white"
            }`}
            onClick={() => setDisplayStyle(DisplayStyle.Grid)}
          >
            GRID
          </button>
          <button
            className={`hover:underline ${
              displayStyle === DisplayStyle.Row && "bg-black text-white"
            }`}
            onClick={() => setDisplayStyle(DisplayStyle.Row)}
          >
            ROW
          </button>
        </div>
      </div>
      <div className={containerClass}>
        {filteredProjects.length ? (
          filteredProjects.map((p) =>
            displayStyle === DisplayStyle.Grid ? (
              <ProjectCard key={uid()} {...p} />
            ) : (
              <ProjectRow key={uid()} {...p} />
            )
          )
        ) : (
          <Scramble
            text="NOTHING HERE YET..."
            className="italic block opacity-50"
          />
        )}
      </div>
    </>
  );
};

const resolveProjectType = (name?: string): ProjectTypes => {
  if (!name) return ProjectTypes.All;

  const capitalized =
    name[0].toUpperCase() + name.toLowerCase().slice(1, name.length);
  return ProjectTypes[capitalized] || ProjectTypes.All;
};
