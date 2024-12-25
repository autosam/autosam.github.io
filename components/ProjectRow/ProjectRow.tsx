import Link from "next/link";
import { ProjectCardProps } from "../ProjectCard";
import { Scramble } from "../Scramble";

export type ProjectRowProps = ProjectCardProps & {
  releaseDate?: number;
  isOngoing?: boolean;
};
export const ProjectRow = (props: ProjectRowProps) => {
  const { title, img, href, type, key, releaseDate, isOngoing } = props;
  return (
    <div
      key={key}
      className="py-2 border-b border-black flex project-row items-center [&>*]:w-1/2"
    >
      <label>
        <Scramble
          delay={2000 + Math.random() * 5000}
          text={title.toUpperCase()}
        />
      </label>
      <div>{type}</div>
      <div>{releaseDate}</div>
      <div>{isOngoing ? "ONGOING" : "DONE"}</div>
      <Link  className="hover:underline max-w-fit bg-black text-white px-2" href={href ?? "#"} target="_blank">
        VISIT \>
      </Link>
    </div>
  );
};
