"use client";

import { ProjectsContainer } from "@/components/ProjectsContainer";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="text-xs">
      {/* <div className="mt-96" /> */}
      <Suspense>
        <ProjectsContainer />
      </Suspense>
    </div>
  );
}
