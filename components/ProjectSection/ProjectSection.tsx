import { ProjectProps } from "@/constants/project.consts";
import classNames from "classnames";

type Props = {
  project: ProjectProps;
  sectionNumber: number;
};
export const ProjectSection = ({ project, sectionNumber }: Props) => {
  const type = sectionNumber % 2 === 1;

  const className = classNames(
    "my-3 h-screen flex justify-center items-center gap-32 ",
    {
      "bg-white text-black": type,
      "bg-black text-white": !type,
    }
  );

  return (
    <div className={className}>
      <img className="w-1/4" src={project.img} />
      <div className="max-w-screen-sm text-md inline-flex flex-col gap-2">
        <h1 className="text-7xl font-extrabold">{project.title}</h1>
        <p className="uppercase">{project.type}</p>
        <p className="mt-4">{project.description?.slice(0, 500)}</p>
      </div>
    </div>
  );
};
