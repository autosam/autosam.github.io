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
import { PROJECTS_DISPLAY_STYLE } from "@/constants/localStorageKeys";
import { AnimatedLoading } from "../AnimatedLoading";
import { ProjectsDisplayStyle as DisplayStyle } from "@/types/ProjectsDisplayStyle";

const TYPE_QUERY_PARAM_KEY = "type";

type Props = {
  hideFilters?: boolean;
  displayStyleOverride?: DisplayStyle;
};
export const ProjectsContainer = ({
  hideFilters,
  displayStyleOverride,
}: Props) => {
  const searchParams = useSearchParams();

  const queryType = searchParams.get(TYPE_QUERY_PARAM_KEY) ?? "";
  const resolvedType = useMemo(
    () => resolveProjectType(queryType),
    [queryType]
  );

  const [activeType, setActiveType] = useState<ProjectTypes>(resolvedType);
  const [displayStyle, setDisplayStyle] = useState<DisplayStyle>(
    DisplayStyle.None
  );

  useEffect(() => {
    const localDisplayStyle = getLocalStorageDisplayStyle();
    if (localDisplayStyle !== DisplayStyle.None)
      setDisplayStyle(localDisplayStyle);
    else setDisplayStyle(DisplayStyle.Row);
  }, []);

  useEffect(() => {
    if (displayStyle === DisplayStyle.None) return;
    localStorage?.setItem(PROJECTS_DISPLAY_STYLE, String(displayStyle));
  }, [displayStyle]);

  useEffect(() => {
    setActiveType(resolvedType);
  }, [searchParams]);

  /* const types = [ProjectTypes.All];
  PROJECTS.forEach((p) => {
    const type = p.type || ProjectTypes.Other;
    return !types.includes(type) && types.push(type);
  }); */

  const finalDisplayStyle = displayStyleOverride ?? displayStyle;

  const containerClass = classNames({
    // "flex gap-2 flex-wrap items-start": displayStyle === DisplayStyle.Grid,
    projects__container: finalDisplayStyle === DisplayStyle.Grid,
  });

  const filteredProjects = useMemo(
    () =>
      PROJECTS.filter(
        (p) => activeType === ProjectTypes.All || p.type === activeType
      ),
    [activeType]
  );

  const controlClass = classNames(
    "flex justify-between mb-4 border-b border-black",
    {
      hidden: hideFilters,
    }
  );

  const ControlComponent = () => (
    <div className={controlClass}>
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
      {finalDisplayStyle !== DisplayStyle.None && (
        <div className="flex gap-4">
          <button
            className={`hover:underline ${
              finalDisplayStyle === DisplayStyle.Grid && "bg-black text-white"
            }`}
            onClick={() => setDisplayStyle(DisplayStyle.Grid)}
          >
            GRID
          </button>
          <button
            className={`hover:underline ${
              finalDisplayStyle === DisplayStyle.Row && "bg-black text-white"
            }`}
            onClick={() => setDisplayStyle(DisplayStyle.Row)}
          >
            ROW
          </button>
        </div>
      )}
    </div>
  );

  if (finalDisplayStyle === DisplayStyle.None)
    return (
      <>
        <ControlComponent />
        <AnimatedLoading />
      </>
    );

  return (
    <>
      <ControlComponent />
      <div className={containerClass}>
        {filteredProjects.length ? (
          filteredProjects.map((p) =>
            finalDisplayStyle === DisplayStyle.Grid ? (
              <ProjectCard key={p.id} {...p} />
            ) : (
              <ProjectRow key={p.id} {...p} />
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

const getLocalStorageDisplayStyle = (): DisplayStyle => {
  try {
    const storedValue = localStorage?.getItem(PROJECTS_DISPLAY_STYLE);

    if (storedValue) {
      const parsedValue = Number(storedValue);
      if (Object.values(DisplayStyle).includes(parsedValue)) {
        return parsedValue as DisplayStyle;
      }
    }
  } catch (error) {
    console.error(error);
  }

  return DisplayStyle.Row;
};
