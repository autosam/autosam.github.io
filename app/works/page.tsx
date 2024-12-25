"use client";

import { ProjectsContainer } from "@/components/ProjectsContainer";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="text-xs">
      <Suspense>
        <ProjectsContainer />
      </Suspense>
    </div>
  );
}
