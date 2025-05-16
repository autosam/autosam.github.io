import { AnimatedLoading } from "@/components/AnimatedLoading";
import { ProjectsContainer } from "@/components/ProjectsContainer";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Works",
  description: "A list of ongoing/finished projects.",
};

export default function Page() {
  return (
    <div className="text-xs p-4">
      <Suspense fallback={<AnimatedLoading />}>
        <ProjectsContainer />
      </Suspense>
    </div>
  );
}
