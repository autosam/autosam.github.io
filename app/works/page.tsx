import { ProjectsContainer } from "@/components/ProjectsContainer";
import { Metadata, ResolvingMetadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Works",
  description: "A list of ongoing/finished projects.",
};

export default function Page() {
  return (
    <div className="text-xs">
      <Suspense>
        <ProjectsContainer />
      </Suspense>
    </div>
  );
}
