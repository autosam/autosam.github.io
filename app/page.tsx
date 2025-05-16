"use client";

import { AnimatedLoading } from "@/components/AnimatedLoading";
import { BigHero } from "@/components/BigHero";
import { Hero } from "@/components/Hero";
import { ProjectsContainer } from "@/components/ProjectsContainer";
import { headerVisibilityAtom } from "@/store";
import { ProjectsDisplayStyle } from "@/types/ProjectsDisplayStyle";
import { useAtom } from "jotai";
import { Suspense, useEffect, useRef } from "react";

export default function Page() {
  const [isHeaderVisible, setIsHeaderVisible] = useAtom(headerVisibilityAtom);

  const bigHeroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setIsHeaderVisible(false);

    const handleScroll = () => {
      const bigHero = bigHeroRef.current;
      const bigHeroHeight = bigHero
        ? bigHero.getBoundingClientRect().height
        : 0;

      const scrollY = window.scrollY;
      setIsHeaderVisible(scrollY > bigHeroHeight);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <BigHero ref={bigHeroRef} />
      <div className="text-xs p-4">
        <section className="text-[200px] leading-none flex flex-col justify-center items-center h-screen">
          <a href="#">
            <h1>MAKE</h1>
            <h1>THINGS</h1>
            <h1 className="font-extrabold">HAPPEN.</h1>
          </a>
        </section>
        <div className="my-8">
          <Hero />
        </div>
        <div className="my-8" />
        {/* <div className="mt-96" /> */}
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
