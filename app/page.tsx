"use client";

import { Hero } from "@/components/Hero";
import { ProjectsContainer } from "@/components/ProjectsContainer";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="text-xs">
      <Hero />
      <div className="my-8" />
      {/* <div className="mt-96" /> */}
      <Suspense>
        <ProjectsContainer />
      </Suspense>
    </div>
  );
}
