import { ProjectCard } from "../ProjectCard";

export const ProjectsContainer = () => {
  return (
    <div className="flex gap-2 flex-wrap">
      <ProjectCard
        title="Project Card"
        img="https://img.itch.zone/aW1nLzE4MTg2MjkzLnBuZw==/315x250%23c/1RvZmD.png"
      />
      <ProjectCard
        title="Project Card"
        img="https://images.pexels.com/photos/897817/pexels-photo-897817.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />
      <ProjectCard title="Project Card" img="vercel.svg" />
    </div>
  );
};
