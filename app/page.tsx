"use client";

import { ProjectsContainer } from "@/components/ProjectsContainer";
import { Title } from "@/components/Title";

export default function Page() {
  return (
    <>
      <ProjectsContainer />
      <Title text="ABOUT" />
      <div className="text-xs">
        <p>PROGRAMMER /// WEB DEVELOPER ///</p>
        <p>GAME DEVELOPER /// MUSIC PRODUCER</p>
        <br />
        <p>24 YEARS OLD /// PERSIAN</p>
      </div>
    </>
  );
}
