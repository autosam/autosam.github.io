"use client";

import { AnimatedLoading } from "@/components/AnimatedLoading";
import { BigHero } from "@/components/BigHero";
import { Hero } from "@/components/Hero";
import { ProjectsContainer } from "@/components/ProjectsContainer";
import { ProjectSection } from "@/components/ProjectSection";
import { PROJECTS } from "@/constants/projects";
import { headerVisibilityAtom } from "@/store";
import { ProjectsDisplayStyle } from "@/types/ProjectsDisplayStyle";
import { useAtom } from "jotai";
import { Suspense, useEffect, useRef } from "react";

export default function Page() {
  const [_, setIsHeaderVisible] = useAtom(headerVisibilityAtom);

  const bigHeroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setIsHeaderVisible(false);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsHeaderVisible(scrollY > 0);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <BigHero />
      <section className="text-[clamp(2rem,12vw,200px)] leading-none flex flex-col justify-center items-center h-screen">
        <a href="#">
          <h1>MAKE</h1>
          <h1>THINGS</h1>
          <h1 className="font-extrabold">HAPPEN.</h1>
        </a>
      </section>
      {/* <section>
        {PROJECTS.map((p, i) => (
          <ProjectSection sectionNumber={i} project={p} />
        ))}
      </section> */}
      <div className="text-xs p-4">
        <div className="my-4">
          <Hero />
        </div>
        <Suspense fallback={<AnimatedLoading />}>
          <ProjectsContainer
            hideFilters
            displayStyleOverride={ProjectsDisplayStyle.Grid}
          />
        </Suspense>
      </div>
    </>
  );
}
